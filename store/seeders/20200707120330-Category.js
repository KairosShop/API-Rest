module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          title: 'Bebés',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Lácteos y huevos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Despensa',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Bebidas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Botanass, galletas y dulces',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Hogar',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Carnes, aves y peces',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Cuidado personal',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Congelados',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Productos en conserva',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Mascotas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
