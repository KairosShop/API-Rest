const testServer = require('../../utils/testServer');

describe('routes - subcategories', function () {
    const route = require('../../api/components/subcategories/network')

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

        it("should respond with status 201", function(done) {
            const createSubcategory = {
                id_category:3,
                subcategory:"Leche",
                url_image:"https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg",
            }
            request.post("/api/").send(createSubcategory).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:201, body:{}});
              done();
            });
        });

        it("should respond with status 200", function(done) {
            const updateSubcategory = {
                id_category:3,
                subcategory:"Huevo",
                url_image:"https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg",
            }
            request.put("/api/2").send(updateSubcategory).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });

        test('should respond with status 200', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

