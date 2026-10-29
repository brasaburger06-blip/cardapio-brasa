import Price from "./app/components/price";

export const dataBase = ([
  // PIZZA: 100-199
   {
    id: "pizza-4-queijos",
    name: "PIZZA 4 QUEIJOS",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, catupiry, provolone e parmesão",
        status: true
      }
    ]
  },
  

  {
    id: "pizza-calabresa",
    name: "PIZZA DE CALABRESA",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela e calabresa E CEBOLA",
        status: true
      }
    ]
  },
  {
    id: "pizza-banana",
    name: "PIZZA MISTA",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "mussarela FRANGO, PALMITO, CALABRESA, BACOM, MILHO E ERVILHA.",
        status: true
      }
    ]
  },

  {
    id: "pizza-chocolate",
    name: "PIZZA DE FRANGO AO CATUPIRY",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, FRANGO E CATUPIRY",
        status: true
      }
    ]
  },

  {
    id: "pizza-estrogonofe-carne",
    name: "PIZZA DE ESTROGONOFE DE CARNE",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, estrogonofe de carne e batata palha",
        status: true
      }
    ]
  },

  {
    id: "pizza-estrogonofe-frango",
    name: "PIZZA DE ESTROGONOFE DE FRANGO",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, estrogonofe de frango e batata palha",
        status: true
      }
    ]
  },

  {
    id: "pizza-bacon",
    name: "PIZZA DE BACON",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela e bacon",
        status: true
      }
    ]
  },

  {
    id: "pizza-del-capo",
    name: "PIZZA DEL CAPO",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, calabresa, catupiry, bacon e milho",
        status: true
      }
    ]
  },

 
  {
    id: "112",
    typeMenu: true,
    categoryTitle: "PIZZAS",
    name: "PIZZA PORTUGUESA",
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, calabresa, ovos e cebola",
        status: true
      }
    ]
  },
  {
    id: "pizza-banana",
    name: "PIZZA DOCE DE BANANA",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Banana, mussarela, canela e leite condensado",
        status: true
      }
    ]
  },

  {
    id: "pizza-chocolate",
    name: "PIZZA DOCE DE CHOCOLATE",
    categoryTitle: "PIZZAS",
    typeMenu: true,
    variations: [
      {
        category: "PIZZA TAMANHO GRANDE 35CM",
        Price: null,
        description: "Mussarela, leite condensado, chocolate e chocolate ao leite",
        status: true
      }
    ]
  },
  // ESPETINHOS: 200-299 *************************************************
 /*
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho de Frango",
    variations: [
      { category: "SO O ESPETINHO", price: "9,99", description: null, status: true },
      { category: "ESPETINHOS SIMPLES", price: "13,99", description: "Farofa e Mandioca.", status: true },
      { category: "ESPETINHOS COMPLETO", price: "32,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: true }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho de Coração",
    variations: [
      { category: "SO O ESPETINHO", price: "9,99", description: null, status: false },
      { category: "ESPETINHOS SIMPLES", price: "13,99", description: "Farofa e Mandioca.", status: false },
      { category: "ESPETINHOS COMPLETO", price: "29,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: false }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho de Carne",
    variations: [
      { category: "SO O ESPETINHO", price: "11,99", description: null, status: true },
      { category: "ESPETINHOS SIMPLES", price: "17,99", description: "Farofa e Mandioca.", status: true },
      { category: "ESPETINHOS COMPLETO", price: "31,99", description: "Arroz, Feijão Tropeiro, Mandioca e Vinagrete.", status: true }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho Panceta de Porco",
    variations: [
      { category: "SO O ESPETINHO", price: "10,99", description: null, status: true },
      { category: "ESPETINHOS SIMPLES", price: "13,99", description: "Feijão Tropeiro e Mandioca.", status: true },
      { category: "ESPETINHOS COMPLETO", price: "32,99", description: "Arroz, Feijão Tropeiro, Mandioca e Vinagrete.", status: true }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho Picanha",
    variations: [
      { category: "SO O ESPETINHO", price: "19,99", description: null, status: true },
      { category: "ESPETINHOS SIMPLES", price: "26,99", description: "Farofa e Mandioca.", status: true },
      { category: "ESPETINHOS COMPLETO", price: "35,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: true }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho Alcatra",
    variations: [
      { category: "SO O ESPETINHO", price: "11,99", description: null, status: false },
      { category: "ESPETINHOS SIMPLES", price: "19,99", description: "Farofa e Mandioca.", status: false },
      { category: "ESPETINHOS COMPLETO", price: "32,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: false }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho Contra Filé",
    variations: [
      { category: "SO O ESPETINHO", price: "11,99", description: null, status: false },
      { category: "ESPETINHOS SIMPLES", price: "17,99", description: "Farofa e Mandioca.", status: false },
      { category: "ESPETINHOS COMPLETO", price: "31,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: false }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho Filé",
    variations: [
      { category: "SO O ESPETINHO", price: "13,99", description: null, status: false },
      { category: "ESPETINHOS SIMPLES", price: "19,99", description: "Farofa e Mandioca.", status: false },
      { category: "ESPETINHOS COMPLETO", price: "32,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: false }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho de Medalhão de Frango",
    variations: [
      { category: "SO O ESPETINHO", price: "15,99", description: null, status: false },
      { category: "ESPETINHOS SIMPLES", price: "19,99", description: "Farofa e Mandioca.", status: false },
      { category: "ESPETINHOS COMPLETO", price: "27,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: false }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho de Medalhão de Filé",
    variations: [
      { category: "SO O ESPETINHO", price: "22,99", description: null, status: true },
      { category: "ESPETINHOS SIMPLES", price: "24,99", description: "Farofa e Mandioca.", status: true },
      { category: "ESPETINHOS COMPLETO", price: "34,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: true }
    ]
  },
  {
    id: "ESPETINHO",
    categoryTitle: "ESPETINHOS",
    typeMenu: true,
    name: "Espetinho de Medalhão de Mandioca",
    variations: [
      { category: "SO O ESPETINHO", price: "13,99", description: null, status: false },
      { category: "ESPETINHOS SIMPLES", price: "15,99", description: "Farofa e Mandioca.", status: false },
      { category: "ESPETINHOS COMPLETO", price: "32,99", description: "Arroz, Farofa, Mandioca e Vinagrete.", status: false }
    ]
  },
*/
  // LANCHES: 300-399 ************************************************************

  {
    id: "lanche-brasa-burguer",
    name: "Brasa queijo crocante ",
    categoryTitle: "LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "LANCHES",
        price: "37,99",
        description:
          "Pão Selado, Maionese, Hambúrguer ,Queijo empanado crocante, Molho especial, Chadder ",
        status: true
      }
    ]
  },
 {
    id: "lanche-brasa-burguer",
    name: "BRASA BURGUER",
    categoryTitle: "LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "LANCHES",
        price: "59,90",
        description:
          "Pão Selado, Hambúrguer Artesanal, Mussarela, Ovo, Bacon, Molho Especial, Cebola Caramelizada, Alface e Tomate.",
        status: true
      }
    ]
  },
  {
    id: "lanche-brasa-costela",
    name: "BRASA COSTELA",
    categoryTitle: "LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "LANCHES",
        price: "27,99",
        description:
          "Pão Selado, Hambúrguer Artesanal de Costela, Mussarela, Cheddar, Molho Especial, Cebola Caramelizada, Picles, Alface e Tomate.",
        status: true
      }
    ]
  },

  {
    id: "lanche-brasa-defumado",
    name: "BRASA DEFUMADO",
    categoryTitle: "LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "LANCHES",
        price: "31,99",
        description:
          "Pão Selado, Hambúrguer Artesanal Defumado, Mussarela, Cheddar, Bacon, Molho Especial, Cebola Caramelizada, Picles, Alface e Tomate.",
        status: true
      }
    ]
  },

  {
    id: "lanche-brasa-onion",
    name: "BRASA ONION",
    categoryTitle: "LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "LANCHES",
        price: "19,99",
        description:
          "Pão Selado, Hambúrguer, Mussarela, Molho Especial e Onion Rings.",
        status: true
      }
    ]
  },

  {
    id: "lanche-brasa-kids",
    name: "BRASA KIDS",
    categoryTitle: "LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "LANCHES",
        price: "21,99",
        description:
          "Mini Pão, Hambúrguer 100g, Mussarela, Molho Especial.",
        status: true
      }
    ]
  },

  // COMBOS DE LANCHES: 400-499
  {
    id: "combo-brasa-burguer",
    name: "BRASA BURGUER",
    categoryTitle: "COMBOS DE LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "COMBOS DE LANCHES",
        price: "41,99",
        description:
          "Pão Selado, Hambúrguer Artesanal, Mussarela, Ovo, Bacon, Molho Especial, Cebola Caramelizada, Alface e Tomate.",
        status: true
      }
    ]
  },

  {
    id: "combo-brasa-costela",
    name: "BRASA COSTELA",
    categoryTitle: "COMBOS DE LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "COMBOS DE LANCHES",
        price: "39,99",
        description:
          "Pão Selado, Hambúrguer Artesanal de Costela, Mussarela, Cheddar, Molho Especial, Cebola Caramelizada, Picles, Alface e Tomate.",
        status: true
      }
    ]
  },

  {
    id: "combo-brasa-defumado",
    name: "BRASA DEFUMADO",
    categoryTitle: "COMBOS DE LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "COMBOS DE LANCHES",
        price: "42,99",
        description:
          "Pão Selado, Hambúrguer Artesanal Defumado, Mussarela, Cheddar, Bacon, Molho Especial, Cebola Caramelizada, Picles, Alface e Tomate.",
        status: true
      }
    ]
  },

  {
    id: "combo-brasa-onion",
    name: "BRASA ONION",
    categoryTitle: "COMBOS DE LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "COMBOS DE LANCHES",
        price: "29,99",
        description:
          "Pão Selado, Hambúrguer Artesanal, Mussarela, Molho Especial e Onion Rings.",
        status: true
      }
    ]
  },

  {
    id: "combo-brasa-kids",
    name: "BRASA KIDS",
    categoryTitle: "COMBOS DE LANCHES",
    typeMenu: true,
    variations: [
      {
        category: "COMBOS DE LANCHES",
        price: "31,99",
        description:
          "Mini Pão, Hambúrguer 100g, Mussarela, Molho Especial.",
        status: true
      }
    ]
  },

  //************************************************************** */
  {
    id: "porcao-batata-frita",
    name: "BATATA FRITA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA ",
        price: "34,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "27,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-batata-bacon-cheddar",
    name: "BATATA COM BACON E CHEDDAR",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "46,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "31,99",
        status: true
      }

    ]
  },
  {
    id: "porcao-calabresa",
    name: "CALABRESA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "33,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "23,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-mandioca-frita",
    name: "MANDIOCA FRITA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "27,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "20,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-toresmo",
    name: "TORESMO",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "24,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "18,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-mista-frios",
    name: "PORÇÃO MISTA DE FRIOS",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "59,99",

        description:
          "Queijo, mussarela, queijo prato, azeitona, tomate cereja, picles, palmito, ovo de codorna e salame.",
        status: true
      }
      ,
      {
        category: "MEIA ",
        description:
          "Queijo, mussarela, queijo prato, azeitona, tomate cereja, picles, palmito, ovo de codorna e salame.",
        price: "44,99",
        status: true
      }
    ]
  },

  // CARNES
  {
    id: "porcao-picanha-tiras",
    name: "PICANHA EM TIRAS NA CHAPA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "89,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "59,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-file-acebolado",
    name: "FILÉ ACEBOLADO NA CHAPA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "79,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "44,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-frango",
    name: "FRANGO",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "49,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "32,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-tulipa-frango",
    name: "TULIPA DE FRANGO",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "33,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "24,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-steak-frango",
    name: "STEAK DE FRANGO",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "37,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "26,99",
        status: true
      }
    ]
  },

  // PEIXES
  {
    id: "porcao-costelinha-tambaqui",
    name: "COSTELINHA DE TAMBAQUI",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "59,99",

        status: true
      },
      {
        category: "MEIA ",
        price: "39,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-file-tambaqui",
    name: "FILÉ DE TAMBAQUI",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "54,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "37,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-file-tilapia",
    name: "FILÉ DE TILÁPIA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "INTEIRA",
        price: "53,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "38,99",
        status: true
      }
    ]
  },

  // ACOMPANHAMENTOS
  {
    id: "porcao-arroz",
    name: "ARROZ",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "ACOMPANHAMENTOS",
        price: "31,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "8,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-feijao-tropeiro",
    name: "FEIJÃO TROPEIRO",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "ACOMPANHAMENTOS",
        price: "39,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "9,99",
        status: true
      }
    ]
  },
  {
    id: "porcao-salada",
    name: "SALADA",
    categoryTitle: "PORÇÕES",
    typeMenu: true,
    variations: [
      {
        category: "ACOMPANHAMENTOS",
        price: "19,99",
        status: true
      },
      {
        category: "MEIA ",
        price: "9,99",
        status: true
      }
    ]
  },

  // BEBIDAS: 900-999  ***************************************************************
  {
    id: "agua-mineral",
    name: "ÁGUA MINERAL",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "BEBIDAS", price: "3,99", description: "500ML", status: true }
    ]
  },
  {
    id: "agua-gas",
    name: "ÁGUA COM GÁS",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "BEBIDAS", price: "4,99", description: "500ML", status: true }
    ]
  },
  {
    id: "coca-cola",
    name: "COCA-COLA",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "BEBIDAS", price: "6,99", description: "KS", status: true },
      { category: "BEBIDAS", price: "6,99", description: "KS ZERO", status: true },
      { category: "BEBIDAS", price: "6,99", description: "LATA 350ML", status: true },
      { category: "BEBIDAS", price: "6,99", description: "LATA ZERO 350ML", status: true },
      { category: "BEBIDAS", price: "7,99", description: "600ML", status: true },
      { category: "BEBIDAS", price: "9,99", description: "1L", status: true },
      { category: "BEBIDAS", price: "14,99", description: "2L", status: true },
      { category: "BEBIDAS", price: "15,99", description: "2L ZERO", status: true }
    ]
  },
  {
    id: "guarana",
    name: "GUARANÁ",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "BEBIDAS", price: "5,99", description: "LATA 269ML", status: true },
      { category: "BEBIDAS", price: "5,99", description: "LATA ZERO 269ML", status: true },
      { category: "BEBIDAS", price: "7,99", description: "600ML", status: true },
      { category: "BEBIDAS", price: "10,99", description: "2L", status: true }
    ]
  },
  {
    id: "diversos-refrigerantes",
    name: "OUTROS REFRIGERANTES",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "BEBIDAS", price: "5,99", description: "PEPSI LATA", status: true },
      { category: "BEBIDAS", price: "5,99", description: "TÔNICA 350ML", status: true },
      { category: "BEBIDAS", price: "5,99", description: "SUKITA LATA", status: true },
      { category: "BEBIDAS", price: "9,99", description: "SUKITA 2L", status: true },
      { category: "BEBIDAS", price: "5,99", description: "fanta laranja lata 350ml", status: true },
      { category: "BEBIDAS", price: "5,99", description: "Schwepps citrus lata 350ml", status: true },
      { category: "BEBIDAS", price: "5,99", description: "schwepps tônica lata 350ml", status: true },
      { category: "BEBIDAS", price: "5,99", description: "Sprite lata 350ml", status: true },
      { category: "BEBIDAS", price: "5,99", description: "Sprite zero lata 350ml", status: true },
      { category: "BEBIDAS", price: "7,99", description: "Sprite lemon fresh 600ml", status: true },
      { category: "BEBIDAS", price: "7,99", description: "power ade 500ml", status: true },
      { category: "BEBIDAS", price: "7,99", description: "deu vale  600ml", status: true },
    ]
  },
  {
    id: "h2o",
    name: "H2O",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "BEBIDAS", price: "7,99", description: "500ML", status: true },
      { category: "BEBIDAS", price: "7,99", description: "LIMONETO 500ML", status: true },
      { category: "BEBIDAS", price: "9,99", description: "1,5L", status: true }
    ]
  },
  {
    id: "energeticos",
    name: "ENERGÉTICOS",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "ENERGÉTICOS", price: "13,99", description: "RED BULL", status: true }
    ]
  },

  // CERVEJAS: 1000-1099  **************************************************

  {
    id: "skol-beats",
    name: "SKOL BEATS",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "GT 269ML", price: "9,99", status: true },
      { category: "CERVEJAS", description: "RED MIX 269ML", price: "9,99", status: true },
      { category: "CERVEJAS", description: "SENSES 269ML", price: "9,99", status: true },
      { category: "CERVEJAS", description: "TROPICAL 269ML", price: "9,99", status: true }
    ]
  },
  {
    id: "skol",
    name: "SKOL",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LATA 269ML", price: "5,99", status: true },
      { category: "CERVEJAS", description: "600ML", price: "13,99", status: true }
    ]
  },
  {
    id: "brahma",
    name: "BRAHMA",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LATA 269ML", price: "5,49", status: true },
      { category: "CERVEJAS", description: "600ML", price: "13,99", status: true },
      { category: "CERVEJAS", description: "LONG NECK ZERO", price: "9,99", status: true }
    ]
  },
  {
    id: "original",
    name: "ORIGINAL",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LATA 269ML", price: "6,99", status: true },
      { category: "CERVEJAS", description: "600ML", price: "15,99", status: true }
    ]
  },
  {
    id: "heineken",
    name: "HEINEKEN",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LATA 269ML", price: "8,99", status: true },
      { category: "CERVEJAS", description: "LONG NECK", price: "14,99", status: true },
      { category: "CERVEJAS", description: "LONG NECK ZERO", price: "13,99", status: true },
      { category: "CERVEJAS", description: "600ML", price: "21,99", status: true }
    ]
  },
  {
    id: "corona",
    name: "CORONA",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LONG NECK", price: "13,99", status: true }
    ]
  },
  {
    id: "spaten",
    name: "SPATEN",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LONG NECK", price: "8,99", status: true },
      { category: "CERVEJAS", description: "600ML", price: "15,99", status: true }
    ]
  },
  {
    id: "stella",
    name: "STELLA",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LONG NECK", price: "11,99", status: true },
      { category: "CERVEJAS", description: "600ML", price: "17,99", status: true }
    ]
  },
  {
    id: "cdb",
    name: "CDB",
    categoryTitle: "BEBIDAS",
    typeMenu: true,
    variations: [
      { category: "CERVEJAS", description: "LATA", price: "3,99", status: true }
    ]
  },
  // SUCOS: 1200-1299 

  {
    id: "1200",
    typeMenu: true,
    name: "SUCOS ",
    categoryTitle: "SUCOS",
    variations: [
      { category: "SUCO COPO 400ML", description: "ABACAXI, ABACAXI COM HORTELA, ACEROLA, LARANJA, MARACUJA", price: "10,99", status: true },
      { category: "SUCO JARRA 750ML", description: "ABACAXI, ABACAXI COM HORTELA, ACEROLA, LARANJA, MARACUJA", price: "19,99", status: true },
      { category: "SUCO JARRA 1L", description: "ABACAXI, ABACAXI COM HORTELA, ACEROLA, LARANJA, MARACUJA", price: "24,99", status: true }
    ],
  },
  // DRINKS: 1300-1399

  {
    id: "1300",
    name: "MOJITO",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "24,99",
        description: "Hortelã, rum e limão",
        status: true
      }
    ]
  },
  {
    id: "1301",
    name: "CUBA LIBRE",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "24,99",
        description: "Coca cola, rum e limão",
        status: true
      }
    ]
  },
  {
    id: "1302",
    name: "MOSCOW MULE",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "23,99",
        description: "Xarope de gengibre, xarope de açúcar, limão e vodka",
        status: true
      }
    ]
  },
  {
    id: "1303",
    name: "BEIJO NA BOCA",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "27,99",
        description: "Leite condensado, creme de leite, morango e vodka",
        status: true
      }
    ]
  },
  {
    id: "1304",
    name: "PINA COLADA",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "27,99",
        description: "Leite condensado, creme de leite, abacaxi e vodka",
        status: true
      }
    ]
  },
  {
    id: "1306",
    name: "CAIPIRINHAS",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "24,99",
        description: "Limão, morango, abacaxi e kiwi",
        status: true
      }
    ]
  },
  {
    id: "1307",
    name: "COPÃO DE VODKA COM ENERGÉTICO",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "9,99",
        description: "Maracujá, morango, melancia e maçã verde",
        status: false
      }
    ]
  },
  {
    id: "1308",
    name: "COPÃO DE WHISKY COM ENERGÉTICO",
    typeMenu: false,
    categoryTitle: "DRINKS",
    variations: [
      {
        category: "DRINKS",
        price: "34,99",
        description: "Maracujá, morango, melancia e maçã verde",
        status: false
      }
    ]
  }
  ,

  {
    id: "1400",
    name: "TORRE DE H2O",
    typeMenu: false,
    categoryTitle: "TERERÉ",
    variations: [
      {
        category: "TERERÉ",
        price: "29,99",
        description: "Ervas de tereré: eucalipto, energético, black, pura folha e cereja",
        status: true
      }
    ]
  },
  {
    id: "1401",
    name: "LIMONADA SUÍÇA",
    typeMenu: false,
    categoryTitle: "TERERÉ",
    variations: [
      {
        category: "TERERÉ",
        price: "29,99",
        description: "Ervas de tereré: eucalipto, energético, black, pura folha e cereja",
        status: true
      }
    ]
  },
  {
    id: "1402",
    name: "GUARANÁ E LIMÃO",
    typeMenu: false,
    categoryTitle: "TERERÉ",
    variations: [
      {
        category: "TERERÉ",
        price: "29,99",
        description: "Ervas de tereré: eucalipto, energético, black, pura folha e cereja",
        status: true
      }
    ]
  },
  {
    id: "1403",
    name: "MARACUJÁ E LIMÃO",
    typeMenu: false,
    categoryTitle: "TERERÉ",
    variations: [
      {
        category: "TERERÉ",
        price: "29,99",
        description: "Ervas de tereré: eucalipto, energético, black, pura folha e cereja",
        status: true
      }
    ]
  },
  {
    id: "1404",
    name: "LIMÃO E HORTELÃ",
    typeMenu: false,
    categoryTitle: "TERERÉ",
    variations: [
      {
        category: "TERERÉ",
        price: "29,99",
        description: "Ervas de tereré: eucalipto, energético, black, pura folha e cereja",
        status: true
      }
    ]
  },
  {
    id: "1405",
    name: "ABACAXI COM HORTELÃ",
    typeMenu: false,
    categoryTitle: "TERERÉ",
    variations: [
      {
        category: "TERERÉ",
        price: "29,99",
        description: "Ervas de tereré: eucalipto, energético, black, pura folha e cereja",
        status: true
      }
    ]
  },
  {
    id: "1500",
    name: "PICANHA COM FRITAS MEIA (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "129,99",
        description: "Picanha em tiras na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1501",
    name: "PICANHA COM FRITAS INTEIRA (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "178,99",
        description: "Picanha em tiras na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1502",
    name: "FILÉ ACEBOLADO COM FRITAS MEIO (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "124,99",
        description: "Filé acebolado na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1503",
    name: "FILÉ ACEBOLADO COM FRITAS INTEIRO (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "167,99",
        description: "Filé acebolado na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  }, {
    id: "1500",
    name: "PICANHA COM FRITAS MEIA (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "129,99",
        description: "Picanha em tiras na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1501",
    name: "PICANHA COM FRITAS INTEIRA (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "178,99",
        description: "Picanha em tiras na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1502",
    name: "FILÉ ACEBOLADO COM FRITAS MEIO (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "124,99",
        description: "Filé acebolado na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1503",
    name: "FILÉ ACEBOLADO COM FRITAS INTEIRO (COMPLETO)",
    typeMenu: true,
    categoryTitle: "À LA CARTE",
    variations: [
      {
        category: "À LA CARTE",
        price: "167,99",
        description: "Filé acebolado na chapa, batata, mandioca, arroz, feijão tropeiro e salada",
        status: true
      }
    ]
  },
  {
    id: "1700",
    name: "COMBO TURQUESA",
    typeMenu: true,
    categoryTitle: "COMBOS DE PORÇÕES",
    variations: [
      {
        category: "COMBOS DE PORÇÕES",
        price: "67,99",
        description: "Tulipa de frango, calabresa e torresmo",
        status: true
      }
    ]
  },
  {
    id: "1701",
    name: "COMBO DOS FRANGOS",
    typeMenu: true,
    categoryTitle: "COMBOS DE PORÇÕES",
    variations: [
      {
        category: "COMBOS DE PORÇÕES",
        price: "54,99",
        description: "Filé de frango e tulipa de frango",
        status: true
      }
    ]
  },
  {
    id: "1702",
    name: "COMBO DE FRITAS",
    typeMenu: true,
    categoryTitle: "COMBOS DE PORÇÕES",
    variations: [
      {
        category: "COMBOS DE PORÇÕES",
        price: "92,99",
        description: "Batata, calabresa, mandioca e filé de frango",
        status: true
      }
    ]
  },
  {
    id: "1703",
    name: "COMBO DE FRITAS COM CHEDDAR",
    typeMenu: true,
    categoryTitle: "COMBOS DE PORÇÕES",
    variations: [
      {
        category: "COMBOS DE PORÇÕES",
        price: "76,99",
        description: "Batata com bacon e cheddar, calabresa e mandioca",
        status: true
      }
    ]
  },
  {
    id: "1704",
    name: "COMBO DE FILÉ COM FRITAS (SIMPLES)",
    typeMenu: true,
    categoryTitle: "COMBOS DE PORÇÕES",
    variations: [
      {
        category: "COMBOS DE PORÇÕES",
        price: "89,99",
        description: "Filé acebolado com batata e mandioca",
        status: true
      }
    ]
  },
  {
    id: "1705",
    name: "COMBO DE PICANHA COM FRITAS (SIMPLES)",
    typeMenu: true,
    categoryTitle: "COMBOS DE PORÇÕES",
    variations: [
      {
        category: "COMBOS DE PORÇÕES",
        price: "97,99",
        description: "Picanha com batata e mandioca",
        status: true
      }
    ]
  }

]);
