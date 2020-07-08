const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const pemissionsScopes = require('./pemissions');
const usersController = require('../../../api/components/users/controller');

const { jwt } = require('../config/index');

passport.use(
  new Strategy(
    {
      secretOrKey: jwt.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      try {
        const user = await usersController.getUser({ email: tokenPayload.email });
        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;

        cb(null, { ...user, scopes: pemissionsScopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
