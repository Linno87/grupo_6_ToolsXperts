"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Amoladora de Prueba",
          description: "Amoladora de Prueba",
          price: 600,
          discount: 12,
          brandId: 1,
          Image: "1692921179529_products_.png",
          categoryId: 1,
          rubroId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Agujereadora de Prueba",
          description: "Agujereadora de Prueba",
          price: 1500,
          discount: 0,
          brandId: 1,
          Image: "1692922324328_products_.jpeg",
          categoryId: 1,
          rubroId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amoladora de Prueba",
          description: "Amoladora de Prueba",
          price: 800,
          discount: 10,
          brandId: 1,
          Image: "1696078105141_products_.png",
          categoryId: 1,
          rubroId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Amoladora de Prueba",
          description: "Amoladora de Prueba",
          price: 2500,
          discount: 0,
          brandId: 1,
          Image: "1698119947008_products_.jpg",
          categoryId: 1,
          rubroId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
