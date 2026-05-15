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
      <div className="pc-section-head">
        <div className="pc-section-head__title">МЕНЮ</div>
        <div className="pc-section-head__flair">— прямо из печи</div>
        <div className="pc-section-head__count">{pizzas.length} позиций</div>
      </div>

      <PizzaFilter setPizzas={setPizzas} allPizzas={data} pizzas={pizzas} />

      <ul>
        {isSuccess &&
          pizzas.map((pizza) => {
            const cartItem = cart.find((item) => item.pizzaId === pizza.id);
            const amount = cartItem?.amount ?? 0;
            return <PizzaDetails key={pizza.id} pizza={pizza} amount={amount} />;
          })}
      </ul>
    </section>
  );
};
