const fs = require("fs");
const path = require("path");

const User = require('./User');
const Client = require('./Client');
const Service = require('./Service');
const Appointment = require('./Appointment');

const db = {
    sequelize,
    User,
    Client,
    Service,
    Appointment
}

const applyAssociations = require("./Associations");
applyAssociations(db);

module.exports = db;
