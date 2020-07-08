const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  allSchema,
} = require('./general');

const statusSchema = joi
  .string()
  .uppercase()
  .valid('CUSTOMER', 'SUPER MARKET', 'ADMIN');
const priceSchema = joi.number().min(1).max(99999999999);
const numberSchema = joi.number().integer().min(1);

const createCartSchema = {
  productId: idSchema.required(),
  quantity: numberSchema,
};
const updateCartSchema = {
  productId: idSchema.required(),
  supermarketId: idSchema,
  price: priceSchema,
  status: statusSchema,
  quantity: numberSchema,
};
const filterSchema = {
  id: idSchema,
  status: statusSchema,
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
  all: allSchema,
};

module.exports = {
  cartIdSchema: idSchema.required(),
  productIdSchema: idSchema.required(),
  createCartSchema,
  updateCartSchema,
  filterSchema,
};
