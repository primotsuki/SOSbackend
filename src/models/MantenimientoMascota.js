
export default (sequelize, DataTypes) =>{
    const MantenimientoMascota = sequelize.define('MantenimientoMascota',{
        Notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_mantenimiento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        recordatorio:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        realizado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    MantenimientoMascota.associate = models => {
        MantenimientoMascota.belongsTo(models.Mantenimiento,{
            foreignKey:{
                name:'mantenimientoId',
                field: 'mantenimiento_id'
            },
            as: 'mantenimiento'
        });
        MantenimientoMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'MascotaId',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return MantenimientoMascota;
}