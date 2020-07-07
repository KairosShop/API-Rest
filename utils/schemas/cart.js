const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  allSchema,
} = require('./general');

let statusSchema = joi.string().min(5);
const priceSchema = joi.number().min(1).max(99999999999);
const numberSchema =  joi.number().integer().min(1);

const createCartSchema = {
  productId: idSchema.required(),
  quantity: numberSchema
};
const updateCartSchema = {
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
  createCartSchema,
  updateCartSchema,
  filterSchema
};
