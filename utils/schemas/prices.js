const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  allSchema,
  activeSchema
} = require('./general');

const priceSchema = joi.number().min(1).max(99999999999);

const createPriceSchema = {
  productId: idSchema,
  supermarketId: idSchema,
  price: priceSchema.required(),
  active: activeSchema,
};
const updatePriceSchema = {
  price: priceSchema,
  active: activeSchema,
};
const filterSchema = {
  productId: idSchema,
  supermarketId: idSchema,
  price: priceSchema,
  active: activeSchema,
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
  all: allSchema
};

module.exports = {
  priceIdSchema: idSchema.required(),
  createPriceSchema,
  updatePriceSchema,
  filterSchema,
  productIdSchema: idSchema.required(),
  supermarketIdSchema: idSchema.required()
};
