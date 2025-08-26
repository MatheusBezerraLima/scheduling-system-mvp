const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../../config/database');

const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("agendado", "concluído", "cancelado", "aguardando"),
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "user",
            key: "id"
        }
    },
    clientId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "client",
            key: "id"
        }
    },
    servicesId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "services",
            key: "id"
        }
    }
}, {
    tableName: "appointment",
    timestamps: true
});

module.exports = Appointment;