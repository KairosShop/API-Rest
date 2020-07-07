const categories = [
  {
    id: 1,
    title: 'Papas Sabritas Original',
    quantity: 170,
    measureId: 2,
    measure: "g",
    description: 'Papas fritas saladas.',
    categoryId: 3,
    subcategoryId: 1,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101113388L.jpg',
    active: true
  },
  {
    id: 2,
    title: "Cereal Kellogg's Zucaritas",
    quantity: 490,
    measureId: 2,
    measure: "g",
    description: 'Despierta cada mañana con Zucaritas.',
    categoryId: 3,
    subcategoryId: 2,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750100804295L.jpg',
    active: true
  },
  {
    id: 3,
    title: 'Spaguetti Barilla No. 5',
    quantity: 500,
    measureId: 2,
    measure: "g",
    description: 'Spaghetti Barilla.',
    categoryId: 3,
    subcategoryId: 3,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00807680951520L.jpg',
    active: true
  },
  {
    id: 4,
    title: 'Aceite de oliva Carbonell extra virgen',
    quantity: 500,
    measureId: 3,
    measure: "L",
    description: 'Aceite de oliva extra virgen Carbonell.',
    categoryId: 3,
    subcategoryId: 4,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00841001027252L.jpg',
    active: true
  },
  {
    id: 5,
    title: 'Leche condensada Nestlé La Lechera original',
    quantity: 387,
    measureId: 2,
    measure: "g",
    description: 'Leche condensada LA LECHERA.',
    categoryId: 3,
    subcategoryId: 5,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861787L.jpg',
    active: true
  },
  {
    id: 6,
    title: 'Endulzante Svetia sin calorías',
    quantity: 300,
    measureId: 5,
    meeasure: "pz",
    description: 'Endulzante de la marca Stevia.',
    categoryId: 3,
    subcategoryId: 6,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750109620132L.jpg',
    active: true
  },
  {
    id: 7,
    title: 'Chocolate Turin amargo sin azúcar',
    quantity: 18,
    measureId: 2,
    measure: "g",
    description:
      'Deleita a tu familia con su exquisito sabor que te encantará.',
    categoryId: 3,
    subcategoryId: 7,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00075677401172L.jpg',
    active: true
  },
  {
    id: 8,
    title: 'Café soluble Nescafé clásico',
    quantity: 225,
    measureId: 2,
    measure: "g",
    description: 'Nescafé clásico en su presentación de 225 gramos.',
    categoryId: 3,
    subcategoryId: 8,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105861770L.jpg',
    active: true
  },
  {
    id: 9,
    title: 'Queso tipo manchego Nochebuena',
    quantity: 1,
    measureId: 1,
    measure: "kg",
    description: 'Queso manchego de la marca Nochebuena.',
    categoryId: 1,
    subcategoryId: 9,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020533500000L.jpg',
    active: true
  },
  {
    id: 10,
    title: 'Yoghurt Yoplait Almond bebible fresa',
    quantity: 220,
    measureId: 2,
    measure: "g",
    description: 'El clásico yoghurt lácteo.',
    categoryId: 1,
    subcategoryId: 10,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104009736L.jpg',
    active: true
  },
  {
    id: 11,
    title: 'Leche Lala deslactosada',
    quantity: 6,
    measureId: 5,
    meeasure: "pz",
    description: 'Leche Lala Deslactosada.',
    categoryId: 1,
    subcategoryId: 11,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102055817L.jpg',
    active: true
  },
  {
    id: 12,
    title: 'Huevo blanco San Juan',
    quantity: 30,
    measureId: 5,
    meeasure: "pz",
    description: 'Haz de huevo san juan el protagonista de tus platillos.',
    categoryId: 1,
    subcategoryId: 12,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750300055517L.jpg',
    active: true
  },
  {
    id: 13,
    title: 'Refresco Coca Cola',
    quantity: 600,
    measureId: 4,
    measure: "ml",
    description: 'Sabor original.',
    categoryId: 6,
    subcategoryId: 25,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
    active: true
  },
  {
    id: 14,
    title: 'Café Olé light cappuccino clásico',
    quantity: 281,
    measureId: 4,
    measure: "ml",
    description:
      'Bebida de café Olé cappuccino de 281 mililitros, para refrescarte al iniciar el día.',
    categoryId: 6,
    subcategoryId: 26,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104007015L.jpg',
    active: true
  },
  {
    id: 15,
    title: 'Bebida Gatorade sabor naranja',
    quantity: 1,
    measureId: 3,
    measure: "L",
    description: 'Mantente fresco con Gatorade.',
    categoryId: 6,
    subcategoryId: 27,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00003673132100L.jpg',
    active: true
  },
  {
    id: 16,
    title: 'Agua Epura',
    quantity: 10.1,
    measureId: 3,
    measure: "L",
    description: 'Epura en presentación familiar de 10.1l.',
    categoryId: 6,
    subcategoryId: 28,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750108680107L.jpg',
    active: true
  },
  {
    id: 17,
    title: 'Néctar clarificado Jumex manzana',
    quantity: 1,
    measureId: 3,
    measure: "L",
    description: 'Hecho con 100% fruta natural.',
    categoryId: 6,
    subcategoryId: 26,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101312202L.jpg',
    active: true
  },
  {
    id: 18,
    title: 'Pañales Huggies UltraConfort etapa 6 niño',
    quantity: 6,
    measureId: 5,
    meeasure: "pz",
    description:
      'Huggies UltraConfort es el único pañal que brinda total libertad de movimiento.',
    categoryId: 4,
    subcategoryId: 13,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750194341712L.jpg',
    active: true
  },
  {
    id: 19,
    title: 'Lapicera Chenson Fulanitos Tadi',
    quantity: 1,
    measureId: 5,
    meeasure: "pz",
    description:
      'Lleva la diversión de Fulanitos a la escuela con esta lapicera de la marca Chenson.',
    categoryId: 4,
    subcategoryId: 14,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750904838321L.jpg',
    active: true
  },
  {
    id: 20,
    title: 'Talco para bebés Mennen baby magic hipoalergénico azul',
    quantity: 500,
    measureId: 2,
    measure: "g",
    description:
      'Consiente la piel de tu pequeño utilizando el Talco Mennen Baby Magic Azul.',
    categoryId: 4,
    subcategoryId: 15,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750954603973L.jpg',
    active: true
  },
  {
    id: 21,
    title: 'Set LEGO Marvel Avengers Máquina Guerra',
    quantity: 1,
    measureId: 5,
    meeasure: "pz",
    description:
      'Vence a los Outrider junto con este emblemático superhéroe de Marvel: Ant- Man y War Machine.',
    categoryId: 4,
    subcategoryId: 16,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00067341930309L.jpg',
    active: true
  },
  {
    id: 22,
    title: 'Vodka Absolut',
    quantity: 750,
    measureId: 4,
    measure: "ml",
    description:
      'Absolut es una de las bebidas alcohólicas qué en comparación con las demás.',
    categoryId: 7,
    subcategoryId: 29,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000007500761L.jpg',
    active: true
  },
  {
    id: 23,
    title: 'Vino blanco Martini asti espumoso',
    quantity: 750,
    measureId: 4,
    measure: "ml",
    description:
      'Martini Asti D.O.C.G., es un vino espumoso dulce, ligeramente aromático y con un sabor intenso.',
    categoryId: 7,
    subcategoryId: 30,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00800057043540L.jpg',
    active: true
  },
  {
    id: 24,
    title: 'Cerveza clara Modelo Especial 6 latas',
    quantity: 355,
    measureId: 4,
    measure: "ml",
    description: 'Cerveza Modelo Especial en presentación lata 6 pack 355 ml.',
    categoryId: 7,
    subcategoryId: 31,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750106411254L.jpg',
    active: true
  },
  {
    id: 25,
    title: 'Jugo de mango y naranja Frutos de Vida',
    quantity: 1,
    measureId: 3,
    measure: "L",
    description:
      'Los jugos naturales son benéficos para la salud, ya que contienen variedad de nutrientes que favorecen el cuerpo humano.',
    categoryId: 2,
    subcategoryId: 19,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750301238307L.jpg',
    active: true
  },
  {
    id: 26,
    title: 'Espinaca baby Marketside',
    quantity: 250,
    measureId: 2,
    measure: "g",
    description:
      'Marketside es una manera saludable de mantener en forma tu salud y bienestar.',
    categoryId: 2,
    subcategoryId: 19,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179166766L.jpg',
    active: true
  },
  {
    id: 27,
    title: 'Durazno importado',
    quantity: 1,
    measureId: 1,
    measure: "kg",
    description: 'Lleva una alimentación saludable y una dieta balanceada.',
    categoryId: 2,
    subcategoryId: 17,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000000004038L.jpg',
    active: true
  },
  {
    id: 28,
    title: 'Manzana pink lady',
    quantity: 1,
    measureId: 1,
    measure: "kg",
    description: 'Compra lo que necesites de la jugosa manzana pink lady.',
    categoryId: 2,
    subcategoryId: 17,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00000000004130L.jpg',
    active: true
  },
  {
    id: 29,
    title: 'Bayas de goji Plantavit',
    quantity: 85,
    measureId: 2,
    measure: "g",
    description:
      'Aliméntate sanamente con los productos que Plantavit tiene para ti.',
    categoryId: 2,
    subcategoryId: 18,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750225433586L.jpg',
    active: true
  },
  {
    id: 30,
    title: 'Manzana fuji orgánica Marketside',
    quantity: 907,
    measureId: 2,
    measure: "g",
    description: 'Prepara deliciosos jugos o bocadillos con la manzana fuji.',
    categoryId: 2,
    subcategoryId: 17,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00068113116061L.jpg',
    active: true
  },
  {
    id: 31,
    title: 'Corazones de lechuga romana orgánicos Campo Vivo',
    quantity: 450,
    measureId: 2,
    measure: "g",
    description:
      'Sabemos que te gusta cuidar tu salud y mantener tu dieta balanceada.',
    categoryId: 2,
    subcategoryId: 19,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750223617208L.jpg',
    active: true
  },
  {
    id: 32,
    title: 'Desinfectante Oust de superficies frescura campestre en aerosol',
    quantity: 400,
    measureId: 4,
    measure: "ml",
    description:
      'Oust es un desinfectante de superficies y ambientes con fragancia frescura campestre.',
    categoryId: 5,
    subcategoryId: 20,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103292366L.jpg',
    active: true
  },
  {
    id: 33,
    title:
      'Alimento para perro Dog Chow Vida Sana adulto raza mediana cordero y arroz',
    quantity: 374,
    measureId: 2,
    measure: "g",
    description:
      'Purina Dog Chow sabor cordero y arroz adultos es un delicioso alimento húmedo ideal para razas medianas y grandes.',
    categoryId: 5,
    subcategoryId: 21,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00001780014273L.jpg',
    active: true
  },
  {
    id: 34,
    title: 'Alimento para gato Whiskas sabor carne',
    quantity: 3,
    measureId: 1,
    measure: "kg",
    description:
      'En Whiskas creemos que aún con el espíritu independiente que llevan dentro, todos los gatos necesitan del cariño y cuidado de su dueño.',
    categoryId: 5,
    subcategoryId: 21,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00070646002937L.jpg',
    active: true
  },
  {
    id: 35,
    title: 'Bolsas para basura Great Value jumbo con plastinudo',
    quantity: 90,
    measureId: 5,
    meeasure: "pz",
    description:
      'Las bolsas para basura de la marca Great Value poseen el tamaño perfecto.',
    categoryId: 5,
    subcategoryId: 22,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179162001L.jpg',
    active: true
  },
  {
    id: 36,
    title: 'Acondicionador de telas Suavitel cuidado superior fresca primavera',
    quantity: 3,
    measureId: 3,
    measure: "L",
    description:
      'Complementa el cuidado de tus prendas usando en cada lavada el acondicionador de telas Suavitel.',
    categoryId: 5,
    subcategoryId: 23,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103590323L.jpg',
    active: true
  },
  {
    id: 37,
    title: 'Paño esponja Scotch Brite',
    quantity: 3,
    measureId: 5,
    meeasure: "pz",
    description:
      'La Tela esponja Scotch-Brite cuenta con un exclusivo tratamiento que deja tu hogar libre de bacterias y gérmenes que causan mal olor.',
    categoryId: 5,
    subcategoryId: 24,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750102311057L.jpg',
    active: true
  },
  {
    id: 38,
    title: 'Paleta helada Holanda Magnum mini almendras 6 pzas',
    quantity: 60,
    measureId: 4,
    measure: "ml",
    description:
      'Prueba el crujiente sabor y al mismo tiempo textura cremosa de las paletas heladas Magnum.',
    categoryId: 8,
    subcategoryId: 32,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750113093439L.jpg',
    active: true
  },
  {
    id: 39,
    title:
      'Carne congelada para hamburguesas Steak Crown Burger premium de arrachera 8 pzas',
    quantity: 150,
    measureId: 2,
    measure: "g",
    description: 'Prepara en casa un práctico y delicioso alimento sin salir.',
    categoryId: 8,
    subcategoryId: 33,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00066417700009L.jpg',
    active: true
  },
  {
    id: 40,
    title: 'Bolsa de hielo Cristal',
    quantity: 5,
    measureId: 1,
    measure: "kg",
    description:
      'Para tus reuniones con amigos o familiares no pueden faltar los hielos, aprovecha y llévatelos.',
    categoryId: 8,
    subcategoryId: 34,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00040009176656L.jpg',
    active: true
  },
  {
    id: 41,
    title: 'Fresas congeladas La Huerta',
    quantity: 2,
    measureId: 1,
    measure: "kg",
    description:
      'Fresas La Huerta congeladas 2 kg. Sin conservadores. Sin colorantes. Certificación Kosher.',
    categoryId: 8,
    subcategoryId: 35,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104790590L.jpg',
    active: true
  },
  {
    id: 42,
    title: 'Suplemento alimenticio Gelicart action en polvo 30 sobres',
    quantity: 20,
    measureId: 2,
    measure: "g",
    description: 'Aquí va una descripción genial sobre este suplemento.',
    categoryId: 9,
    subcategoryId: 36,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501081L.jpg',
    active: true
  },
  {
    id: 43,
    title: 'Jabón de tocador Asepxia exfoliante extremo',
    quantity: 100,
    measureId: 2,
    measure: "g",
    description:
      'Recomendado para la piel mixta. Exfolia y limpia tu piel a profundidad.',
    categoryId: 9,
    subcategoryId: 37,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00065024002056L.jpg',
    active: true
  },
  {
    id: 44,
    title: 'Pharmaton',
    quantity: 30,
    measureId: 5,
    meeasure: "pz",
    description: 'Pharmaton 30 cápsulas.',
    categoryId: 9,
    subcategoryId: 38,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750116501178L.jpg',
    active: true
  },
  {
    id: 45,
    title: 'Bebida energética Red Bull',
    quantity: 250,
    measureId: 4,
    measure: "ml",
    description: 'Red Bull Bebida Energética, 250 ml.',
    categoryId: 6,
    subcategoryId: 27,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00900249010007L.jpg',
    active: true
  },
  {
    id: 46,
    title: 'Té negro Fuze Tea sabor durazno',
    quantity: 600,
    measureId: 4,
    measure: "ml",
    description:
      'Comienza tu día con el delicioso y refrescante sabor del té negro Fuze Tea sabor durazno.',
    categoryId: 6,
    subcategoryId: 39,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105531787L.jpg',
    active: true
  },
  {
    id: 47,
    title: 'Refresco Squirt sabor toronja',
    quantity: 2,
    measureId: 3,
    measure: "L",
    description:
      'Squirt el auténtico quitased sabor toronja, con más de 50 años en el mercado mexicano.',
    categoryId: 6,
    subcategoryId: 25,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750107112007L.jpg',
    active: true
  },
  {
    id: 48,
    title: 'Charola de sushi',
    quantity: 5,
    measureId: 5,
    meeasure: "pz",
    description: 'Saborea y comparte la charola que incluye 5 rollos.',
    categoryId: 10,
    subcategoryId: 40,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020616900000L.jpg',
    active: true
  },
  {
    id: 49,
    title: 'Pechuga de pollo sin hueso fresca',
    quantity: 1,
    measureId: 1,
    measure: "kg",
    description:
      'Guisar o cocer este producto proveniente de la pechuga de pollo será fácil y sencillo.',
    categoryId: 10,
    subcategoryId: 41,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00020104100000L.jpg',
    active: true
  },
  {
    id: 50,
    title: 'Camarones cocidos jumbo Marketside',
    quantity: 454,
    measureId: 2,
    measure: "g",
    description:
      'Preparara deliciosas comidas con los camarones cocidos en tamaño jumbo.',
    categoryId: 10,
    subcategoryId: 42,
    urlImage:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750179160078L.jpg',
    active: true
  },
];
module.exports = categories;
