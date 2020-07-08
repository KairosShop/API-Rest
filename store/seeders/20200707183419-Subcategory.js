module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Subcategories',
      [
        {
          categoryId:1,
          title: 'Pañales y toallitas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:1,
          title: 'Comida para bebés',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:1,
          title: 'Baño y cuidado corporal',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:1,
          title: 'Accesorios para bebé',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:2,
          title: 'Leche',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:2,
          title: 'Quesos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:2,
          title: 'Yogurt',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:2,
          title: 'Huevos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:3,
          title: 'Harinas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:3,
          title: 'Especies y condimentos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:3,
          title: 'Untables',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:3,
          title: 'Aceites y vinagres',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:4,
          title: 'Refrescos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:4,
          title: 'Agua',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:4,
          title: 'Jugos y néctares',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:4,
          title: 'Cafe',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:5,
          title: 'Dulces y chocolares',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:5,
          title: 'Palomitas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:5,
          title: 'Snacks',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:5,
          title: 'Galletas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:6,
          title: 'Carnes rojas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:6,
          title: 'Aves',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:6,
          title: 'Chorizo, salchichas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:6,
          title: 'Pescados y mariscos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:7,
          title: 'Afeitado',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:7,
          title: 'Cuidado del cabello',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:7,
          title: 'Cuidado femenino',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:7,
          title: 'Depilación',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:8,
          title: 'Frutas y verduras',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:8,
          title: 'Helados y hielo',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:8,
          title: 'Productos congelados',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:8,
          title: 'Comidas prepradas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:9,
          title: 'Frutas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:9,
          title: 'Verduras',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:9,
          title: 'Sopas y cremas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:9,
          title: 'Atún',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:10,
          title: 'Perros',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:10,
          title: 'Gatos',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:10,
          title: 'Limpieza mascotas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId:10,
          title: 'Otras mascotas',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Subcategories', null, {}),
};