function estado_data(sequelize,DataTypes){
    let alias = "Estado";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        estado:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Estado = sequelize.define(alias,cols,config);

    Estado.associate = (modelos)=>{
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_1",
            foreignKey:"CuentaEstado1Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_2",
            foreignKey:"CuentaEstado2Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_3",
            foreignKey:"CuentaEstado3Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_4",
            foreignKey:"CuentaEstado4Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_5",
            foreignKey:"CuentaEstado5Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_6",
            foreignKey:"CuentaEstado6Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_7",
            foreignKey:"CuentaEstado7Id"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_8",
            foreignKey:"CuentaEstado8Id"
        });
    };
    return Estado;
};

module.exports = estado_data;