const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const { categoryIdSchema } = require('../../../utils/schemas/categories');
const validationHandler = require('../../../utils/middleware/validationHandler');


router.get('/', get);
router.get('/:idCategory',validationHandler({ idCategory: categoryIdSchema }, 'params'), getById);

async function get(req, res, next) {
  try {
    const categories = await Controller.getCategories();
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
};

async function getById(req, res, next) {
  try {
    const { idCategory } = req.params;
    const categories = await Controller.getCategory(idCategory);
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
};
module.exports = router;
