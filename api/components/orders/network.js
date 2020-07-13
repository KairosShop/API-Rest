const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const passport = require('passport');
const decodeToken = require('../../../utils/auth/strategies/decodeToken');
const router = express.Router();

const {
  orderIdSchema,
  createOrderSchema,
  statusOrderSchema,
  filterSchema,
} = require('../../../utils/schemas/orders');
const validationHandler = require('../../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../../utils/middleware/scopesValidationHandler');

require('../../../utils/auth/strategies/jwt');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:orders']),
  validationHandler(filterSchema, 'query'),
  get
);
router.get(
  '/:idOrder',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:orders']),
  validationHandler({ idOrder: orderIdSchema }, 'params'),
  getOrder
);
router.get(
  '/print/:idOrder',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:orders']),
  validationHandler({ idOrder: orderIdSchema }, 'params'),
  getPdf
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['create:orders']),
  validationHandler(createOrderSchema),
  createOrder
);
router.put(
  '/:idOrder',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['update:orders']),
  validationHandler({ idOrder: orderIdSchema }, 'params'),
  validationHandler(statusOrderSchema),
  updateOrder
);
async function get(req, res, next) {
  let { userId = '', status = '' } = req.query;

  const decoded = decodeToken(req.headers.authorization);
  if (decoded.rol !== 'ADMIN') {
    userId = decoded.sub;
  }
  try {
    const orders = await Controller.getOrders({ userId, status });
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
async function getPdf(req, res, next) {
  const { idOrder: id } = req.params;
  try {
    const pdf = await Controller.createPdf({ id });
    responses.success(req, res, pdf, 200);
  } catch (error) {
    next(error);
  }
}

async function createOrder(req, res, next) {
  const { body: order } = req;
  const decoded = decodeToken(req.headers.authorization);
  order.userId = decoded.sub;

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
