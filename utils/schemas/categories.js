const joi = require('@hapi/joi');

const categoryIdSchema = joi.number().min(1).max(99999999999);
const categorySchema = joi.string().min(3).max(50).required();
const urlImageSchema = joi.string().uri().trim();
const activeSchema = joi.number().min(0).max(1);

const createCategorySchema = {
  category: categorySchema,
  urlImage: urlImageSchema,
  active: activeSchema,
};
const updateCategorySchema = {
  category: categorySchema,
  urlImage: urlImageSchema,
  active: activeSchema,
};

module.exports = {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
};
