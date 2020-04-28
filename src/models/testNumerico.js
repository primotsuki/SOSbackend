export default (sequelize, DataTypes) =>{
    const testNumerico = sequelize.define('testNumerico',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    testNumerico.associate = models => {
        testNumerico.hasMany(models.TestNumMascota,{
            foreignKey:{
                name:'numerico_id',
                field: 'numerico_id'
            },
            as: 'test'
        })
    }
    return testNumerico;
}