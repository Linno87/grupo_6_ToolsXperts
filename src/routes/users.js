const express = require('express');
const { register, login, users, saveUser, processLogin, profile, updateProfile } = require('../controllers/usersController');
const uploadUser = require("../middlewares/uploadUser");
const profileValidations = require('../validations/profileValidations');
const router = express.Router();

/* /users */
router.get('/register', register);
router.post("/register", uploadUser.single("profile_image"), saveUser);
router.get('/login', login);
router.post('/login', processLogin);
router.get("/", users);

router.get("/profile", profile);
router.put('/profile',uploadUser.single("profile_image"), updateProfile)

module.exports = router;