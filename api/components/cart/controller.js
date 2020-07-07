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
    const { productId, quantity } = cartData;
    delete cartData.productId;
    delete cartData.quantity;
    cartData.status = 'Stand by';
    const createdCart = await store.create(TABLE, cartData);

    const createdDetail = await store.create(TABLE, {productId, quantity, id_cart: createdCart});

    return createdDetail ? createdCart : [];
  }

  async function updateCart(cartData, id) {
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
