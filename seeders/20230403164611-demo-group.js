/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Groups',
      [
        {
          name: 'Java Script Básico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NodeJS Básico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ruby Básico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SQL Básico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {},
    );
  },

  async down(queryInterface, Sequelize) { // eslint-disable-line
    await queryInterface.bulkDelete('Groups', null, {});
  },
};
