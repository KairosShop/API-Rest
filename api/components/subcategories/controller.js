const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'subcategories';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }

  async function getSubcategories(filter = {}) {
    const subcategories = await store.getAll(TABLE, filter);
    return subcategories || [];
  }

  async function getSubcategory(id) {
    const subcategory = await store.getById(TABLE, id);
    return subcategory || [];
  }

  async function createSubcategory(subcategoryData) {
    subcategoryData.create_at= date;
    const created = await store.create(TABLE, subcategoryData);
    return created || [];
  }
  async function updateSubcategory(subcategoryData, id) {
    subcategoryData.update_at= date;
    const updated = await store.update(TABLE, subcategoryData, id);
    return updated || [];
  }
  async function removeSubcategory(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }
  return {
    getSubcategories,
    getSubcategory,
    createSubcategory,
    updateSubcategory,
    removeSubcategory,
  };
};
