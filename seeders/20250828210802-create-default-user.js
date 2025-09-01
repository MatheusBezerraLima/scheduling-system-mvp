'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin123', 8); // Criptografa a senha 'admin123'

    await queryInterface.bulkInsert('users', [{
      id: uuidv4(),
      name: 'Admin',
      email: 'admin@exemplo.com',
      password: hashedPassword,
      status: "Ativo",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { email: 'admin@exemplo.com' }, {});
  }
};
