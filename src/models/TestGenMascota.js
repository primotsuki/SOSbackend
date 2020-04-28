export default (sequelize, DataTypes) =>{
    const TestGenMascota = sequelize.define('TestGenMascota',{
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
    TestGenMascota.associate = models => {
        TestGenMascota.belongsTo(models.TestGenetico,{
            foreignKey:{
                name:'test_id',
                field: 'genetico_id'
            },
            as: 'test'
        });
        TestGenMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return TestGenMascota;
}