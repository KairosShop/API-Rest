'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supermarket extends Model {

    static associate(models) {
      Supermarket.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  };
  Supermarket.init({
    userId: DataTypes.INTEGER,
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: { type: DataTypes.NUMBER, allowNull: false },
    longitude: { type: DataTypes.NUMBER, allowNull: false },
    urlImage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    supermarket: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Supermarket',
  });
  return Supermarket;
};