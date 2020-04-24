
export default (sequelize, DataTypes) =>{
    const UnidadMedida = sequelize.define('UnidadMedida',{
        unidad: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    UnidadMedida.associate = models => {
        UnidadMedida.belongsTo(models.TipoMedicion,{
            foreignKey:{
                name:'medida_id',
                field: 'medida_id'
            },
            as: 'tipo_medicion'
        });
        UnidadMedida.hasMany(models.Mascota,{
            foreignKey:{
                name:'unidad_id',
                field: 'unidad_id'
            },
            as: 'mascota'
        })
    }
    return UnidadMedida;
}