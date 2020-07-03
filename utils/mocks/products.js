const categories = [
  {
    id: 1,
    title: 'Papas Sabritas Original',
    quantity: 170,
    measure_id: 2,
    description: 'Papas fritas saladas.',
    category_id: 3,
    subcategory_id: 1,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101113388L.jpg',
  },
  {
    id: 2,
    title: "Cereal Kellogg's Zucaritas",
    quantity: 490,
    measure_id: 2,
    description: 'Despierta cada mañana con Zucaritas.',
    category_id: 3,
    subcategory_id: 2,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100804295L.jpg',
  },
  {
    id: 3,
    title: 'Spaguetti Barilla No. 5',
    quantity: 500,
    measure_id: 2,
    description: 'Spaghetti Barilla.',
    category_id: 3,
    subcategory_id: 3,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00807680951520L.jpg',
  },
  {
    id: 4,
    title: 'Aceite de oliva Carbonell extra virgen',
    quantity: 500,
    measure_id: 3,
    description: 'Aceite de oliva extra virgen Carbonell.',
    category_id: 3,
    subcategory_id: 4,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00841001027252L.jpg',
  },
  {
    id: 5,
    title: 'Leche condensada Nestlé La Lechera original',
    quantity: 387,
    measure_id: 2,
    description: 'Leche condensada LA LECHERA.',
    category_id: 3,
    subcategory_id: 5,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861787L.jpg',
  },
  {
    id: 6,
    title: 'Endulzante Svetia sin calorías',
    quantity: 300,
    measure_id: 5,
    description: 'Endulzante de la marca Stevia.',
    category_id: 3,
    subcategory_id: 6,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750109620132L.jpg',
  },
  {
    id: 7,
    title: 'Chocolate Turin amargo sin azúcar',
    quantity: 18,
    measure_id: 2,
    description:
      'Deleita a tu familia con su exquisito sabor que te encantará.',
    category_id: 3,
    subcategory_id: 7,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00075677401172L.jpg',
  },
  {
    id: 8,
    title: 'Café soluble Nescafé clásico',
    quantity: 225,
    measure_id: 2,
    description: 'Nescafé clásico en su presentación de 225 gramos.',
    category_id: 3,
    subcategory_id: 8,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861770L.jpg',
  },
  {
    id: 9,
    title: 'Queso tipo manchego Nochebuena',
    quantity: 1,
    measure_id: 1,
    description: 'Queso manchego de la marca Nochebuena.',
    category_id: 1,
    subcategory_id: 9,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020533500000L.jpg',
  },
  {
    id: 10,
    title: 'Yoghurt Yoplait Almond bebible fresa',
    quantity: 220,
    measure_id: 2,
    description: 'El clásico yoghurt lácteo.',
    category_id: 1,
    subcategory_id: 10,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104009736L.jpg',
  },
  {
    id: 11,
    title: 'Leche Lala deslactosada',
    quantity: 6,
    measure_id: 5,
    description: 'Leche Lala Deslactosada.',
    category_id: 1,
    subcategory_id: 11,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102055817L.jpg',
  },
  {
    id: 12,
    title: 'Huevo blanco San Juan',
    quantity: 30,
    measure_id: 5,
    description: 'Haz de huevo san juan el protagonista de tus platillos.',
    category_id: 1,
    subcategory_id: 12,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750300055517L.jpg',
  },
  {
    id: 13,
    title: 'Refresco Coca Cola',
    quantity: 600,
    measure_id: 4,
    description: 'Sabor original.',
    category_id: 6,
    subcategory_id: 25,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    id: 14,
    title: 'Café Olé light cappuccino clásico',
    quantity: 281,
    measure_id: 4,
    description:
      'Bebida de café Olé cappuccino de 281 mililitros, para refrescarte al iniciar el día.',
    category_id: 6,
    subcategory_id: 26,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104007015L.jpg',
  },
  {
    id: 15,
    title: 'Bebida Gatorade sabor naranja',
    quantity: 1,
    measure_id: 3,
    description: 'Mantente fresco con Gatorade.',
    category_id: 6,
    subcategory_id: 27,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00003673132100L.jpg',
  },
  {
    id: 16,
    title: 'Agua Epura',
    quantity: 10.1,
    measure_id: 3,
    description: 'Epura en presentación familiar de 10.1l.',
    category_id: 6,
    subcategory_id: 28,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750108680107L.jpg',
  },
  {
    id: 17,
    title: 'Néctar clarificado Jumex manzana',
    quantity: 1,
    measure_id: 3,
    description: 'Hecho con 100% fruta natural.',
    category_id: 6,
    subcategory_id: 26,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101312202L.jpg',
  },
  {
    id: 18,
    title: 'Pañales Huggies UltraConfort etapa 6 niño',
    quantity: 6,
    measure_id: 5,
    description:
      'Huggies UltraConfort es el único pañal que brinda total libertad de movimiento.',
    category_id: 4,
    subcategory_id: 13,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750194341712L.jpg',
  },
  {
    id: 19,
    title: 'Lapicera Chenson Fulanitos Tadi',
    quantity: 1,
    measure_id: 5,
    description:
      'Lleva la diversión de Fulanitos a la escuela con esta lapicera de la marca Chenson.',
    category_id: 4,
    subcategory_id: 14,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750904838321L.jpg',
  },
  {
    id: 20,
    title: 'Talco para bebés Mennen baby magic hipoalergénico azul',
    quantity: 500,
    measure_id: 2,
    description:
      'Consiente la piel de tu pequeño utilizando el Talco Mennen Baby Magic Azul.',
    category_id: 4,
    subcategory_id: 15,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750954603973L.jpg',
  },
  {
    id: 21,
    title: 'Set LEGO Marvel Avengers Máquina Guerra',
    quantity: 1,
    measure_id: 5,
    description:
      'Vence a los Outrider junto con este emblemático superhéroe de Marvel: Ant- Man y War Machine.',
    category_id: 4,
    subcategory_id: 16,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00067341930309L.jpg',
  },
  {
    id: 22,
    title: 'Vodka Absolut',
    quantity: 750,
    measure_id: 4,
    description:
      'Absolut es una de las bebidas alcohólicas qué en comparación con las demás.',
    category_id: 7,
    subcategory_id: 29,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
  },
  {
    id: 23,
    title: 'Vino blanco Martini asti espumoso',
    quantity: 750,
    measure_id: 4,
    description:
      'Martini Asti D.O.C.G., es un vino espumoso dulce, ligeramente aromático y con un sabor intenso.',
    category_id: 7,
    subcategory_id: 30,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00800057043540L.jpg',
  },
  {
    id: 24,
    title: 'Cerveza clara Modelo Especial 6 latas',
    quantity: 355,
    measure_id: 4,
    description: 'Cerveza Modelo Especial en presentación lata 6 pack 355 ml.',
    category_id: 7,
    subcategory_id: 31,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750106411254L.jpg',
  },
  {
    id: 25,
    title: 'Jugo de mango y naranja Frutos de Vida',
    quantity: 1,
    measure_id: 3,
    description:
      'Los jugos naturales son benéficos para la salud, ya que contienen variedad de nutrientes que favorecen el cuerpo humano.',
    category_id: 2,
    subcategory_id: 19,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750301238307L.jpg',
  },
  {
    id: 26,
    title: 'Espinaca baby Marketside',
    quantity: 250,
    measure_id: 2,
    description:
      'Marketside es una manera saludable de mantener en forma tu salud y bienestar.',
    category_id: 2,
    subcategory_id: 19,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg',
  },
  {
    id: 27,
    title: 'Durazno importado',
    quantity: 1,
    measure_id: 1,
    description: 'Lleva una alimentación saludable y una dieta balanceada.',
    category_id: 2,
    subcategory_id: 17,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000000004038L.jpg',
  },
  {
    id: 28,
    title: 'Manzana pink lady',
    quantity: 1,
    measure_id: 1,
    description: 'Compra lo que necesites de la jugosa manzana pink lady.',
    category_id: 2,
    subcategory_id: 17,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000000004130L.jpg',
  },
  {
    id: 29,
    title: 'Bayas de goji Plantavit',
    quantity: 85,
    measure_id: 2,
    description:
      'Aliméntate sanamente con los productos que Plantavit tiene para ti.',
    category_id: 2,
    subcategory_id: 18,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750225433586L.jpg',
  },
  {
    id: 30,
    title: 'Manzana fuji orgánica Marketside',
    quantity: 907,
    measure_id: 2,
    description: 'Prepara deliciosos jugos o bocadillos con la manzana fuji.',
    category_id: 2,
    subcategory_id: 17,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00068113116061L.jpg',
  },
  {
    id: 31,
    title: 'Corazones de lechuga romana orgánicos Campo Vivo',
    quantity: 450,
    measure_id: 2,
    description:
      'Sabemos que te gusta cuidar tu salud y mantener tu dieta balanceada.',
    category_id: 2,
    subcategory_id: 19,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750223617208L.jpg',
  },
  {
    id: 32,
    title: 'Desinfectante Oust de superficies frescura campestre en aerosol',
    quantity: 400,
    measure_id: 4,
    description:
      'Oust es un desinfectante de superficies y ambientes con fragancia frescura campestre.',
    category_id: 5,
    subcategory_id: 20,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103292366L.jpg',
  },
  {
    id: 33,
    title:
      'Alimento para perro Dog Chow Vida Sana adulto raza mediana cordero y arroz',
    quantity: 374,
    measure_id: 2,
    description:
      'Purina Dog Chow sabor cordero y arroz adultos es un delicioso alimento húmedo ideal para razas medianas y grandes.',
    category_id: 5,
    subcategory_id: 21,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00001780014273L.jpg',
  },
  {
    id: 34,
    title: 'Alimento para gato Whiskas sabor carne',
    quantity: 3,
    measure_id: 1,
    description:
      'En Whiskas creemos que aún con el espíritu independiente que llevan dentro, todos los gatos necesitan del cariño y cuidado de su dueño.',
    category_id: 5,
    subcategory_id: 21,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00070646002937L.jpg',
  },
  {
    id: 35,
    title: 'Bolsas para basura Great Value jumbo con plastinudo',
    quantity: 90,
    measure_id: 5,
    description:
      'Las bolsas para basura de la marca Great Value poseen el tamaño perfecto.',
    category_id: 5,
    subcategory_id: 22,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179162001L.jpg',
  },
  {
    id: 36,
    title: 'Acondicionador de telas Suavitel cuidado superior fresca primavera',
    quantity: 3,
    measure_id: 3,
    description:
      'Complementa el cuidado de tus prendas usando en cada lavada el acondicionador de telas Suavitel.',
    category_id: 5,
    subcategory_id: 23,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103590323L.jpg',
  },
  {
    id: 37,
    title: 'Paño esponja Scotch Brite',
    quantity: 3,
    measure_id: 5,
    description:
      'La Tela esponja Scotch-Brite cuenta con un exclusivo tratamiento que deja tu hogar libre de bacterias y gérmenes que causan mal olor.',
    category_id: 5,
    subcategory_id: 24,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102311057L.jpg',
  },
  {
    id: 38,
    title: 'Paleta helada Holanda Magnum mini almendras 6 pzas',
    quantity: 60,
    measure_id: 4,
    description:
      'Prueba el crujiente sabor y al mismo tiempo textura cremosa de las paletas heladas Magnum.',
    category_id: 8,
    subcategory_id: 32,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750113093439L.jpg',
  },
  {
    id: 39,
    title:
      'Carne congelada para hamburguesas Steak Crown Burger premium de arrachera 8 pzas',
    quantity: 150,
    measure_id: 2,
    description: 'Prepara en casa un práctico y delicioso alimento sin salir.',
    category_id: 8,
    subcategory_id: 33,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00066417700009L.jpg',
  },
  {
    id: 40,
    title: 'Bolsa de hielo Cristal',
    quantity: 5,
    measure_id: 1,
    description:
      'Para tus reuniones con amigos o familiares no pueden faltar los hielos, aprovecha y llévatelos.',
    category_id: 8,
    subcategory_id: 34,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00040009176656L.jpg',
  },
  {
    id: 41,
    title: 'Fresas congeladas La Huerta',
    quantity: 2,
    measure_id: 1,
    description:
      'Fresas La Huerta congeladas 2 kg. Sin conservadores. Sin colorantes. Certificación Kosher.',
    category_id: 8,
    subcategory_id: 35,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104790590L.jpg',
  },
  {
    id: 42,
    title: 'Suplemento alimenticio Gelicart action en polvo 30 sobres',
    quantity: 20,
    measure_id: 2,
    description: 'Aquí va una descripción genial sobre este suplemento.',
    category_id: 9,
    subcategory_id: 36,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501081L.jpg',
  },
  {
    id: 43,
    title: 'Jabón de tocador Asepxia exfoliante extremo',
    quantity: 100,
    measure_id: 2,
    description:
      'Recomendado para la piel mixta. Exfolia y limpia tu piel a profundidad.',
    category_id: 9,
    subcategory_id: 37,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00065024002056L.jpg',
  },
  {
    id: 44,
    title: 'Pharmaton',
    quantity: 30,
    measure_id: 5,
    description: 'Pharmaton 30 cápsulas.',
    category_id: 9,
    subcategory_id: 38,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501178L.jpg',
  },
  {
    id: 45,
    title: 'Bebida energética Red Bull',
    quantity: 250,
    measure_id: 4,
    description: 'Red Bull Bebida Energética, 250 ml.',
    category_id: 6,
    subcategory_id: 27,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00900249010007L.jpg',
  },
  {
    id: 46,
    title: 'Té negro Fuze Tea sabor durazno',
    quantity: 600,
    measure_id: 4,
    description:
      'Comienza tu día con el delicioso y refrescante sabor del té negro Fuze Tea sabor durazno.',
    category_id: 6,
    subcategory_id: 39,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105531787L.jpg',
  },
  {
    id: 47,
    title: 'Refresco Squirt sabor toronja',
    quantity: 2,
    measure_id: 3,
    description:
      'Squirt el auténtico quitased sabor toronja, con más de 50 años en el mercado mexicano.',
    category_id: 6,
    subcategory_id: 25,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750107112007L.jpg',
  },
  {
    id: 48,
    title: 'Charola de sushi',
    quantity: 5,
    measure_id: 5,
    description: 'Saborea y comparte la charola que incluye 5 rollos.',
    category_id: 10,
    subcategory_id: 40,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020616900000L.jpg',
  },
  {
    id: 49,
    title: 'Pechuga de pollo sin hueso fresca',
    quantity: 1,
    measure_id: 1,
    description:
      'Guisar o cocer este producto proveniente de la pechuga de pollo será fácil y sencillo.',
    category_id: 10,
    subcategory_id: 41,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020104100000L.jpg',
  },
  {
    id: 50,
    title: 'Camarones cocidos jumbo Marketside',
    quantity: 454,
    measure_id: 2,
    description:
      'Preparara deliciosas comidas con los camarones cocidos en tamaño jumbo.',
    category_id: 10,
    subcategory_id: 42,
    url_image:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179160078L.jpg',
  },
];
module.exports = categories;
