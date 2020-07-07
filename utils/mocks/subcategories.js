const subcategories = [
  {
    id: 1,
    categoryId: 3,
    title: 'Botanas',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101113388L.jpg',
  },
  {
    id: 2,
    categoryId: 3,
    title: 'Cereales y Barras',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100804295L.jpg',
  },
  {
    id: 3,
    categoryId: 3,
    title: 'Pastas',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00807680951520L.jpg',
  },
  {
    id: 4,
    categoryId: 3,
    title: 'Aceites de Cocina',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00841001027252L.jpg',
  },
  {
    id: 5,
    categoryId: 3,
    title: 'Leche Condensada',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861787L.jpg',
  },
  {
    id: 6,
    categoryId: 3,
    title: 'Azúcar y Postres',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750109620132L.jpg',
  },
  {
    id: 7,
    categoryId: 3,
    title: 'Dulces y Chocolates',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00075677401172L.jpg',
  },
  {
    id: 8,
    categoryId: 3,
    title: 'Café Té y Sustitutos',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861770L.jpg',
  },
  {
    id: 9,
    categoryId: 1,
    title: 'Quesos',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020533500000L.jpg',
  },
  {
    id: 10,
    categoryId: 1,
    title: 'Yogurt',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104009736L.jpg',
  },
  {
    id: 11,
    categoryId: 1,
    title: 'Leche',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102055817L.jpg',
  },
  {
    id: 12,
    categoryId: 1,
    title: 'Huevo',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750300055517L.jpg',
  },
  {
    id: 13,
    categoryId: 4,
    title: 'Pañales y toallitas húmedas para bebé',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750194341712L.jpg',
  },
  {
    id: 14,
    categoryId: 4,
    title: 'Artículos escolares',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750904838321L.jpg',
  },
  {
    id: 15,
    categoryId: 4,
    title: 'Cuidado e higiene del bebé',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750954603973L.jpg',
  },
  {
    id: 16,
    categoryId: 4,
    title: 'Juguetería',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00067341930309L.jpg',
  },
  {
    id: 17,
    categoryId: 2,
    title: 'Frutas',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000000004130L.jpg',
  },
  {
    id: 18,
    categoryId: 2,
    title: 'Orgánicos y Superfoods',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750225433586L.jpg',
  },
  {
    id: 19,
    categoryId: 2,
    title: 'Verduras',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750223617208L.jpg',
  },
  {
    id: 20,
    categoryId: 5,
    title: 'Limpieza del hogar',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103292366L.jpg',
  },
  {
    id: 21,
    categoryId: 5,
    title: 'Mascotas',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00070646002937L.jpg',
  },
  {
    id: 22,
    categoryId: 5,
    title: 'Desechables',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179162001L.jpg',
  },
  {
    id: 23,
    categoryId: 5,
    title: 'Artículos de lavandería',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103590323L.jpg',
  },
  {
    id: 24,
    categoryId: 5,
    title: 'Accesorios para Limpieza',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102311057L.jpg',
  },

  {
    id: 25,
    categoryId: 5,
    title: 'Refrescos',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    id: 26,
    categoryId: 6,
    title: 'Jugos y Néctares',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104007015L.jpg',
  },
  {
    id: 27,
    categoryId: 6,
    title: 'Energizantes e Hidratantes',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00003673132100L.jpg',
  },
  {
    id: 28,
    categoryId: 6,
    title: 'Agua',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750108680107L.jpg',
  },
  {
    id: 29,
    categoryId: 7,
    title: 'Licores',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    id: 30,
    categoryId: 7,
    title: 'Vinos',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00800057043540L.jpg',
  },
  {
    id: 31,
    categoryId: 7,
    title: 'Cervezas',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750106411254L.jpg',
  },
  {
    id: 32,
    categoryId: 8,
    title: 'Postres Congelados',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750113093439L.jpg',
  },
  {
    id: 33,
    categoryId: 8,
    title: 'Comida Fácil',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00066417700009L.jpg',
  },
  {
    id: 34,
    categoryId: 8,
    title: 'Hielo',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00040009176656L.jpg',
  },
  {
    id: 35,
    categoryId: 8,
    title: 'Frutas y Verduras Congeladas',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104790590L.jpg',
  },
  {
    id: 35,
    categoryId: 9,
    title: 'Medicamentos de Patente',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501081L.jpg',
  },
  {
    id: 37,
    categoryId: 9,
    title: 'Cuidado Personal',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00065024002056L.jpg',
  },
  {
    id: 38,
    categoryId: 9,
    title: 'Vitaminas y Suplementos',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501178L.jpg',
  },
  {
    id: 39,
    categoryId: 6,
    title: 'Café y Té Preparado',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105531787L.jpg',
  },
  {
    id: 40,
    categoryId: 10,
    title: 'Sushi',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020616900000L.jpg',
  },
  {
    id: 41,
    categoryId: 10,
    title: 'Aves',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020104100000L.jpg',
  },
  {
    id: 42,
    categoryId: 10,
    title: 'Mariscos',
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179160078L.jpg',
  },
];
module.exports = subcategories;
