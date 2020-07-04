const joi = require('@hapi/joi');

const productIdSchema = joi.number().integer().min(1).max(99999999999);
const titleSchema = joi.string().min(2).max(50);
const descriptionSchema = joi.string().min(10);
const urlImageSchema = joi.string().uri().trim();
const quantitySchema = joi.number().min(0).max(99999);
const measureIdSchema = joi.number().integer().min(1).max(99999999999);
const categoryIdSchema = joi.number().integer().min(1).max(99999999999);
const subcategoryIdSchema = joi.number().integer().min(1).max(99999999999);
const activeSchema = joi.number().integer().min(0).max(1);

const createProductSchema = {
  title: titleSchema.required(),
  description: descriptionSchema.required(),
  url_image: urlImageSchema.required(),
  quantity: quantitySchema.required(),
  measure_id: measureIdSchema.required(),
  category_id: categoryIdSchema.required(),
  subcategory_id: subcategoryIdSchema.required(),
  active: activeSchema,
};
const updateProductSchema = {
  title: titleSchema.required(),
  description: descriptionSchema.required(),
  url_image: urlImageSchema,
  quantity: quantitySchema.required(),
  measure_id: measureIdSchema.required(),
  category_id: categoryIdSchema.required(),
  subcategory_id: subcategoryIdSchema.required(),
  active: activeSchema,
};
const filterSchema = {
  title: titleSchema,
  description: joi.string().min(2),
  quantity: quantitySchema,
  measure_id: measureIdSchema,
  category_id: categoryIdSchema,
  subcategory_id: subcategoryIdSchema,
  active: activeSchema,
  order: joi.string().min(3).max(4),
  page: joi.number().integer().min(1),
  limit: joi.number().integer().min(1),
};
module.exports = {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
  filterSchema
};
