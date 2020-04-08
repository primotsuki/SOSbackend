export default (sequelize,DataTypes) => {
    const Mascota = sequelize.define('Mascota',{
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isAlphanumeric:{
                    args:true,
                    msg: "la mascota debe tener solo letras o numeros"
                }
            }
        },
        caracteristicas:{
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_nacimiento:{
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        },
        mes_aprox:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        year_aprox:{
            type: DataTypes.INTEGER,
            allowNull:true
        }
    });
    Mascota.associate = models => {
        Mascota.belongsTo(models.User,{
            foreignKey: {
                name: 'UserId',
                field: 'user_id'
            }
        });
        Mascota.belongsTo(models.TipoMascota, {
            foreignKey: {
                name: 'tipoId',
                field: 'tipo_id'
            },
            as: 'tipo'
        });
        Mascota.hasMany(models.VacunasMascota,{
            foreignKey:{
                name: 'MascotaId',
                field: 'mascota_id'
            },
            as: 'vacunasMascota'
        });
        Mascota.hasMany(models.MantenimientoMascota, {
            foreignKey: {
                name: 'MascotaId',
                field: 'mascota_id'
            },
            as: 'mantenimiento'
        });
    };
    return Mascota;
}