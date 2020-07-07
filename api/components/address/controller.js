const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'address';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getAddress(filter={}) {
    const products = await store.getAll(TABLE, filter);
    return products || [];
  }

  async function createAddress(addressData) {
    addressData.createdAt= date;
    const created = await store.create(TABLE, addressData);
    return created || [];
  }

  async function updateAddress(addressData, id) {
    addressData.updatedAt= date;
    const updated = await store.update(TABLE, addressData, id);
    return updated || [];
  }

  async function removeAddress(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }

  return {
    getAddress,
    createAddress,
    updateAddress,
    removeAddress,
  }
}
