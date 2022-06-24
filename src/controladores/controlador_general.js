let controlador_general = {
    inicio:(req,res)=>{
        res.render("inicio");
    },
    resultado_busqueda:(req,res)=>{
        res.render("equipo_encontrado");
    },
    guardar_inicio:(req,res)=>{
        res.redirect("/procesos")
    },
    procesos:(req,res)=>{
        res.render("procesos");
    },
    guardar_proceso:(req,res)=>{
        res.redirect("/proceso_guardado");
    },
    proceso_guardado:(req,res)=>{
        res.render("proceso_guardado");
    }

};

module.exports = controlador_general;