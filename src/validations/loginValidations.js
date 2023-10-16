const { body } = require('express-validator');
const { readJson } = require("../data");
const { compareSync } = require('bcryptjs');


module.exports = [
    body("email").notEmpty().withMessage("El email es obligatorio").bail()
    .isEmail().withMessage("Email no válido").bail(),
    body("password").notEmpty().withMessage('La contraseña es requerida').bail().custom((value, { req }) => {
        const usersFromJson = readJson('users.json');
        const user = usersFromJson.find(user => user.email === req.body.email)/*usuario leido/usuario encontrado con find, compara el email ingresado con el email registrado en el json de usuarios */
        
        if (!user || !user.password !== compareSync(value, user.password)) {
            /* si el usuario es distinto y el password es distinto = usuario falso */
            return false
        }
        return true/* si coincide las credenciales= se loguea */
    }).withMessage('Credenciales Inválidas')



]
