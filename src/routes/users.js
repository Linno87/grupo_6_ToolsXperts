const express = require('express');
const { register, login, users, saveUser, processLogin, logout } = require('../controllers/usersController');
const uploadUser = require("../middlewares/uploadUser");
const registerValidator = require('../validations/registerValidator')
const router = express.Router();
const loginValiations = require("../validations/loginValidations")

/* /users */
router.get('/register', register);
router.post("/register", uploadUser.single("profile_image"), registerValidator, saveUser);
router.get('/login', login);
router.post('/login',loginValiations, processLogin);
router.get("/", users);
router.get("/logout",logout);/* ruta para cerrar session */

module.exports = router;