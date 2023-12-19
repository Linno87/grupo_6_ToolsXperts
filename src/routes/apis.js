const express = require('express');
const { checkEmail,addFavorite, getAllProducts, getAllBrands, getAllCategories, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/apiController');
const upload = require('../middlewares/upload')
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail)
      .get('/favoritos',addFavorite)
      .get('/products', getAllProducts)
      .get('/products/:id', getProductDetails)
      .post('/products', upload.any(), createProduct)
      .put('/products/:id',upload.any(), updateProduct)
      .delete('/products/:id',deleteProduct)
      .get('/brands', getAllBrands)
      .get('/categories', getAllCategories)


module.exports = router;
