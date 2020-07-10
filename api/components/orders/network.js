const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  orderIdSchema,
  createOrderSchema,
  statusOrderSchema,
  filterSchema
} = require('../../../utils/schemas/orders');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/',validationHandler(filterSchema, 'query'), get);
router.get(
  '/:idOrder',
  validationHandler({ idOrder: orderIdSchema }, 'params'),
  getOrder
);

router.post('/', validationHandler(createOrderSchema), createOrder);
router.put(
  '/:idOrder',
  validationHandler({ idOrder: orderIdSchema }, 'params'),
  validationHandler(statusOrderSchema),
  updateOrder
);
async function get(req, res, next) {
  const userId = 4,
  status = 'in process';
  try {
    const orders = await Controller.getOrders({userId, status});
    responses.success(req, res, orders, 200);
  } catch (error) {
    next(error);
  }
}

async function getOrder(req, res, next) {
  const { idOrder: id } = req.params;
  try {
    const order = await Controller.getOrder({ id });
    responses.success(req, res, order, 200);
  } catch (error) {
    next(error);
  }
}

async function createOrder(req, res, next) {
  const { body: order } = req;
  try {
    const createOrder = await Controller.createOrder(order);
    responses.success(req, res, createOrder, 201);
  } catch (error) {
    next(error);
  }
}

async function updateOrder(req, res, next) {
  const { idOrder } = req.params;
  const { body: order } = req;
  try {
    const updatedOrder = await Controller.updateOrder(order, idOrder);
    responses.success(req, res, updatedOrder, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
