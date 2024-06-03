const express = require('express');
const router = express.Router();
const { createProduct, getProducts, getProductById } = require('../controllers/product.controller');

router.post('/products', createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById);

module.exports = router;
