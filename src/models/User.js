export default (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail:{
                    args: true,
                    msg: "El email es invalido"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.associate = models =>{
        User.hasMany(models.Mascota,{
            foreignKey:{
                name: 'UserId',
                field: 'user_id'
            },
            as: 'mascotas'
        });
    };
    return User;
}