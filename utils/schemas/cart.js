const joi = require('@hapi/joi');
const {
  idSchema,

} = require('./general');

const statusSchema = joi
  .string()
  .uppercase()
  .valid('CUSTOMER', 'SUPER MARKET', 'ADMIN');
const priceSchema = joi.number().min(1).max(99999999999);
const numberSchema = joi.number().integer().min(1);

const createCartSchema = {
  productId: idSchema.required(),
  quantity: numberSchema.required(),
};
const updateCartSchema = {
  productId: idSchema.required(),
  supermarketId: idSchema,
  price: priceSchema,
  status: statusSchema,
  quantity: numberSchema,
};
const filterSchema = {
};

module.exports = {
  cartIdSchema: idSchema.required(),
  productIdSchema: idSchema.required(),
  createCartSchema,
  updateCartSchema,
  filterSchema,
};
