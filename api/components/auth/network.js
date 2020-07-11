const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const validationHandler = require('../../../utils/middleware/validationHandler');

require('../../../utils/auth/strategies/basic');

const { createUserSchema } = require('../../../utils/schemas/users');
const permisionsScope = require('../../../utils/auth/strategies/pemissions');
const { jwt: jwtSecret } = require('../../../config/index');

router.post('/sign-in', signIn);
router.post('/sign-up', validationHandler(createUserSchema), signUp);

async function signIn(req, res, next) {
  passport.authenticate('basic', async function (error, user) {
    try {
      if (error || !user || typeof user !== 'object') {
        next(boom.unauthorized());
      }
      req.login(user, { session: false }, async function (error) {

        if (error) {
          next(error);
        }

        if (!permisionsScope) {
          next(boom.unauthorized());
        }
        const { id, email, rol, firstName, lastName } = user;
        let scopes;
        switch (user.rol) {
          case 'ADMIN':
            scopes = permisionsScope.admin;
            break;
          case 'SUPER MARKET':
            scopes = permisionsScope.supermarket;
            break;
          case 'CUSTOMER':
            scopes = permisionsScope.customer;
            break;
          default:
            scopes = [];
            break;
        }

        const payload = {
          sub: id,
          email,
          rol,
          scopes: scopes,
        };

        const token = jwt.sign(payload, jwtSecret.secret, {
          expiresIn: '15m',
        });

        let respose = { token, user: { id, email, firstName, lastName } };
        responses.success(req, res, respose, 200);
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
}

async function signUp(req, res, next) {
  const { body: user } = req;
  try {
    const created = await Controller.createUser(user);
    responses.success(req, res, created, 201);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
