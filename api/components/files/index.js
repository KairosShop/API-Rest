const store = require('../../../store/postgresql');
const controller = require('./controller');

module.exports = controller(store);
