const { body } = require('express-validator');
const { compareSync, hashSync } = require('bcryptjs');
const db = require('../database/models')


module.exports = [
    body("email").notEmpty().withMessage("El email es obligatorio").bail()
    .isEmail().withMessage("Email no válido").bail(),
    body("password").notEmpty().withMessage('La contraseña es requerida').bail()
        .custom((value, {req}) => {
            return db.User.findOne({
                where: {
                    email : req.body.email
                    
               }
            })
             .then(user =>{
               if (!user || !compareSync(value, user.password)) {
                
                   return Promise.reject()
                 }
          })
         .catch(error => {
            console.log(error)
            return Promise.reject('Las credenciales son invalidas')
        })
    })

]
