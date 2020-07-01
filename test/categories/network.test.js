const testServer = require('../../utils/testServer');

describe('routes - categories', function () {
    const route = require('../../api/components/categories/network')

    const request = testServer(route);
    describe('GET /categories', function () {
        test('should respond with status 200', function (done) {
            request.get('/api/').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/?category=Lacteos').expect(200, done);
        });

        test('should respond with status 200', function (done) {
            request.get('/api/3').expect(200, done);
        });

        test('should respond with status 201', async function (done) {
            const createCategory = {
                category:"Limpieza",
                url_image:"https://image.freepik.com/vector-gratis/tienda-lacteos-supermercado_182089-268.jpg",
            }
            try {
                await request.post('/api/').send(createCategory).expect(201, done);
            } catch (error) {
                console.log(`Error ${error}`)
                done()
            }
        });

        test('should respond with status 200', function (done) {
            request.delete('/api/2').expect(200, done);
        });
    });
});

