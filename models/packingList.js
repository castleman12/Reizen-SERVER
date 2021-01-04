module.exports = (sequelize, DataTypes) => {
    const packingList = sequelize.define('packingList', {

        TripID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return packingList;
}