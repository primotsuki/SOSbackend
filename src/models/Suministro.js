export default (sequelize, DataTypes) =>{
    const Suministro = sequelize.define('Suministro',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Suministro.associate = models => {
        Suministro.hasMany(models.ComidaMascota,{
            foreignKey:{
                name:'suministro_id',
                field: 'suministro_id'
            },
            as: 'comidas'
        })
    }
    return Suministro;
}