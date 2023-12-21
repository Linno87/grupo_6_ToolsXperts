'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        User.hasMany(models.Address,{
        as: "address",
        foreignKey: "userId"
      })
      User.belongsTo(models.Role,{
        as: "role",
        foreignKey: "roleId"
      })
     
      User.belongsToMany(models.Product, {
        as:'favoriteProduct',
        through:'favorites',
        foreignKey:'userId',
        otherKey:'productId'
    });
    User.hasMany(models.Order,{
      foreignKey: 'userId',
      as:'orders'
    })
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    about: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    gender: DataTypes.STRING,
    date: DataTypes.DATE,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};