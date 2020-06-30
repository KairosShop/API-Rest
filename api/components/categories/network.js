const express = require('express');
const controller = require('./index');

function categoriesApi(app) {
    const router = express.Router();

    app.use('/api/categories/', router);
    router.get('/', async function (req, res, next) {
        try {
            const categories = await controller.getCategories();
            res.status(200).json({
                data: categories,
                message: 'categories listed'
            })
        } catch (error) {
            next(error);
        }
    })
}

module.exports = categoriesApi;