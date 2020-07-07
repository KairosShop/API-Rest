const joi = require('@hapi/joi');

let cartIdSchema = joi.number().integer().min(1).max(99999999999);
let statusSchema = joi.string().min(5);
let supermarketIdSchema = cartIdSchema;
let productIdSchema = cartIdSchema;
const priceSchema = joi.number().min(1).max(99999999999);
const numberSchema =  joi.number().integer().min(1);

const createCartSchema = {
  id_product: productIdSchema.required(),
  quantity: numberSchema,
  id_user: cartIdSchema
};
const updateCartSchema = {
  id_supermarket: supermarketIdSchema,
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
