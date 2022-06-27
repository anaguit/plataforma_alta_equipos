function etapa_data(sequelize,DataTypes){
    let alias = "etapa";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        etapa:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let etapa = sequelize.define(alias,cols,config);

    etapa.associate = (modelos)=>{
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_1",
            foreignKey:"id_etapa_1"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_2",
            foreignKey:"id_etapa_2"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_3",
            foreignKey:"id_etapa_3"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_4",
            foreignKey:"id_etapa_4"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_5",
            foreignKey:"id_etapa_5"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_6",
            foreignKey:"id_etapa_6"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_7",
            foreignKey:"id_etapa_7"
        }),
        etapa.hasMany(modelos.cuenta,{
            as:"etapa_cuenta_8",
            foreignKey:"id_etapa_8"
        });
    };
    return etapa;
};

module.exports = etapa_data;