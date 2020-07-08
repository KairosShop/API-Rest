const models = require('./models');

async function getAll(TABLE, filter) {
  if (TABLE == 'categories') {
    let newFilter = { deleted: false };
    let filterSubcategories = { deleted: false, active: true };

    let { title, all, order, page, limit } = filter;

    if (!all) {
      newFilter = { active: true, ...newFilter };
    }

    if (title) {
      newFilter = { title, ...newFilter };
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
    let newFilter = { deleted: false };

    const orderFilter = [['title', 'ASC']];

    return models.Subcategory.findAll({
      where: newFilter,
      order: orderFilter,
      include: [{ model: models.Category, as: 'category' }],
    });
  } else if (TABLE === 'measures') {
    let { measure } = filter;
    let whereFilter = { active: true, deleted: false };
    const orderFilter = [['measure', 'ASC']];

    if (measure) {
      whereFilter = { measure, ...whereFilter };
    }

    return models.Measure.findAll({
      where: whereFilter,
      order: orderFilter,
    });
  } else if (TABLE == 'products') {
    let newFilter = { deleted: false };

    let { title, all, order, page, limit, categoryId } = filter;

    if (!all) {
      newFilter = { active: true, ...newFilter };
    }

    if (title) {
      newFilter = { title, ...newFilter };
    }

    if (categoryId) {
      newFilter = { categoryId, ...newFilter };
    }

    const orderFilter = [['title', order]];
    const offset = (page - 1) * limit;

    return models.Product.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit,
      include: [
        {
          model: models.Measure,
          as: 'measure',
        },
      ],
    });
  }
}

async function getById(TABLE, id) {
  const whereFilter = { id, deleted: false };
  if (TABLE == 'categories') {
    let filterSubcategories = { deleted: false, active: true };

    return models.Category.findOne({
      where: whereFilter,
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
    return models.Subcategory.findOne({
      where: whereFilter,
    });
  } else if (TABLE === 'measures') {
    return models.Measure.findOne({
      where: whereFilter,
    });
  } else if (TABLE == 'products') {
    return models.Product.findOne({
      where: whereFilter,
      include: [
        {
          model: models.Subcategory,
          as: 'subcategory',
        },
        {
          model: models.Measure,
          as: 'measure',
        },
        {
          model: models.Category,
          as: 'category',
        },
      ],
    });
  }
}

async function create(TABLE, data) {
  if (TABLE == 'categories') {
    return models.Category.create(data);
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.create(data);
  } else if (TABLE === 'products') {
    return models.Product.create(data);
  }
}

async function update(TABLE, data, id) {
  const whereFilter = { id, deleted: false };
  if (TABLE == 'categories') {
    return models.Category.update(data, { where: whereFilter });
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.update(data, { where: whereFilter });
  } else if (TABLE === 'products') {
    return models.Product.update(data, { where: whereFilter });
  }
}

async function remove(TABLE, id) {
  const updateData = { deleted: true, active: false };
  if (TABLE == 'categories') {
    return models.Category.update(updateData, { where: { id } });
  } else if (TABLE === 'subcategories') {
    return models.Subcategory.update(updateData, { where: { id } });
  } else if (TABLE === 'products') {
    return models.Product.update(updateData, { where: { id } });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
