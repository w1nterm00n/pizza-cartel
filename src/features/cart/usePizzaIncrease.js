import { useDispatch } from 'react-redux';
import { pizzaIncrease } from './cartSlice';

export const usePizzaIncrease = () => {
  const dispatch = useDispatch();
  return (pizza, size = 'standart') =>
    dispatch(
      pizzaIncrease({
        id: pizza.id,
        options: [
          {
            size,
            ingredients: pizza.ingredients,
            toppings: [],
          },
        ],
      }),
    );
};
