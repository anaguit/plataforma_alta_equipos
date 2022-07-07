let express = require("express");
let router = express.Router();

let controlador_general = require("../controladores/controlador_general");

router.get("/",controlador_general.inicio); //ok
router.post("/guardar",controlador_general.guardar_inicio); //ok

router.post("/resultados",controlador_general.resultado_busqueda); //ok

router.get("/procesos/:busqueda_x_id",controlador_general.procesos); //ok
router.post("/procesos",controlador_general.guardar_proceso);

router.get("/editar/:busqueda_x_id",controlador_general.editar); //ok
router.put("/guardar_editado/:busqueda_x_id",controlador_general.guardar_editado); //ok, revisarlo a modo estudio


module.exports = router;