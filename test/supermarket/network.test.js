const testServer = require('../../utils/testServer');

describe('routes - supermarkets', function () {
    const route = require('../../api/components/supermarket/network')

    const request = testServer(route);
    describe('GET /supermarkets', function () {
        test('should respond with status 200 - get all supermarkets', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200 - search by supermarket', function (done) {
            request.get('/api/?supermarket=Virco Manufacturing Corporation').expect(200, done);
        });

        test('should respond with status 200 - search by address', function (done) {
            request.get('/api/?address=54 Goodland Park').expect(200, done);
        });

        test('should respond with status 200 - search by active', function (done) {
            request.get('/api/?active=1').expect(200, done);
        });

        test('should respond with status 200 - search by id_user', function (done) {
            request.get('/api/?id_user=1').expect(200, done);
        });

        test('should respond with status 200 - order supermarkets', function (done) {
            request.get('/api/?order=desc').expect(200, done);
        });

        test('should respond with status 200 - limit supermarkets and page', function (done) {
            request.get('/api/?limit=2&page=3').expect(200, done);
        });

        test('should respond with status 200 - get supermaket by id', function (done) {
            request.get('/api/2').expect(200, done);
        });

        it("should respond with status 201 - create supermaket", function(done) {
            const createSupermarket = {
                "supermarket": "Abarrotes panchisco",
                "address": "Av México 44 colonia centro jalpa zacatecas",
                "latitude": "3.7220621",
                "longitude": "96.8297403",
                "url_logo": "http://dummyimage.com/246x208.png/ff4444/ffffff",
                "active": 1,
                "id_user": 2
            }
            request.post("/api/").send(createSupermarket).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: {} });
              done();
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createSupermarket = {
                "supermarket":"Mini super la esquinita"
            }
            request.post("/api/").send(createSupermarket).end((err, res) => {
                expect(res.statusCode).toBe(500);
                done();
            });
        });
        it("should respond with status 200 - update supermarket", function(done) {
            const updateSupermarket = {
                "supermarket": "Abarrotes la pasadita",
                "address": "Calle arroyo seco 344-a colonia centro zapopan jalisco",
                "latitude": "3.7220621",
                "longitude": "96.8297403",
                "url_logo": "http://dummyimage.com/246x208.png/ff4444/ffffff",
                "active": 1,
                "id_user": 2
            }
            request.put("/api/2").send(updateSupermarket).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });

        it("should respond with status 200 - disabled supermarket", function(done) {
            const disabledSupermarket = {
                "active": 0,
            }
            request.put("/api/3").send(disabledSupermarket).end((err, res) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
        
        test('should respond with status 200 - delete supermarket', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

