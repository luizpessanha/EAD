/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { // eslint-disable-line
    await queryInterface.bulkInsert('Courses', [
      {
        name: 'Java Script 1',
        active: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Java Script 2',
        active: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Java Script 1',
        active: false,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Java Script 3',
        active: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Java Script 4',
        active: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Java Script 5',
        active: true,
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) { // eslint-disable-line
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
