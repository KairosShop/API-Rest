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
    const categoriesWithSubcategories = function(categories) {
      return Promise.all(
        categories.map(async(category) => {
          let subcategories = await store.getAll('subcategories', {id_category: category.id});
            if (subcategories){
              return Object.assign(category,{'subcategories': subcategories});
            }
        })
      )
    }
    return categoriesWithSubcategories(categories).then(data => data);
  }
  async function getCategory(id) {
    const category = await store.getById(TABLE, id);
    return category || [];
  }

  async function createCategory(data) {
    const created = await store.create(TABLE, data);
    return created || [];
  }

  async function updateCategory(data, id) {
    const updated = await store.update(TABLE, data, id);
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
