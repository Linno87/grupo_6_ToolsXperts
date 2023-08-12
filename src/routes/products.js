const express = require('express');
const { carrito, detalle, createProduct, editProduct } = require('../controllers/productsController');
const router = express.Router();

/* /products */
router.get('/carrito', carrito)
router.get('/detalle', detalle)
router.get('/createProduct', createProduct)
router.get('/editProduct', editProduct)

module.exports = router;