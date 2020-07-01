const categories = require('../utils/mocks/categories');

const db = {
    categories
}

async function getAll(table, category='') {
    let categories = db[table];
    if (category  !== ''){
        categories =  categories.filter(item => item.category.toUpperCase() === category.toUpperCase());
    }

    return categories;
}
async function getById(table, id) {
    const row = await getAll(table);
    return row.filter(item => item.id == id)[0];
}

async function create(table, data) {
    data.id = 5;
    return data;
}

async function update(table, data, id) {
    return getById(table, id)
}

async function remove(table, Id) {
    const { id } = await getById(table, Id);
    return { id };
}
module.exports={
    getAll,
    getById,
    create,
    update,
    remove,
}