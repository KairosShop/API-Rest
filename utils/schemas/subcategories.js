
const joi = require('@hapi/joi');
const { idSchema, urlImageSchema, activeSchema, orderSchema, limitSchema, pageSchema, allSchema} = require('./general')

const subcategorySchema = joi.string().min(3).max(50)

const createSubcategorySchema = {
  title: subcategorySchema.required(),
  categoryId: idSchema.required(),
  urlImage: urlImageSchema,
  active: activeSchema,
};
const updateSubcategorySchema = {
  title: subcategorySchema,
  categoryId:idSchema,
  urlImage: urlImageSchema,
  active: activeSchema,
};
const filterSchema = {
  title: subcategorySchema,
  active: activeSchema,
  order: orderSchema,
  page: limitSchema,
  limit: pageSchema,
  all: allSchema,
};
module.exports = {
  subcategoryIdSchema: idSchema,
  categoryIdSchema: idSchema,
  createSubcategorySchema,
  updateSubcategorySchema,
  filterSchema,
};
