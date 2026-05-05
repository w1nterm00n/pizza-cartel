import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'pepperoni-classic',
    name: 'Пепперони Классика',
    description:
      'Хрустящая корочка, томатный соус, моцарелла и щедрый слой пепперони. Никаких сюрпризов, человечество и так еле держится.',
    price: 12.99,
    imageUrl: '/images/pizzas/pepperoni-classic.jpg',
    category: 'classic',
    ingredients: [
      'тесто',
      'томатный соус',
      'моцарелла',
      'пепперони',
      'орегано',
    ],
    available: true,
  },
  {
    id: 'vegan-garden',
    name: 'Веганский Сад',
    description: 'Овощная пицца с грибами, перцем, оливками и веганским сыром.',
    price: 11.49,
    imageUrl: '/images/pizzas/vegan-garden.jpg',
    category: 'vegan',
    ingredients: [
      'тесто',
      'томатный соус',
      'веганский сыр',
      'шампиньоны',
      'болгарский перец',
      'оливки',
      'руккола',
    ],
    available: true,
  },
  {
    id: 'spicy-diablo',
    name: 'Острый Диабло',
    description:
      'Пицца с острым соусом, салями, халапеньо и чили. Для тех, кто решил поссориться с желудком.',
    price: 13.99,
    imageUrl: '/images/pizzas/spicy-diablo.jpg',
    category: 'spicy',
    ingredients: [
      'тесто',
      'острый томатный соус',
      'моцарелла',
      'острая салями',
      'халапеньо',
      'перец чили',
    ],
    available: true,
  },
];

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: initialState,
  reducers: {},
});

export default pizzasSlice.reducer;
