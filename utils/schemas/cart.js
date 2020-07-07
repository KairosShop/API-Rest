const joi = require('@hapi/joi');

let cartIdSchema = joi.number().integer().min(1).max(99999999999);
let statusSchema = joi.string().min(5);
let supermarketIdSchema = cartIdSchema;
let productIdSchema = cartIdSchema;
const priceSchema = joi.number().min(1).max(99999999999);
const numberSchema =  joi.number().integer().min(1);

const createCartSchema = {
  productId: productIdSchema.required(),
  quantity: numberSchema,
  userId: cartIdSchema
};
const updateCartSchema = {
  supermarketId: supermarketIdSchema,
  price: priceSchema,
  status: statusSchema,
  quantity: numberSchema,
};
const filterSchema = {
  id: cartIdSchema,
  status: statusSchema,
  order: joi.string().min(3).max(4),
  page: numberSchema,
  limit: numberSchema,
};

module.exports = {
  cartIdSchema: cartIdSchema.required(),
  createCartSchema,
  updateCartSchema,
  filterSchema
};
