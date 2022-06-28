function estado_data(sequelize,DataTypes){
    let alias = "estado";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        estado:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let estado = sequelize.define(alias,cols,config);

    estado.associate = (modelos)=>{
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_1",
            foreignKey:"id_estado_1"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_2",
            foreignKey:"id_estado_2"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_3",
            foreignKey:"id_estado_3"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_4",
            foreignKey:"id_estado_4"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_5",
            foreignKey:"id_estado_5"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_6",
            foreignKey:"id_estado_6"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_7",
            foreignKey:"id_estado_7"
        }),
        estado.hasMany(modelos.Cuenta,{
            as:"estado_cuenta_8",
            foreignKey:"id_estado_8"
        });
    };
    return estado;
};

module.exports = estado_data;