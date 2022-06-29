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
        let pedido_cuenta = db.Cuenta.findOne({
            where:{busqueda_x_id:req.body.nr_serie + req.body.nr_cuenta},
            /*include:[{association:"CuentaDistribuidor"},{association:"CuentaTipoAlta"},
                {association:"CuentaEstado1"},{association:"CuentaEtapa1"},{association:"CuentaResponsable1"},
                {association:"CuentaEstado2"},{association:"CuentaEtapa2"},{association:"CuentaResponsable2"},
                {association:"CuentaEstado3"},{association:"CuentaEtapa3"},{association:"CuentaResponsable3"},
                {association:"CuentaEstado4"},{association:"CuentaEtapa4"},{association:"CuentaResponsable4"},
                {association:"CuentaEstado5"},{association:"CuentaEtapa5"},{association:"CuentaResponsable5"},
                {association:"CuentaEstado6"},{association:"CuentaEtapa6"},{association:"CuentaResponsable6"},
                {association:"CuentaEstado7"},{association:"CuentaEtapa7"},{association:"CuentaResponsable7"},
                {association:"CuentaEstado8"},{association:"CuentaEtapa8"},{association:"CuentaResponsable8"}
            ]*/
        })
        .then((resultados)=>{
            res.send("funciona");
            console.log(req.body);

        })
        /*let pedido_alta = db.tipo_alta.findAll();
        let pedido_distribuidor = db.distribuidor.findAll();
        

        Promise.all([pedido_alta,pedido_distribuidor])
            .then(([tipos_alta,distribuidores])=>{
                res.render("equipo_encontrado",{tipos_alta,distribuidores});
            });

            console.log(req.body);*/
    },
    guardar_inicio:(req,res)=>{
        console.log(req.body);
        db.Cuenta.create({
            fecha_ingreso_mail:"fecha: " + req.body.fecha_mail,
            pos_sunmi:"nr_pos: " + req.body.numero_pos,
            CuentaTipoAltaId:"tipo alta: " + req.body.tipo_alta,
            CuentaDistribuidorId:"distribuidor: " + req.body.distribuidor,
            distribuidor_nuevo:"distribuidor nuevo: " + req.body.distribuidor_nuevo,
            numero_cuenta:"numero_cuenta: " + req.body.numero_cuenta,
            busqueda_x_id:"busqueda id: " + req.body.numero_pos + req.body.numero_cuenta
        }).
        then((resultados)=>{
            console.log(req.body)
            res.redirect("/procesos");
        })/*
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