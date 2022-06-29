function etapa_data(sequelize,DataTypes){
    let alias = "Etapa";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        etapa:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Etapa = sequelize.define(alias,cols,config);

    Etapa.associate = (modelos)=>{
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_1",
            foreignKey:"CuentaEtapa1Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_2",
            foreignKey:"CuentaEtapa2Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_3",
            foreignKey:"CuentaEtapa3Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_4",
            foreignKey:"CuentaEtapa4Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_5",
            foreignKey:"CuentaEtapa5Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_6",
            foreignKey:"CuentaEtapa6Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_7",
            foreignKey:"CuentaEtapa7Id"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_8",
            foreignKey:"CuentaEtapa8Id"
        });
    };
    return Etapa;
};

module.exports = etapa_data;