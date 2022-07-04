let{ sequelize, Sequelize } = require('../../database/models');
let db = require("../../database/models");
let Op = db.Sequelize.Op
let controlador_general = {
    inicio:(req,res)=>{
        let pedido_alta = db.Tipo_alta.findAll();
        let pedido_distribuidor = db.Distribuidor.findAll();

        Promise.all([pedido_alta,pedido_distribuidor])
            .then(([tipos_alta,distribuidores])=>{
                res.render("inicio",{tipos_alta,distribuidores});
            });

            console.log(req.body);
    },
    resultado_busqueda:(req,res)=>{
        console.log(req.body);
        db.Cuenta.findOne({
            where:{busqueda_x_id:req.body.nr_serie + req.body.nr_cuenta},
            include:[{association:"CuentaDistribuidor"},{association:"CuentaTipoAlta"}/*,
                {association:"CuentaEstado1"},{association:"CuentaEtapa1"},{association:"CuentaResponsable1"},
                {association:"CuentaEstado2"},{association:"CuentaEtapa2"},{association:"CuentaResponsable2"},
                {association:"CuentaEstado3"},{association:"CuentaEtapa3"},{association:"CuentaResponsable3"},
                {association:"CuentaEstado4"},{association:"CuentaEtapa4"},{association:"CuentaResponsable4"},
                {association:"CuentaEstado5"},{association:"CuentaEtapa5"},{association:"CuentaResponsable5"},
                {association:"CuentaEstado6"},{association:"CuentaEtapa6"},{association:"CuentaResponsable6"},
                {association:"CuentaEstado7"},{association:"CuentaEtapa7"},{association:"CuentaResponsable7"},
                {association:"CuentaEstado8"},{association:"CuentaEtapa8"},{association:"CuentaResponsable8"}
            */]
        })
        .then((equipo)=>{
            if(equipo !== null){
                res.render("detalle_equipo",{equipo});
            }
                else{
                    res.render("no_encontrado");
                };
        });
    },
    guardar_inicio:(req,res)=>{
        console.log(req.body)
        db.Cuenta.create({
            fecha_ingreso_mail: req.body.fecha_mail,
            hora_ingreso_mail: req.body.hora_mail,
            pos_sunmi: req.body.numero_pos,
            CuentaTipoAltaId: req.body.tipo_alta,
            CuentaDistribuidorId: req.body.distribuidor,
            distribuidor_nuevo: req.body.distribuidor_nuevo,
            numero_cuenta: req.body.numero_cuenta,
            busqueda_x_id: req.body.numero_pos + req.body.numero_cuenta
        }).
        then((resultado)=>{
            db.Cuenta.findOne({
                where:{busqueda_x_id: req.body.numero_pos + req.body.numero_cuenta}
            })
            .then((equipo)=>{
                res.send(equipo)
                //res.redirect("/procesos/:busqueda_x_id");
            });
        });
    },
    procesos:(req,res)=>{

        let pedido_proceso = db.Etapa.findAll();
        let pedido_estado = db.Estado.findAll();
        let pedido_responsable = db.Responsable.findAll();

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
    editar:(req,res)=>{
        let pedido_alta = db.Tipo_alta.findAll();
        let pedido_distribuidor = db.Distribuidor.findAll();
        db.Cuenta.findOne({
            where:{busqueda_x_id:req.params.busqueda_x_id},
        })
        .then((equipo)=>{
            Promise.all([pedido_alta,pedido_distribuidor])
                .then(([tipos_alta,distribuidores])=>{
                    res.render("edicion_equipo",{tipos_alta,distribuidores,equipo});
                });
        });
        
    },
    guardar_editado:(req,res)=>{
        db.Cuenta.update({
            fecha_ingreso_mail:req.body.fecha_mail,
            hora_ingreso_mail:req.body.hora_mail,
            pos_sunmi:req.body.numero_pos,
            CuentaTipoAltaId:req.body.tipo_alta,
            CuentaDistribuidorId:req.body.distribuidor,
            distribuidor_nuevo:req.body.distribuidor_nuevo,
            numero_cuenta:req.body.numero_cuenta,
            busqueda_x_id:req.body.numero_pos + req.body.numero_cuenta 
        },{
            where:{busqueda_x_id:req.params.busqueda_x_id} 
        })                                                
        .then((resultado)=>{
            db.Cuenta.findOne({
                where:{busqueda_x_id:req.body.numero_pos + req.body.numero_cuenta}
            })
            .then((equipo)=>{
                res.render("editado_exitoso",{equipo})
            });
        });
    }
};

module.exports = controlador_general;