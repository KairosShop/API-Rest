
const joi = require('@hapi/joi');

const userIdSchema = joi.number().min(1).max(99999999999);
const urlImageSchema = joi.string().max(255);
const emailSchema = joi.string().min(5).max(50).pattern(new RegExp('^()$'));
const firstNameSchema = joi.string().min(2).max(50);
const lastNameSchema = joi.string().min(2).max(50);
const rolSchema = joi.string().min(4).max(15);
const activeSchema = joi.number().min(0).max(1);
const passwordSchema = joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'));

const createUserSchema = {
  email: emailSchema.required(),
  firsName: firstNameSchema.required(),
  lastName: lastNameSchema.required(),
  rol: rolSchema.required(),
  password: passwordSchema.required()
};
const updateUserSchema = {
  url_image: urlImageSchema,
  email: emailSchema,
  firsName: firstNameSchema,
  lastName: lastNameSchema,
  rol: rolSchema,
  active: activeSchema,
};

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
};
