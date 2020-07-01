const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'categories';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }

  async function getCategories(category) {
    const categories = await store.getAll(TABLE, category);
    return categories || [];
  }

  async function getCategory(id) {
    const category = await store.getById(TABLE, id);
    return category || [];
  }

  async function createCategory(categoryData) {
    categoryData.createAt= date;
    const created = await store.create(TABLE, categoryData);
    return created || [];
  }
  async function updateCategory(categoryData, id) {
    categoryData.updateAt= date;
    const updated = await store.update(TABLE, categoryData, id);
    return updated || [];
  }
  async function removeCategory(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }
  return {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    removeCategory,
  };
};
