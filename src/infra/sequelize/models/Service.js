const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../config/database');

const Services = sequelize.define('services', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    durationInMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "user",
            key: "id"
        }
    }

}, {
    tableName: "services",
    timestamps: true
});

module.exports = Services;