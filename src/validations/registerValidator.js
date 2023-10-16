const { check, body } = require("express-validator");
const { readJson } = require("../data");

module.exports = [
  check("firstName").notEmpty().withMessage("El nombre es obligatorio").bail(),
  check("lastName").notEmpty().withMessage("El apellido es requerido").bail(),
  check("date")
    .notEmpty()
    .withMessage("La fecha de nacimiento es obligatoria")
    .bail(),
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .bail()
    .isEmail().withMessage("El correo electrónico no es válido").bail()
    .custom((value, { req }) => {
      const usersFromJson = readJson('users.json');
      const user = usersFromJson.find(user => user.email === req.body.email)
      
      if (!user) {
          
          return true
      }
      return false
    }).withMessage("El correo ya existe"),

  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .bail(),
  check("password_confirmation")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error(
          "Las contraseñas no coinciden"
        );
      }
      return true;
    }),
  check("categoryUser")
    .notEmpty()
    .withMessage("Debes seleccionar una categoría")
    .bail(),
 
];
