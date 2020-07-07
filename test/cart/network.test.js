const testServer = require('../../utils/testServer');

describe('routes - cart', function () {
    const route = require('../../api/components/cart/network')

    const request = testServer(route);
    describe('GET /cart', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/?status=stand by').expect(200, done);
        });
        test('should respond with status 200', function (done) {
            request.get('/api/?order=DESC').expect(200, done);
        });
        test('should respond with status 200', function (done) {
            request.get('/api/?page=1&limit=3').expect(200, done);
        });
        test('should respond with status 200', function (done) {
            request.get('/api/?all=true').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/2').expect(200, done);
        });

    });
    describe('POST /cart', function () {
        it("should respond with status 201 - create cart", function(done) {
            const createcart = {
                productId: "1",
                quantity: "9",
            }
            request.post("/api/").send(createcart).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: {} });
              done();
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createcart = {
                "cart":"500"
            }
            request.post("/api/").send(createcart).end((err, res) => {
                expect(res.statusCode).toBe(500);
                done();
            });
        });
    });
    describe('PUT /cart', function () {
        it("should respond with status 200 - update cart", function(done) {
            const updatecart = {
                productId: "1",
                quantity: "39",
            }
            request.put("/api/2").send(updatecart).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });
    });

    describe('DELETE /cart', function () {
        test('should respond with status 200', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

