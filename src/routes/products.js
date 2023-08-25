const express = require('express');
const { carrito, detalle, createProduct, products, editProduct, updateProduct, removeProduct, deleteProduct } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* /products */
router.get('/', products)
router.get('/carrito', carrito)
router.get('/detalle', detalle)
router.get('/createProduct', createProduct)
router.get('/editProduct/:id', editProduct)
router.put('/updateProduct/:id', upload.single('image'), updateProduct )
router.delete('/deleteProduct/:id', deleteProduct)

module.exports = router;