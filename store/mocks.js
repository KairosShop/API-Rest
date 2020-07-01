const categories = require('../utils/mocks/categories');

const db = {
    categories
}

async function getAll(table){
    return db[table];
}
async function getById(table, id){
    const row = await getAll(table);
    return row.filter(item => item.id == id)[0];
}

module.exports={
    getAll,
    getById
}