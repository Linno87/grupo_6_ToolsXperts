const express = require("express");
const {
  register,
  login,
  users,
  saveUser,
  processLogin,
  profile,
  updateProfile,
  logout,
  carrito,
  favoritos,
  updateProfileAvatar,
  deleteAvatar,
} = require("../controllers/usersController");
const uploadUser = require("../middlewares/uploadUser");
const profileValidations = require("../validations/profileValidations");

const registerValidator = require("../validations/registerValidator");
const router = express.Router();
const loginValiations = require("../validations/loginValidations");
const localsCheck = require("../middlewares/localsCheck");
const userLoginchek = require("../middlewares/userLoginchek");
const notUserLogin = require("../middlewares/notUserLogin");

/* /users */
router.get("/register", notUserLogin, register);
router.post(
  "/register",
  uploadUser.single("profile_image"),
  registerValidator,
  saveUser
);
router.get("/login", notUserLogin, login);
router.post("/login", loginValiations, processLogin);
router.get("/", users);
router.get("/logout", logout); /* ruta para cerrar session */
router.get("/profile", userLoginchek, profile);
router.put(
  "/profile",
  uploadUser.single("avatar"),
  profileValidations,
  updateProfile
);
router.get("/carrito", carrito);
router.get("/favoritos", userLoginchek, favoritos);
router.put(
  "/profile/avatar/:id",
  uploadUser.single("avatar"),
  updateProfileAvatar
);
router.delete("/deleteAvatar/avatar/:id", deleteAvatar);
module.exports = router;
const fs = require('fs').promises;
const path = require('path');
const db = require('../../database/models');

module.exports = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    const avatarFilename = user.avatar;
    const avatarPath = path.join(__dirname, '../../uploads/avatars', avatarFilename);

    // Verifica si el archivo existe antes de intentar eliminarlo
    const fileExists = await fs.access(avatarPath).then(() => true).catch(() => false);

    if (fileExists) {
      // Elimina el archivo solo si existe
      await fs.unlink(avatarPath);
    }

    // Actualiza el campo avatar con el nombre de la imagen predeterminada
    await db.User.update(
      { avatar: 'defaultUserImg.jpg' },
      { where: { id: req.params.id } }
    );

    return res.redirect('/users/profile');
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al eliminar el avatar.' });
  }
};
