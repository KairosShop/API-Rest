const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const { userIdSchema, createUserSchema, updateUserSchema } = require('../../../utils/schemas/users');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/', get);
router.get('/:idUser',validationHandler({ idUser: userIdSchema }, 'params'), getById);
router.post('/',validationHandler(createUserSchema), createUser);
router.put('/:idUser',validationHandler({ idUser: userIdSchema }, 'params'), validationHandler(updateUserSchema), updateUser);
router.delete('/:idUser',validationHandler({ idUser: userIdSchema }, 'params'), removeUser);

async function get(req, res, next) {
  let { email= '', firstName= '', lastName= '', rol= '', verified= '', active= '' } = req.query;
  try {
    const users = await Controller.getUsers({email, firstName, lastName, rol, verified, active});
    responses.success(req, res, users, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idUser } = req.params;
  try {
    const user = await Controller.getUser(idUser);
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
