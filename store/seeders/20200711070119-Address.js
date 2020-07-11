module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        address: "1794 Nelson Street",
        userId: 1,
        latitude: 8.9270449,
        longitude: 2.3265854,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "99257 Northridge Parkway",
        userId: 1,
        latitude: 32.836978,
        longitude: 110.812403,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "1 Memorial Circle",
        userId: 3,
        latitude: 8.0075658,
        longitude: -35.0221895,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "495 Rigney Trail",
        userId: 2,
        latitude: 8.2101114,
        longitude: 124.8662656,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "478 Welch Terrace",
        userId: 4,
        latitude: 38.409359,
        longitude: -82.3614632,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "1 Bunting Center",
        userId: 5,
        latitude: 55.632969,
        longitude: 37.4416961,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "04933 Quincy Road",
        userId: 6,
        latitude: 18.144657,
        longitude: -94.4189829,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};