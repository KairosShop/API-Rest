'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Measures', [
      {
        measure: 'g',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        measure: 'kg',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        measure: 'l',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        measure: 'rollos',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        measure: 'pieza',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        measure: 'piezas',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        measure: 'ml',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Measures', null, {});
  },
};
