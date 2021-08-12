const express = require('express');

const categoryController = require('../Controller/category');

const router = express.Router();

// GET /products
router.get('/categories', categoryController.getCategories);

// POST /products
router.post('/categories',categoryController.createCategory);

router.get('/categories/:categoryId', categoryController.getCategory);

router.put('/categories/:categoryId', categoryController.updateCategory);

router.delete('/categories/:categoryId', categoryController.deleteCategory);

module.exports = router;