module.exports = (sequelize, DataTypes) => {
    const premadeList = sequelize.define('premadeList', {
        ItemName: {
            type: DataTypes.STRING,
            allowNull: true 
        }
    })
    return premadeList;
}