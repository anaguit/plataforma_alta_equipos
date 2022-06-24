function estado_data(sequelize,DataTypes){
    let alias = "estado";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        estado:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let estado = sequelize.define(alias,cols,config);

    estado.associate = (modelos)=>{
        estado.hasMany(modelos.cuenta,{
            as:"estado_cuenta",
            foreignKey:"id_estado"
        });
    };
    return estado;
};

module.exports = estado_data;