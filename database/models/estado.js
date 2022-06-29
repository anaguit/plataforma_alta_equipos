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
            foreignKey:"id_estado_1"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_2",
            foreignKey:"id_estado_2"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_3",
            foreignKey:"id_estado_3"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_4",
            foreignKey:"id_estado_4"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_5",
            foreignKey:"id_estado_5"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_6",
            foreignKey:"id_estado_6"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_7",
            foreignKey:"id_estado_7"
        }),
        Estado.hasMany(modelos.Cuenta,{
            as:"Estado_cuenta_8",
            foreignKey:"id_estado_8"
        });
    };
    return Estado;
};

module.exports = estado_data;