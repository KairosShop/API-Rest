const joi = require('@hapi/joi');
const { idSchema, orderSchema, limitSchema, allSchema, pageSchema } = require('./general');

const addressSchema = joi.string().min(5);
const latitudeSchema = joi
  .string()
  .min(8)
  .max(13)
  .pattern(new RegExp('^(-?\\d+(\\.\\d+)?)$'));
const longitudeSchema = latitudeSchema;

const createAddressSchema = {
  address: addressSchema.required(),
  latitude: latitudeSchema.required(),
  longitude: longitudeSchema.required(),
};
const updateAddressSchema = {
  address: addressSchema,
  latitude: latitudeSchema,
  longitude: longitudeSchema,
};
const filterSchema = {
  address: joi.string().min(2),
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
  all: allSchema,
};
module.exports = {
  addressIdSchema: idSchema.required(),
  createAddressSchema,
  updateAddressSchema,
  filterSchema,
};
