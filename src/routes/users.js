var express = require('express');
const { register, login, users, processLogin} = require('../controllers/usersControler');
var router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);
router.post('/login', processLogin);
router.get("/", users);

module.exports = router;