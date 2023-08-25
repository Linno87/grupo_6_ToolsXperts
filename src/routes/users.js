var express = require('express');
const { register, login, users} = require('../controllers/usersControler');
var router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get("/", users);

module.exports = router;