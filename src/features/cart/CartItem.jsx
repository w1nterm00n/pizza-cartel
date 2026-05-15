import { CartIngredients } from './CartIngredients';
import { pizzaDeleted, pizzaDecrease } from './cartSlice';
import { CartToppings } from './CartToppings';
import { usePizzaIncrease } from './usePizzaIncrease';
import { useDispatch } from 'react-redux';
import pizzaImg from '../../assets/pizza-pie.svg';

const BADGE_CLASS = {
  classic: 'pcc-item__badge--classic',
  vegan:   'pcc-item__badge--vegan',
  hot:     'pcc-item__badge--hot',
};
const BADGE_LABEL = {
  classic: 'КЛАССИКА',
  vegan:   'ВЕГАН',
  hot:     'ОСТРОЕ',
};
const SIZE_LABEL = { mini: '25 СМ', standart: '30 СМ', max: '35 СМ' };

export const CartItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const increasePizza = usePizzaIncrease();

  const totalPrice = pizza.options.reduce((sum, opt) => sum + opt.price, 0);
  const unitPrice = pizza.amount > 0 ? (totalPrice / pizza.amount).toFixed(0) : 0;
  const firstOption = pizza.options[0];
  const sizeLabel = SIZE_LABEL[firstOption?.size] ?? firstOption?.size ?? '';
  const badgeClass = BADGE_CLASS[pizza.category] ?? 'pcc-item__badge--default';
  const badgeLabel = BADGE_LABEL[pizza.category] ?? pizza.category?.toUpperCase();

  return (
    <li>
      <div className="pcc-item">
        <div className="pcc-item__pic">
          <img src={pizzaImg} alt={pizza.name} />
        </div>

        <div>
          <div className="pcc-item__meta">
            <span className={`pcc-item__badge ${badgeClass}`}>{badgeLabel}</span>
            <span className="pcc-item__size">{sizeLabel}</span>
          </div>
          <div className="pcc-item__nm">{pizza.name.toUpperCase()}</div>
          <div className="pcc-item__opts">
            {firstOption && <CartToppings toppings={firstOption.toppings} />}
            {firstOption && <CartIngredients ingredients={firstOption.ingredients} />}
          </div>
        </div>

        <div className="pcc-item__right">
          <div className="pcc-item__price">{totalPrice} ₽</div>
          <div className="pcc-item__actions">
            <div className="pcc-qty">
              <button type="button" onClick={() => dispatch(pizzaDecrease(pizza.pizzaId))}>−</button>
              <span className="pcc-qty__count">{pizza.amount}</span>
              <button type="button" onClick={() => increasePizza(pizza)}>+</button>
            </div>
            <button
              type="button"
              className="pcc-item__trash"
              onClick={() => dispatch(pizzaDeleted(pizza.pizzaId))}
              aria-label="Удалить"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6l-1 14H6L5 6"/>
                <path d="M10 11v6M14 11v6"/>
                <path d="M9 6V4h6v2"/>
              </svg>
            </button>
          </div>
          <div className="pcc-item__unit">{unitPrice} ₽ × {pizza.amount}</div>
        </div>
      </div>
    </li>
  );
};
