let{ sequelize, Sequelize } = require('../../database/models');
let db = require("../../database/models");
let Op = db.Sequelize.Op;
let moment = require("moment");

let {validationResult} = require("express-validator");

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
        let errores = validationResult(req);

        if(errores.isEmpty()){
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
            {association:"CuentaEstado8"},{association:"CuentaEtapa8"},{association:"CuentaResponsable8"}*/]               
            })
            .then((equipo)=>{
                if(equipo !== null){
                    let tiempo = moment(equipo.fecha_ingreso_mail, "YYYYMMDD").fromNow()
                    console.log(tiempo);
                    //res.send(tiempo);
                    res.render("detalle_equipo",{equipo,tiempo});
                }
                    else{
                        res.render("no_encontrado");
                    };
            });
        }
        else{
            let pedido_alta = db.Tipo_alta.findAll();
            let pedido_distribuidor = db.Distribuidor.findAll();

            Promise.all([pedido_alta,pedido_distribuidor])
                .then(([tipos_alta,distribuidores])=>{
                    res.render("inicio",{errores:errores.mapped(),tipos_alta,distribuidores,datos:req.body});
                });
        };        
    },
    historial:(req,res)=>{
        db.Cuenta.findOne({
            where:{busqueda_x_id:req.params.busqueda_x_id},
            include:[{association:"CuentaEstado1"},{association:"CuentaEtapa1"},{association:"CuentaResponsable1"},
            {association:"CuentaEstado2"},{association:"CuentaEtapa2"},{association:"CuentaResponsable2"},
            {association:"CuentaEstado3"},{association:"CuentaEtapa3"},{association:"CuentaResponsable3"},
            {association:"CuentaEstado4"},{association:"CuentaEtapa4"},{association:"CuentaResponsable4"},
            {association:"CuentaEstado5"},{association:"CuentaEtapa5"},{association:"CuentaResponsable5"},
            {association:"CuentaEstado6"},{association:"CuentaEtapa6"},{association:"CuentaResponsable6"},
            {association:"CuentaEstado7"},{association:"CuentaEtapa7"},{association:"CuentaResponsable7"},
            {association:"CuentaEstado8"},{association:"CuentaEtapa8"},{association:"CuentaResponsable8"}]
        })
        .then((equipo)=>{
            res.render("historial",{equipo});
        })
    },
    listado:(req,res)=>{
        db.Cuenta.findAll({include:[{association:"CuentaEstado1"},{association:"CuentaEtapa1"},{association:"CuentaResponsable1"},
        {association:"CuentaEstado2"},{association:"CuentaEtapa2"},{association:"CuentaResponsable2"},
        {association:"CuentaEstado3"},{association:"CuentaEtapa3"},{association:"CuentaResponsable3"},
        {association:"CuentaEstado4"},{association:"CuentaEtapa4"},{association:"CuentaResponsable4"},
        {association:"CuentaEstado5"},{association:"CuentaEtapa5"},{association:"CuentaResponsable5"},
        {association:"CuentaEstado6"},{association:"CuentaEtapa6"},{association:"CuentaResponsable6"},
        {association:"CuentaEstado7"},{association:"CuentaEtapa7"},{association:"CuentaResponsable7"},
        {association:"CuentaEstado8"},{association:"CuentaEtapa8"},{association:"CuentaResponsable8"}]})
        .then((equipos)=>{
            //let tiempo = moment(equipos[0].fecha_ingreso_mail, "YYYYMMDD").fromNow()
            res.render("total_equipos",{equipos/*,tiempo*/});
        })
    },
    guardar_inicio:(req,res)=>{
        let errores = validationResult(req);
        if(errores.isEmpty()){
            db.Cuenta.create({
                fecha_ingreso_mail: req.body.fecha_mail,
                hora_ingreso_mail: req.body.hora_mail,
                pos_sunmi: req.body.numero_pos,
                CuentaTipoAltaId: req.body.tipo_alta,
                CuentaDistribuidorId: req.body.distribuidor,
                distribuidor_nuevo: req.body.distribuidor_nuevo,
                numero_cuenta: req.body.numero_cuenta,
                busqueda_x_id: req.body.numero_pos + req.body.numero_cuenta,
                //diferencia_hora: Date.now() - req.body.fecha_mail
            }).
            then((resultado)=>{
                db.Cuenta.findOne({
                    where:{busqueda_x_id: req.body.numero_pos + req.body.numero_cuenta}
                })
                .then((equipo)=>{
                    res.render("creado_exitoso",{equipo});
                });
            });
        }
            else{
                let pedido_alta = db.Tipo_alta.findAll();
                let pedido_distribuidor = db.Distribuidor.findAll();

                Promise.all([pedido_alta,pedido_distribuidor])
                    .then(([tipos_alta,distribuidores])=>{
                        res.render("inicio",{errores:errores.mapped(),tipos_alta,distribuidores,datos:req.body})
                    });
            };
    },
    procesos:(req,res)=>{

        let pedido_proceso = db.Etapa.findAll();
        let pedido_estado = db.Estado.findAll();
        let pedido_responsable = db.Responsable.findAll();
        let pedido_cuenta = db.Cuenta.findOne({
            where:{busqueda_x_id:req.params.busqueda_x_id}
        })

        Promise.all([pedido_proceso,pedido_estado,pedido_responsable,pedido_cuenta])
        .then(([procesos,estados,responsables,cuenta])=>{
            res.render("procesos",{procesos,estados,responsables,cuenta});
        });
    },
    guardar_proceso:(req,res)=>{
        let errores = validationResult(req);
        if(errores.isEmpty()){
            if(req.body.proceso == 1){
                db.Cuenta.update({
                    CuentaEtapa1Id:req.body.proceso,
                    CuentaEstado1Id:req.body.estado,
                    CuentaResponsable1Id:req.body.responsable
                },{
                    where:{busqueda_x_id:req.body.busqueda_x_id}
                })
                .then((resultados)=>{
                    db.Cuenta.findOne({
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((equipo)=>{
                        res.render("proceso_guardado",{equipo});
                    }) 
                })
            }
                else if(req.body.proceso == 2){
                    db.Cuenta.update({
                        CuentaEtapa2Id:req.body.proceso,
                        CuentaEstado2Id:req.body.estado,
                        CuentaResponsable2Id:req.body.responsable
                    },{
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((resultados)=>{
                        db.Cuenta.findOne({
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                            })
                            .then((equipo)=>{
                                res.render("proceso_guardado",{equipo})
                            });
                        });
                }
                else if(req.body.proceso == 3){
                    db.Cuenta.update({
                        CuentaEtapa3Id:req.body.proceso,
                        CuentaEstado3Id:req.body.estado,
                        CuentaResponsable3Id:req.body.responsable
                    },{
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((resultados)=>{
                        db.Cuenta.findOne({
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                        })
                        .then((equipo)=>{
                            res.render("proceso_guardado",{equipo})
                            });
                        });
                }
                else if(req.body.proceso == 4){
                    db.Cuenta.update({
                        CuentaEtapa4Id:req.body.proceso,
                        CuentaEstado4Id:req.body.estado,
                        CuentaResponsable4Id:req.body.responsable
                    },{
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((resultados)=>{
                        db.Cuenta.findOne({
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                        })
                        .then((equipo)=>{
                            res.render("proceso_guardado",{equipo});
                            });
                        });
                }
                else if(req.body.proceso == 5){
                    db.Cuenta.update({
                        CuentaEtapa5Id:req.body.proceso,
                        CuentaEstado5Id:req.body.estado,
                        CuentaResponsable5Id:req.body.responsable
                    },{
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((resultados)=>{
                        db.Cuenta.findOne({
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                        })
                        .then((equipo)=>{
                            res.render("proceso_guardado",{equipo});
                            });
                        });
                }
                else if(req.body.proceso == 6){
                    db.Cuenta.update({
                        CuentaEtapa6Id:req.body.proceso,
                        CuentaEstado6Id:req.body.estado,
                        CuentaResponsable6Id:req.body.responsable
                    },{
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((resultados)=>{
                        db.Cuenta.findOne({
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                        })
                        .then((equipo)=>{
                            res.render("proceso_guardado",{equipo});
                            });
                        });
                }
                else if(req.body.proceso == 7){
                    db.Cuenta.update({
                        CuentaEtapa7Id:req.body.proceso,
                        CuentaEstado7Id:req.body.estado,
                        CuentaResponsable7Id:req.body.responsable
                    },{
                        where:{busqueda_x_id:req.body.busqueda_x_id}
                    })
                    .then((resultados)=>{
                        db.Cuenta.findOne({
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                        })
                        .then((equipo)=>{
                            res.render("proceso_guardado",{equipo});
                            });
                        });
                }
                    else{
                        db.Cuenta.update({
                            CuentaEtapa8Id:req.body.proceso,
                            CuentaEstado8Id:req.body.estado,
                            CuentaResponsable8Id:req.body.responsable
                        },{
                            where:{busqueda_x_id:req.body.busqueda_x_id}
                        })
                        .then((resultados)=>{
                            db.Cuenta.findOne({
                                where:{busqueda_x_id:req.body.busqueda_x_id}
                            })
                            .then((equipo)=>{
                                res.render("proceso_guardado",{equipo});
                            });
                        });
                    };
        }
            else{
                let pedido_proceso = db.Etapa.findAll();
                let pedido_estado = db.Estado.findAll();
                let pedido_responsable = db.Responsable.findAll();
                let pedido_cuenta = db.Cuenta.findOne({
                    where:{busqueda_x_id:req.params.busqueda_x_id}
                })

                Promise.all([pedido_proceso,pedido_estado,pedido_responsable,pedido_cuenta])
                .then(([procesos,estados,responsables,cuenta])=>{
                    res.render("procesos",{procesos,estados,responsables,cuenta,datos:req.body,errores:errores.mapped()});
                });
            }
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