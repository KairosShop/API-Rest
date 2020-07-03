const categories = require('../utils/mocks/categories');
const subcategories = require('../utils/mocks/subcategories');
const measures = require('../utils/mocks/measures');

const db = {
    categories,
    subcategories,
    measures
}

async function getAll(table, filter={}) {
    let data = db[table];
    if ( Object.keys(filter).length ) {
        Object.entries(filter).forEach(([key, value]) =>{
            if(value){
                data = data.filter(item => item[key] == value);
            }
        })
    }
    return data;
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