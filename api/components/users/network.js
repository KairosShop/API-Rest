const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const passport = require('passport');
const router = express.Router();

const {
  userIdSchema,
  createUserSchema,
  updateUserSchema,
  filterSchema,
} = require('../../../utils/schemas/users');
const validationHandler = require('../../../utils/middleware/validationHandler');
const scopesValidationHandler = require('../../../utils/middleware/scopesValidationHandler');

require('../../../utils/auth/strategies/jwt');


router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:users']),
  validationHandler(filterSchema, 'query'),
  get
);
router.get(
  '/:idUser',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:users']),
  validationHandler({ idUser: userIdSchema }, 'params'),
  getById
);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['create:users']),
  validationHandler(createUserSchema),
  createUser
);
router.put(
  '/:idUser',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['update:users']),
  validationHandler(updateUserSchema),
  updateUser
);

router.delete(
  '/:idUser',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['delete:users']),
  validationHandler({ idUser: userIdSchema }, 'params'),
  removeUser
);

async function get(req, res, next) {
  let {
    email = '',
    firstName = '',
    lastName = '',
    rol = '',
    verified = true,
    active = true,
    order = 'ASC',
    page = 1,
    limit = 20,
  } = req.query;

  try {
    const users = await Controller.getUsers({
      email,
      firstName,
      lastName,
      rol,
      verified,
      active,
      order,
      page,
      limit
    });
    responses.success(req, res, users, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idUser } = req.params;
  try {
    const user = await Controller.getUserById(idUser);
    responses.success(req, res, user, 200);
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  const { body: user } = req;
  try {
    const createdUser = await Controller.createUser(user);
    responses.success(req, res, createdUser, 201);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { idUser } = req.params;
  const { body: user } = req;

  try {
    const updatedUser = await Controller.updateUser(user, idUser);
    responses.success(req, res, updatedUser, 200);
  } catch (error) {
    next(error);
  }
}

async function removeUser(req, res, next) {
  const { idUser } = req.params;
  try {
    const deletedUser = await Controller.removeUser(idUser);
    responses.success(req, res, deletedUser, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
