const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const { api, dev } = require('../config');
const agent = require('@google-cloud/debug-agent');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('../utils/middleware/errorHandlers');
const notFoundHandler = require('../utils/middleware/notFoundHandler');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const categories = require('./components/categories/network');
const subcategories = require('./components/subcategories/network');
const measures = require('./components/measures/network');
const users =  require('./components/users/network');
const products =  require('./components/products/network');
const supermarket =  require('./components/supermarket/network');
const prices =  require('./components/prices/network');
const address =  require('./components/address/network');
const cart =  require('./components/cart/network');
const orders =  require('./components/orders/network');
const auth =  require('./components/auth/network');

if (!dev) {
  agent.start();
}


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// Routing
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/auth', auth);
app.use('/api/categories', categories);
app.use('/api/subcategories', subcategories);
app.use('/api/measures', measures);
app.use('/api/users', users);
app.use('/api/products', products);
app.use('/api/supermarket', supermarket);
app.use('/api/prices', prices);
app.use('/api/address', address);
app.use('/api/cart', cart);
app.use('/api/orders', orders);

// middlewares by errors
app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(api.port, () => {
  console.log(`API running in http://localhost:${api.port}`);
});
