
const joi = require('@hapi/joi');
const {urlImageSchema, activeSchema} = require('./general')

const subcategoryIdSchema = joi.number().min(1).max(99999999999);
const subcategorySchema = joi.string().min(3).max(50)
const categoryIdSchema = subcategoryIdSchema;

const createSubcategorySchema = {
  title: subcategorySchema.required(),
  categoryId: categoryIdSchema.required(),
  urlImage: urlImageSchema,
  active: activeSchema,
};
const updateSubcategorySchema = {
  title: subcategorySchema,
  categoryId:categoryIdSchema,
  urlImage: urlImageSchema,
  active: activeSchema,
};

module.exports = {
  subcategoryIdSchema,
  categoryIdSchema,
  createSubcategorySchema,
  updateSubcategorySchema,
};
