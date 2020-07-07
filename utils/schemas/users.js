const joi = require('@hapi/joi');

const userIdSchema = joi.number().min(1).max(99999999999);
const urlImageSchema = joi.string().uri().trim();
const emailSchema = joi.string().min(5).max(50).email();
const firstNameSchema = joi.string().min(2).max(50);
const lastNameSchema = joi.string().min(2).max(50);
const rolSchema = joi.string().min(4).max(15);
const activeSchema = joi.number().min(0).max(1);
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

module.exports = {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
};
