
export default (sequelize, DataTypes) =>{
    const VacunasMascota = sequelize.define('VacunasMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_Vacuna: {
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
    VacunasMascota.associate = models => {
        VacunasMascota.belongsTo(models.Vacuna,{
            foreignKey:{
                name:'VacunaId',
                field: 'vacuna_id'
            },
            as: 'vacuna'
        });
        VacunasMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'MascotaId',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return VacunasMascota;
}