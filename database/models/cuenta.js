function cuenta_data(sequelize,DataTypes){
    let alias = "cuenta";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false}
    };

    let config = {timestamps:false};

    let cuenta = sequelize.define(alias,cols,config);

    cuenta.associate = (modelos)=>{
        cuenta.belongsTo(modelos.distribuidor,{
            as:cuenta_distribuidor,
            foreingKey:"id_distribuidor"
        }),
        cuenta.belongsTo(modelos.estado,{
            as:"cuenta_estado",
            foreingKey:"id_estado"
        }),
        cuenta.belongsTo(modelos.etapa,{
            as:"cuenta_etapa",
            foreingKey:"id_etapa"
        }),
        cuenta.belongsTo(modelos.responsable,{
            as:"cuenta_responsable",
            foreingKey:"id_responsable"
        }),
        cuenta.belongsTo(modelos.tipo_alta,{
            as:"cuenta_tipo_alta",
            foreingKey:"id_tipo_alta"
        })
    };
    return cuenta;
};

module.exports = cuenta_data;