const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'categories';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }

  async function getCategories(filter={}) {
    const categories = await store.getAll(TABLE, filter);
    return categories || [];
  }

  async function getWithSubcategories(filter={}) {
    const categories = await store.getAll(TABLE, filter);
    Object.entries(categories).forEach(async([key, value]) =>{
      if(value){
        let subcategories = await store.getAll('subcategories', {id_category: value.id});
        if (subcategories){
          categories[key].subcategories = subcategories;
        }
      }
    })
    return categories || [];
  }
  async function getCategory(id) {
    const category = await store.getById(TABLE, id);
    return category || [];
  }

  async function createCategory(categoryData) {
    categoryData.create_at= date;
    const created = await store.create(TABLE, categoryData);
    return created || [];
  }
  async function updateCategory(categoryData, id) {
    categoryData.update_at= date;
    const updated = await store.update(TABLE, categoryData, id);
    return updated || [];
  }
  async function removeCategory(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }
  return {
    getCategories,
    getWithSubcategories,
    getCategory,
    createCategory,
    updateCategory,
    removeCategory,
  };
};
