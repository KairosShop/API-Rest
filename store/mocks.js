const categories = require('../utils/mocks/categories');
const subcategories = require('../utils/mocks/subcategories');
const measures = require('../utils/mocks/measures');
const users = require('../utils/mocks/users');
const products = require('../utils/mocks/products');
const supermarket =  require('../utils/mocks/supermarket');
const price =  require('../utils/mocks/prices');
const address =  require('../utils/mocks/address');
const cart =  require('../utils/mocks/cart');
const details =  require('../utils/mocks/details');

const db = {
    categories,
    subcategories,
    measures,
    users,
    products,
    supermarket,
    price,
    address,
    cart,
    details
}

async function getAll(table, filter={}) {
    let data = db[table];
    let { order, limit, page, all } = filter;
    delete filter.order;
    delete filter.limit;
    delete filter.page;
    delete filter.all;
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
    if( limit && !all ) {
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
    if(table == 'details'){
        data = await getAll(table, data);
    } else {
        data = await getById(table, 1);
    }
    return data;
}

async function update(table, data, Id) {
    const { id } = await getById(table, Id);
    return id ? [1] : [0];
}
async function upsert(table, data, Id) {
    const { id } = await getById(table, Id);
    return id ? [1] : [0];
}

async function remove(table, Id) {
    const { id } = await getById(table, Id);
    return { id };
}

async function deleted(table, data) {
    const deletedData = await getAll(table, data);
    return deletedData;
}
module.exports={
    getAll,
    getById,
    create,
    update,
    upsert,
    remove,
    deleted
}