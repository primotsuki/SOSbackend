
export default (sequelize, DataTypes) =>{
    const TipoMascota = sequelize.define('TipoMascota',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    TipoMascota.associate = models => {
        TipoMascota.hasMany(models.Mascota,{
            foreignKey:{
                name:'tipoId',
                field: 'tipo_id'
            },
            as: 'mascotas'
        })
    }
    return TipoMascota;
}