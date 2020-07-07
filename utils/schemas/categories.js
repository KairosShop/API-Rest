const joi = require('@hapi/joi');
const {
  orderSchema,
  pageSchema,
  limitSchema,
  urlImageSchema,
  activeSchema,
} = require('./general');

const categoryIdSchema = joi.number().min(1).max(99999999999);
const categorySchema = joi.string().min(3).max(30);
const allSchema = joi.boolean();

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
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
  filterSchema,
};
