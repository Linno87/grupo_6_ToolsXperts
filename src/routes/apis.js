const express = require('express');
const { checkEmail,addFavorite, getAllProducts } = require('../controllers/apiController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail)
      .get('/favoritos',addFavorite)
      .get('/products', getAllProducts)

module.exports = router;
