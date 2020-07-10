module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'Authentications',
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '1',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '2',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '3',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '4',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '5',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '6',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: '7',
          password:
            '$2b$10$hO.4uY66mD1ylMjOf3UBtuBpXvsGSZ/FBn6/dblrhgDeB5cNSKqCK',
        },
      ],
      {}
    ),

  down: (queryInterface) =>
    queryInterface.bulkDelete('Authentications', null, {}),
};
