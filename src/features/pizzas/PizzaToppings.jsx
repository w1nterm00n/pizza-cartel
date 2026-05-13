import { useToppingListQuery } from '../../app/api';

export const PizzaToppings = ({ toppings, setToppings }) => {
  const { data: API_TOPPINGS, isLoading, isError } = useToppingListQuery();

  const increaseTopping = (id, toppingPrice) => {
    setToppings(
      toppings.map((t) =>
        t.id === id
          ? { ...t, amount: t.amount + 1, price: t.price + toppingPrice }
          : t,
      ),
    );
  };
  const decreaseTopping = (id, toppingPrice) => {
    const topping = toppings.find((item) => item.id === id);
    if (topping.amount > 0) {
      setToppings(
        toppings.map((t) =>
          t.id === id
            ? { ...t, amount: t.amount - 1, price: t.price - toppingPrice }
            : t,
        ),
      );
    }
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки топпингов</p>;

  return (
    <>
      <p className="pizza-card__panel-title">Настройте состав</p>
      <ul className="pizza-card__toppings">
        {API_TOPPINGS.map((topping) => (
          <li key={topping.id} className="pizza-card__topping">
            <span className="pizza-card__topping-icon">{topping.icon}</span>
            <span className="pizza-card__topping-name">{topping.name}</span>
            <div className="pizza-card__topping-qty">
              <button
                type="button"
                className="pizza-card__topping-btn"
                onClick={() => decreaseTopping(topping.id, topping.price)}
              >
                −
              </button>
              <span className="pizza-card__topping-count">
                {toppings.find((t) => t.id === topping.id).amount}
              </span>
              <button
                type="button"
                className="pizza-card__topping-btn"
                onClick={() => increaseTopping(topping.id, topping.price)}
              >
                +
              </button>
            </div>
            <span className="pizza-card__topping-price">
              ${topping.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
