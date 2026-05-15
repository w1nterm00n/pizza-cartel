import { useDispatch, useSelector } from 'react-redux';
import './CartList.css';
import { cartCleared } from './cartSlice';
import { CartItem } from './CartItem';
import { useEffect, useState } from 'react';
import { createOrder } from '../../utils/createOrder';
import { useAddOrderMutation } from '../../app/api';
import { Link } from 'react-router-dom';

export const CartList = () => {
  const pizzas = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [addOrderToApi] = useAddOrderMutation();

  useEffect(() => {
    if (pizzas.length === 0) {
      setTotalPrice(0);
      return;
    }
    const price = pizzas.reduce(
      (sum, pizza) =>
        sum + pizza.options.reduce((optSum, opt) => optSum + opt.price, 0),
      0,
    );
    setTotalPrice(price);
  }, [pizzas]);

  const clearCart = () => dispatch(cartCleared());

  const handleOrder = () => {
    createOrder(pizzas, totalPrice, addOrderToApi);
    clearCart();
  };

  const orderNum = `#CR-${Math.floor(Math.random() * 9000 + 1000)}`;

  return (
    <div className="pcc-wrap">
      {/* LEFT: receipt */}
      <div>
        <div className="pcc-head">
          <div className="pcc-head__title">КОРЗИНА</div>
          <div className="pcc-head__flair">— проверь и подтверди</div>
          <div className="pcc-head__count">
            {pizzas.length} {pizzas.length === 1 ? 'позиция' : 'позиций'}
          </div>
        </div>

        {pizzas.length === 0 ? (
          <div className="pcc-empty">
            <div className="pcc-empty__title">КОРЗИНА ПУСТА</div>
            <p className="pcc-empty__sub">
              Самое время заполнить её чем-нибудь горячим.
            </p>
            <Link
              to="/"
              className="pcc-btn pcc-btn--ink"
              style={{ display: 'inline-flex' }}
            >
              ОТКРЫТЬ МЕНЮ
            </Link>
          </div>
        ) : (
          <>
            <div className="pcc-receipt">
              <div className="pcc-receipt-head">
                <div className="pcc-receipt-head__label">ВАШ ЗАКАЗ</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pizzas.map((pizza) => (
                  <CartItem key={pizza.id} pizza={pizza} />
                ))}
              </ul>
            </div>

            <div className="pcc-actions">
              <button
                type="button"
                className="pcc-btn pcc-btn--ghost"
                onClick={clearCart}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="14"
                  height="14"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2" />
                </svg>
                ОЧИСТИТЬ КОРЗИНУ
              </button>
              <Link to="/" className="pcc-btn pcc-btn--ink">
                ← ДОБАВИТЬ ЕЩЁ
              </Link>
            </div>
          </>
        )}
      </div>

      {/* RIGHT: summary */}
      {pizzas.length > 0 && (
        <div className="pcc-summary">
          <h3>К ОПЛАТЕ</h3>
          <div className="pcc-row">
            <span>Подытог</span>
            <span>{totalPrice} ₽</span>
          </div>
          <div className="pcc-row">
            <span>Доставка</span>
            <span style={{ color: 'var(--pc-basil)' }}>БЕСПЛАТНО</span>
          </div>
          <div className="pcc-row pcc-row--total">
            <span>ИТОГО</span>
            <b>{totalPrice} ₽</b>
          </div>
          <button type="button" className="pcc-cta" onClick={handleOrder}>
            СДЕЛАТЬ ЗАКАЗ →
          </button>
        </div>
      )}
    </div>
  );
};
