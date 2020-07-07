const addressMock = require('../../utils/mocks/address');
const controller = require('../../api/components/address/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - address', () => {
  test('should return object address', () => {
    return Controller.getAddress().then((address) => {
      expect(address).toStrictEqual(addressMock);
    });
  });

  test('should return object one address', () => {
    return Controller.getAddress({ id: 1 }).then((address) => {
      expect(address[0]).toStrictEqual(addressMock[0]);
    });
  });

  test('should return object address created', () => {
    const createAddress = {
      address: "1794 Nelson Street",
      latitude: "48.9270449",
      longitude: "2.3265854"
    }
    return Controller.createAddress(createAddress).then((address) => {
      expect(address).toMatchObject({ id: expect.any(Number) });
    });
  });
  test('should return object address updated', () => {
    const updateAddress = {
      address: "1794 Nelson Street"
    }
    return Controller.updateAddress(updateAddress, 1).then((address) => {
      expect(address[0]).toBe(1);
    });
  });
  test('should return object IdAddress', () => {
    return Controller.removeAddress(3).then((address) => {
      expect(typeof address.id).toBe('number');
    });
  });
});
