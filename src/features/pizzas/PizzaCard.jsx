import './PizzaCard.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePizzaDetailQuery } from '../../app/api';
import { useAddToCard } from '../cart/useAddToCart';
import { pizzaDecrease } from '../cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { PizzaToppings } from './PizzaToppings';
import { usePizzaIncrease } from '../cart/usePizzaIncrease';
import { getPrice } from '../../utils/pizzaPrice';
import { PizzaIngredients } from './PizzaIngredients';
import pizzaImg from '../../assets/pizza-pie.svg';

const SIZES = [
  { label: '25 СМ', dim: 'mini', value: 'mini' },
  { label: '30 СМ', dim: 'standart', value: 'standart' },
  { label: '35 СМ', dim: 'max', value: 'max' },
];

const BADGE_CLASS = {
  classic: 'pcd-badge--classic',
  vegan: 'pcd-badge--vegan',
  hot: 'pcd-badge--hot',
};
const BADGE_LABEL = {
  classic: 'КЛАССИКА',
  vegan: 'ВЕГАН',
  hot: 'ОСТРОЕ',
};

export const PizzaCard = () => {
  const { id } = useParams();
  const addToCart = useAddToCard();
  const [activeSize, setActiveSize] = useState('standart');
  const increasePizza = usePizzaIncrease();
  const dispatch = useDispatch();
  const [toppings, setToppings] = useState([
    { id: 1, amount: 0, price: 0 },
    { id: 2, amount: 0, price: 0 },
    { id: 3, amount: 0, price: 0 },
    { id: 4, amount: 0, price: 0 },
    { id: 5, amount: 0, price: 0 },
  ]);
  const [ingredients, setIngredients] = useState([]);
  const cart = useSelector((state) => state.cart);
  const pizzaItem = cart.find((item) => item.pizzaId == id);

  const { data: pizza, isLoading, isError } = usePizzaDetailQuery({ id });

  useEffect(() => {
    if (pizza) setIngredients(pizza.ingredients);
  }, [pizza]);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки</p>;
  if (!pizza) return <h1>Пицца не найдена</h1>;

  const activePrice = getPrice(pizza.price, activeSize, toppings);
  const activeSizeObj = SIZES.find((s) => s.value === activeSize);
  const badgeClass = BADGE_CLASS[pizza.category] ?? 'pcd-badge--default';
  const badgeLabel =
    BADGE_LABEL[pizza.category] ?? pizza.category.toUpperCase();

  return (
    <div className="pcd-wrap">
      {/* LEFT: image */}
      <div>
        <Link className="pcd-back" to="/">
          ← К МЕНЮ
        </Link>
        <div className="pcd-imgwrap">
          <div className="pcd-stamp">
            {activeSizeObj.label}
            <br />
            <small>ВЫБРАНО</small>
          </div>
          <div className="pcd-pie-disk pcd-pie-disk--spin">
            <img src={pizzaImg} alt={pizza.name} />
          </div>
          <div className="pcd-thumbs">
            {SIZES.map((s) => (
              <div
                key={s.value}
                className={`pcd-thumb${activeSize === s.value ? ' pcd-thumb--active' : ''}`}
                onClick={() => setActiveSize(s.value)}
              >
                {s.label.replace(' СМ', '')}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: info */}
      <div className="pcd-info">
        <Link className="pcd-back" to="/">
          ← К МЕНЮ
        </Link>

        <div className="pcd-badges">
          <span className={`pcd-badge ${badgeClass}`}>{badgeLabel}</span>
          <span className="pcd-badge pcd-badge--light">
            {activeSizeObj.label}
          </span>
        </div>

        <div className="pcd-since">прямо из печи —</div>
        <div className="pcd-name">{pizza.name.toUpperCase()}</div>
        <p className="pcd-lede">{pizza.description}</p>

        <div className="pcd-section">
          <h4>ВЫБЕРИТЕ РАЗМЕР</h4>
          <div className="pcd-sizes">
            {SIZES.map((s) => (
              <button
                key={s.value}
                type="button"
                className={`pcd-size${activeSize === s.value ? ' pcd-size--active' : ''}`}
                onClick={() => setActiveSize(s.value)}
              >
                <div className="pcd-size__label">{s.label}</div>
                <div className="pcd-size__dim">{s.dim}</div>
                <div className="pcd-size__price">
                  {getPrice(pizza.price, s.value, []).toFixed(0)} ₽
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="pcd-section">
          <h4>СОСТАВ — НАЖМИТЕ, ЧТОБЫ УБРАТЬ</h4>
          <PizzaIngredients
            defaultIngredients={pizza.ingredients}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        </div>

        <div className="pcd-section">
          <h4>ДОБАВИТЬ ТОППИНГИ</h4>
          <PizzaToppings toppings={toppings} setToppings={setToppings} />
        </div>

        <div className="pcd-cart-bar">
          <div className="pcd-cart-qty">
            <button
              type="button"
              onClick={() => dispatch(pizzaDecrease(pizza.id))}
            >
              −
            </button>
            <span className="pcd-cart-qty__count">
              {pizzaItem ? pizzaItem.amount : 0}
            </span>
            <button
              type="button"
              onClick={() =>
                increasePizza(pizza, activeSize, toppings, ingredients)
              }
            >
              +
            </button>
          </div>
          <div className="pcd-total">{activePrice} ₽</div>
          <button
            type="button"
            className="pcd-cta"
            onClick={() => addToCart(pizza, activeSize, toppings, ingredients)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              width="16"
              height="16"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
            В КОРЗИНУ
          </button>
        </div>
      </div>
    </div>
  );
};
