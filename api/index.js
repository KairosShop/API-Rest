const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { api } = require('../config');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const categories = require('./components/categories/network');
const subcategories = require('./components/subcategories/network');


const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// Routing
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/categories', categories);
app.use('/api/subcategories', subcategories);


app.listen(api.port, () => {
  console.log(`API running in http://localhost:${api.port}`);
});