export default (sequelize, DataTypes) =>{
    const Cirugia = sequelize.define('Cirugia',{
        tipo_cirugia: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        observaciones: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    Cirugia.associate = models => {
        Cirugia.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return Cirugia;
}