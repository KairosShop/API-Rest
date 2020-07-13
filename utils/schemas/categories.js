const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  urlImageSchema,
  activeSchema,
  allSchema,
} = require('./general');

const categorySchema = joi.string().min(3).max(30);

const createCategorySchema = {
  title: categorySchema,
  urlImage: urlImageSchema,
  active: activeSchema,
};
const updateCategorySchema = {
  title: categorySchema,
  urlImage: urlImageSchema,
  active: activeSchema,
};
const filterSchema = {
  title: categorySchema,
  active: activeSchema,
  order: orderSchema,
  page: limitSchema,
  limit: pageSchema,
  all: allSchema,
};
module.exports = {
  categoryIdSchema: idSchema.required(),
  createCategorySchema,
  updateCategorySchema,
  filterSchema,
};
