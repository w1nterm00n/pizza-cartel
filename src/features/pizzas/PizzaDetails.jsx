import { useDispatch } from 'react-redux';
import { useAddToCard } from '../cart/useAddToCart';
import { usePizzaIncrease } from '../cart/usePizzaIncrease';
import { pizzaDecrease } from '../cart/cartSlice';
import { Link } from 'react-router-dom';

export const PizzaDetails = ({ pizza, amount }) => {
  const addToCart = useAddToCard();
  const increasePizza = usePizzaIncrease();
  const dispatch = useDispatch();
  const decreasePizza = (id) => {
    dispatch(pizzaDecrease(id));
  };
  return (
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
          <Link to={`/pizza/${pizza.id}`}>{pizza.name}</Link>
          <p className="pizza-card__description">{pizza.description}</p>
        </div>
        <hr className="pizza-card__divider" />
        <p className="pizza-card__price">${pizza.price}</p>
        <div className="pizza-card__actions">
          <span className="pizza-card__qty-label">Количество</span>
          <div className="pizza-card__qty">
            <button
              type="button"
              className="pizza-card__qty-btn"
              onClick={() => decreasePizza(pizza.id)}
            >
              −
            </button>
            <span className="pizza-card__qty-count">{amount}</span>
            <button
              type="button"
              className="pizza-card__qty-btn"
              onClick={() => increasePizza(pizza)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="pizza-card__add-btn"
            onClick={() => addToCart(pizza)}
          >
            Добавить в корзину
          </button>
        </div>
      </article>
    </li>
  );
};
