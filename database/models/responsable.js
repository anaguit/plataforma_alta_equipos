function responsable_data(sequelize,DataTypes){
    let alias = "Responsable";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        nombre:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Responsable = sequelize.define(alias,cols,config);

    Responsable.associate = (modelos)=>{
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_1",
            foreignKey:"CuentaResponsable1Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_2",
            foreignKey:"CuentaResponsable2Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_3",
            foreignKey:"CuentaResponsable3Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_4",
            foreignKey:"CuentaResponsable4Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_5",
            foreignKey:"CuentaResponsable5Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_6",
            foreignKey:"CuentaResponsable6Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_7",
            foreignKey:"CuentaResponsable7Id"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_8",
            foreignKey:"CuentaResponsable8Id"
        });
    };
    
    return Responsable;
};

module.exports = responsable_data;