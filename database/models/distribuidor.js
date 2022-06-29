function distribuidor_data(sequelize,DataTypes){
    let alias = "Distribuidor";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        nombre:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Distribuidor = sequelize.define(alias,cols,config);

    Distribuidor.associate = (modelos)=>{
        Distribuidor.hasMany(modelos.Cuenta,{
            as:"DistribuidorCuenta",
            foreignKey:"CuentaDistribuidorId"
        });
    };

    return Distribuidor;
};

module.exports = distribuidor_data;