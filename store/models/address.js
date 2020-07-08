'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Address.init(
    {
      userId: DataTypes.INTEGER,
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: { type: DataTypes.NUMBER, allowNull: false },
      longitude: { type: DataTypes.NUMBER, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Address',
    }
  );
  return Address;
};
