function estado_data(sequelize,DataTypes){
    let alias = "estado";

    let cols = {};

    let config = {timestamps:false};

    let estado = sequelize.define(alias,cols,config);

    return estado;
};

module.exports = estado_data;