const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'price';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }

  async function getPrices(filter = {}) {
    const prices = await store.getAll(TABLE, filter);
    return prices || [];
  }

  async function createPrice(priceData) {
    priceData.create_at= date;
    const created = await store.create(TABLE, priceData);
    return created || [];
  }
  async function updatePrice(priceData, id) {
    priceData.update_at= date;
    const updated = await store.update(TABLE, priceData, id);
    return updated || [];
  }
  return {
    getPrices,
    createPrice,
    updatePrice,
  };
};
