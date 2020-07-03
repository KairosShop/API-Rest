exports.success = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || '';
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: statusMessage,
  });
};
