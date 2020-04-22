
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
        },
        proximo: {
            type: DataTypes.DATE,
            allowNull: true
        },
        num_prog: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        intervalo_prog: {
            type: DataTypes.STRING,
            allowNull: true
        },
        programado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    MantenimientoMascota.associate = models => {
        MantenimientoMascota.belongsTo(models.Mantenimiento,{
            foreignKey:{
                name:'mantenimiento_id',
                field: 'mantenimiento_id'
            },
            as: 'mantenimiento'
        });
        MantenimientoMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return MantenimientoMascota;
}