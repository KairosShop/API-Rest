const store = require('../../../store/postgresql');
const controller = require('../users/controller');

module.exports = controller(store);
