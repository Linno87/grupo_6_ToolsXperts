'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  
      this.belongsToMany(models.Product,{
        through:"Cart",
        foreignkey : "orderId",
        otherkey: "productId",
        as: "cart"
      });
      this.belongsTo(models.User,{
        foreignkey:"user",
        as:"user"
      })
    }
  }
  Order.init(
    {
      date: { type: DataTypes.DATE, defaultValue: new Date() },
      total: { type: DataTypes.INTEGER, defaultValue: 0 },
      userId: DataTypes.INTEGER,
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
        validate: {
          isIn: {
            args: [["pending", "completed", "canceled"]],
            msg: "Los valores validos son pending, completed o canceled",
          },
        },
      },
    }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};