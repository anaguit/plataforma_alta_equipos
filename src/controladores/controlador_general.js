let controlador_general = {
    inicio:(req,res)=>{
        res.render("inicio")
    },
    resultado_busqueda:(req,res)=>{
        res.send("resultados obtenidos")
    }
};

module.exports = controlador_general;