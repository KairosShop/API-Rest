module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 2,
        total: 20.04,
        status: 'IN PROCESS',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        total: 46.13,
        status: 'SUCCESSFULL',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        total: 31.48,
        status: 'CANCEL',
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
