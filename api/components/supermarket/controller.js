const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'supermarket';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getSupermarkets(filter={}) {
    const supermarkets = await store.getAll(TABLE, filter);
    return supermarkets || [];
  }

  async function getSupermarket(id) {
    const supermarket = await store.getById(TABLE, id);
    return supermarket || [];
  }

  async function createSupermarket(supermarketData) {
    supermarketData.createAt= date;
    const created = await store.create(TABLE, supermarketData);
    return created || [];
  }

  async function updateSupermarket(supermarketData, id) {
    supermarketData.updateAt= date;
    const updated = await store.update(TABLE, supermarketData, id);
    return updated || [];
  }

  async function removeSupermarket(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }

  return {
    getSupermarkets,
    getSupermarket,
    createSupermarket,
    updateSupermarket,
    removeSupermarket,
  }
}
