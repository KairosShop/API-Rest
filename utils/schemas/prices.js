const joi = require('@hapi/joi');

const priceIdSchema = joi.number().integer().min(1).max(99999999999);
const productIdSchema = priceIdSchema;
const supermarketIdSchema = priceIdSchema;
const priceSchema = joi.number().min(1).max(99999999999);
const activeSchema = joi.number().integer().min(0).max(1);
const pageSchema =  joi.number().integer().min(1);

const createPriceSchema = {
  id_product: productIdSchema,
  id_supermarket: supermarketIdSchema,
  price: priceSchema.required(),
  active: activeSchema.required(),
};
const updatePriceSchema = {
  price: priceSchema,
  active: activeSchema,
};
const filterSchema = {
  id_product: productIdSchema,
  id_supermarket: supermarketIdSchema,
  price: priceSchema,
  active: activeSchema,
  order: joi.string().min(3).max(4),
  page: pageSchema,
  limit: pageSchema,
};

module.exports = {
  priceIdSchema: priceIdSchema.required(),
  createPriceSchema,
  updatePriceSchema,
  filterSchema,
  productIdSchema: productIdSchema.require(),
  supermarketIdSchema: supermarketIdSchema.require()
};
