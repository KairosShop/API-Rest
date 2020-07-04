const joi = require('@hapi/joi');

const supermarketIdSchema = joi.number().integer().min(1).max(99999999999);
const supermarketSchema = joi.string().min(2).max(50);
const addressSchema = joi.string().min(5);
const urlImageSchema = joi.string().uri().trim();
const latitudeSchema = joi.string().min(8).max(13).pattern(new RegExp('^(-?\\d+(\\.\\d+)?)$'));
const longitudeSchema = latitudeSchema;
const idUserSchema = joi.number().integer().min(1).max(99999999999);
const activeSchema = joi.number().integer().min(0).max(1);

const createSupermarketSchema = {
  supermarket: supermarketSchema.required(),
  address: addressSchema.required(),
  url_logo: urlImageSchema.required(),
  latitude: latitudeSchema.required(),
  longitude: longitudeSchema.required(),
  id_user: idUserSchema.required(),
  active: activeSchema,
};
const updateSupermarketSchema = {
  supermarket: supermarketSchema,
  address: addressSchema,
  url_logo: urlImageSchema,
  latitude: latitudeSchema,
  longitude: longitudeSchema,
  id_user: idUserSchema,
  active: activeSchema,
};
const filterSchema = {
  supermarket: supermarketSchema,
  address: joi.string().min(2),
  id_user: idUserSchema,
  active: activeSchema,
  order: joi.string().min(3).max(4),
  page: joi.number().integer().min(1),
  limit: joi.number().integer().min(1),
};
module.exports = {
  supermarketIdSchema,
  createSupermarketSchema,
  updateSupermarketSchema,
  filterSchema
};
