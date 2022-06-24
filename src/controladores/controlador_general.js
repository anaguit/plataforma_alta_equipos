let db = require("../../database/models");
let Op = db.Sequelize.Op
let controlador_general = {
    inicio:(req,res)=>{
        let pedido_alta = db.tipo_alta.findAll();
        let pedido_distribuidor = db.distribuidor.findAll();

        Promise.all([pedido_alta,pedido_distribuidor])
            .then(([tipos_alta,distribuidores])=>{
                res.render("inicio",{tipos_alta,distribuidores});
            });

            console.log(req.body);
    },
    resultado_busqueda:(req,res)=>{
        let pedido_alta = db.tipo_alta.findAll();
        let pedido_distribuidor = db.distribuidor.findAll();

        Promise.all([pedido_alta,pedido_distribuidor])
            .then(([tipos_alta,distribuidores])=>{
                res.render("equipo_encontrado",{tipos_alta,distribuidores});
            });

            console.log(req.body);
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