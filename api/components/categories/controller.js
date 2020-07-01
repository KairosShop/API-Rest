const TABLE = 'categories';
module.exports =  function (injectedStore) {
    let store =  injectedStore;
    if(!store){
        store = require('../../../store/mocks');
    }

    async function getCategories(){
        const categories = await store.getAll(TABLE);
        return categories || [];
    }

    async function getCategory(id){
        const category = await store.getById(TABLE, id);
        return category || [];
    }
    return {
        getCategories,
        getCategory
    }
}
