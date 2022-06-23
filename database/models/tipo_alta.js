function tipo_alta_data(sequelize,DataTypes){
    let alias = "tipo_alta";

    let cols = {};

    let config = {timestamps:false};

    let etipo_alta = sequelize.define(alias,cols,config);

    return tipo_alta;
};

module.exports = tipo_alta_data;