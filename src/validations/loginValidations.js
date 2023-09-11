const {body}= require('express-validator');
const users = require('../data/users.json');

module.exports=[
    body("email").notEmpty().withMessage("El email es obligatorio").bail().isEmail().withMessage("Email no válido").bail(),
    body("password").notEmpty().withMessage('La contraseña es requerida').bail()

    
]
