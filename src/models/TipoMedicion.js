export default (sequelize, DataTypes) =>{
    const TipoMedicion = sequelize.define('TipoMedicion',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    TipoMedicion.associate = models => {
        TipoMedicion.hasMany(models.UnidadMedida,{
            foreignKey:{
                name:'medida_id',
                field: 'medida_id'
            },
            as: 'unidades'
        });
        TipoMedicion.hasMany(models.MedicionMascota,{
            foreignKey:{
                name:'medicion_id',
                field: 'medicion_id'
            },
            as: 'medicion'
        })
    }
    return TipoMedicion;
}