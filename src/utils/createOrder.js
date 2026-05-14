export const createOrder = async (pizzas, totalPrice, addOrderToApi) => {
  const date = new Date().toLocaleString('ru', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  let order = {
    date: date,
    totalPrice: totalPrice,
    items: [],
  };

  pizzas.forEach((pizzaType) => {
    let obj = {
      amount: pizzaType.amount,
      imageUrl: pizzaType.imageUrl,
      name: pizzaType.name,
      options: pizzaType.options,
    };
    order.items.push(obj);
  });

  await addOrderToApi(order);
};
