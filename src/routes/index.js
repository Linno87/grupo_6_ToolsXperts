const express = require('express');
const { index, searchProduct } = require('../controllers/indexController');
const router = express.Router();

/* / */
router.get('/', index);
router.get('search/:name', searchProduct)

module.exports = router;
