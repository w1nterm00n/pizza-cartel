import './PizzaDetails.css';
import { useDispatch } from 'react-redux';
import { useAddToCard } from '../cart/useAddToCart';
import { usePizzaIncrease } from '../cart/usePizzaIncrease';
import { pizzaDecrease } from '../cart/cartSlice';
import { Link } from 'react-router-dom';
import pizzaImg from '../../assets/pizza-pie.svg';

const BADGE_CLASS = {
  classic: 'pc-card__badge--classic',
  vegan:   'pc-card__badge--vegan',
  hot:     'pc-card__badge--hot',
};

const BADGE_LABEL = {
  classic: 'КЛАССИКА',
  vegan:   'ВЕГАН',
  hot:     'ОСТРОЕ',
};

export const PizzaDetails = ({ pizza, amount }) => {
  const addToCart = useAddToCard();
  const increasePizza = usePizzaIncrease();
  const dispatch = useDispatch();

  const badgeClass = BADGE_CLASS[pizza.category] ?? 'pc-card__badge--default';
  const badgeLabel = BADGE_LABEL[pizza.category] ?? pizza.category.toUpperCase();

  return (
    <li>
      <div className="pc-card">
        <div className="pc-card__badge-row">
          <span className={`pc-card__badge ${badgeClass}`}>{badgeLabel}</span>
        </div>

        <Link to={`/pizza/${pizza.id}`}>
          <img className="pc-card__img" src={pizzaImg} alt={pizza.name} />
        </Link>

        <Link className="pc-card__name" to={`/pizza/${pizza.id}`}>
          {pizza.name.toUpperCase()}
        </Link>
        <p className="pc-card__desc">{pizza.description}</p>

        <div className="pc-card__foot">
          <div className="pc-card__price">
            {pizza.price} ₽
            <small>ОТ · 30 СМ</small>
          </div>
          <div className="pc-card__qty">
            <button type="button" onClick={() => dispatch(pizzaDecrease(pizza.id))}>−</button>
            <span className="pc-card__qty-count">{amount}</span>
            <button type="button" onClick={() => increasePizza(pizza)}>+</button>
          </div>
        </div>

        <button
          type="button"
          className="pc-card__add-btn"
          onClick={() => addToCart(pizza)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="14" height="14">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          ДОБАВИТЬ В КОРЗИНУ
        </button>
      </div>
    </li>
  );
};
