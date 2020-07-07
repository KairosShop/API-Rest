const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  cartIdSchema,
  createCartSchema,
  updateCartSchema,
  filterSchema
} = require('../../../utils/schemas/cart');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/',validationHandler(filterSchema, 'query'), get);
router.get(
  '/:idCart',
  validationHandler({ idCart: cartIdSchema }, 'params'),
  getById
);
router.post('/', validationHandler(createCartSchema), createCart);
router.put(
  '/:idCart',
  validationHandler({ idCart: cartIdSchema }, 'params'),
  validationHandler(updateCartSchema),
  updateCart
);
router.delete(
  '/:idCart',
  validationHandler({ idCart: cartIdSchema }, 'params'),
  removeCart
);
async function get(req, res, next) {
  let {
    id = '',
    status= '',
    id_user = '',
    order = 'asc',
    page = '1',
    limit = '15',
  } = req.query;
  try {
    const carts = await Controller.getCarts({
      id,
      status,
      id_user,
      order,
      page,
      limit
    });
    responses.success(req, res, carts, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idCart: id } = req.params;
  try {
    const cart = await Controller.getCart( id );
    responses.success(req, res, cart, 200);
  } catch (error) {
    next(error);
  }
}

async function createCart(req, res, next) {
  const { body: cart } = req;
  cart.id_user = 3;
  try {
    const createCart = await Controller.createCart(cart);
    responses.success(req, res, createCart, 201);
  } catch (error) {
    next(error);
  }
}

async function updateCart(req, res, next) {
  const { idCart } = req.params;
  const { body: cart } = req;
  try {
    const updatedCart = await Controller.updateCart(cart, idCart);
    responses.success(req, res, updatedCart, 200);
  } catch (error) {
    next(error);
  }
}

async function removeCart(req, res, next) {
  const { idCart } = req.params;
  try {
    const deletedCart = await Controller.removeCart(idCart);
    responses.success(req, res, deletedCart, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
