
export default (sequelize, DataTypes) =>{
    const PruebaDiagnostico = sequelize.define('PruebaDiagnostico',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_prueba: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });
    PruebaDiagnostico.associate = models => {
        PruebaDiagnostico.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return PruebaDiagnostico;
}