export default (sequelize, DataTypes) =>{
    const Alergia = sequelize.define('Alergia',{
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gravedad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: true
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_diagnostico: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });
    Alergia.associate = models => {
        Alergia.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return Alergia;
}