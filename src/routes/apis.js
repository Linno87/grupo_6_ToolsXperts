const express = require('express');
const { checkEmail, getAllProducts } = require('../controllers/apiController');
const {getFavorite,toggleFavorite } = require('../controllers/favoriteController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail)
      .get('/favoritos',getFavorite)
      .get('/products', getAllProducts)
      .post('/favorites/toggle',toggleFavorite)

module.exports = router;
