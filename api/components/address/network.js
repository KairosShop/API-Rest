const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  addressIdSchema,
  createAddressSchema,
  updateAddressSchema,
  filterSchema
} = require('../../../utils/schemas/address');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/',validationHandler(filterSchema, 'query'), get);
router.get(
  '/:idAddress',
  validationHandler({ idAddress: addressIdSchema }, 'params'),
  getById
);
router.post('/', validationHandler(createAddressSchema), createAddress);
router.put(
  '/:idAddress',
  validationHandler({ idAddress: addressIdSchema }, 'params'),
  validationHandler(updateAddressSchema),
  updateAddress
);
router.delete(
  '/:idAddress',
  validationHandler({ idAddress: addressIdSchema }, 'params'),
  removeAddress
);
async function get(req, res, next) {
  let {
    address = '',
    id_user = '3',
    order = 'asc',
    page = '1',
    limit = '15',
  } = req.query;
  try {
    const resultAddress = await Controller.getAddress({
      address,
      id_user,
      order,
      page,
      limit
    });
    responses.success(req, res, resultAddress, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idAddress: id } = req.params;
  const id_user = 3;
  try {
    const address = await Controller.getAddress({ id, id_user });
    responses.success(req, res, address, 200);
  } catch (error) {
    next(error);
  }
}

async function createAddress(req, res, next) {
  const { body: address } = req;
  address.id_user = 3;
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
