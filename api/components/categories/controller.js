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
    return {
        getCategories
    }
}
