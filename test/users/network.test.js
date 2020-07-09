const testServer = require('../../utils/testServer');
const routeLogin = require('../../api/components/auth/network')
const route = require('../../api/components/users/network');

let token ;

describe('routes - users', function () {
    describe('GET /users',  function () {
         beforeAll(async (done) =>{
            const requestLogin = testServer(routeLogin);
            const data =  await requestLogin.post("/api/sign-in/").auth('chumble9@reddit.com','secret')
            token = data.body.body.token;
            done();
        })

        const request = testServer(route);
        test('should respond with status 200 - get all users',  function (done) {
             request.get('/api/').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - search by email', function (done) {
            request.get('/api/?email=cbirtwistle0@blog.com').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - search by firstName', function (done) {
            request.get('/api/?firstName=Clayborne').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - search by lastName', function (done) {
            request.get('/api/?lastName=Birtwistle').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - search by role', function (done) {
            request.get('/api/?role=admin').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - search by verified', function (done) {
            request.get('/api/?verified=1').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - search by active', function (done) {
            request.get('/api/?active=true').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200 - get user by id', function (done) {
            request.get('/api/3').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        it("should respond with status 201 - create user", function(done) {
            const createUser = {
                "email": "linux.carl@gmail.com",
                "firstName": "Carlos",
                "lastName": "Ramírez",
                "rol":"customer",
                "password":"vstlod pa$$word__3 r-5*"
            }
            request.post("/api/").set('Authorization', `Bearer ${token}`).send(createUser).end((err, res) => {
            expect(res.body).toMatchObject({error: false, status: 201, body: {} });
            done();
            });
        });
        it("should respond with status 500 - error valid schema", function(done) {
            const createUser = {
                "email": "linux.carl@gmail.com"
            }
            request.post("/api/").set('Authorization', `Bearer ${token}`).send(createUser).end((err, res) => {
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
                "urlImage":"https://www.shareicon.net/data/2015/10/09/653498_users_512x512.png",
                "active": false
            }
            request.put("/api/2").set('Authorization', `Bearer ${token}`).send(updateUser).end((err, res) => {
            expect(res.body).toMatchObject({error:false, status:200, body:[1]});
            done();
            });
        });

        test('should respond with status 200 - delete user', function (done) {
            request.delete('/api/2').set('Authorization', `Bearer ${token}`).expect(200, done);
        });
    });
});

