export default (sequelize, DataTypes) =>{
    const Patologia = sequelize.define('Patologia',{
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gravedad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acciones: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });
    Patologia.associate = models => {
        Patologia.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return Patologia;
}