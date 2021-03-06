const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const decodeToken = require('../../../utils/auth/strategies/decodeToken');
const passport = require('passport');
const router = express.Router();

const {
  supermarketIdSchema,
  createSupermarketSchema,
  updateSupermarketSchema,
  filterSchema
} = require('../../../utils/schemas/supermarket');
const validationHandler = require('../../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../../utils/middleware/scopesValidationHandler');

require('../../../utils/auth/strategies/jwt');

router.get('/',validationHandler(filterSchema, 'query'), get);

router.get(
  '/:idSupermarket',
  validationHandler({ idSupermarket: supermarketIdSchema }, 'params'),
  getById
);

router.post('/',
passport.authenticate('jwt', { session: false }),
validationHandler(createSupermarketSchema), createSupermarket);

router.put(
  '/:idSupermarket',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['update:supermarket']),
  validationHandler({ idSupermarket: supermarketIdSchema }, 'params'),
  validationHandler(updateSupermarketSchema),
  updateSupermarket
);

router.delete(
  '/:idSupermarket',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['delete:supermarket']),
  validationHandler({ idSupermarket: supermarketIdSchema }, 'params'),
  removeSupermarket
);

async function get(req, res, next) {
  let {
    supermarket = '',
    address = '',
    userId = '',
    active = '',
    order = 'asc',
    page = '1',
    limit = '3',
  } = req.query;
  try {
    const supermarkets = await Controller.getSupermarkets({
      supermarket,
      address,
      userId,
      active,
      order,
      page,
      limit
    });
    responses.success(req, res, supermarkets, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idSupermarket } = req.params;
  try {
    const supermarket = await Controller.getSupermarket(idSupermarket);
    responses.success(req, res, supermarket, 200);
  } catch (error) {
    next(error);
  }
}

async function createSupermarket(req, res, next) {
  const { body: supermarket } = req;

  const decoded = decodeToken(req.headers.authorization);
  supermarket.userId = decoded.sub;

  try {
    const createdSupermarket = await Controller.createSupermarket(supermarket);
    responses.success(req, res, createdSupermarket, 201);
  } catch (error) {
    next(error);
  }
}

async function updateSupermarket(req, res, next) {
  const { idSupermarket } = req.params;
  const { body: supermarket } = req;
  try {
    const updatedSupermarket = await Controller.updateSupermarket(supermarket, idSupermarket);
    responses.success(req, res, updatedSupermarket, 200);
  } catch (error) {
    next(error);
  }
}

async function removeSupermarket(req, res, next) {
  const { idSupermarket } = req.params;
  try {
    const deletedSupermarket = await Controller.removeSupermarket(idSupermarket);
    responses.success(req, res, deletedSupermarket, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
