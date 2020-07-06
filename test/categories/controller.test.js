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

  test('should return object category with subcategories', () => {
    return Controller.getWithSubcategories().then((categoriesWithSubcategories) => {
      expect(categoriesWithSubcategories[0]).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        url_image: expect.any(String),
        subcategories: expect.any(Array)
      });
      expect(categoriesWithSubcategories[0].subcategories[0]).toMatchObject({
        id: expect.any(Number),
        id_category: expect.any(Number),
        subcategory: expect.any(String),
        url_image: expect.any(String)
      });
    });
  });

  test('should return object category created', () => {
    const createCategory = {
      title: 'Limpieza',
      url_image:
        'https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg',
      active: 1,
    };
    return Controller.createCategory(createCategory).then((category) => {
      expect(category).toMatchObject(createCategory);
    });
  });
  test('should return object category updated', () => {
    const updateCategory = {
      title: 'Lacteos',
      url_image:
        'https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg',
    };
    return Controller.updateCategory(updateCategory, 1).then((category) => {
      expect(category).toMatchObject({ id: 1 });
    });
  });
  test('should return object IdCategory', () => {
    return Controller.removeCategory(3).then((category) => {
      expect(category.id).toBe(3);
    });
  });
});
