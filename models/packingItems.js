module.exports = (sequelize, DataTypes) => {
    const packingItems = sequelize.define('packingItems', {
        ItemName: {
            type: DataTypes.STRING,
            allowNull: false
        }

        }
    )
    return packingItems;
}