import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './PizzaCard.css';
import { usePizzaDetailQuery } from '../../app/api';

const STUB_SIZES = [
  { label: '25 см', hint: '' },
  { label: '30 см', hint: '30 см — оптимально для 2–3 человек', active: true },
  { label: '35 см', hint: '' },
];

const STUB_TOPPINGS = [
  { id: 1, icon: '🧀', name: 'Доп. сыр', amount: 1, price: 1.5 },
  { id: 2, icon: '🌶', name: 'Халапеньо', amount: 1, price: 1.0 },
  { id: 3, icon: '🍖', name: 'Салями', amount: 1, price: 1.5 },
  { id: 4, icon: '🧅', name: 'Лук', amount: 0, price: 0.5 },
  { id: 5, icon: '🌶', name: 'Чили', amount: 1, price: 0.75 },
];

export const PizzaCard = () => {
  const { id } = useParams();

  const activeSize = STUB_SIZES.find((s) => s.active);

  const {
    data: pizza,
    isLoading,
    isError,
    isSuccess,
  } = usePizzaDetailQuery({ id: id });
  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки пицц</p>;
  if (!pizza) return <h1>No pizza found</h1>;

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
            <button type="button" className="pizza-card__qty-btn">
              −
            </button>
            <span className="pizza-card__qty-count">1</span>
            <button type="button" className="pizza-card__qty-btn">
              +
            </button>
          </div>
          <button type="button" className="pizza-card__add-btn">
            Добавить в корзину
          </button>
        </div>
      </div>

      {/* MIDDLE */}
      <div>
        <span className="pizza-card__badge">{pizza.category}</span>
        <h1 className="pizza-card__name">{pizza.name}</h1>
        <p className="pizza-card__price">${pizza.price}</p>
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
              className={`pizza-card__size-btn${size.active ? ' pizza-card__size-btn--active' : ''}`}
            >
              {size.label}
            </button>
          ))}
        </div>
        <p className="pizza-card__size-hint">{activeSize.hint}</p>
        <hr className="pizza-card__panel-divider" />
        <p className="pizza-card__panel-title">Настройте состав</p>
        <ul className="pizza-card__toppings">
          {STUB_TOPPINGS.map((topping) => (
            <li key={topping.id} className="pizza-card__topping">
              <span className="pizza-card__topping-icon">{topping.icon}</span>
              <span className="pizza-card__topping-name">{topping.name}</span>
              <div className="pizza-card__topping-qty">
                <button type="button" className="pizza-card__topping-btn">
                  −
                </button>
                <span className="pizza-card__topping-count">
                  {topping.amount}
                </span>
                <button type="button" className="pizza-card__topping-btn">
                  +
                </button>
              </div>
              <span className="pizza-card__topping-price">
                ${topping.price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
