function etapa_data(sequelize,DataTypes){
    let alias = "etapa";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        etapa:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let etapa = sequelize.define(alias,cols,config);

    return etapa;
};

module.exports = etapa_data;