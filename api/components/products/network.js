const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  productIdSchema,
  createProductSchema,
  updateProductSchema,
  filterSchema
} = require('../../../utils/schemas/products');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/',validationHandler(filterSchema, 'query'), get);
router.get(
  '/:idProduct',
  validationHandler({ idProduct: productIdSchema }, 'params'),
  getById
);
router.post('/', validationHandler(createProductSchema), createProduct);
router.put(
  '/:idProduct',
  validationHandler({ idProduct: productIdSchema }, 'params'),
  validationHandler(updateProductSchema),
  updateProduct
);
router.delete(
  '/:idProduct',
  validationHandler({ idProduct: productIdSchema }, 'params'),
  removeProduct
);

async function get(req, res, next) {
  let {
    title = '',
    description = '',
    id_category = '',
    id_subcategory = '',
    quantity = '',
    id_measure = '',
    active = '',
    order = 'asc',
    page = '1',
    limit = '5',
  } = req.query;
  try {
    const products = await Controller.getProducts({
      title,
      description,
      id_category,
      id_subcategory,
      quantity,
      id_measure,
      active,
      order,
      page,
      limit
    });
    responses.success(req, res, products, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idProduct } = req.params;
  try {
    const product = await Controller.getProduct(idProduct);
    responses.success(req, res, product, 200);
  } catch (error) {
    next(error);
  }
}

async function createProduct(req, res, next) {
  const { body: product } = req;
  try {
    const createdProduct = await Controller.createProduct(product);
    responses.success(req, res, createdProduct, 201);
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const { idProduct } = req.params;
  const { body: product } = req;
  try {
    const updatedProduct = await Controller.updateProduct(product, idProduct);
    responses.success(req, res, updatedProduct, 200);
  } catch (error) {
    next(error);
  }
}

async function removeProduct(req, res, next) {
  const { idProduct } = req.params;
  try {
    const deletedProduct = await Controller.removeProduct(idProduct);
    responses.success(req, res, deletedProduct, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
