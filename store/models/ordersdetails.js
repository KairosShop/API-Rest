'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdersDetails extends Model {
    static associate(models) {
      OrdersDetails.belongsTo(models.Orders, {
        foreignKey: 'orderId',
        as: 'orders',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      OrdersDetails.belongsTo(models.Supermarket, {
        foreignKey: 'supermarketId',
        as: 'supermarket',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
      OrdersDetails.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'products',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  OrdersDetails.init(
    {
      orderId: DataTypes.INTEGER,
      supermarketId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: { type: DataTypes.DECIMAL, allowNull: false },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        efaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'OrdersDetails',
    }
  );
  return OrdersDetails;
};
