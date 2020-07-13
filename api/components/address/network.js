const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const decodeToken = require('../../../utils/auth/strategies/decodeToken');
const passport = require('passport');
const router = express.Router();

const {
  addressIdSchema,
  createAddressSchema,
  updateAddressSchema,
  filterSchema,
} = require('../../../utils/schemas/address');
const validationHandler = require('../../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../../utils/middleware/scopesValidationHandler');

require('../../../utils/auth/strategies/jwt');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:address']),
  validationHandler(filterSchema, 'query'),
  get
);
router.get(
  '/:idAddress',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:address']),
  validationHandler({ idAddress: addressIdSchema }, 'params'),
  getById
);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['create:address']),
  validationHandler(createAddressSchema),
  createAddress
);
router.put(
  '/:idAddress',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['update:address']),
  validationHandler({ idAddress: addressIdSchema }, 'params'),
  validationHandler(updateAddressSchema),
  updateAddress
);
router.delete(
  '/:idAddress',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['delete:address']),
  validationHandler({ idAddress: addressIdSchema }, 'params'),
  removeAddress
);
async function get(req, res, next) {
  const decoded = decodeToken(req.headers.authorization);
  const userId = decoded.sub;
  let { address = '', order = 'asc', page = '1', limit = '15' } = req.query;
  try {
    const resultAddress = await Controller.getAddress({
      address,
      userId,
      order,
      page,
      limit,
    });
    responses.success(req, res, resultAddress, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idAddress: id } = req.params;
  const decoded = decodeToken(req.headers.authorization);
  const userId = decoded.sub;
  try {
    const address = await Controller.getOne({ id, userId });
    responses.success(req, res, address, 200);
  } catch (error) {
    next(error);
  }
}

async function createAddress(req, res, next) {
  const { body: address } = req;
  const decoded = decodeToken(req.headers.authorization);
  address.userId = decoded.sub;
  try {
    const createdAddress = await Controller.createAddress(address);
    responses.success(req, res, createdAddress, 201);
  } catch (error) {
    next(error);
  }
}

async function updateAddress(req, res, next) {
  const { idAddress } = req.params;
  const { body: address } = req;
  try {
    const updatedAddress = await Controller.updateAddress(address, idAddress);
    responses.success(req, res, updatedAddress, 200);
  } catch (error) {
    next(error);
  }
}

async function removeAddress(req, res, next) {
  const { idAddress } = req.params;
  try {
    const deletedAddress = await Controller.removeAddress(idAddress);
    responses.success(req, res, deletedAddress, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
