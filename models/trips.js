module.exports = (sequelize, DataTypes) => {
    const Trip = sequelize.define('trip', {
        FlightFrom: {
        type: DataTypes.STRING,
        allowNull: false,    
        },
        FlightTo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PackingID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ArrivalDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ReturnDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
    return Trip;
}