const joi = require('@hapi/joi');
const {
  urlImageSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  activeSchema,
} = require('./general');

const productIdSchema = joi
  .number()
  .integer()
  .min(1)
  .max(99999999999)
  .required();
const titleSchema = joi.string().min(2).max(100);
const descriptionSchema = joi.string().max(500);
const quantitySchema = joi.number().min(0).max(99999);
const measureIdSchema = joi.number().integer().min(1).max(99999999999);
const categoryIdSchema = joi.number().integer().min(1).max(99999999999);
const subcategoryIdSchema = joi.number().integer().min(1).max(99999999999);

const createProductSchema = {
  title: titleSchema.required(),
  description: descriptionSchema.required(),
  urlImage: urlImageSchema.required(),
  quantity: quantitySchema.required(),
  measureId: measureIdSchema.required(),
  categoryId: categoryIdSchema.required(),
  subcategoryId: subcategoryIdSchema.required(),
  active: activeSchema,
};
const updateProductSchema = {
  title: titleSchema,
  description: descriptionSchema,
  urlImage: urlImageSchema,
  quantity: quantitySchema,
  measureId: measureIdSchema,
  categoryId: categoryIdSchema,
  subcategoryId: subcategoryIdSchema,
  active: activeSchema,
};
const filterSchema = {
  q: descriptionSchema,
  title: titleSchema,
  description: joi.string().min(2),
  quantity: quantitySchema,
  measureId: measureIdSchema,
  categoryId: categoryIdSchema,
  subcategoryId: subcategoryIdSchema,
  active: activeSchema,
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
};
module.exports = {
  productIdSchema: productIdSchema,
  createProductSchema,
  updateProductSchema,
  filterSchema,
};
