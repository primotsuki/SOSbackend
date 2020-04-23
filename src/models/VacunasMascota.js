
export default (sequelize, DataTypes) =>{
    const VacunasMascota = sequelize.define('VacunasMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_vacuna: {
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
                name:'vacuna_id',
                field: 'vacuna_id'
            },
            as: 'vacuna'
        });
        VacunasMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return VacunasMascota;
}