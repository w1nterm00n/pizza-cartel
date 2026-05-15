import './PizzasList.css';
import { usePizzaListQuery } from '../../app/api';
import { useSelector } from 'react-redux';
import { PizzaFilter } from './PizzaFilter';
import { useEffect, useState } from 'react';
import { PizzaDetails } from './PizzaDetails';

export const PizzasList = () => {
  const cart = useSelector((state) => state.cart);
  const [pizzas, setPizzas] = useState([]);
  const { data, isLoading, isError, isSuccess } = usePizzaListQuery();

  useEffect(() => {
    if (data) setPizzas(data);
  }, [data]);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки пицц</p>;

  return (
    <section className="pizzas-list">
      <PizzaFilter setPizzas={setPizzas} allPizzas={data} pizzas={pizzas} />
      <ul>
        {isSuccess &&
          pizzas.map((pizza) => {
            const cartItem = cart.find((item) => item.pizzaId === pizza.id);
            const amount = cartItem?.amount ?? 0;
            return <PizzaDetails pizza={pizza} amount={amount} />;
          })}
      </ul>
    </section>
  );
};
