var express = require('express');
const { register, login} = require('../controllers/usersControler');
var router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);

module.exports = router;
