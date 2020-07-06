const joi = require('@hapi/joi');

const categoryIdSchema = joi.number().min(1).max(99999999999);
const titleSchema = joi.string().min(3).max(50);
const urlImageSchema = joi.string().uri().trim();
const activeSchema = joi.number().min(0).max(1);
const pageSchema =  joi.number().integer().min(1);

const createCategorySchema = {
  title: titleSchema.required(),
  url_image: urlImageSchema.required(),
  active: activeSchema,
};
const updateCategorySchema = {
  title: titleSchema,
  url_image: urlImageSchema,
  active: activeSchema,
};
const filterSchema = {
  title: titleSchema,
  active: activeSchema,
  order: joi.string().min(3).max(4),
  page: pageSchema,
  limit: pageSchema,
};
module.exports = {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
  filterSchema,
};
