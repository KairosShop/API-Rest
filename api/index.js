const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { api } = require('../config');

const categoriesApi = require('./components/categories/network');


const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

// Routing

categoriesApi(app);


app.listen(api.port, () => {
  console.log(`API running in http://localhost:${api.port}`);
});
