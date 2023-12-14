"use strict";

const productsJSON = require("../../data/products.json");
const products = productsJSON.map(({name, description, price, discount,brandId,image, categoryId, rubroId}) => {
  return {
    name,
    description,
    price,
    discount,
    brandId,
    Image: image,
    categoryId,
    rubroId,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products",products,{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
