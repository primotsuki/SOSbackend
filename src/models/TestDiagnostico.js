export default (sequelize, DataTypes) =>{
    const TestDiagnostico = sequelize.define('TestDiagnostico',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    TestDiagnostico.associate = models => {
        TestDiagnostico.hasMany(models.TestDiagMascota,{
            foreignKey:{
                name:'test_id',
                field: 'diagnostico_id'
            },
            as: 'test'
        })
    }
    return TestDiagnostico;
}