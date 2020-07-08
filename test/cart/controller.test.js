const cartMock = require('../../utils/mocks/cart');
const controller = require('../../api/components/cart/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - cart', () => {
  test('should return object cart', () => {
    return Controller.getCarts().then((cart) => {
      expect(cart).toStrictEqual(cartMock);
    });
  });

  test('should return object one cart', () => {
    return Controller.getCart(1).then((cart) => {
      expect(cart).toStrictEqual(cartMock[0]);
    });
  });

  test('should return object cart created', () => {
    const createCart = {
      productId: "24",
      quantity: "9",
    }
    return Controller.upsertCart(createCart).then((cart) => {
      expect(cart).toMatchObject({ cartId: expect.any(Number) });
    });
  });
  test('should return object cart updated', () => {
    const updateCart = {
      productId: "24",
      quantity: "2",
    }
    return Controller.upsertCart(updateCart, 1).then((cart) => {
      expect(typeof cart.cartId).toBe('number');
    });
  });
  test('should return object Idcart', () => {
    return Controller.deleteProduct(24,4).then((cart) => {
      expect(typeof cart.id).toBe('number');
    });
  });
});
