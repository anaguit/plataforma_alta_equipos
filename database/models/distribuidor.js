function distribuidor_data(sequelize,DataTypes){
    let alias = "distribuidor";

    let cols = {};

    let config = {timestamps:false};

    let distribuidor = sequelize.define(alias,cols,config);

    return distribuidor;
};

module.exports = distribuidor_data;