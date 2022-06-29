function tipo_alta_data(sequelize,DataTypes){
    let alias = "Tipo_alta";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        tipo:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Tipo_alta = sequelize.define(alias,cols,config);

    Tipo_alta.associate = (modelos)=>{
        Tipo_alta.hasMany(modelos.Cuenta,{
            as:"TipoAltaCuenta",
            foreignKey:"CuentaTipoAltaId"
        })
    };
    
    return Tipo_alta;
};

module.exports = tipo_alta_data;