const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('./models');

async function getAll(TABLE, filter) {
  if (TABLE == 'categories') {
    let and = Op.and;
    let newFilter = {
      [and]: [{ deleted: false }],
    };
    let { category, all } = filter;

    if (all == 'false') {
      newFilter[and] = [{ active: true }, ...newFilter[and]];
    }

    if (category) {
      newFilter[and] = [{ category }, ...newFilter[and]];
    }

    return models.Category.findAll({
      where: newFilter,
    });
  }
}

async function getById(TABLE, id) {
  if (TABLE == 'categories') {
    return models.Category.findOne({
      where: { [Op.and]: [{ id }, { deleted: false }] },
    });
  }
}

async function create(TABLE, data) {
  if (TABLE == 'categories') {
    return models.Category.create(data);
  }
}

async function update(TABLE, data, id) {
  if (TABLE == 'categories') {
    return models.Category.update(data, { where: { id } });
  }
}

async function remove(TABLE, id) {
  if (TABLE == 'categories') {
    return models.Category.update(
      { deleted: true, active: false },
      { where: { id } }
    );
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
