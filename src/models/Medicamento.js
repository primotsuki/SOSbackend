
export default (sequelize, DataTypes) =>{
    const Medicamento = sequelize.define('Medicamento',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Medicamento.associate = models => {
        Medicamento.hasMany(models.VacunasMascota,{
            foreignKey:{
                name:'medicamento_id',
                field: 'medicamento_id'
            },
            as: 'medicamento_mascota'
        })
    }
    return Medicamento;
}