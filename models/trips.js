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
        ArrivalDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        ReturnDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        packingList: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true, 
        }
        
    })
    return Trip;
}