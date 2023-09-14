const express = require('express');
const { index, admin, searchProduct } = require('../controllers/indexController');
const admincheck = require('../middlewares/admincheck');
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admincheck, admin)
router.get('/search', searchProduct)

module.exports = router;
