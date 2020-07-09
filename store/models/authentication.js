'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authentication extends Model {
    static associate(models) {
      Authentication.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Authentication.init(
    {
      userId: DataTypes.INTEGER,
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Authentication',
    }
  );
  return Authentication;
};
