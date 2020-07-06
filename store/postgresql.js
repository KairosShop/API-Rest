const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('./models');
let and = Op.and;

async function getAll(TABLE, filter) {
  if (TABLE == 'categories') {
    let newFilter = {
      [and]: [{ deleted: false }],
    };
    let { category, all, order, page, limit } = filter;

    if (!all) {
      newFilter[and] = [{ active: true }, ...newFilter[and]];
    }

    if (category) {
      newFilter[and] = [{ category }, ...newFilter[and]];
    }

    const orderFilter = [['category', order]]
    const offset = (page-1)*limit;

    return models.Category.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit
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
    return models.Category.update(data, {
      where: { [Op.and]: [{ id }, { deleted: false }] },
    });
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
