const express = require('express');
const { checkEmail,addFavorite } = require('../controllers/apiController');
const router = express.Router();

/* /apis */
router.get('/check-email', checkEmail)
      .get('/favoritos',addFavorite )

module.exports = router;
