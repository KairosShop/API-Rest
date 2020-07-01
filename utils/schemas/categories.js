const joi = require('@hapi/joi');

const categoryIdSchema = joi.number().min(1).max(11);
const categorySchema = joi.string().alphanum().min(3).max(50).required();
const urlImageSchema = joi.string().alphanum().max(255);
const activeSchema = joi.number().integer().min(0).max(1);

const createCategorySchema = {
  category: categorySchema,
  url_image: urlImageSchema.required(),
  active: activeSchema,
};
const updateCategorySchema = {
  category: categorySchema,
  url_image: urlImageSchema,
  active: activeSchema,
};

module.exports = {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
};
