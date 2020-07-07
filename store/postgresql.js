const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('./models');
let and = Op.and;

async function getAll(TABLE, filter) {
  if (TABLE == 'categories') {
    let newFilter = {
      [and]: [{ deleted: false }],
    };
    let filterSubcategories = {
      [and]: [{ deleted: false }, { active: true }],
    };

    let { title, all, order, page, limit } = filter;

    if (!all) {
      newFilter[and] = [{ active: true }, ...newFilter[and]];
    }

    if (title) {
      newFilter[and] = [{ title }, ...newFilter[and]];
    }

    const orderFilter = [['title', order]];
    const offset = (page - 1) * limit;

    return models.Category.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit,
      include: [
        {
          model: models.Subcategory,
          as: 'subcategories',
          where: filterSubcategories,
          required: false,
        },
      ],
    });
  } else if (TABLE === 'subcategories') {
    let newFilter = {
      [and]: [{ deleted: false }],
    };

    const orderFilter = [['title', 'ASC']];

    return models.Subcategory.findAll({
      where: newFilter,
      order: orderFilter,
      include: [{ model: models.Category, as: 'category' }],
    });
  } else if (TABLE === 'measures') {
    let { measure } = filter;
    let whereFilter = { [and]: [{ active: true }, { deleted: false }] };
    const orderFilter = [['measure', 'ASC']];

    if (measure) {
      whereFilter[and] = [{ measure }, ...whereFilter[and]];
    }

    return models.Measure.findAll({
      where: whereFilter,
      order: orderFilter,
    });
  }
}

async function getById(TABLE, id) {
  const whereFilter = { [and]: [{ id }, { deleted: false }] };
  if (TABLE === 'categories') {
    return models.Category.findOne({
      where: whereFilter,
    });
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.findOne({
      where: whereFilter,
    });
  } else if (TABLE === 'measures') {
    return models.Measure.findOne({
      where: whereFilter,
    });
  }
}

async function create(TABLE, data) {
  if (TABLE == 'categories') {
    return models.Category.create(data);
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.create(data);
  }
}

async function update(TABLE, data, id) {
  if (TABLE == 'categories') {
    return models.Category.update(data, {
      where: { [Op.and]: [{ id }, { deleted: false }] },
    });
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.update(data, {
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
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.update(
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
