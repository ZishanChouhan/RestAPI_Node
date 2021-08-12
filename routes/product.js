const express = require('express');

const productController = require('../Controller/product');

const router = express.Router();

// GET /products
router.get('/products', productController.getProducts);

// POST /products
router.post('/products',productController.createProduct);

router.get('/products/:productId', productController.getProduct);

router.put('/products/:productId', productController.updateProduct);

router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
