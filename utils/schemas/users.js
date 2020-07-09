const joi = require('@hapi/joi');
const {
  idSchema,
  orderSchema,
  pageSchema,
  limitSchema,
  urlImageSchema,
  activeSchema,
} = require('./general');

const emailSchema = joi.string().min(5).max(50).email();
const firstNameSchema = joi.string().min(2).max(50);
const lastNameSchema = joi.string().min(2).max(50);
const rolSchema = joi.string().uppercase().valid('CUSTOMER', 'SUPER MARKET', 'ADMIN');
const passwordSchema = joi.string().pattern(new RegExp('^[\\w$ _*+\\-\\+]{8,30}$'));

const createUserSchema = {
  email: emailSchema.required(),
  firstName: firstNameSchema.required(),
  lastName: lastNameSchema.required(),
  rol: rolSchema.required(),
  password: passwordSchema.required()
};
const updateUserSchema = {
  urlImage: urlImageSchema,
  email: emailSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  rol: rolSchema,
  active: activeSchema,
};
const filterSchema = {
  email: emailSchema,
  firstName: firstNameSchema,
  lastName: lastNameSchema,
  rol: rolSchema,
  active: activeSchema,
  order: orderSchema,
  page: pageSchema,
  limit: limitSchema,
};
module.exports = {
  userIdSchema: idSchema,
  createUserSchema,
  updateUserSchema,
  filterSchema
};
