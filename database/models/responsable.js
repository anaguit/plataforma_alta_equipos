function responsable_data(sequelize,DataTypes){
    let alias = "responsable";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        nombre:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let responsable = sequelize.define(alias,cols,config);

    responsable.associate = (modelos)=>{
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta",
            foreignKey:"id_responsable"
        })
    };
    
    return responsable;
};

module.exports = responsable_data;