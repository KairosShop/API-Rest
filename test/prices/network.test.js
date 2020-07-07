const testServer = require('../../utils/testServer');

describe('routes - prices', function () {
    const route = require('../../api/components/prices/network')

    const request = testServer(route);
    describe('GET /prices/supermarket', function () {
        test('should respond with status 200 - get all prices by supermarketId', function (done) {
            request.get('/api/supermarket/2').expect(200, done);
        });

        test('should respond with status 200 -  search by productId', function (done) {
            request.get('/api/supermarket/4/?productId=109').expect(200, done);
        });

        test('should respond with status 200 -  search by supermarketId', function (done) {
            request.get('/api/supermarket/4/?supermarketId=1').expect(200, done);
        });

        test('should respond with status 200 -  search by price', function (done) {
            request.get('/api/supermarket/4/?price=109').expect(200, done);
        });

        test('should respond with status 200 -  search by active', function (done) {
            request.get('/api/supermarket/4/?active=1').expect(200, done);
        });

        test('should respond with status 200 - sort asc order prices', function (done) {
            request.get('/api/supermarket/4/?order=asc').expect(200, done);
        });

        test('should respond with status 200 - sort desc order prices', function (done) {
            request.get('/api/supermarket/4/?order=desc').expect(200, done);
        });

        test('should respond with status 200 - limit prices and page', function (done) {
            request.get('/api/supermarket/4/?limit=4&page=5').expect(200, done);
        });
    });
    describe('GET /prices/products', function () {
        test('should respond with status 200 - get all prices by productId', function (done) {
            request.get('/api/product/2').expect(200, done);
        });

        test('should respond with status 200 -  search by productId', function (done) {
            request.get('/api/product/2/?productId=109').expect(200, done);
        });

        test('should respond with status 200 -  search by supermarketId', function (done) {
            request.get('/api/product/2/?supermarketId=1').expect(200, done);
        });

        test('should respond with status 200 -  search by price', function (done) {
            request.get('/api/product/2/?price=100').expect(200, done);
        });

        test('should respond with status 200 -  search by active', function (done) {
            request.get('/api/product/2/?active=1').expect(200, done);
        });

        test('should respond with status 200 - sort asc order prices', function (done) {
            request.get('/api/product/2/?order=asc').expect(200, done);
        });

        test('should respond with status 200 - sort desc order prices', function (done) {
            request.get('/api/product/2/?order=desc').expect(200, done);
        });

        test('should respond with status 200 - limit prices and page', function (done) {
            request.get('/api/product/2/?limit=4&page=5').expect(200, done);
        });
    });
    describe('POST /prices', function () {
        it("should respond with status 201 - create price", function(done) {
            const createPrice = {
                "productId":"1",
                "supermarketId":"5",
                "price":"45.34",
                "active":"1"
            }
            request.post("/api/").send(createPrice).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: {} });
              done();
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createPrice = {
                "price":"500"
            }
            request.post("/api/").send(createPrice).end((err, res) => {
                expect(res.statusCode).toBe(500);
                done();
            });
        });
    });
    describe('PUT /prices', function () {
        it("should respond with status 200 - update price", function(done) {
            const updatePrice = {
                "price":"45.34",
            }
            request.put("/api/2").send(updatePrice).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });
        it("should respond with status 200 - disabled price", function(done) {
            const updatePrice = {
                "active":"0"
            }
            request.put("/api/2").send(updatePrice).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });
    });
});

