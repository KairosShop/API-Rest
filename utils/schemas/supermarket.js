const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  urlImageSchema,
  activeSchema,
} = require('./general');

const supermarketSchema = joi.string().min(2).max(50);
const addressSchema = joi.string().min(5);
const latitudeSchema = joi.string().min(8).max(13).pattern(new RegExp('^(-?\\d+(\\.\\d+)?)$'));
const longitudeSchema = latitudeSchema;

const createSupermarketSchema = {
  supermarket: idSchema.required(),
  address: addressSchema.required(),
  urlLogo: urlImageSchema.required(),
  latitude: latitudeSchema.required(),
  longitude: longitudeSchema.required(),
  active: activeSchema,
};
const updateSupermarketSchema = {
  supermarket: idSchema,
  address: addressSchema,
  urlLogo: urlImageSchema,
  latitude: latitudeSchema,
  longitude: longitudeSchema,
  active: activeSchema,
};
const filterSchema = {
  supermarket: supermarketSchema,
  address: joi.string().min(2),
  active: activeSchema,
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
};
module.exports = {
  supermarketIdSchema: idSchema,
  createSupermarketSchema,
  updateSupermarketSchema,
  filterSchema
};
