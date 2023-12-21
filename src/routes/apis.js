const express = require('express');
const {
  checkEmail,
  getAllProducts,
  getAllBrands,
  getAllCategories,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getAllUsers,
  updateProfileAvatar,
} = require("../controllers/apiController");
const upload = require('../middlewares/upload')
const {getFavorite,toggleFavorite } = require('../controllers/favoriteController');
const router = express.Router();

/* /apis */
router
  .get("/check-email", checkEmail)
  .get("/favoritos", getFavorite)
  .get("/users", getAllUsers)
  .get("/products", getAllProducts)
  .get("/products/:id", getProductDetails)
  .post("/products", upload.any(), createProduct)
  .put("/products/:id", upload.any(), updateProduct)
  .delete("/products/:id", deleteProduct)
  .get("/brands", getAllBrands)
  .get("/categories", getAllCategories)
  .post("/favorites/toggle", toggleFavorite)

module.exports = router;
