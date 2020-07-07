const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'products';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getProducts(filter={}) {
    const products = await store.getAll(TABLE, filter);
    return products || [];
  }

  async function getProduct(id) {
    const product = await store.getById(TABLE, id);
    return product || [];
  }

  async function createProduct(productData) {
    productData.createdAt= date;
    const created = await store.create(TABLE, productData);
    return created || [];
  }

  async function updateProduct(productData, id) {
    productData.updatedAt= date;
    const updated = await store.update(TABLE, productData, id);
    return updated || [];
  }

  async function removeProduct(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }

  return {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    removeProduct,
  }
}
