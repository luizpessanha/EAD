/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { // eslint-disable-line
    await queryInterface.bulkInsert(
      'Trails',
      [
        {
          name: 'Full Stack Java Script',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Especialista Java',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Especialista Ruby on Rails',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Especialis SQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) { // eslint-disable-line
    await queryInterface.bulkDelete('Trails', null, {});
  },
};
