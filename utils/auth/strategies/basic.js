const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const controller = require('../../../api/components/users/index');
passport.use(
  new BasicStrategy(async function(email, password, cb) {
    try {
      const user = await controller.getUser({ email });

      if (!user) {
        return cb(boom.unauthorized(), false);
      }
      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }

      const dataUser = { ... user };
      delete dataUser.password;
      return cb(null, dataUser);
    } catch (error) {
      return cb(error);
    }
  })
);
