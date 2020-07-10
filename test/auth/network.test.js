const testServer = require('../../utils/testServer');

describe('routes - users', function () {
    const route = require('../../api/components/auth/network')
    const request = testServer(route);
    describe('POST /auth', function () {
        it("should respond with status 201 - sign up user", function(done) {
            const signUp = {
                "email": "chumble92@reddit.com",
                "firstName": "Carlos",
                "lastName": "Ramírez",
                "rol":"admin",
                "password":"secret12345"
            }
            request.post("/api/sign-up/").send(signUp).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: expect.any(Array) });
              done();
            });
        });
        it("should respond with status 200 - sign in user", function(done) {
            request.post("/api/sign-in/").auth('chumble92@reddit.com','secret12345').end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 200, body: expect.any(Object) });
              expect(res.body.body).toMatchObject({ token: expect.any(String),user: expect.any(Object) });
              done();
            });
        });
    });
});

