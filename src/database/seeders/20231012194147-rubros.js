'use strict';

const rubrosJSON = require("../../data/rubros.json");
const rubros = rubrosJSON.map(rubro => {
  return {
    name: rubro,
    image: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Rubros', rubros , {});
  
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Rubros', null, {});

  }
};
