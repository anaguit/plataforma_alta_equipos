function tipo_alta_data(sequelize,DataTypes){
    let alias = "tipo_alta";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        tipo:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let tipo_alta = sequelize.define(alias,cols,config);

    tipo_alta.associate = (modelos)=>{
        tipo_alta.hasMany(modelos.cuenta,{
            as:"tipo_alta_cuenta",
            foreignKey:"id_tipo_alta"
        })
    };
    
    return tipo_alta;
};

module.exports = tipo_alta_data;