const express = require('express');
const { register, login, users, saveUser, processLogin, profile, updateProfile, logout } = require('../controllers/usersController');
const uploadUser = require("../middlewares/uploadUser");
const profileValidations = require('../validations/profileValidations');

const registerValidator = require('../validations/registerValidator')
const router = express.Router();
const loginValiations = require("../validations/loginValidations")
const localsCheck = require("../middlewares/localsCheck");
const userLoginchek = require('../middlewares/userLoginchek');
const notUserLogin = require('../middlewares/notUserLogin');

/* /users */
router.get('/register', notUserLogin, register);
router.post("/register", uploadUser.single("profile_image"),registerValidator , saveUser);
router.get('/login', notUserLogin, login);
router.post('/login' /*, loginValiations */, processLogin);
router.get("/", users);
router.get("/logout",logout);/* ruta para cerrar session */
router.get("/profile", userLoginchek, profile);
router.put('/profile', uploadUser.single("profile_image"), profileValidations, updateProfile)

module.exports = router;