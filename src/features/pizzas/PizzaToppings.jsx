import { useToppingListQuery } from '../../app/api';

export const PizzaToppings = ({ toppings, setToppings }) => {
  const { data: API_TOPPINGS, isLoading, isError } = useToppingListQuery();

  const increaseTopping = (id, toppingPrice) => {
    setToppings(
      toppings.map((t) =>
        t.id === id ? { ...t, amount: t.amount + 1, price: t.price + toppingPrice } : t,
      ),
    );
  };

  const decreaseTopping = (id, toppingPrice) => {
    const topping = toppings.find((item) => item.id === id);
    if (topping.amount > 0) {
      setToppings(
        toppings.map((t) =>
          t.id === id ? { ...t, amount: t.amount - 1, price: t.price - toppingPrice } : t,
        ),
      );
    }
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки топпингов</p>;

  return (
    <div className="pcd-ings pcd-ings--1col">
      {API_TOPPINGS.map((topping) => {
        const q = toppings.find((t) => t.id === topping.id)?.amount ?? 0;
        return (
          <div key={topping.id} className={`pcd-ing added${q > 0 ? ' on' : ''}`}>
            <span className="pcd-ing__icon">{topping.icon}</span>
            <div className="pcd-ing__nm">{topping.name}</div>
            <div className="pcd-qty">
              <button type="button" onClick={() => decreaseTopping(topping.id, topping.price)}>−</button>
              <span className="pcd-qty__v">{q}</span>
              <button type="button" onClick={() => increaseTopping(topping.id, topping.price)}>+</button>
            </div>
            <div className="pcd-ing__px">{topping.price.toFixed(0)} ₽</div>
          </div>
        );
      })}
    </div>
  );
};
