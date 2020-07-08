'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Measure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Measure.hasMany(models.Product, {
        foreignKey: 'measureId',
        as: 'products',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Measure.init(
    {
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      measure: DataTypes.STRING(30),
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'Measure',
    }
  );
  return Measure;
};
