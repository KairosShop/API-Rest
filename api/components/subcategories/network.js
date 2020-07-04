const express = require('express');
const Controller = require('./index');
const responses = require('../../../utils/network/responses');
const router = express.Router();

const {
  subcategoryIdSchema,
  categoryIdSchema,
  createSubcategorySchema,
  updateSubcategorySchema,
} = require('../../../utils/schemas/subcategories');
const validationHandler = require('../../../utils/middleware/validationHandler');

router.get(
  '/category/:idCategory',
  validationHandler({ idCategory: categoryIdSchema }, 'params'),
  get
);
router.get(
  '/:idSubcategory',
  validationHandler({ idSubcategory: subcategoryIdSchema }, 'params'),
  getById
);
router.post('/', validationHandler(createSubcategorySchema), createSubcategory);
router.put(
  '/:idSubcategory',
  validationHandler({ idSubcategory: subcategoryIdSchema }, 'params'),
  validationHandler(updateSubcategorySchema),
  updateSubcategory
);
router.delete(
  '/:idSubcategory',
  validationHandler({ idSubcategory: subcategoryIdSchema }, 'params'),
  removeSubcategory
);

async function get(req, res, next) {
  let { subcategory = '' } = req.query;
  const { idCategory: id_category } = req.params;
  try {
    const categories = await Controller.getSubcategories({subcategory, id_category});
    responses.success(req, res, categories, 200);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  const { idSubcategory } = req.params;
  try {
    const subcategories = await Controller.getSubcategory(idSubcategory);
    responses.success(req, res, subcategories, 200);
  } catch (error) {
    next(error);
  }
}

async function createSubcategory(req, res, next) {
  const { body: subcategory } = req;
  try {
    const created = await Controller.createSubcategory(subcategory);
    responses.success(req, res, created, 201);
  } catch (error) {
    next(error);
  }
}

async function updateSubcategory(req, res, next) {
  const { idSubcategory } = req.params;
  const { body: category } = req;
  try {
    const subcategory = await Controller.updateSubcategory(
      category,
      idSubcategory
    );
    responses.success(req, res, subcategory, 200);
  } catch (error) {
    next(error);
  }
}

async function removeSubcategory(req, res, next) {
  const { idSubcategory } = req.params;
  try {
    const subcategory = await Controller.removeSubcategory(idSubcategory);
    responses.success(req, res, subcategory, 200);
  } catch (error) {
    next(error);
  }
}

module.exports = router;
