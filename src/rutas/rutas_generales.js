let express = require("express");
let router = express.Router();

let validaciones_formulario_crear = require("../validaciones/validacion_crear");
let validaciones_formulario_buscar = require("../validaciones/validacion_buscar");
let validaciones_formulario_procesos = require("../validaciones/validacion_procesos");
let validaciones_formulario_editar = require("../validaciones/validacion_editar");

let controlador_general = require("../controladores/controlador_general");

router.get("/",controlador_general.inicio); //ok
router.post("/guardar",validaciones_formulario_crear,controlador_general.guardar_inicio); //ok

router.post("/resultados",validaciones_formulario_buscar,controlador_general.resultado_busqueda); //ok
router.get("/resultados/historial/:busqueda_x_id",controlador_general.historial);

router.get("/listado",controlador_general.listado)
router.get("/listado_api",controlador_general.listado_api)

router.get("/procesos/:busqueda_x_id",controlador_general.procesos); //ok
router.post("/procesos/:busqueda_x_id",validaciones_formulario_procesos,controlador_general.guardar_proceso); //ok

router.get("/editar/:busqueda_x_id",controlador_general.editar); //ok
router.put("/guardar_editado/:busqueda_x_id",/*validaciones_formulario_editar,*/controlador_general.guardar_editado); //ok


module.exports = router;