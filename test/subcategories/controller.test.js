const subcategoriesMock = require('../../utils/mocks/subcategories');
const controller = require('../../api/components/subcategories/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - subcategories', () => {
  test('should return object subcategories', () => {
    return Controller.getSubcategories({category_id: 3}).then((subcategories) => {
      expect(subcategories[0]).toMatchObject(subcategoriesMock[0]);
    });
  });

  test('should return object subcategory', () => {
    return Controller.getSubcategory(1).then((subcategory) => {
      expect(subcategory).toMatchObject(subcategoriesMock[0]);
    });
  });

  test('should return object subcategory created', () => {
    const createSubcategory = {
      category_id:1,
      subcategory:"Huevo",
      url_image:"https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg",
      active:1
    }
    return Controller.createSubcategory(createSubcategory).then((subcategory) => {
      expect(subcategory).toMatchObject(createSubcategory);
      expect(subcategory).toHaveProperty('id');
    });
  });
  test('should return object subcategory updated', () => {
    const updateSubcategory = {
      category_id:3,
      subcategory:"Yogurt",
      url_image: "https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg"
    }
    return Controller.updateSubcategory(updateSubcategory,1).then((subcategory) => {
      expect(subcategory).toMatchObject({id:1, category_id: 3})
    });
  });
  test('should return object IdSubcategory', () => {
    return Controller.removeSubcategory(1).then((subcategory) => {
      expect(typeof subcategory.id).toBe('number');
    });
  });
});
