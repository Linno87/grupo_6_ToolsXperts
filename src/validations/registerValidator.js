const { check, body } = require("express-validator");

const db = require('../database/models')

module.exports = [
  check("first_name").notEmpty().withMessage("El nombre es obligatorio").bail(),
  check("last_name").notEmpty().withMessage("El apellido es requerido").bail(),
  check("date")
    .notEmpty()
    .withMessage("La fecha de nacimiento es obligatoria")
    .bail(),
  body("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .bail()
    .isEmail().withMessage("El correo electrónico no es válido").bail()
    .custom((value) => {
      return db.User.findOne({
        where:{
            email : value
        }
      })
      .then(user =>{
        if(user){
          return Promise.reject()
        }
       
      })
      .catch(error=>{
        console.log(error)
        return Promise.reject('Email ya registrado')
      })
    
    }),

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
        return false
      }
      return true;
    }).withMessage("Las contraseñas no coinciden"),
];
