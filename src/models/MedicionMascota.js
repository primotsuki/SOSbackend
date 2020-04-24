
export default (sequelize, DataTypes) =>{
    const MedicionMascota = sequelize.define('MedicionMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_medicion: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    MedicionMascota.associate = models => {
        MedicionMascota.belongsTo(models.TipoMedicion,{
            foreignKey:{
                name:'medicion_id',
                field: 'medicion_id'
            },
            as: 'tipo_medicion'
        });
        MedicionMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });
        MedicionMascota.belongsTo(models.UnidadMedida,{
            foreignKey:{
                name: 'unidad_id',
                field: 'unidad_id'
            },
            as: 'unidad'
        });
    }
    return MedicionMascota;
}