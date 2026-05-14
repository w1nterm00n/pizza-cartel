import './Order.css';

export const Order = ({ order }) => {
  return (
    <div className="order">
      <div className="order__header">
        <div className="order__date-wrap">
          <span className="order__date-icon">📅</span>
          <span className="order__date">{order.date}</span>
        </div>
        <span className="order__total">${order.totalPrice}</span>
      </div>

      <div className="order__items">
        {order.items.map((item) => (
          <div key={item.id} className="order__item">
            <div className="order__item-img" />
            <div className="order__item-info">
              <span className="order__item-name">{item.name}</span>

              {item.options.map((option) => (
                <div className="order__item-tags">
                  <span className="order__tag">{option.size}</span>
                  <span className="order__item-price">${option.price}</span>
                  {option.toppings.length > 0 && (
                    <span className="order__tag">
                      {option.toppings.filter((t) => t.amount > 0).length > 0 &&
                        (() => {
                          const totalAmount = option.toppings.reduce(
                            (sum, t) => sum + t.amount,
                            0,
                          );
                          const totalPrice = option.toppings.reduce(
                            (sum, t) => sum + t.price * t.amount,
                            0,
                          );
                          return (
                            <span className="order__tag">
                              +{totalAmount} топпинг(а) — $
                              {totalPrice.toFixed(2)}
                            </span>
                          );
                        })()}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="order__repeat">
        <span className="order__repeat-icon">↺</span>
        Повторить заказ
        <span className="order__repeat-arrow">›</span>
      </button>
    </div>
  );
};
