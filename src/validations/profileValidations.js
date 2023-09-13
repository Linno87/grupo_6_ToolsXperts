const { check, body } = require("express-validator");


module.exports = [
    check("firstName")
        .isEmpty().withMessage("El campo no puede estar vacio").bail()
        .isLength({min:3, max:25}).withMessage("El campo debe contener al menos 3 letras").bail()
        .isAlpha('es-ES').withMessage("Solo se permiten caracteres alfabeticos"),
    check("lastName")
        .isEmpty().withMessage("El campo no puede estar vacio").bail()
        .isLength({min:3, max:25}).withMessage("El campo debe contener al menos 3 letras").bail()
        .isAlpha('es-ES').withMessage("Solo se permiten caracteres alfabeticos"),
    check('direction')
        .isLength({min:10, max:50}).withMessage("El campo no puede superar los 50 caracteres").bail()
        .isAlphanumeric().withMessage("Solo se permiten caracteres alfanumericos"),
    check('description')
        .isLength({ max:255}).withMessage("Solo se permiten 255 caracteres").bail()
        .isAlphanumeric().withMessage("Solo se permiten caracteres alfanumericos"),
]