const priceMock = require('../../utils/mocks/prices');
const controller = require('../../api/components/prices/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - prices', () => {
  test('should return object prices', () => {
    return Controller.getPrices().then((prices) => {
      expect(prices).toStrictEqual(priceMock);
    });
  });

  test('should return object price created', () => {
    const createPrice = {
      "productId":"1",
      "supermarketId":"5",
      "price":"45.34",
      "active":true
    }
    return Controller.createPrice(createPrice).then((price) => {
      expect(price).toMatchObject({ id: expect.any(Number) });
    });
  });
  test('should return object price updated', () => {
    const updatePrice = {
      "price":"45.34",
      "active":false
    }
    return Controller.updatePrice(updatePrice,1).then((price) => {
      expect(price[0]).toBe(1);
    });
  });

});
