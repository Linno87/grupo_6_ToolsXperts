const express = require('express');
const { carrito, detalle, createProduct, products, editProduct, updateProduct } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products */
router.get('/', products)
router.get('/carrito', carrito)
router.get('/createProduct', createProduct)
router.get('/editProduct', editProduct)
router.get('/detalle/:id', detalle)

module.exports = router;