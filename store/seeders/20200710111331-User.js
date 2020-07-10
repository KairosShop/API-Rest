module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'admin@kairosshop.xyz',
          firstName: 'Alejandro',
          lastName: 'Lopez',
          rol:'ADMIN',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'admin2@kairosshop.xyz',
          firstName: 'Carlos',
          lastName: 'Enrique',
          rol:'ADMIN',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'super1@kairosshop.xyz',
          firstName: 'Marco',
          lastName: 'Elizalde',
          rol:'SUPER MARKET',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'super2@kairosshop.xyz',
          firstName: 'Nestos',
          lastName: 'Arellano',
          rol:'SUPER MARKET',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'super3@kairosshop.xyz',
          firstName: 'Armando',
          lastName: 'Rivera',
          rol:'SUPER MARKET',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'customer1@kairosshop.xyz',
          firstName: 'Nicolas',
          lastName: 'Molina',
          rol:'CUSTOMER',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'customer2@kairosshop.xyz',
          firstName: 'Yesica',
          lastName: 'Cortes',
          rol:'CUSTOMER',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
