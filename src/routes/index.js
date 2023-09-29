const express = require('express');
const { index, admin, searchProduct, searchAdmin } = require('../controllers/indexController');
const admincheck = require('../middlewares/admincheck');
const router = express.Router();

/* / */
router.get('/', index);
router.get('/admin', admincheck, admin)
router.get('/search', searchProduct)
router.get('/admin/search',admincheck, searchAdmin)

module.exports = router;
