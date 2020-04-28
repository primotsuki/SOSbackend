export default (sequelize, DataTypes) =>{
    const TestDiagMascota = sequelize.define('TestDiagMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_test: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    TestDiagMascota.associate = models => {
        TestDiagMascota.belongsTo(models.TestDiagnostico,{
            foreignKey:{
                name:'test_id',
                field: 'diagnostico_id'
            },
            as: 'test'
        });
        TestDiagMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return TestDiagMascota;
}