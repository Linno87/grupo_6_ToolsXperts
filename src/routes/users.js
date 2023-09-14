const express = require('express');
const { register, login, users, saveUser, processLogin, profile, updateProfile } = require('../controllers/usersController');
const uploadUser = require("../middlewares/uploadUser");
const profileValidations = require('../validations/profileValidations');

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

router.get("/profile", profile);
router.put('/profile',uploadUser.single("profile_image"), updateProfile)

module.exports = router;