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
  supermarket: supermarketSchema.required(),
  address: addressSchema.required(),
  urlImage: urlImageSchema.required(),
  latitude: latitudeSchema.required(),
  longitude: longitudeSchema.required(),
  active: activeSchema,
};
const updateSupermarketSchema = {
  supermarket: supermarketSchema,
  address: addressSchema,
  urlImage: urlImageSchema,
  latitude: latitudeSchema,
  longitude: longitudeSchema,
  active: activeSchema,
};
const filterSchema = {
  supermarket: supermarketSchema,
  address: joi.string().min(2),
  userId: idSchema,
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
