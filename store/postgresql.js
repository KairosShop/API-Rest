const models = require('./models');
const { Op } = require("sequelize");
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

    let { title, description, all, order, page, limit, categoryId } = filter;

    if (!all) {
      newFilter = { active: true, ...newFilter };
    }

    if (title) {
      title = {
        [Op.iLike]: `%${title}%`
      }
      newFilter = { title, ...newFilter };
    }
    if (description) {
      description = {
        [Op.iLike]:  `%${description}%`
      }
      newFilter = { description, ...newFilter };
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
  } else if (TABLE == 'users') {
    const { order, page, limit } = filter;
    const { email, firstName, lasteName, rol, verified, active } = filter;

    let newFilter = { deleted: false, verified, active };

    if (email) {
      newFilter = { email, ...newFilter };
    }
    if (firstName) {
      newFilter = { firstName, ...newFilter };
    }
    if (lasteName) {
      newFilter = { lasteName, ...newFilter };
    }
    if (rol) {
      newFilter = { rol: rol.toUpperCase(), ...newFilter };
    }

    const orderFilter = [['rol', order]];
    const offset = (page - 1) * limit;

    return models.User.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit,
    });
  } else if (TABLE == 'address') {
    const { order, page, limit } = filter;
    const { address } = filter;

    let newFilter = { deleted: false };

    if (address) {
      newFilter = { address, ...newFilter };
    }

    const orderFilter = [['address', order]];
    const offset = (page - 1) * limit;

    return models.Address.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit,
    });
  } else if (TABLE == 'supermarket') {
    const { order, page, limit } = filter;
    const { supermarket, address, active, userId } = filter;

    let newFilter = { deleted: false };

    if (supermarket) {
      newFilter = { supermarket, ...newFilter };
    }
    if (address) {
      newFilter = { address, ...newFilter };
    }
    if (userId) {
      newFilter = { userId,  ...newFilter };
    }
    if (active) {
      newFilter = active ? { active, ...newFilter } : false;
    }

    const orderFilter = [['supermarket', order]];
    const offset = (page - 1) * limit;
    return models.Supermarket.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit,
    });
  } else if (TABLE == 'price') {
    const { order, page, limit } = filter;
    const { supermarketId, productId, active, price } = filter;

    let newFilter = { };

    if (supermarketId) {
      newFilter = { supermarketId, ...newFilter };
    }
    if (productId) {
      newFilter = { productId, ...newFilter };
    }
    if (price) {
      newFilter = { price,  ...newFilter };
    }
    if (active) {
      newFilter = active ? { active, ...newFilter } : false;
    }

    const orderFilter = [['price', order]];
    const offset = (page - 1) * limit;

    return models.Price.findAll({
      where: newFilter,
      order: orderFilter,
      offset,
      limit,
    });
  } else if (TABLE == 'orders') {
    const { status, userId } = filter;
    let newFilter = { deleted: false };
    let filterDetails = { deleted: false };

    if (status) {
      newFilter = { status, ...newFilter };
    } 
    if (userId) {
      newFilter = { userId, ...newFilter };
    }

    const orderFilter = [['id', 'DESC']];

    return models.Orders.findAll({
      where: newFilter,
      order: orderFilter,
      include: [
        {
          model: models.OrdersDetails,
          as: 'details',
          where: filterDetails,
          required: false,
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
  } else if (TABLE === 'authentication') {
    return models.Authentication.findOne({
      where: whereFilter,
    });
  } else if (TABLE === 'users') {
    return models.User.findOne({
      where: whereFilter,
    });
  } else if (TABLE === 'supermarket') {
    return models.Supermarket.findOne({
      where: whereFilter,
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
  } else if (TABLE === 'users') {
    return models.User.create(data);
  } else if (TABLE === 'authentication') {
    return models.Authentication.create(data);
  } else if (TABLE === 'address') {
    return models.Address.create(data);
  } else if (TABLE === 'supermarket') {
    return models.Supermarket.create(data);
  } else if (TABLE === 'price') {
    return models.Price.create(data);
  } else if (TABLE === 'orders') {
    return models.Orders.create(data);
  } else if (TABLE === 'ordersDetails') {
    return models.OrdersDetails.create(data);
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
  } else if (TABLE === 'users') {
    return models.User.update(data, { where: whereFilter });
  } else if (TABLE === 'address') {
    return models.Address.update(data, { where: whereFilter });
  } else if (TABLE === 'supermarket') {
    return models.Supermarket.update(data, { where: whereFilter });
  } else if (TABLE === 'price') {
    return models.Price.update(data, { where: whereFilter });
  } else if (TABLE === 'orders') {
    return models.Orders.update(data, { where: whereFilter });
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
  } else if (TABLE === 'users') {
    return models.User.update(updateData, { where: { id } });
  } else if (TABLE === 'address') {
    return models.Address.update(updateData, { where: { id } });
  } else if (TABLE === 'supermarket') {
    return models.Supermarket.update(updateData, { where: { id } });
  } else if (TABLE === 'orders') {
    return models.Orders.update(updateData, { where: { id } });
  }
}

async function getOne(TABLE, filter = {}) {
  let whereFilter = { deleted: false };
  if (TABLE === 'users') {
    let { email } = filter;

    whereFilter = { email, ...whereFilter };
    let user = await models.User.findOne({
      where: whereFilter,
    });

    const auth = await models.Authentication.findOne({
      where: { userId: user.id },
    });
    user.password = auth.password;

    return user;
  } else if (TABLE == 'address') {
    let { id, userId } = filter;

    whereFilter = { id, userId, ...whereFilter };
    let result = await models.Address.findOne({
      where: whereFilter,
    });

    return result;
  } else if (TABLE == 'orders') {
    let { id } = filter;
    whereFilter = { id, ...whereFilter };

    let filterOrdersDetails = { deleted: false };

    return models.Orders.findOne({
      where: whereFilter,
      include: [
        {
          model: models.OrdersDetails,
          as: 'details',
          where: filterOrdersDetails,
          required: false,
          order: [['supermarketId', 'ASC' ]],
          include: [{
              model: models.Supermarket,
              as: 'supermarket',
            },
            {
              model: models.Product,
              as: 'products',
            },
          ]
        },
        {
          model: models.User,
          as: 'user',
        },
      ],
    });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOne,
};
