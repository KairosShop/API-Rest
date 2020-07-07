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
    return Controller.getCart({ id: 1 }).then((cart) => {
      expect(cart[0]).toStrictEqual(cartMock[0]);
    });
  });

  test('should return object cart created', () => {
    const createCart = {
      productId: "1",
      quantity: "9",
    }
    return Controller.createCart(createCart).then((cart) => {
      expect(cart).toMatchObject({ id: expect.any(Number) });
    });
  });
  test('should return object cart updated', () => {
    const updateCart = {
      productId: "1",
      quantity: "19",
    }
    return Controller.updateCart(updateCart, 1).then((cart) => {
      expect(cart).toMatchObject({ id: 1 });
    });
  });
  test('should return object Idcart', () => {
    return Controller.removeCart(3).then((cart) => {
      expect(typeof cart.id).toBe('number');
    });
  });
});
