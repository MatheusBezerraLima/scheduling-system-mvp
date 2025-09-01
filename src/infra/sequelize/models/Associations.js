// Função que configura todas as associações entre os modelos do Sequelize.
function applyAssociations (db) {
  
const {sequelize, User, Client, Service, Appointment} = db;

User.hasMany(Service, { foreignKey: "userId"});
Service.belongsTo(User, { foreignKey: "userId"});

// Um Utilizador (User/Profissional) pode ter vários Agendamentos (Appointment).
User.hasMany(Appointment, { foreignKey: 'userId', as: 'appointmentsAsProfessional',});
Appointment.belongsTo(User, { foreignKey: 'userId', as: 'professional'});

// Um Cliente (Client) pode ter vários Agendamentos (Appointment).
Client.hasMany(Appointment, { foreignKey: 'clientId', as: 'appointments'});
Appointment.belongsTo(Client, { foreignKey: 'clientId', as: 'client'});

// Um Serviço (Service) pode estar em vários Agendamentos (Appointment).
Service.hasMany(Appointment, { foreignKey: 'serviceId',as: 'appointments'});
Appointment.belongsTo(Service, { foreignKey: 'serviceId', as: 'service'});
}

module.exports = applyAssociations  