const dateformat =  require('dateformat');

const date = dateformat(new Date(), "yyyy-mm-dd h:MM:ss");
const TABLE = 'cart';
module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/mocks');
  }
  async function getCarts(filter={}) {
    const carts = await store.getAll(TABLE, filter);
    return carts || [];
  }

  async function getCart(id) {
    const cart = await store.getById(TABLE, id);
    return cart || [];
  }
  async function createCart(cartData) {
    const { id_product, quantity } = cartData;
    delete cartData.id_product;
    delete cartData.quantity;
    cartData.create_at = date;
    cartData.status = 'Stand by';
    const createdCart = await store.create(TABLE, cartData);

    const createdDetail = await store.create(TABLE, {id_product, quantity, id_cart: createdCart.id, create_at: date });

    return createdDetail ? createdCart : [];
  }

  async function updateCart(cartData, id) {
    cartData.update_at= date;
    const updated = await store.update(TABLE, cartData, id);
    return updated || [];
  }

  async function removeCart(id) {
    const deleted = await store.remove(TABLE, id);
    return deleted || [];
  }

  return {
    getCarts,
    getCart,
    createCart,
    updateCart,
    removeCart,
  }
}
