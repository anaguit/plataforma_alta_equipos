let express = require("express");
let router = express.Router();

let controlador_general = require("../controladores/controlador_general");

router.get("/",controlador_general.inicio);
router.post("/resultados",controlador_general.resultado_busqueda)

module.exports = router;