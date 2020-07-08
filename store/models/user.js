'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Authentication, {
        foreignKey: 'userId',
        as: 'authentication',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      User.hasMany(models.Address, {
        foreignKey: 'userId',
        as: 'addresses',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });

      User.hasMany(models.Supermarket, {
        foreignKey: 'userId',
        as: 'supermarkets',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  User.init(
    {
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
