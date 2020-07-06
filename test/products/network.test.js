const testServer = require('../../utils/testServer');

describe('routes - products', function () {
    const route = require('../../api/components/products/network')

    const request = testServer(route);
    describe('GET /products', function () {
        test('should respond with status 200 - get all products', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200 - search by title', function (done) {
            request.get('/api/?title=Refresco Squirt sabor toronja').expect(200, done);
        });

        test('should respond with status 200 - search by description', function (done) {
            request.get('/api/?description=Squirt el auténtico quitased sabor toronja, con más de 50 años en el mercado mexicano.').expect(200, done);
        });

        test('should respond with status 200 - search by id_category', function (done) {
            request.get('/api/?id_category=6').expect(200, done);
        });

        test('should respond with status 200 - search by id_subcategory', function (done) {
            request.get('/api/?id_subcategory=25').expect(200, done);
        });

        test('should respond with status 200 - search by quantity', function (done) {
            request.get('/api/?quantity=2').expect(200, done);
        });

        test('should respond with status 200 - search by id_measure', function (done) {
            request.get('/api/?id_measure=3').expect(200, done);
        });

        test('should respond with status 200 - search by active', function (done) {
            request.get('/api/?active=1').expect(200, done);
        });

        test('should respond with status 200 - order products', function (done) {
            request.get('/api/?order=desc').expect(200, done);
        });

        test('should respond with status 200 - limit products and page', function (done) {
            request.get('/api/?limit=4&page=5').expect(200, done);
        });

        test('should respond with status 200 - get product by id', function (done) {
            request.get('/api/47').expect(200, done);
        });

        it("should respond with status 201 - create product", function(done) {
            const createProduct = {
                "title":"Six de modelo especial",
                "description":"6 cervezas modelo especial de lata",
                "url_image":"https://cdn.byprice.com/657562b1-0635-47ca-b84d-789854e74c4b/300_300.png",
                "quantity": 355,
                "id_measure": 4,
                "id_category": 7,
                "id_subcategory": 31,
                "active":"1"
            }
            request.post("/api/").send(createProduct).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: {} });
              done();
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createProduct = {
                "title":"Six de modelo especial"
            }
            request.post("/api/").send(createProduct).end((err, res) => {
                expect(res.statusCode).toBe(500);
                done();
            });
        });
        it("should respond with status 200 - update product", function(done) {
            const updateProduct = {
                "title":"Six de modelo negra especial",
                "description":"6 cervezas modelo negra especial de lata",
                "url_image":"https://cdn.byprice.com/657562b1-0635-47ca-b84d-789854e74c4b/300_300.png",
                "quantity": 600,
                "id_measure": 4,
                "id_category": 7,
                "id_subcategory": 31,
                "active":"0"
            }
            request.put("/api/2").send(updateProduct).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });

        test('should respond with status 200 - delete product', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

