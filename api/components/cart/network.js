const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  cartIdSchema,
  productIdSchema,
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
  'product/:idProduct',
  validationHandler({ idProduct: productIdSchema }, 'params'),
  removeProduct
);
async function get(req, res, next) {
  let {
    id = '',
    status= '',
    userId = '',
    order = 'asc',
    page = '1',
    limit = '15',
    all = false,
  } = req.query;
  try {
    const carts = await Controller.getCarts({
      id,
      status,
      userId,
      order,
      page,
      limit,
      all
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
  cart.userId = 3;
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

async function removeProduct(req, res, next) {
  const { idProduct } = req.params;
  try {
    const deletedProduct = await Controller.deleteProduct({ productId: idProduct });
    responses.success(req, res, deletedProduct, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
