const express = require('express');
const { checkEmail,addFavorite, getAllProducts, getAllBrands, getAllCategories, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/apiController');
const upload = require('../middlewares/upload')
const { checkEmail, getAllProducts } = require('../controllers/apiController');
const {getFavorite,toggleFavorite } = require('../controllers/favoriteController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail)
      .get('/favoritos',getFavorite)
      .get('/products', getAllProducts)
      .get('/products/:id', getProductDetails)
      .post('/products', upload.any(), createProduct)
      .put('/products/:id',upload.any(), updateProduct)
      .delete('/products/:id',deleteProduct)
      .get('/brands', getAllBrands)
      .get('/categories', getAllCategories)

      .post('/favorites/toggle',toggleFavorite)

module.exports = router;
