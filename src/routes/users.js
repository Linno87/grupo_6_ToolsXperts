const express = require('express');
const { register, login, users, saveUser, processLogin } = require('../controllers/usersController');
const uploadUser = require("../middlewares/uploadUser");
const userValidator = require('../validations/registerValidator')
const router = express.Router();

/* /users */
router.get('/register', register);
router.post("/register", uploadUser.single("profile_image"), registerValidator, saveUser);
router.get('/login', login);
router.post('/login', processLogin);
router.get("/", users);

module.exports = router;