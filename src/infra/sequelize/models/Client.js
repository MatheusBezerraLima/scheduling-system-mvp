const { DataTypes, Model} = require("sequelize");
const sequelize = require('../../../config/database');

const Client = sequelize.define('client', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "client",
    timestamps: true
});

module.exports = Client;