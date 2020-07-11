module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        address: "1794 Nelson Street",
        userId: 6,
        latitude: 8.9270449,
        longitude: 2.3265854,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "99257 Northridge Parkway",
        userId: 6,
        latitude: 32.836978,
        longitude: 110.812403,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "1 Memorial Circle",
        userId: 7,
        latitude: 8.0075658,
        longitude: -35.0221895,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "495 Rigney Trail",
        userId: 7,
        latitude: 8.2101114,
        longitude: 124.8662656,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};