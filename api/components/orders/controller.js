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
  return {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
  }
}