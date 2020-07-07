const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  urlImageSchema,
  pageSchema,
  limitSchema,
  activeSchema,
  allSchema,
} = require('./general');

const titleSchema = joi.string().min(2).max(50);
const descriptionSchema = joi.string().min(2);
const quantitySchema = joi.number().min(0).max(99999);


const createProductSchema = {
  title: titleSchema.required(),
  description: descriptionSchema.required(),
  urlImage: urlImageSchema.required(),
  quantity: quantitySchema.required(),
  measureId: idSchema.required(),
  categoryId: idSchema.required(),
  subcategoryId: idSchema.required(),
  active: activeSchema,
};
const updateProductSchema = {
  title: titleSchema,
  description: descriptionSchema,
  urlImage: urlImageSchema,
  quantity: quantitySchema,
  measureId: idSchema,
  categoryId: idSchema,
  subcategoryId: idSchema,
  active: activeSchema,
};
const filterSchema = {
  q: descriptionSchema,
  title: titleSchema,
  description: joi.string().min(2),
  quantity: quantitySchema,
  measureId: idSchema,
  categoryId: idSchema,
  subcategoryId: idSchema,
  active: activeSchema,
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
  all: allSchema,
};
module.exports = {
  productIdSchema: idSchema.required(),
  createProductSchema,
  updateProductSchema,
  filterSchema,
};
