
export default (sequelize, DataTypes) =>{
    const Vacuna = sequelize.define('Vacuna',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Vacuna.associate = models => {
        Vacuna.hasMany(models.VacunasMascota,{
            foreignKey:{
                name:'VacunaId',
                field: 'vacuna_id'
            },
            as: 'vacunas_mascota'
        })
    }
    return Vacuna;
}