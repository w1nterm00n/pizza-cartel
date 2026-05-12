import './PizzasList.css';
import { Link } from 'react-router-dom';
import { usePizzaListQuery } from '../../app/api';
import { useAddToCard } from '../cart/useAddToCart';
import { useDispatch, useSelector } from 'react-redux';
import { pizzaDecrease, pizzaIncrease } from '../cart/cartSlice';

export const PizzasList = () => {
  const addToCart = useAddToCard();
  const cart = useSelector((state) => state.cart);
  const { data: pizzas, isLoading, isError, isSuccess } = usePizzaListQuery();
  const dispatch = useDispatch();
  const increasePizza = (id, ingredients) => {
    dispatch(
      pizzaIncrease({
        id: id,
        options: [
          {
            size: 'standart',
            ingredients: ingredients,
            dops: [],
          },
        ],
      }),
    );
  };
  const decreasePizza = (id) => {
    dispatch(pizzaDecrease(id));
  };
  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки пицц</p>;

  return (
    <section className="pizzas-list">
      <h2>Pizzas</h2>
      <ul>
        {isSuccess &&
          pizzas.map((pizza) => {
            const cartItem = cart.find((item) => item.pizzaId === pizza.id);
            const amount = cartItem?.amount ?? 0;
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
                    <p className="pizza-card__description">
                      {pizza.description}
                    </p>
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
                        onClick={() =>
                          increasePizza(pizza.id, pizza.ingredients)
                        }
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
          })}
      </ul>
    </section>
  );
};
