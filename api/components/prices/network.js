const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();
const {
  priceIdSchema,
  productIdSchema,
  supermarketIdSchema,
  createPriceSchema,
  updatePriceSchema,
  filterSchema,
} = require('../../../utils/schemas/prices');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get(
  '/product/:idProduct',
  validationHandler({ idProduct: productIdSchema }, 'params'),
  validationHandler(filterSchema, 'query'),
  get
);
router.get(
  '/supermarket/:idSupermarket',
  validationHandler({ idSupermarket: supermarketIdSchema }, 'params'),
  validationHandler(filterSchema, 'query'),
  get
);
router.post(
  '/',
  validationHandler(createPriceSchema),
  createPrice
);
router.put(
  '/:idPrice',
  validationHandler(
    { idPrice: priceIdSchema },
    'params'
  ),
  validationHandler(updatePriceSchema),
  updatePrice
);

async function get(req, res, next) {
  let {
    active = '',
    price = '',
    id_product = '',
    id_supermarket = '',
    order = 'asc',
    page = '1',
    limit = '20',
  } = req.query;

  const { idProduct, idSupermarket } = req.params;

  id_product = idProduct ? idProduct: id_product;
  id_supermarket = idSupermarket ? idSupermarket: id_supermarket;

  try {
    const prices = await Controller.getPrices({
      active,
      price,
      id_product,
      id_supermarket,
      order,
      page,
      limit,
    });
    responses.success(req, res, prices, 200);
  } catch (error) {
    next(error);
  }
}

async function createPrice(req, res, next) {
  const { body: Price } = req;
  try {
    const created = await Controller.createPrice(Price);
    responses.success(req, res, created, 201);
  } catch (error) {
    next(error);
  }
}

async function updatePrice(req, res, next) {
  const { idPrice } = req.params;
  const { body: Price } = req;
  try {
    const subcategory = await Controller.updatePrice(
      Price,
      idPrice
    );
    responses.success(req, res, subcategory, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
