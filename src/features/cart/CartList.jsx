import { useSelector } from 'react-redux';
import './CartList.css';

export const CartList = () => {
  const items = useSelector((state) => state.cart);
  const pizzas = useSelector((state) => state.pizzas);
  const deletePizza = (id) => {
    //delete logic
  };

  const itemsFullData = items.map((item) => {
    const pizza = pizzas.find((p) => p.id === item.pizzaId);
    return { ...pizza, amount: item.amount };
  });

  return (
    <section>
      <h2>Содержимое корзины</h2>
      <ul className="cart-list">
        {itemsFullData.map((pizza) => (
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
                <span>Без изменений</span>
                <span className="cart-item__details-dough">Без изменений</span>
                <span className="cart-item__details-mods">Без изменений</span>
              </div>
              <div className="cart-item__divider" />
              <span className="cart-item__price">${pizza.price}</span>
              <div className="cart-item__divider" />
              <div className="cart-item__qty">
                <button type="button" className="cart-item__qty-btn">
                  −
                </button>
                <span className="cart-item__qty-count">{pizza.amount}</span>
                <button type="button" className="cart-item__qty-btn">
                  +
                </button>
              </div>
              <div className="cart-item__divider" />
              <span className="cart-item__total">
                ${(pizza.price * pizza.amount).toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => deletePizza(pizza.id)}
                className="cart-item__delete"
              >
                🗑
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
