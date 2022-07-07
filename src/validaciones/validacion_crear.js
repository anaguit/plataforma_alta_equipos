let {body} = require("express-validator");

let validaciones_formulario_crear = [
    body("fecha_mail").notEmpty().withMessage("Ingresar fecha"),
    body("hora_mail").notEmpty().withMessage("Ingresar hora"),
    body("numero_pos").notEmpty().withMessage("Ingesar número de pos"),
    body("tipo_alta").notEmpty().withMessage("Ingesar tipo de alta"),
    body("distribuidor").notEmpty().withMessage("Ingresar distribuidor"),
    //body("distribuidor_nuevo").notEmpty().withMessage("Ingresar distribuidor"),
    body("numero_cuenta").notEmpty().withMessage("ingresar número de cuenta")
];

module.exports = validaciones_formulario_crear;