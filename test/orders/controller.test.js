const ordersMock = require('../../utils/mocks/orders');
const controller = require('../../api/components/orders/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - orders', () => {
  test('should return object orders', () => {
    return Controller.getOrders().then((orders) => {
      expect(orders).toStrictEqual(ordersMock);
    });
  });

  test('should return object one order', () => {
    return Controller.getOrder(1).then((order) => {
      expect(order).toStrictEqual(ordersMock[0]);
    });
  });

  test('should return object url to pdf order', () => {
    return Controller.createPdf(1).then((order) => {
      expect(order).toMatchObject({ url: expect.any(String)});
    });
  });
  test('should return object order created', () => {
    const createOrder = {
      userId: 1,
      total: 500,
      products: [
        {
          productId: 1,
          quantity: 2,
          price: 3,
          supermarketId: 3,
        },
        {
          productId: 3,
          quantity: 1,
          price: 1,
          supermarketId: 3,
        },
      ],
    };
    return Controller.createOrder(createOrder).then((order) => {
      expect(order).toMatchObject({ orderId: expect.any(Number) });
    });
  });
  test('should return object order updated', () => {
    const updateOrder = {
      status: "SUCCESSFULL"
    };
    return Controller.updateOrder(updateOrder, 1).then((order) => {
      expect(typeof order[0]).toBe('number');
      expect(order).toMatchObject(expect.any(Array));
    });
  });
});
