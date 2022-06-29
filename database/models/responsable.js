function responsable_data(sequelize,DataTypes){
    let alias = "Responsable";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        nombre:{type:DataTypes.STRING(50),allowNull:false}
    };

    let config = {timestamps:false};

    let Responsable = sequelize.define(alias,cols,config);

    Responsable.associate = (modelos)=>{
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_1",
            foreignKey:"id_responsable_1"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_2",
            foreignKey:"id_responsable_2"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_3",
            foreignKey:"id_responsable_3"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_4",
            foreignKey:"id_responsable_4"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_5",
            foreignKey:"id_responsable_5"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_6",
            foreignKey:"id_responsable_6"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_7",
            foreignKey:"id_responsable_7"
        }),
        Responsable.hasMany(modelos.Cuenta,{
            as:"Responsable_cuenta_8",
            foreignKey:"id_responsable_8"
        });
    };
    
    return Responsable;
};

module.exports = responsable_data;