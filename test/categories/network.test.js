const testServer = require('../../utils/testServer');
const mocks = require('../../utils/mocks/categories');

describe('routes - categories', function () {
  const route = require('../../api/components/categories/network');

  const request = testServer(route);
  describe('GET /categories', function () {
    it('should create new category', async (done) => {
      let mockCategory = {
        category: mocks[0].category,
        urlImage: mocks[0].urlImage,
      };

      const res = await request.post('/api/').send(mockCategory);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toMatchObject({
        error: false,
        status: 201,
        body: {},
      });
      expect(res.body).toHaveProperty('body.category', mockCategory.category);
      done();
    });

        test('should respond with status 200', function (done) {
            request.get('/api/?category=Lácteos').expect(200, done);
        });

    test('should respond with status 200', function (done) {
      request.get('/api/?category=Lacteos').expect(200, done);
    });

    test('should respond with status 200', function (done) {
      request.get('/api/3').expect(200, done);
    });

    it('should respond with status 200', function (done) {
      const updateCategory = {
        category: 'Limpieza',
        urlImage:
          'https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg',
      };
      request
        .put('/api/2')
        .send(updateCategory)
        .end((err, res) => {
          expect(res.body).toMatchObject({
            error: false,
            status: 200,
            body: {},
          });
          done();
        });
    });

    test('should respond with status 200', function (done) {
      request.delete('/api/1').expect(200, done);
    });
  });
});
