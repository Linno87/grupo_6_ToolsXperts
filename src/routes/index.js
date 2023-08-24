const express = require('express');
const { index, admin, searchProduct } = require('../controllers/indexController');
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admin)
router.get('search/:name', searchProduct)

module.exports = router;
