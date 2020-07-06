const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  categoryIdSchema,
  createCategorySchema,
  updateCategorySchema,
  filterSchema,
} = require('../../../utils/schemas/categories');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get('/', validationHandler(filterSchema, 'query'), get);
router.get(
  '/subcategories',
  validationHandler(filterSchema, 'query'),
  getWithSubcategories
);
router.get(
  '/:idCategory',
  validationHandler({ idCategory: categoryIdSchema }, 'params'),
  getById
);
router.post('/', validationHandler(createCategorySchema), createCategory);
router.put(
  '/:idCategory',
  validationHandler({ idCategory: categoryIdSchema }, 'params'),
  validationHandler(updateCategorySchema),
  updateCategory
);
router.delete(
  '/:idCategory',
  validationHandler({ idCategory: categoryIdSchema }, 'params'),
  removeCategory
);

async function get(req, res, next) {
  let { category = '', order = 'asc', page = '1', limit = '15' } = req.query;
  try {
    const categories = await Controller.getCategories({ category, order, page, limit });
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
}

async function getWithSubcategories(req, res, next) {
  let { category = '', order = 'asc', page = '1', limit = '15' } = req.query;
  try {
    const categories = await Controller.getWithSubcategories({ category, order, page, limit });
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
}
async function getById(req, res, next) {
  const { idCategory } = req.params;
  try {
    const categories = await Controller.getCategory(idCategory);
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
}

async function createCategory(req, res, next) {
  const { body: category } = req;
  try {
    const categories = await Controller.createCategory(category);
    responses.success(req, res, categories, 201);
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  const { idCategory } = req.params;
  const { body: category } = req;
  try {
    const categories = await Controller.updateCategory(category, idCategory);
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
}

async function removeCategory(req, res, next) {
  const { idCategory } = req.params;
  try {
    const categories = await Controller.removeCategory(idCategory);
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
