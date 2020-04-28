
export default (sequelize, DataTypes) =>{
    const ComidaMascota = sequelize.define('ComidaMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_comida: {
            type: DataTypes.DATE,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        medida: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recordatorio:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        hora_recordatorio: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    ComidaMascota.associate = models => {
        ComidaMascota.belongsTo(models.Suministro,{
            foreignKey:{
                name:'suministro_id',
                field: 'suministro_id'
            },
            as: 'suministro'
        });
        ComidaMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return ComidaMascota;
}