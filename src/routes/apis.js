const express = require('express');
const { checkEmail,addFavorite, list } = require('../controllers/apiController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail)
      .get("/products", list)
      .get('/favoritos', addFavorite )

module.exports = router;
