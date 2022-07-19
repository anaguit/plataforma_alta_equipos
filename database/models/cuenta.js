function cuenta_data(sequelize,DataTypes){
    let alias = "Cuenta";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        fecha_ingreso_mail:{type:DataTypes.DATE,allowNull:false},
        hora_ingreso_mail:{type:DataTypes.TIME, allowNull:false},
        pos_sunmi:{type:DataTypes.STRING(50),allowNull:false},
        distribuidor_nuevo:{type:DataTypes.STRING(50)},
        numero_cuenta:{type:DataTypes.STRING(50)},
        busqueda_x_id:{type:DataTypes.STRING(50)},
        diferencia_hora:{type:DataTypes.TIME, allowNull:false}
    };

    let config = {
        tableName:"cuenta",
        timestamps:false
    };

    let Cuenta = sequelize.define(alias,cols,config);

    Cuenta.associate = (modelos)=>{
        Cuenta.belongsTo(modelos.Tipo_alta,{
            as:"CuentaTipoAlta",
            foreingKey:"CuentaTipoAltaId"
        }),
        Cuenta.belongsTo(modelos.Distribuidor,{
            as:"CuentaDistribuidor",
            foreingKey:"CuentaDistribuidorId"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado1",
            foreingKey:"CuentaEstado1Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa1",
            foreingKey:"CuentaEtapa1Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable1",
            foreingKey:"CuentaResponsable1Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado2",
            foreingKey:"CuentaEstado2Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa2",
            foreingKey:"CuentaEtapa2Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable2",
            foreingKey:"CuentaResponsable2Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado3",
            foreingKey:"CuentaEstado3Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa3",
            foreingKey:"CuentaEtapa3Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable3",
            foreingKey:"CuentaResponsable3Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado4",
            foreingKey:"CuentaEstado4Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa4",
            foreingKey:"CuentaEtapa4Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable4",
            foreingKey:"CuentaResponsable4Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado5",
            foreingKey:"CuentaEstado5Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa5",
            foreingKey:"CuentaEtapa5Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable5",
            foreingKey:"CuentaResponsable5Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado6",
            foreingKey:"CuentaEstado6"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa6",
            foreingKey:"CuentaEtapa6Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable6",
            foreingKey:"CuentaResponsable6Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado7",
            foreingKey:"CuentaEstado7Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa7",
            foreingKey:"CuentaEtapa7Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable7",
            foreingKey:"CuentaResponsable7Id"
        }),
        Cuenta.belongsTo(modelos.Estado,{
            as:"CuentaEstado8",
            foreingKey:"CuentaEstado8Id"
        }),
        Cuenta.belongsTo(modelos.Etapa,{
            as:"CuentaEtapa8",
            foreingKey:"CuentaEtapa8Id"
        }),
        Cuenta.belongsTo(modelos.Responsable,{
            as:"CuentaResponsable8",
            foreingKey:"CuentaResponsable8Id"
        })
    };
    return Cuenta;
};

module.exports = cuenta_data;