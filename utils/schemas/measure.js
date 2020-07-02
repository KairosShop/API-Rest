const joi = require('@hapi/joi');

const measureIdSchema = joi.number().min(1).max(99999999999);

module.exports = {
  measureIdSchema,
};
