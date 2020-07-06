const joi = require('@hapi/joi');

const orderSchema = joi.string().uppercase().valid('ASC', 'DESC');
const urlImageSchema = joi.string().uri().trim();
const pageSchema = joi.number().integer().min(1);
const limitSchema = joi.number().integer().min(1);

module.exports = {
  orderSchema,
  urlImageSchema,
  pageSchema,
  limitSchema,
};
