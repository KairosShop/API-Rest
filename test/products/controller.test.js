const productsMock = require('../../utils/mocks/products');
const controller = require('../../api/components/products/controller');
const store = require('../../store/mocks');

const Controller = controller(store);

describe('controller - products', () => {
  test('should return object products', () => {
    return Controller.getProducts().then((products) => {
      expect(products).toStrictEqual(productsMock);
    });
  });

  test('should return object product', () => {
    return Controller.getProduct(1).then((product) => {
      expect(product).toStrictEqual(productsMock[0]);
    });
  });

  test('should return object product created', () => {
    const createProduct = {
      "title":"Six de modelo especial",
      "description":"6 cervezas modelo especial de lata",
      "urlImage":"https://cdn.byprice.com/657562b1-0635-47ca-b84d-789854e74c4b/300_300.png",
      "quantity": 355,
      "measureId": 4,
      "id_category": 7,
      "subcategoryId": 31,
      "active":"1"
    }
    return Controller.createProduct(createProduct).then((product) => {
      expect(product).toMatchObject({ id: expect.any(Number) });
    });
  });
  test('should return object product updated', () => {
    const updateProduct = {
      "title":"Six de modelo especial",
      "description":"6 cervezas modelo especial de lata",
      "urlImage":"https://cdn.byprice.com/657562b1-0635-47ca-b84d-789854e74c4b/300_300.png",
      "quantity": 355,
      "measureId": 4,
      "id_category": 7,
      "subcategoryId": 31,
      "active":"1"
    }
    return Controller.updateProduct(updateProduct,1).then((product) => {
      expect(product).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        description: expect.any(String),
        quantity: expect.any(Number),
        measureId: expect.any(Number),
        id_category: expect.any(Number),
        subcategoryId: expect.any(Number),
        urlImage: expect.any(String),
        active: expect.any(Number),
      });
    });
  });
  test('should return object IdProduct', () => {
    return Controller.removeProduct(3).then((product) => {
      expect(typeof product.id).toBe('number');
    });
  });
});
