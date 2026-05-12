import { useDispatch } from 'react-redux';
import { pizzaAdded } from './cartSlice';
import { nanoid } from '@reduxjs/toolkit';

export const useAddToCard = () => {
  const dispatch = useDispatch();
  return (pizza) =>
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
      }),
    );
};
