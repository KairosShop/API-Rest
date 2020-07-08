'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supermarket extends Model {
    static associate(models) {
      Supermarket.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      Supermarket.hasMany(models.Price, {
        as: 'prices',
        foreignKey: 'priceId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }

  Supermarket.init(
    {
      userId: DataTypes.INTEGER,
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: { type: DataTypes.DECIMAL, allowNull: false },
      longitude: { type: DataTypes.DECIMAL, allowNull: false },
      urlImage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      supermarket: {
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
      modelName: 'Supermarket',
    }
  );
  return Supermarket;
};
