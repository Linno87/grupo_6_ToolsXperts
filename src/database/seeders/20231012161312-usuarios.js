"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          first_name: "Admin",
          last_name: "toolsxperts",
          email: "admin@gmail.com",
          password:
            "$2a$08$nLG66Q3Z2Ha5u1PSEtatFeJApaL8x2tOiff0Hyv6dkO6sjD44/oa.",
          about: null,
          avatar: null,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: "User",
          last_name: "toolsxperts",
          email: "user@gmail.com",
          password:
            "$2a$08$nLG66Q3Z2Ha5u1PSEtatFeJApaL8x2tOiff0Hyv6dkO6sjD44/oa.",
          about: null,
          avatar: null,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
