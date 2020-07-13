const express = require('express');
const Controller = require('./index');
const router = express.Router();
const Multer = require('multer');
const responses = require('../../../utils/network/responses');
const validationHandler = require('../../../utils/middleware/validationHandler');
const { typeFileSchema } = require('../../../utils/schemas/general');
const passport = require('passport');

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

router.post(
  '/upload/:type',
  passport.authenticate('jwt', { session: false }),
  validationHandler({ type: typeFileSchema }, 'params'),
  multer.single('file'),
  upload
);

async function upload(req, res, next) {
  const { type } = req.params;
  try {
    if (!req.file) {
      res.status(400).send('No file uploaded.');
      return;
    }

    const urlFile = await Controller.updateFile(type, req);
    responses.success(req, res, urlFile, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
