
const joi = require('@hapi/joi');

const subcategoryIdSchema = joi.number().min(1).max(99999999999);
const subcategorySchema = joi.string().min(3).max(50).required();
const categoryIdSchema = subcategoryIdSchema;
const urlImageSchema = joi.string().max(255);
const activeSchema = joi.number().min(0).max(1);

const createSubcategorySchema = {
  subcategory: subcategorySchema,
  category_id: categoryIdSchema.required(),
  url_image: urlImageSchema.required(),
  active: activeSchema,
};
const updateSubcategorySchema = {
  subcategory: subcategorySchema,
  category_id:categoryIdSchema.required(),
  url_image: urlImageSchema,
  active: activeSchema,
};

module.exports = {
  subcategoryIdSchema,
  categoryIdSchema,
  createSubcategorySchema,
  updateSubcategorySchema,
};
