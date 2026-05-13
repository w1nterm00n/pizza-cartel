import { useDispatch } from 'react-redux';
import { pizzaAdded } from './cartSlice';
import { nanoid } from '@reduxjs/toolkit';
import { getPrice } from '../../utils/pizzaPrice';

export const useAddToCard = () => {
  const dispatch = useDispatch();
  return (pizza, size = 'standart', toppings = []) =>
    dispatch(
      pizzaAdded({
        id: nanoid(),
        pizzaId: pizza.id,
        amount: 1,
        name: pizza.name,
        price: pizza.price,
        imageUrl: pizza.imageUrl,
        category: pizza.category,
        description: pizza.description,
        options: [
          {
            size,
            price: getPrice(pizza.price, size),
            ingredients: pizza.ingredients,
            toppings,
          },
        ],
      }),
    );
};
