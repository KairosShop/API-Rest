'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  };
  Price.init({
    productId: DataTypes.INTEGER,
    supermarketId: DataTypes.INTEGER,
    price: DataTypes.NUMBER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};