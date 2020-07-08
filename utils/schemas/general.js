const joi = require('@hapi/joi');

const idSchema = joi.number().integer().min(1).max(99999999999);
const orderSchema = joi.string().uppercase().valid('ASC', 'DESC');
const urlImageSchema = joi.string().uri().trim();
const pageSchema = joi.number().integer().min(1);
const limitSchema = joi.number().integer().min(1);
const activeSchema = joi.boolean();
const allSchema = joi.boolean();

module.exports = {
  idSchema,
  orderSchema,
  urlImageSchema,
  pageSchema,
  limitSchema,
  activeSchema,
  allSchema
};
