function etapa_data(sequelize,DataTypes){
    let alias = "tetapa";

    let cols = {};

    let config = {timestamps:false};

    let etapa = sequelize.define(alias,cols,config);

    return etapa;
};

module.exports = etapa_data;