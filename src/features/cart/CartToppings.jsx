import { useToppingListQuery } from '../../app/api';

export const CartToppings = ({ toppings }) => {
  const { data: API_TOPPINGS, isLoading, isError } = useToppingListQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки топпингов</p>;

  const toppingsArr = toppings
    .filter((item) => item.amount > 0)
    .map((item) => {
      const apiTopping = API_TOPPINGS.find((t) => t.id === item.id);
      return {
        id: item.id,
        name: apiTopping.name,
        icon: apiTopping.icon,
        amount: item.amount,
      };
    });

  if (toppingsArr.length === 0) return <p>Топпинги: Без добавок</p>;

  return (
    <div>
      <p>Toppings</p>
      <ul>
        {toppingsArr.map((topping) => (
          <li key={topping.id}>
            {topping.icon} {topping.name}: {topping.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
