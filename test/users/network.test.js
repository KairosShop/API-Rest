const testServer = require('../../utils/testServer');

describe('routes - users', function () {
    const route = require('../../api/components/users/network')

    const request = testServer(route);
    describe('GET /users', function () {
        test('should respond with status 200 - get all users', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200 - search by email', function (done) {
            request.get('/api/?email=cbirtwistle0@blog.com').expect(200, done);
        });

        test('should respond with status 200 - search by firstName', function (done) {
            request.get('/api/?firstName=Clayborne').expect(200, done);
        });

        test('should respond with status 200 - search by lastName', function (done) {
            request.get('/api/?lastName=Birtwistle').expect(200, done);
        });

        test('should respond with status 200 - search by role', function (done) {
            request.get('/api/?role=admin').expect(200, done);
        });

        test('should respond with status 200 - search by verified', function (done) {
            request.get('/api/?verified=1').expect(200, done);
        });

        test('should respond with status 200 - search by active', function (done) {
            request.get('/api/?active=1').expect(200, done);
        });

        test('should respond with status 200 - get user by id', function (done) {
            request.get('/api/3').expect(200, done);
        });

        it("should respond with status 201 - create user", function(done) {
            const createUser = {
                "email": "linux.carl@gmail.com",
                "firstName": "Carlos",
                "lastName": "Ramírez",
                "rol":"customer",
                "password":"vstlod pa$$word__3 r-5*"
            }
            request.post("/api/").send(createUser).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: {} });
              done
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createUser = {
                "email": "linux.carl@gmail.com"
            }
            request.post("/api/").send(createUser).end((err, res) => {
                expect(res.status).toBe(500);
                done();
            });
        });

        it("should respond with status 200 - update user", function(done) {
            const updateUser = {
                "email": "linux_car-los.443@carlos.com",
                "firstName": "Carlos",
                "lastName": "Ramírez",
                "rol":"customer",
                "url_image":"https://www.shareicon.net/data/2015/10/09/653498_users_512x512.png",
                "active": 0
            }
            request.put("/api/2").send(updateUser).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body:{}});
              done();
            });
        });

        test('should respond with status 200 - delete user', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

