const joi = require('@hapi/joi');

const addressIdSchema = joi.number().integer().min(1).max(99999999999);
const addressSchema = joi.string().min(5);
const latitudeSchema = joi.string().min(8).max(13).pattern(new RegExp('^(-?\\d+(\\.\\d+)?)$'));
const longitudeSchema = latitudeSchema;
const idUserSchema = joi.number().integer().min(1).max(99999999999);

const createAddressSchema = {
  address: addressSchema.required(),
  latitude: latitudeSchema.required(),
  longitude: longitudeSchema.required(),
  id_user: idUserSchema.required(),
};
const updateAddressSchema = {
  address: addressSchema,
  latitude: latitudeSchema,
  longitude: longitudeSchema,
  id_user: idUserSchema,
};
const filterSchema = {
  address: joi.string().min(2),
  id_user: idUserSchema,
  order: joi.string().min(3).max(4),
  page: joi.number().integer().min(1),
  limit: joi.number().integer().min(1),
};
module.exports = {
  addressIdSchema,
  createAddressSchema,
  updateAddressSchema,
  filterSchema
};
