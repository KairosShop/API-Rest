const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const { measureIdSchema } = require('../../../utils/schemas/measure');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/', get);
router.get('/:idMeasure',validationHandler({ idMeasure: measureIdSchema }, 'params'), getById);

async function get(req, res, next) {
  let { measure = '' } = req.query;
  try {
    const measures = await Controller.getMeasures({measure});
    responses.success(req, res, measures, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idMeasure } = req.params;
  try {
    const measure = await Controller.getMeasure(idMeasure);
    responses.success(req, res, measure, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
