const testServer = require('../../utils/testServer');

describe('routes - measures', function () {
    const route = require('../../api/components/measures/network')

    const request = testServer(route);
    describe('GET /measures', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/?measure=kg').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/4').expect(200, done);
        });
    });
});

