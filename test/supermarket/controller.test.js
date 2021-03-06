const supermarketMock = require('../../utils/mocks/supermarket');
const controller = require('../../api/components/supermarket/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - supermaket', () => {
  test('should return object supermakets', () => {
    return Controller.getSupermarkets().then((supermakets) => {
      expect(supermakets).toStrictEqual(supermarketMock);
    });
  });

  test('should return object supermarket', () => {
    return Controller.getSupermarket(1).then((supermarket) => {
      expect(supermarket).toStrictEqual(supermarketMock[0]);
    });
  });

  test('should return object supermarket created', () => {
    const createSupermarket = {
      "supermarket": "Abarrotes panchisco",
      "address": "Av México 44 colonia centro jalpa zacatecas",
      "latitude": "3.7220621",
      "longitude": "96.8297403",
      "urlImage": "http://dummyimage.com/246x208.png/ff4444/ffffff",
      "active": true,
      "userId": 2
    }
    return Controller.createSupermarket(createSupermarket).then((supermarket) => {
      expect(supermarket).toMatchObject({ id: expect.any(Number) });
    });
  });
  test('should return object supermarket updated', () => {
    const updateSupermarket = {
      "supermarket": "Abarrotes la pasadita",
      "address": "Calle arroyo seco 344-a colonia centro zapopan jalisco",
      "latitude": "3.7220621",
      "longitude": "96.8297403",
      "urlImage": "http://dummyimage.com/246x208.png/ff4444/ffffff",
      "active": true,
      "userId": 2
    }
    return Controller.updateSupermarket(updateSupermarket,1).then((supermarket) => {
      expect(supermarket[0]).toBe(1);
    });
  });
  test('should return object IdSupermarket', () => {
    return Controller.removeSupermarket(3).then((supermarket) => {
      expect(typeof supermarket.id).toBe('number');
    });
  });
});
