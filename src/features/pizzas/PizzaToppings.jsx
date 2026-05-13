export const PizzaToppings = () => {
  const STUB_TOPPINGS = [
    { id: 1, icon: '🧀', name: 'Доп. сыр', amount: 0, price: 1.5 },
    { id: 2, icon: '🌶', name: 'Халапеньо', amount: 0, price: 1.0 },
    { id: 3, icon: '🍖', name: 'Салями', amount: 0, price: 1.5 },
    { id: 4, icon: '🧅', name: 'Лук', amount: 0, price: 0.5 },
    { id: 5, icon: '🌶', name: 'Чили', amount: 0, price: 0.75 },
  ];
  return (
    <>
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
              <span className="pizza-card__topping-count">0</span>
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
    </>
  );
};
