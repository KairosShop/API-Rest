const subcategories = [
  {
    id: 1,
    category_id: 3,
    subcategory: 'Botanas',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101113388L.jpg',
  },
  {
    id: 2,
    category_id: 3,
    subcategory: 'Cereales y Barras',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100804295L.jpg',
  },
  {
    id: 3,
    category_id: 3,
    subcategory: 'Pastas',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00807680951520L.jpg',
  },
  {
    id: 4,
    category_id: 3,
    subcategory: 'Aceites de Cocina',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00841001027252L.jpg',
  },
  {
    id: 5,
    category_id: 3,
    subcategory: 'Leche Condensada',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861787L.jpg',
  },
  {
    id: 6,
    category_id: 3,
    subcategory: 'Azúcar y Postres',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750109620132L.jpg',
  },
  {
    id: 7,
    category_id: 3,
    subcategory: 'Dulces y Chocolates',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00075677401172L.jpg',
  },
  {
    id: 8,
    category_id: 3,
    subcategory: 'Café Té y Sustitutos',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861770L.jpg',
  },
  {
    id: 9,
    category_id: 1,
    subcategory: 'Quesos',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020533500000L.jpg',
  },
  {
    id: 10,
    category_id: 1,
    subcategory: 'Yogurt',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104009736L.jpg',
  },
  {
    id: 11,
    category_id: 1,
    subcategory: 'Leche',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102055817L.jpg',
  },
  {
    id: 12,
    category_id: 1,
    subcategory: 'Huevo',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750300055517L.jpg',
  },
  {
    id: 13,
    category_id: 4,
    subcategory: 'Pañales y toallitas húmedas para bebé',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750194341712L.jpg',
  },
  {
    id: 14,
    category_id: 4,
    subcategory: 'Artículos escolares',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750904838321L.jpg',
  },
  {
    id: 15,
    category_id: 4,
    subcategory: 'Cuidado e higiene del bebé',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750954603973L.jpg',
  },
  {
    id: 16,
    category_id: 4,
    subcategory: 'Juguetería',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00067341930309L.jpg',
  },
  {
    id: 17,
    category_id: 2,
    subcategory: 'Frutas',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000000004130L.jpg',
  },
  {
    id: 18,
    category_id: 2,
    subcategory: 'Orgánicos y Superfoods',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750225433586L.jpg',
  },
  {
    id: 19,
    category_id: 2,
    subcategory: 'Verduras',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750223617208L.jpg',
  },
  {
    id: 20,
    category_id: 5,
    subcategory: 'Limpieza del hogar',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103292366L.jpg',
  },
  {
    id: 21,
    category_id: 5,
    subcategory: 'Mascotas',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00070646002937L.jpg',
  },
  {
    id: 22,
    category_id: 5,
    subcategory: 'Desechables',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179162001L.jpg',
  },
  {
    id: 23,
    category_id: 5,
    subcategory: 'Artículos de lavandería',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103590323L.jpg',
  },
  {
    id: 24,
    category_id: 5,
    subcategory: 'Accesorios para Limpieza',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102311057L.jpg',
  },

  {
    id: 25,
    subcategory: 'Refrescos',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    id: 26,
    subcategory: 'Jugos y Néctares',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104007015L.jpg',
  },
  {
    id: 27,
    subcategory: 'Energizantes e Hidratantes',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00003673132100L.jpg',
  },
  {
    id: 28,
    subcategory: 'Agua',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750108680107L.jpg',
  },
  {
    id: 29,
    subcategory: 'Licores',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    id: 30,
    subcategory: 'Vinos',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00800057043540L.jpg',
  },
  {
    id: 31,
    subcategory: 'Cervezas',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750106411254L.jpg',
  },
  {
    id: 32,
    subcategory: 'Postres Congelados',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750113093439L.jpg',
  },
  {
    id: 33,
    subcategory: 'Comida Fácil',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00066417700009L.jpg',
  },
  {
    id: 34,
    subcategory: 'Hielo',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00040009176656L.jpg',
  },
  {
    id: 35,
    subcategory: 'Frutas y Verduras Congeladas',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104790590L.jpg',
  },
  {
    id: 35,
    subcategory: 'Medicamentos de Patente',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501081L.jpg',
  },
  {
    id: 37,
    subcategory: 'Cuidado Personal',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00065024002056L.jpg',
  },
  {
    id: 38,
    subcategory: 'Vitaminas y Suplementos',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501178L.jpg',
  },
  {
    id: 39,
    subcategory: 'Café y Té Preparado',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105531787L.jpg',
  },
  {
    id: 40,
    subcategory: 'Sushi',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020616900000L.jpg',
  },
  {
    id: 41,
    subcategory: 'Aves',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020104100000L.jpg',
  },
  {
    id: 42,
    subcategory: 'Mariscos',
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179160078L.jpg',
  },
];
module.exports = subcategories;
