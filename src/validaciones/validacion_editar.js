let {body} = require("express-validator");

let validaciones_formulario_editar = [
    body("fecha_mail").notEmpty().withMessage("complete fecha"),
    body("hora_mail").notEmpty().withMessage("complete hora"),
    body("numero_pos").notEmpty().withMessage("campo obligatorio"),
    body("tipo_alta").notEmpty().withMessage("campo obligatorio"),
    //body("distribuidor"),
    body("numero_cuenta").notEmpty().withMessage("campo obligatorio")
];

module.exports = validaciones_formulario_editar