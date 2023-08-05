const express = require('express');
const { carrito, detalle } = require('../controllers/productsController');
const router = express.Router();

/* /products */
router.get('/carrito', carrito)
router.get('/detalle', detalle)

module.exports = router;