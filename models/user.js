module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false
    }
    })
    return User;
}



