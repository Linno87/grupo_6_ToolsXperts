const express = require('express');
const { checkEmail, getAllProducts, getAllBrands, getAllCategories, createProduct, updateProduct, deleteProduct, getProductDetails, getAllUsers } = require('../controllers/apiController');
const upload = require('../middlewares/upload')
const {getFavorite,toggleFavorite } = require('../controllers/favoriteController');
const router = express.Router();
const {addProduct,cleanCart, getOrderPending,lessQuantity,moreQuantity,removeProduct,statusOrder } = require('../controllers/cartApiController');


/* /apis */
router.get('/check-email', checkEmail)
      .get('/favoritos',getFavorite)
      .get('/users', getAllUsers)
      .get('/products', getAllProducts)
      .get('/products/:id', getProductDetails)
      .post('/products', upload.any(), createProduct)
      .put('/products/:id',upload.any(), updateProduct)
      .delete('/products/:id',deleteProduct)   
      .get('/brands', getAllBrands)
      .get('/categories', getAllCategories)

      .delete('/cart/removeProduct',removeProduct)
      .delete('/cart/cleanCart',cleanCart)
      .post('/favorites/toggle',toggleFavorite)
      .post('/cart/addProduct',addProduct)
      .get('/cart/getOrderPending',getOrderPending)
      .put('/cart/moreQuantity',moreQuantity)
      .put('/cart/lessQuantity',lessQuantity)
      .put('/cart/statusOrder',statusOrder )
module.exports = router;
