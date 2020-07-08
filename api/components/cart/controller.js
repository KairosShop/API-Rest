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

    let { id: cartId } = await validOpenCart(cartData);

    if (cartId === 0) {
      const { id } = await store.create(TABLE, cartData);
      cartId = id;
    }

    const createdDetail = await store.create('details', { productId, quantity, cartId });

    return createdDetail ? { cartId } : [];
  }

  async function  validOpenCart(cartData) {
    const data = await store.getAll(TABLE, cartData);
    return data[0] || { id: 0 };
  }
  async function updateCart(cartData, id) {
    const updated = await store.update('detail', cartData, id);
    return updated || [];
  }

  async function deleteProduct(dataProduct) {
    dataProduct.cartId = 1;
    const deleted = await store.deleted('details',  dataProduct);
    return deleted || [];
  }

  return {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteProduct,
  }
}
