const express = require('express');
const Controller = require('./index');

const router = express.Router();
router.get('/', async function (req, res, next) {
  try {
    const categories = await Controller.getCategories();
    res.status(200).json({
      data: categories,
      message: 'categories listed',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
