export default (sequelize, DataTypes) =>{
    const GrupoMantenimiento = sequelize.define('GrupoMantenimiento',{
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    GrupoMantenimiento.associate = models => {
        GrupoMantenimiento.hasMany(models.Mantenimiento,{
            foreignKey:{
                name:'GrupoId',
                field: 'grupo_id'
            },
            as: 'mantenimientos'
        })
    }
    return GrupoMantenimiento;
}