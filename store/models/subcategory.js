'use strict';

module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define(
    'Subcategory',
    {
      categoryId: DataTypes.INTEGER,
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
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Subcategory.associate = function (models) {
    // associations can be defined here
    Subcategory.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });

    Subcategory.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'subcategoryId',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    });
  };
  return Subcategory;
};
