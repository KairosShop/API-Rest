const categories = require('../utils/mocks/categories');
const subcategories = require('../utils/mocks/subcategories');
const measures = require('../utils/mocks/measures');
const users = require('../utils/mocks/users');
const products = require('../utils/mocks/products');
const supermarket =  require('../utils/mocks/supermarket');
const price =  require('../utils/mocks/prices');

const db = {
    categories,
    subcategories,
    measures,
    users,
    products,
    supermarket,
    price
}

async function getAll(table, filter={}) {
    let data = db[table];
    let { order, limit, page } = filter;
    delete filter.order;
    delete filter.limit;
    delete filter.page;
    if ( Object.keys(filter).length ) {
        Object.entries(filter).forEach(([key, value]) =>{
            if(value){
                data = data.filter(item => item[key] == value);
            }
        })
    }
    if( order ) {
        data = order === 'asc' ? data.sort() : data.reverse();
    }
    if( limit ) {
        let init = limit * --page;
        limit = init ? Number(init) + Number(limit) : limit;
        data = data.length >= Number(limit) ? data.slice(init, limit) : data;
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