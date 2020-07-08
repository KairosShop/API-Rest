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
  async function upsertCart(cartData) {
    const { productId, quantity } = cartData;

    delete cartData.productId;
    delete cartData.quantity;

    cartData.status = 'Stand by';

    let { id: cartId } = await validOpenCart(cartData);

    if (cartId === 0) {
      const { id } = await store.create(TABLE, cartData);
      cartId = id;
    }

    const createdDetail = await store.upsert('details', { productId, quantity, cartId });

    return createdDetail ? { cartId } : [];
  }

  async function  validOpenCart(cartData) {
    const data = await store.getAll(TABLE, cartData);
    return data[0] || { id: 0 };
  }

  async function deleteProduct(productId, userId) {
    let { id: cartId } = await validOpenCart({ userId, status: 'Stand by' });
    const  deletedProduct = await store.deleted('details',  { productId, cartId } );
    return { id: deletedProduct[0].productId } || [];
  }

  return {
    getCarts,
    getCart,
    upsertCart,
    deleteProduct,
  }
}
