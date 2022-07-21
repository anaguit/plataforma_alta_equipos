let {body} = require("express-validator");

let validaciones_formulario_buscar = [
    body("nr_serie").notEmpty().withMessage("Ingrese el número de serie"),
    body("nr_cuenta").notEmpty().withMessage("Ingrese el número de cuenta")
];

module.exports = validaciones_formulario_buscar;