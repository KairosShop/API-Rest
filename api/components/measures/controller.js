const TABLE = 'measures';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }

  async function getMeasures(filter={}) {
    const measures = await store.getAll(TABLE, filter);
    return measures || [];
  }

  async function getMeasure(id) {
    const measure = await store.getById(TABLE, id);
    return measure || [];
  }

  return {
    getMeasures,
    getMeasure,
  };
};
