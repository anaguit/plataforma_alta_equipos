let {body} = require("express-validator");

let validaciones_formulario_procesos = [
    body("proceso").notEmpty().withMessage("Seleccioná una etapa"),
    body("estado").notEmpty().withMessage("Seleccioná un estado"),
    body("responsable").notEmpty().withMessage("Seleccioná una opción")
];

module.exports = validaciones_formulario_procesos;