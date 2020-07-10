const testServer = require('../../utils/testServer');

describe('routes - subcategories', function () {
  const route = require('../../api/components/subcategories/network');

  const request = testServer(route);
  describe('GET /subcategories', function () {
    test('should respond with status 200', function (done) {
      request.get('/api/category/1').expect(200, done);
    });

    test('should respond with status 200', function (done) {
      request.get('/api/category/1/?subcategory=Leche').expect(200, done);
    });

    test('should respond with status 200', function (done) {
      request.get('/api/3').expect(200, done);
    });

    it('should respond with status 201', function (done) {
      const createSubcategory = {
        categoryId: 1,
        title: 'Cerveza Corona',
        urlImage:
          'https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg',
      };
      request
        .post('/api/')
        .send(createSubcategory)
        .end((err, res) => {
          expect(res.statusCode).toEqual(201);
          done();
        });
    });

    it('should respond with status 200', function (done) {
      const updateSubcategory = {
        categoryId: '1',
        title: 'Cervezas frias',
        urlImage:
          'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102055817L.jpg',
      };
      request
        .put('/api/1')
        .send(updateSubcategory)
        .end((err, res) => {
          expect(res.body).toMatchObject({
            error: false,
            status: 200,
            body: [1],
          });
          done();
        });
    });

    test('should respond with status 200', function (done) {
      request.delete('/api/2').expect(200, done);
    });
  });
});
