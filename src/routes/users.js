var express = require('express');
const { register, login, users, profile, successProfile} = require('../controllers/usersControler');
var router = express.Router();

/* /users */
router.get('/register', register);
router.get('/login', login);
router.get("/", users);

router.get("/profile", profile);
router.put('/profile', successProfile)

module.exports = router;