const testServer = require('../../utils/testServer');
const routeLogin = require('../../api/components/auth/network');
const route = require('../../api/components/orders/network')

let token;

describe('routes - orders', function () {
    const request = testServer(route);
    beforeAll(async (done) =>{
      const requestLogin = testServer(routeLogin);
      const data =  await requestLogin.post("/api/sign-in/").auth('admin@kairosshop.xyz','12345678')
      token = data.body.body.token;
      done();
  })
    describe('GET /orders', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200', function (done) {
          request.get('/api/2').set('Authorization', `Bearer ${token}`).expect(200, done);
        });

        test('should respond with status 200', function (done) {
          request.get('/api/print/1').set('Authorization', `Bearer ${token}`).expect(200, done);
        });
    });
    describe('POST /orders', function () {
        it("should respond with status 201 - create order", function(done) {
            const createOrder = {
                total: 500,
                products: [
                  {
                    productId: 1,
                    quantity: 2,
                    price: 3,
                    supermarketId: 3,
                  },
                  {
                    productId: 3,
                    quantity: 1,
                    price: 1,
                    supermarketId: 3,
                  },
                ],
              };
            request.post("/api/").set('Authorization', `Bearer ${token}`).send(createOrder).end((err, res) => {
              expect(res.body).toMatchObject({error: false, status: 201, body: expect.any(Object) });
              expect(res.body.body).toHaveProperty('orderId');
              expect(typeof res.body.body.orderId).toBe('number');
              done();
            });
        });
    });
    describe('PUT /orders', function () {
        it("should respond with status 200 - update order", function(done) {
            const updateOrder = {
                status: "CANCEL",
            }
            request.put("/api/1").set('Authorization', `Bearer ${token}`).send(updateOrder).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body: expect.any(Object) });
              expect(typeof res.body.body).toBe('object');
              expect(typeof res.body.body[0]).toBe('number');
              done();
            });
        });
    });
});