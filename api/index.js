const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const { api } = require('../config');

const { logErrors, wrapErrors, errorHandler } = require('../utils/middleware/errorHandlers');
const notFoundHandler = require('../utils/middleware/notFoundHandler');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const categories = require('./components/categories/network');
const subcategories = require('./components/subcategories/network');
const measures = require('./components/measures/network');
const users =  require('./components/users/network');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// Routing
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/categories', categories);
app.use('/api/subcategories', subcategories);
app.use('/api/measures', measures);
app.use('/api/users', users);

// middlewares by errors
app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(api.port, () => {
  console.log(`API running in http://localhost:${api.port}`);
});