function cuenta_data(sequelize,DataTypes){
    let alias = "cuenta";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false}
    };

    let config = {timestamps:false};

    let cuenta = sequelize.define(alias,cols,config);

    return cuenta;
};

module.exports = cuenta_data;