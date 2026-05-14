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
              <div className="order__item-tags">
                <span className="order__tag">{item.size}</span>
                {item.toppingsCount > 0 && (
                  <span className="order__tag">
                    +{item.toppingsCount}{' '}
                    {item.toppingsCount === 1 ? 'топпинг' : 'топпинга'}
                  </span>
                )}
              </div>
            </div>
            <span className="order__item-price">${item.price}</span>
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
