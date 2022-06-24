function cuenta_data(sequelize,DataTypes){
    let alias = "cuenta";

    let cols = {
        id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true,allowNull:false},
        fecha_ingreso_mail:{type:DataTypes.date,allowNull:false},
        pos_sunmi:{type:DataTypes.STRING(50),allowNull:false},
        id_tipo_alta:{type:DataTypes.INTEGER,allowNull:false},
        id_distribuidor:{type:DataTypes.INTEGER},
        distribuidor_nuevo:{type:DataTypes.STRING(50)},
        numero_cuenta:{type:DataTypes.STRING(50)},
        busqueda_x_id:{type:DataTypes.STRING(50)},
        id_etapa_1:{type:DataTypes.INTEGER},
        id_estado_1:{type:DataTypes.INTEGER},
        id_responsable_1:{type:DataTypes.INTEGER},
        id_etapa_2:{type:DataTypes.INTEGER},
        id_estado_2:{type:DataTypes.INTEGER},
        id_responsable_2:{type:DataTypes.INTEGER},
        id_etapa_3:{type:DataTypes.INTEGER},
        id_estado_3:{type:DataTypes.INTEGER},
        id_responsable_3:{type:DataTypes.INTEGER},
        id_etapa_4:{type:DataTypes.INTEGER},
        id_estado_4:{type:DataTypes.INTEGER},
        id_responsable_4:{type:DataTypes.INTEGER},
        id_etapa_5:{type:DataTypes.INTEGER},
        id_estado_5:{type:DataTypes.INTEGER},
        id_responsable_5:{type:DataTypes.INTEGER},
        id_etapa_6:{type:DataTypes.INTEGER},
        id_estado_6:{type:DataTypes.INTEGER},
        id_responsable_6:{type:DataTypes.INTEGER},
        id_etapa_7:{type:DataTypes.INTEGER},
        id_estado_7:{type:DataTypes.INTEGER},
        id_responsable_7:{type:DataTypes.INTEGER},
        id_etapa_8:{type:DataTypes.INTEGER},
        id_estado_8:{type:DataTypes.INTEGER},
        id_responsable_8:{type:DataTypes.INTEGER,}
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