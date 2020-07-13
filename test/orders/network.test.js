const testServer = require('../../utils/testServer');

describe('routes - orders', function () {
    const route = require('../../api/components/orders/network')

    const request = testServer(route);
    describe('GET /orders', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200', function (done) {
          request.get('/api/2').expect(200, done);
        });

        test('should respond with status 200', function (done) {
          request.get('/api/print/1').expect(200, done);
        });
    });
    describe('POST /orders', function () {
        it("should respond with status 201 - create order", function(done) {
            const createOrder = {
                userId: 1,
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
            request.post("/api/").send(createOrder).end((err, res) => {
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
            request.put("/api/1").send(updateOrder).end((err, res) => {
              expect(res.body).toMatchObject({error:false, status:200, body: expect.any(Object) });
              expect(typeof res.body.body).toBe('object');
              expect(typeof res.body.body[0]).toBe('number');
              done();
            });
        });
    });
});