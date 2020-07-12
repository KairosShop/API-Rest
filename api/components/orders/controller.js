const dateFormat = require('dateformat');
const pdf = require('html-pdf');
const boom = require('@hapi/boom');
const orderPDF = require('../../../utils/templates/orderPdf'); 
const fs = require('fs');

const { format } = require('util');
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const { gcpstorage } = require('../../../config')


const TABLE = 'orders';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getOrders(filter={}) {
    const orders = await store.getAll(TABLE, filter);
    return orders || [];
  }

  async function getOrder(id) {
    const order = await store.getOne(TABLE, id);
    return order || [];
  }
  async function createOrder(orderData) {
    const products = orderData.products;
    delete orderData.products;

    orderData.status = 'IN PROCESS';
    orderData.active = true;
    orderData.deleted = false;

    const { id: orderId } = await store.create(TABLE, orderData);
    for await (const product of products) {
      try {
        let productDetail =  { ... product };
        productDetail.orderId = orderId;
        productDetail.status = 'STAND BY';
        productDetail.deleted = false;
        await store.create('ordersDetails', productDetail );
      } catch (error) {
        throw(error.message);
      }
    }
    return { orderId } || [];
  }
  async function updateOrder(productData, id) {
    const updated = await store.update(TABLE, productData, id);
    return updated || [];
  }
  async function createPdf(id) {
    return new Promise((resolve, reject) => {
      (async () => {
        const order = await store.getOne(TABLE, id);

        const namefile= dateFormat(order.createdAt,"HHMMssSS") + `${order.id}-invoice.pdf`
        const bucketName =  gcpstorage.user;

        try {
          const existsFile = await validExists(bucketName, namefile);
          if(existsFile){
            resolve({url: `https://storage.googleapis.com/${bucketName}/${namefile}`});
            return true;
          }
        } catch (error) {
          reject(boom.badRequest());
        }

        let bodyHeader= orderPDF.bodyHead;

        bodyHeader = bodyHeader.replace('{{orderId}}',order.id);
        bodyHeader = bodyHeader.replace('{{total}}', order.total);
        bodyHeader = bodyHeader.replace('{{orderCreated}}', dateFormat(order.createdAt,'mmmm dS, yyyy'));
        bodyHeader = bodyHeader.replace('{{userName}}', `${order.user.firstName} ${order.user.lastName}`);

        let tableBody='';
        const supermarketIds = [ ...new Set(order.details.map(item => item.supermarketId))]
        for await (let supermarketId of supermarketIds){
          let tableSupermarket=0;
          let total = 0;
          for await( let detail of order.details.filter(detail => detail.supermarketId==supermarketId) ) {
            const totalRow = (Number(detail.price) * Number(detail.quantity)).toFixed(2);
            total+= Number(totalRow)
            if(!tableSupermarket){
              tableBody +=`<tr class="heading head">
                            <td colspan=2>${detail.supermarket.supermarket}</td>
                            <td colspan=2><small>${detail.supermarket.address}</small></td>
                        </tr>
                        <tr class="heading">
                          <td>Product</td>
                          <td>Quantity</td>
                          <td>Price</td>
                          <td>Total</td>
                        </tr>`
              tableSupermarket++;
            }
            tableBody +=`<tr class="item">
                            <td>${detail.products.title}</td>
                            <td> ${detail.price} </td>
                            <td> $${detail.price} </td>
                            <td> $${totalRow}</td>
                        </tr>`
          }
          total=total.toFixed(2);
          tableBody +=`<tr class="total">
                          <td colspan=3>TOTAL</td>
                          <td> <b>$${total}</b></td>
                      </tr>`
        }
        const html = orderPDF.header + bodyHeader + tableBody + orderPDF.footer;
        pdf.create(html).toFile(__dirname + `/${namefile}`, async function(err, res) {
            if (err){
              reject(boom.badRequest());
            } else {
              try {
                await uploadFile(bucketName,res.filename)
                fs.unlinkSync(res.filename)
                const publicUrl = format(
                  `https://storage.googleapis.com/${bucketName}/${namefile}`
                );
                resolve({url: publicUrl});
              } catch (error) {
                reject(boom.badRequest());
              }
            }
        });
      })()
    });
  }
  async function uploadFile(bucketName, filename) {
    await storage.bucket(bucketName).upload(filename, {
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
    });
  }
  async function validExists(bucketName, filename) {
    const [metadata] = await storage
      .bucket(bucketName)
      .file(filename)
      .getMetadata();
    return metadata.name ? true : false;
  }

  return {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    createPdf
  }
}