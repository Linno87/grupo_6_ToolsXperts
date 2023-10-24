"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, {
        as: "user",
        through: "favorites",
        foreignKey: "productId",
        otherKey: "userId",
      });
      Product.belongsTo(models.Brand, {
        as: "brand",
        foreignKey: "brandId",
      });

      Product.belongsTo(models.Category, {
        as: "category",
        foreignKey: "categoryId",
      });

      Product.hasMany(models.Image, {
        as: "images",
        foreignKey: "productId",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
