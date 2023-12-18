'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        charset: 'utf8mb4', // Ajusta según tus necesidades
        collate: 'utf8mb4_unicode_ci', // Ajusta según tus necesidades
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
        defaultValue: 0
      },
      brandId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Brands'
          }
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories'
          }
        }
      },
      rubroId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Rubros'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      charset: 'utf8mb4', // Ajusta según tus necesidades
      collate: 'utf8mb4_unicode_ci' // Ajusta según tus necesidades
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
