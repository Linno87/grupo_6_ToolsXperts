const { check, body } = require("express-validator");

module.exports = [
  check("firstName").notEmpty().withMessage("El nombre es obligatorio"),
  check("lastName").notEmpty().withMessage("El apellido es requerido"),
  check("date")
    .notEmpty()
    .withMessage("La fecha de nacimiento es obligatoria")
    .isDate()
    .withMessage("La fecha de nacimiento no es válida"),
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .isEmail()
    .withMessage("El correo electrónico no es válido"),
  check("password").notEmpty().withMessage("La contraseña es obligatoria"),
  check("password_confirmation")
    .notEmpty()
    .withMessage("La confirmación de la contraseña es obligatoria")
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
    .withMessage("Debes seleccionar una categoría"),
  body("profile_image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("No has subido ninguna imagen");
    }
    return true;
  }),
];
