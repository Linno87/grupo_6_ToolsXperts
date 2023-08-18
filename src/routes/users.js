var express = require('express');
const { register, login, admin } = require('../controllers/usersControler');
var router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get("/admin", admin);

module.exports = router;
