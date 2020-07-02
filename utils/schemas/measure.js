const joi = require('@hapi/joi');

const measureIdSchema = joi.number().min(1).max(99999999999);
const measureSchema = joi.string().min(3).max(50).required();

module.exports = {
  measureIdSchema,
  measureSchema
};
