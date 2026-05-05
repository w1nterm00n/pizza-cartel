import { useSelector } from 'react-redux';
import './PizzasList.css';

export const PizzasList = () => {
  const pizzas = useSelector((state) => state.pizzas);

  return (
    <section className="pizzas-list">
      <h2>Pizzas</h2>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <article>
              <img
                className="pizza-card__image"
                src={pizza.imageUrl}
                alt={pizza.name}
              />
              <div className="pizza-card__body">
                <span className="pizza-card__badge">{pizza.category}</span>
                <h3>{pizza.name}</h3>
                <p className="pizza-card__description">{pizza.description}</p>
              </div>
              <hr className="pizza-card__divider" />
              <p className="pizza-card__price">${pizza.price}</p>
              <button type="button" className="pizza-card__button">
                Добавить в корзину
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
