import { CartIngredients } from './CartIngredients';
import { pizzaDeleted, pizzaDecrease } from './cartSlice';
import { CartToppings } from './CartToppings';
import { usePizzaIncrease } from './usePizzaIncrease';
import { useDispatch } from 'react-redux';

export const CartItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const deletePizza = (id) => {
    dispatch(pizzaDeleted(id)); //pizzaId
  };
  const decreasePizza = (id) => {
    dispatch(pizzaDecrease(id));
  };
  const increasePizza = usePizzaIncrease();
  const totalPrice = pizza.options.reduce((sum, item) => sum + item.price, 0);

  return (
    <li key={pizza.id}>
      <article className="cart-item">
        <img
          className="cart-item__image"
          src={pizza.imageUrl}
          alt={pizza.name}
        />
        <div className="cart-item__info">
          <span className="cart-item__badge">{pizza.category}</span>
          <h3 className="cart-item__name">{pizza.name}</h3>
          <p className="cart-item__description">{pizza.description}</p>
        </div>
        <div className="cart-item__divider" />
        <div className="cart-item__details">
          {pizza.options.map((option) => (
            <div key={option.size} className="cart-item__option">
              <div className="cart-item__option-info">
                <span className="cart-item__details-size">{option.size}</span>
                <span className="cart-item__details-dough">
                  <CartToppings toppings={option.toppings} />
                </span>
                <span className="cart-item__details-mods">
                  <CartIngredients ingredients={option.ingredients} />
                </span>
              </div>
              <span className="cart-item__option-price">${option.price}</span>
            </div>
          ))}
        </div>
        <div className="cart-item__divider" />
        <div className="cart-item__qty">
          <button
            type="button"
            onClick={() => decreasePizza(pizza.pizzaId)}
            className="cart-item__qty-btn"
          >
            −
          </button>
          <span className="cart-item__qty-count">{pizza.amount}</span>
          <button
            type="button"
            onClick={() => increasePizza(pizza)}
            className="cart-item__qty-btn"
          >
            +
          </button>
        </div>
        <div className="cart-item__divider" />
        <span className="cart-item__total">${totalPrice}</span>
        <button
          type="button"
          onClick={() => deletePizza(pizza.pizzaId)}
          className="cart-item__delete"
        >
          🗑
        </button>
      </article>
    </li>
  );
};
