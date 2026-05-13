import { useDispatch, useSelector } from 'react-redux';
import './CartList.css';
import { cartCleared } from './cartSlice';
import { CartItem } from './CartItem';
export const CartList = () => {
  const pizzas = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(cartCleared());
  };

  return (
    <section>
      <h2>Содержимое корзины</h2>
      <ul className="cart-list">
        {pizzas.map((pizza) => (
          <CartItem pizza={pizza} />
        ))}
      </ul>

      {/* <span>Total price: {totalPrice}</span> */}

      <button type="button" onClick={() => clearCart()}>
        ОЧИСТИТЬ КОРЗИНУ 🗑
      </button>
    </section>
  );
};
