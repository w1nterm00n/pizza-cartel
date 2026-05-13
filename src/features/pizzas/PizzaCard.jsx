import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PizzaCard.css';
import { usePizzaDetailQuery } from '../../app/api';
import { useAddToCard } from '../cart/useAddToCart';
import { pizzaDecrease } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PizzaToppings } from './PizzaToppings';
import { usePizzaIncrease } from '../cart/usePizzaIncrease';
import { getPrice } from '../../utils/pizzaPrice';

const STUB_SIZES = [
  { label: '25 см', hint: '', value: 'mini' },
  {
    label: '30 см',
    hint: '30 см — оптимально для 2–3 человек',
    value: 'standart',
  },
  { label: '35 см', hint: '', value: 'max' },
];

export const PizzaCard = () => {
  const { id } = useParams();
  const addToCart = useAddToCard();
  const [activeSize, setActiveSize] = useState('standart');
  const increasePizza = usePizzaIncrease();
  const dispatch = useDispatch();
  const [toppings, setToppings] = useState([
    { id: 1, amount: 0 },
    { id: 2, amount: 0 },
    { id: 3, amount: 0 },
    { id: 4, amount: 0 },
    { id: 5, amount: 0 },
  ]);
  const decreasePizza = (id) => {
    dispatch(pizzaDecrease(id));
  };
  const cart = useSelector((state) => state.cart);
  const pizzaItem = cart.find((item) => item.pizzaId == id);

  const { data: pizza, isLoading, isError } = usePizzaDetailQuery({ id: id });

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки пицц</p>;
  if (!pizza) return <h1>No pizza found</h1>;

  const activePrice = getPrice(pizza.price, activeSize);

  return (
    <div className="pizza-card">
      {/* LEFT */}
      <div>
        <div className="pizza-card__image-box">
          <img src={pizza.imageUrl} alt={pizza.name} />
        </div>
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
            <span className="pizza-card__qty-count">
              {pizzaItem ? pizzaItem.amount : '0'}
            </span>
            <button
              type="button"
              className="pizza-card__qty-btn"
              onClick={() => increasePizza(pizza, activeSize, toppings)}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="pizza-card__add-btn"
            onClick={() => addToCart(pizza, activeSize, toppings)}
          >
            Добавить в корзину
          </button>
        </div>
      </div>

      {/* MIDDLE */}
      <div>
        <span className="pizza-card__badge">{pizza.category}</span>
        <h1 className="pizza-card__name">{pizza.name}</h1>
        <p className="pizza-card__price">${activePrice}</p>
        <hr className="pizza-card__divider" />
        <p className="pizza-card__description">{pizza.description}</p>
        <hr className="pizza-card__divider" />
        <p className="pizza-card__ingredients-title">Ингредиенты</p>
        <ul className="pizza-card__ingredients">
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="pizza-card__panel">
        <p className="pizza-card__panel-title">Выберите размер</p>
        <div className="pizza-card__sizes">
          {STUB_SIZES.map((size) => (
            <button
              key={size.label}
              type="button"
              value={size.value}
              onClick={() => setActiveSize(size.value)}
              className={`pizza-card__size-btn${size.value == activeSize ? ' pizza-card__size-btn--active' : ''}`}
            >
              {size.label}
            </button>
          ))}
        </div>
        <p className="pizza-card__size-hint">{activeSize.hint}</p>
        <hr className="pizza-card__panel-divider" />
        <PizzaToppings toppings={toppings} setToppings={setToppings} />
      </div>
    </div>
  );
};
