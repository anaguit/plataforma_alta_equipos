function etapa_data(sequelize,DataTypes){
    let alias = "Etapa";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        etapa:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Etapa = sequelize.define(alias,cols,config);

    Etapa.associate = (modelos)=>{
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_1",
            foreignKey:"id_etapa_1"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_2",
            foreignKey:"id_etapa_2"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_3",
            foreignKey:"id_etapa_3"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_4",
            foreignKey:"id_etapa_4"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_5",
            foreignKey:"id_etapa_5"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_6",
            foreignKey:"id_etapa_6"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_7",
            foreignKey:"id_etapa_7"
        }),
        Etapa.hasMany(modelos.Cuenta,{
            as:"Etapa_cuenta_8",
            foreignKey:"id_etapa_8"
        });
    };
    return Etapa;
};

module.exports = etapa_data;