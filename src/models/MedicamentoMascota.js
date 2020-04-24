
export default (sequelize, DataTypes) =>{
    const MedicamentoMascota = sequelize.define('MedicamentoMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_medicamento: {
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
    MedicamentoMascota.associate = models => {
        MedicamentoMascota.belongsTo(models.Medicamento,{
            foreignKey:{
                name:'medicamento_id',
                field: 'medicamento_id'
            },
            as: 'medicamento'
        });
        MedicamentoMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return MedicamentoMascota;
}