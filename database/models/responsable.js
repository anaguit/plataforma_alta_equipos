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
            as:"responsable_cuenta_1",
            foreignKey:"id_responsable_1"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_2",
            foreignKey:"id_responsable_2"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_3",
            foreignKey:"id_responsable_3"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_4",
            foreignKey:"id_responsable_4"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_5",
            foreignKey:"id_responsable_5"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_6",
            foreignKey:"id_responsable_6"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_7",
            foreignKey:"id_responsable_7"
        }),
        responsable.hasMany(modelos.cuenta,{
            as:"responsable_cuenta_8",
            foreignKey:"id_responsable_8"
        });
    };
    
    return responsable;
};

module.exports = responsable_data;