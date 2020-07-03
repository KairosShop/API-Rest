const boom = require('@hapi/boom');
const Sentry = require("@sentry/node");
const { sentry, dev } = require('../../config/index');

if (sentry.sentryDns && sentry.sentryId) {
  Sentry.init({ dsn: `https://${sentry.sentryDns}@sentry.io/${sentry.sentryId}` });
}
function withErrorStack(error, stack) {
  if (dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  Sentry.captureException(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
};
