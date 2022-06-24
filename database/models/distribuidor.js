function distribuidor_data(sequelize,DataTypes){
    let alias = "distribuidor";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        nombre:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let distribuidor = sequelize.define(alias,cols,config);

    distribuidor.associate = (modelos)=>{
        distribuidor.hasMany(modelos.cuenta,{
            as:"distribuidor_cuenta",
            foreignKey:"id_distribuidor"
        });
    };

    return distribuidor;
};

module.exports = distribuidor_data;