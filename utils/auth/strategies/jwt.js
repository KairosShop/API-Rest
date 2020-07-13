const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const pemissionsScopes = require('./pemissions');
const controller = require('../../../api/components/users/index');

const { jwt } = require('../../../config/index');

passport.use(
  new Strategy(
    {
      secretOrKey: jwt.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      try {
        const user = await controller.getUser({ email: tokenPayload.email });
        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;
        let scopes;
        switch (user.rol) {
          case 'ADMIN':
            scopes = pemissionsScopes.admin;
            break;
          case 'SUPER MARKET':
            scopes = pemissionsScopes.supermarket;
            break;
          default:
            scopes = pemissionsScopes.customer;
            break;
        }
        cb(null, { ...user, scopes: scopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);