const testServer = require('../../utils/testServer');
const mocks = require('../../utils/mocks/categories');

describe('routes - categories', function () {
  const route = require('../../api/components/categories/network');

  const request = testServer(route);
  describe('GET /categories', function () {
    it('should create new category', async (done) => {
      let mockCategory = {
        title: mocks[0].title,
        urlImage: mocks[0].urlImage,
      };

      const res = await request.post('/api/').send(mockCategory);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toMatchObject({
        error: false,
        status: 201,
        body: {},
      });
      expect(res.body).toHaveProperty('body.title', mockCategory.title);
      done();
    });

    test('should respond with status 200', function (done) {
      request.get('/api/2').expect(200, done);
    });

    test('should respond with status 200', function (done) {
      request.get('/api/?title=Lácteos').expect(200, done);
    });

    test('should respond with status 200 - sort asc order', function (done) {
      request.get('/api/?order=asc').expect(200, done);
    });

    test('should respond with status 200 - sort desc order', function (done) {
      request.get('/api/?order=desc').expect(200, done);
    });

    test('should respond with status 200 - limit and page', function (done) {
      request.get('/api/?limit=1&page=2').expect(200, done);
    });
  });

  describe('PUT /categories', function () {
    it('should respond with status 200', function (done) {
      let mockCategory = {
        title: mocks[0].title,
        urlImage: mocks[0].urlImage,
      };
      request
        .put('/api/1')
        .send(mockCategory)
        .end((err, res) => {
          expect(res.body).toMatchObject({
            error: false,
            status: 200,
            body: [1],
          });
          done();
        });
    });
  });
  describe('DELETE /categories', function () {
    test('should respond with status 200', function (done) {
      request.delete('/api/2').expect(200, done);
    });
  });
});
