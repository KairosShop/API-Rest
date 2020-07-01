const categoriesMock = require('../../utils/mocks/categories');
const controller = require('../../api/components/categories/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - categories', () => {
  test('should return object categories', () => {
    return Controller.getCategories().then((categories) => {
      expect(categories).toStrictEqual(categoriesMock);
    });
  });
});
