import { useDispatch } from 'react-redux';
import { pizzaIncrease } from './cartSlice';
import { getPrice } from '../../utils/pizzaPrice';

export const usePizzaIncrease = () => {
  const dispatch = useDispatch();
  return (pizza, size = 'standart') =>
    dispatch(
      pizzaIncrease({
        id: pizza.id,
        options: [
          {
            size,
            price: getPrice(pizza.price, size),
            ingredients: pizza.ingredients,
            toppings: [],
          },
        ],
      }),
    );
};
