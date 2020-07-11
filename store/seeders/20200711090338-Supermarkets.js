module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Supermarkets', [
      {
        supermarket: 'PartnerRe Ltd.',
        address: '63422 Fordem Junction',
        latitude: 45.2220415,
        longitude: 14.6312221,
        urlImage: 'http://dummyimage.com/230x204.bmp/5fa2dd/ffffff',
        userId: 4,
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        supermarket: 'Virco Manufacturing Corporation',
        address: '54 Goodland Park',
        latitude: -6.9918507,
        longitude: 106.5878723,
        urlImage: 'http://dummyimage.com/209x125.jpg/ff4444/ffffff',
        userId: 3,
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        supermarket: 'Crown Crafts, Inc.',
        address: '303 Kings Road',
        latitude: 49.665033,
        longitude: 30.9894691,
        urlImage: 'http://dummyimage.com/229x104.png/dddddd/000000',
        userId: 5,
        active: true,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Supermarkets', null, {});
  },
};