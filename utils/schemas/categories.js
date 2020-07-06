const joi = require('@hapi/joi');
const {
  orderSchema,
  pageSchema,
  limitSchema,
  urlImageSchema,
} = require('./general');

const categoryIdSchema = joi.number().min(1).max(99999999999);
const categorySchema = joi.string().min(3).max(30);
const activeSchema = joi.boolean();
const allSchema = joi.boolean();

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
const filterSchema = {
  category: categorySchema,
  active: activeSchema,
  order: orderSchema,
  page: limitSchema,
  limit: pageSchema,
  all: allSchema,
};
module.exports = {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
  filterSchema,
};
