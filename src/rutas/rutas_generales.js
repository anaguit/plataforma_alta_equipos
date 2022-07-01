let express = require("express");
let router = express.Router();

let controlador_general = require("../controladores/controlador_general");

router.get("/",controlador_general.inicio);
router.post("/guardar",controlador_general.guardar_inicio);

router.post("/resultados",controlador_general.resultado_busqueda);

router.get("/procesos",controlador_general.procesos);
router.post("/procesos",controlador_general.guardar_proceso);
router.get("/proceso_guardado",controlador_general.proceso_guardado);

router.get("/editar/:busqueda_x_id",controlador_general.editar);
router.put("/guardar_editado/:busqueda_x_id",controlador_general.guardar_editado);


module.exports = router;