export default (sequelize, DataTypes) =>{
    const Mantenimiento = sequelize.define('Mantenimiento',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Mantenimiento.associate = models => {
        Mantenimiento.belongsTo(models.GrupoMantenimiento,{
            foreignKey:{
                name:'GrupoId',
                field: 'grupo_id'
            },
            as: 'grupo'
        });
        Mantenimiento.hasMany(models.MantenimientoMascota,{
            foreignKey: {
                name:'mantenimientoId',
                field: 'mantenimiento_id'
            },
            as: 'MantenimientoMascota'
        })
    }
    return Mantenimiento;
}