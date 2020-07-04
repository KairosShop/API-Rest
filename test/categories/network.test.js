const testServer = require('../../utils/testServer');

describe('routes - categories', function () {
    const route = require('../../api/components/categories/network')

    const request = testServer(route);
    describe('GET /categories', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/?category=Lácteos').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/3').expect(200, done);
        });

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

        test('should respond with status 200', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

