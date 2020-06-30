const categories = require('../utils/mocks/categories');

const db = {
    categories
}

async function getAll(table){
    return db[table];
}

module.exports={
    getAll
}