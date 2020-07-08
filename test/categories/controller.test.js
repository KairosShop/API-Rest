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

  test('should return object category', () => {
    return Controller.getCategory(1).then((category) => {
      expect(category).toStrictEqual(categoriesMock[0]);
    });
  });

  test('should return object category created', () => {
    const createCategory = {
      title: 'Limpieza',
      urlImage:
        'https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg',
      active: true,
    };
    return Controller.createCategory(createCategory).then((category) => {
      expect(category).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        urlImage: expect.any(String),
        active: expect.any(Boolean),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        deleted: expect.any(Boolean)
      });
    });
  });
  test('should return object category updated', () => {
    const updateCategory = {
      title: 'Lacteos',
      urlImage:
        'https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg',
    };
    return Controller.updateCategory(updateCategory, 1).then((category) => {
      expect(category[0]).toBe(1);
    });
  });
  test('should return object IdCategory', () => {
    return Controller.removeCategory(3).then((category) => {
      expect(typeof category.id).toBe('number');
    });
  });
});
