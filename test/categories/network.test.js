const testServer = require('../../utils/testServer');

describe('routes - categories', function () {
    const route = require('../../api/components/categories/network')

    const request = testServer(route);
    describe('GET /categories', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/2').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/?category=Lácteos').expect(200, done);
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
    describe('GET /categories/subcategories', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/subcategories/').expect(200, done);
        });
        
        test('should respond with status 200', function (done) {
            request.get('/api/subcategories/?category=Lácteos').expect(200, done);
        });

        test('should respond with status 200 - sort asc order', function (done) {
            request.get('/api/subcategories/?order=asc').expect(200, done);
        });

        test('should respond with status 200 - sort desc order', function (done) {
            request.get('/api/subcategories/?order=desc').expect(200, done);
        });

        test('should respond with status 200 - limit and page', function (done) {
            request.get('/api/subcategories/?limit=1&page=2').expect(200, done);
        });
    });
    describe('POST /categories', function () {
        it("should respond with status 201", function(done) {
            const createCategory = {
                category:"Limpieza",
                url_image:"https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg",
            }
            request.post("/api/").send(createCategory).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:201, body:{}});
              done();
            });
        });
    });
    describe('PUT /categories', function () {
        it("should respond with status 200", function(done) {
            const updateCategory = {
                category:"Limpieza",
                url_image:"https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg",
            }
            request.put("/api/2").send(updateCategory).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
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

