module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Lácteos y huevos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
