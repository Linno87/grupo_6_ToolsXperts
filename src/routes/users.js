const express = require('express');
const { register, login, users, saveUser, processLogin, profile, successProfile } = require('../controllers/usersController');
const uploadUser = require("../middlewares/uploadUser");
const router = express.Router();

/* /users */
router.get('/register', register);
router.post("/register", uploadUser.single("profile_image"), saveUser);
router.get('/login', login);
router.post('/login', processLogin);
router.get("/", users);

router.get("/profile", profile);
router.put('/profile', successProfile)

module.exports = router;