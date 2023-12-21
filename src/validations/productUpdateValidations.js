const {check, body} = require('express-validator');

module.exports = [
    check("name")
    .notEmpty().withMessage("Ingresa el nombre del producto").bail()
    .isLength({min:3, max:100}).withMessage("El campo debe contener al menos 3 letras"),
    check("price").notEmpty().withMessage("Debes ingresar un precio"),
    check("discount").notEmpty().withMessage("Debes ingresar un valor"),
    check("description")
    .notEmpty().withMessage("Debes ingresar una descripcion").bail()
    .isLength({
        min : 20,
        max : 800
    }).withMessage('La descripción debe tener entre 20 y 500 caracteres')
]