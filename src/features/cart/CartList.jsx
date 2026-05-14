import { useDispatch, useSelector } from 'react-redux';
import './CartList.css';
import { cartCleared } from './cartSlice';
import { CartItem } from './CartItem';
import { useEffect, useState } from 'react';
import { createOrder } from '../../utils/createOrder';
import { useAddOrderMutation } from '../../app/api';
export const CartList = () => {
  const pizzas = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [addOrderToApi] = useAddOrderMutation();

  useEffect(() => {
    if (pizzas.length === 0) return;
    const price = pizzas.reduce(
      (sum, pizzaType) =>
        sum +
        pizzaType.options.reduce((optSum, option) => optSum + option.price, 0),
      0,
    );
    setTotalPrice(price);
  }, [pizzas]);

  const clearCart = () => {
    dispatch(cartCleared());
  };

  const handleCreateOrderClick = (pizzas, totalPrice) => {
    createOrder(pizzas, totalPrice, addOrderToApi);
    clearCart();
  };

  return (
    <section>
      <h2>Содержимое корзины</h2>
      <ul className="cart-list">
        {pizzas.map((pizza) => (
          <CartItem pizza={pizza} />
        ))}
      </ul>

      <span>Total price: {totalPrice}</span>

      <button type="button" onClick={() => clearCart()}>
        ОЧИСТИТЬ КОРЗИНУ 🗑
      </button>

      <button
        type="button"
        onClick={() => handleCreateOrderClick(pizzas, totalPrice)}
      >
        СДЕЛАТЬ ЗАКАЗ
      </button>
    </section>
  );
};
