const testServer = require('../../utils/testServer');

describe('routes - categories', function () {
    const route = require('../../api/components/categories/network')

    const request = testServer(route);
    describe('GET /categories', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/categories').expect(200, done);
        });
    });
});

