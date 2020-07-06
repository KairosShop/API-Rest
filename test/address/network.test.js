const testServer = require('../../utils/testServer');

describe('routes - address', function () {
    const route = require('../../api/components/address/network')

    const request = testServer(route);
    describe('GET /address', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });
        test('should respond with status 200', function (done) {
            request.get('/api/?address=99257 Northridge Parkway').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/2').expect(200, done);
        });

        test('should respond with status 200 - sort asc order address', function (done) {
            request.get('/api/?order=asc').expect(200, done);
        });

        test('should respond with status 200 - sort desc order address', function (done) {
            request.get('/api/?order=desc').expect(200, done);
        });

        test('should respond with status 200 - limit address and page', function (done) {
            request.get('/api/?limit=1&page=2').expect(200, done);
        });
    });
    describe('POST /address', function () {
        it("should respond with status 201 - create address", function(done) {
            const createAddress = {
                "address": "1794 Nelson Street",
                "latitude": "48.9270449",
                "longitude": "2.3265854"
            }
            request.post("/api/").send(createAddress).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: {} });
              done();
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createAddress = {
                "address":"500"
            }
            request.post("/api/").send(createAddress).end((err, res) => {
                expect(res.statusCode).toBe(500);
                done();
            });
        });
    });
    describe('PUT /address', function () {
        it("should respond with status 200 - update address", function(done) {
            const updateAddress = {
                "address": "2s Nelson Street",
            }
            request.put("/api/2").send(updateAddress).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });
    });

    describe('DELETE /address', function () {
        test('should respond with status 200', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

