'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      Orders.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      Orders.hasMany(models.OrdersDetails, {
        as: 'details',
        foreignKey: 'orderId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }

  Orders.init(
    {
      userId: DataTypes.INTEGER,
      total: { type: DataTypes.DECIMAL, allowNull: false },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        efaultValue: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        efaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Orders',
    }
  );
  return Orders;
};