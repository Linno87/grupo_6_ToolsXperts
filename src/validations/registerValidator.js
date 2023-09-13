const { check, body } = require("express-validator");

module.exports = [
  check("firstName").notEmpty().withMessage("El nombre es obligatorio").bail(),
  check("lastName").notEmpty().withMessage("El apellido es requerido").bail(),
  check("date")
    .notEmpty()
    .isNumeric()
    .withMessage("La fecha de nacimiento es obligatoria")
    .bail(),
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .bail()
    .isEmail()
    .withMessage("El correo electrónico no es válido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .bail(),
  check("password_confirmation")
    .notEmpty()
    .withMessage("La confirmación de la contraseña es obligatoria")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error(
          "La confirmación de la contraseña no coincide con la contraseña"
        );
      }
      return true;
    }),
  check("categoryUser")
    .notEmpty()
    .withMessage("Debes seleccionar una categoría")
    .bail(),
  body("profile_image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("No has subido ninguna imagen").bail();
    }
    return true;
  }),
];
