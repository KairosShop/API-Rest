const TABLE = 'orders';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getOrders(filter={}) {
    const carts = await store.getAll(TABLE, filter);
    return carts || [];
  }

  async function getOrder(id) {
    const cart = await store.getOne(TABLE, id);
    return cart || [];
  }
  async function createOrder(orderData) {
    const products = orderData.products;
    delete orderData.products;

    orderData.status = 'in process';
 
    const { id: orderId } = await store.create(TABLE, orderData);
    for await (const product of products) {
      try {
        let productDetail =  { ... product };
        productDetail.orderId = orderId;
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