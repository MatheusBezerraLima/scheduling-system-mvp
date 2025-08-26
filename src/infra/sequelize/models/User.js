const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../config/database');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "user",
    timestamps: true
});

module.exports = User;