const joi = require('@hapi/joi');

const productIdSchema = joi.number().integer().min(1).max(99999999999);
const titleSchema = joi.string().min(2).max(50).required();
const descripcionSchema = joi.string().min(10).required();
const urlImageSchema = joi.string().uri().trim();
const quantitySchema = joi.number().min(0).max(99999).required();
const measureIdSchema = joi.number().integer().min(1).max(99999999999).required();
const categoryIdSchema = joi.number().integer().min(1).max(99999999999).required();
const subcategoryIdSchema = joi.number().integer().min(1).max(99999999999).required();
const activeSchema = joi.number().integer().min(0).max(1);

const createProductSchema = {
  title: titleSchema,
  descripcion: descripcionSchema,
  url_image: urlImageSchema.required(),
  quantity: quantitySchema,
  measure_id: measureIdSchema,
  category_id: categoryIdSchema,
  subcategory_id: subcategoryIdSchema,
  active: activeSchema,
};
const updateProductSchema = {
  title: titleSchema,
  descripcion: descripcionSchema,
  url_image: urlImageSchema,
  quantity: quantitySchema,
  measure_id: measureIdSchema,
  category_id: categoryIdSchema,
  subcategory_id: subcategoryIdSchema,
  active: activeSchema,
};

module.exports = {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
};
