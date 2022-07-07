let {body} = require("express-validator");

let validaciones_formulario_buscar = [
    body("nr_serie").notEmpty().withMessage("campo obligatorio"),
    body("nr_cuenta").notEmpty().withMessage("campo obligatorio")
];

module.exports = validaciones_formulario_buscar;