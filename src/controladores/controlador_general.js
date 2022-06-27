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
        /*db.cuentas.create({
            fecha_ingreso_mail:req.body.fecha_mail,
            pos_sunmi:req.body.numero_pos,
            id_tipo_alta:req.body.tipo_alta,
            id_distribuidor:req.body.distribuidor,
            distribuidor_nuevo:req.body.distribuidor_nuevo,
            numero_cuenta:req.body.numero_cuenta,
            busqueda_x_id:req.body.numero_pos + req.body.numero_cuenta
        }).
        then((resultados)=>{
            console.log(req.body)*/
            res.redirect("/procesos");
        /*})
        .catch((error)=>{
            res.send("error")
        })*/
    },
    procesos:(req,res)=>{

        let pedido_proceso = db.etapa.findAll();
        let pedido_estado = db.estado.findAll();
        let pedido_responsable = db.responsable.findAll();

        Promise.all([pedido_proceso,pedido_estado,pedido_responsable])
        .then(([procesos,estados,responsables])=>{
            res.render("procesos",{procesos,estados,responsables});
        });
    },
    guardar_proceso:(req,res)=>{
        res.redirect("/proceso_guardado");
    },
    proceso_guardado:(req,res)=>{
        res.render("proceso_guardado");
    },
    /*editar:(req,res)=>{
        let pedido_alta = db.tipo_alta.findAll();
        let pedido_distribuidor = db.distribuidor.findAll();

        Promise.all([pedido_alta,pedido_distribuidor])
            .then(([tipos_alta,distribuidores])=>{
                res.render("equipo_encontrado",{tipos_alta,distribuidores});
            });
    },*/
    guardar_editado:(req,res)=>{
        res.send("prueba")
    }
};

module.exports = controlador_general;