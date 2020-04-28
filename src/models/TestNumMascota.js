
export default (sequelize, DataTypes) =>{
    const TestNumMascota = sequelize.define('TestNumMascota',{
        notas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        valor: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        margen_bajo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        margen_alto: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        fecha_test: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    TestNumMascota.associate = models => {
        TestNumMascota.belongsTo(models.TestNumerico,{
            foreignKey:{
                name:'test_id',
                field: 'numerico_id'
            },
            as: 'test'
        });
        TestNumMascota.belongsTo(models.UnidadMedida,{
            foreignKey:{
                name: 'unidad_id',
                field: 'unidad_id'
            },
            as: 'unidad'
        })
        TestNumMascota.belongsTo(models.Mascota,{
            foreignKey:{
                name: 'mascota_id',
                field: 'mascota_id'
            },
            as: 'mascota'
        });

    }
    return TestNumMascota;
}