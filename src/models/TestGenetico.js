export default (sequelize, DataTypes) =>{
    const TestGenetico = sequelize.define('TestGenetico',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    TestGenetico.associate = models => {
        TestGenetico.hasMany(models.TestGenMascota,{
            foreignKey:{
                name:'genetico_id',
                field: 'genetico_id'
            },
            as: 'test'
        })
    }
    return TestGenetico;
}