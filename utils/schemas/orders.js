const joi = require('@hapi/joi');
const { idSchema } = require('./general');

const statusSchema = joi
  .string()
  .uppercase()
  .valid('SUCCESSFULL', 'IN PROCESS', 'CANCEL');
const priceSchema = joi.number().min(1).max(99999999999);
const numberSchema = joi.number().integer().min(1);

const orderSchema = joi.object().keys({
  supermarketId: idSchema.required(),
  productId: idSchema.required(),
  quantity: numberSchema.required(),
  price: priceSchema.required(),
});
const createOrderSchema = {
  total: priceSchema.required(),
  products: joi.array().items(orderSchema),
};
const statusOrderSchema = {
  status: statusSchema,
  userId: idSchema
};
const filterSchema = {
  status: statusSchema,
  userId: idSchema
};

module.exports = {
  orderIdSchema: idSchema.required(),
  createOrderSchema,
  statusOrderSchema,
  filterSchema,
};
