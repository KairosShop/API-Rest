const TABLE = 'address';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getAddress(filter={}) {
    const address = await store.getAll(TABLE, filter);
    return address || [];
  }
  async function getOne(filter={}) {
    const address = await store.getOne(TABLE, filter);
    return address || [];
  }

  async function createAddress(addressData) {
    const created = await store.create(TABLE, addressData);
    return created || [];
  }

  async function updateAddress(addressData, id) {
    const updated = await store.update(TABLE, addressData, id);
    return updated || [];
  }

  async function removeAddress(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }

  return {
    getAddress,
    getOne,
    createAddress,
    updateAddress,
    removeAddress,
  }
}
