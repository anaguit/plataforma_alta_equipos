let express = require("express");
let router = express.Router();

let validaciones_formulario_crear = require("../validaciones/validacion_crear");
let validaciones_formulario_buscar = require("../validaciones/validacion_buscar");
let validaciones_formulario_procesos = require("../validaciones/validacion_procesos");

let controlador_general = require("../controladores/controlador_general");

router.get("/",controlador_general.inicio); //ok
router.post("/guardar",validaciones_formulario_crear,controlador_general.guardar_inicio); //ok

router.post("/resultados",validaciones_formulario_buscar,controlador_general.resultado_busqueda); //ok

router.get("/procesos/:busqueda_x_id",controlador_general.procesos); //ok
router.post("/procesos/:busqueda_x_id",validaciones_formulario_procesos,controlador_general.guardar_proceso);

router.get("/editar/:busqueda_x_id",controlador_general.editar); //ok
router.put("/guardar_editado/:busqueda_x_id",controlador_general.guardar_editado); //ok, revisarlo a modo estudio


module.exports = router;