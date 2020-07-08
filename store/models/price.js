'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    static associate(models) {
      Price.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      Price.belongsTo(models.Supermarket, {
        foreignKey: 'supermarketId',
        as: 'supermarket',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Price.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      supermarketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        efaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Price',
    }
  );
  return Price;
};
