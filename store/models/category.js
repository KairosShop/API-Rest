'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      title: DataTypes.STRING(30),
      urlImage: DataTypes.TEXT,
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {}
  );
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Subcategory, {
      as: 'subcategories',
      foreignKey: 'categoryId',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Category.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Category;
};
