function responsable_data(sequelize,DataTypes){
    let alias = "responsable";

    let cols = {};

    let config = {timestamps:false};

    let responsable = sequelize.define(alias,cols,config);

    return responsable;
};

module.exports = responsable_data;