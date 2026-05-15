import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export const Navbar = () => {
  const cartCount = useSelector((state) =>
    state.cart.reduce((sum, item) => sum + item.amount, 0)
  );

  return (
    <>
      <div className="pc-strip">
        <span>★ ДОСТАВКА ОТ $25 — БЕСПЛАТНО</span>
        <span>ОТКРЫТО 11:00 – 23:00</span>
        <span>☎ +7 (812) 555-01-92</span>
      </div>
      <div className="pc-awning" />
      <nav className="pc-nav">
        <NavLink to="/" className="pc-nav__brand">
          <div className="pc-nav__brand-text">
            <div className="pc-nav__brand-name">PIZZA CARTEL</div>
            <div className="pc-nav__brand-since">с 92-го</div>
          </div>
        </NavLink>

        <div className="pc-nav__links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'pc-nav__link active' : 'pc-nav__link'}>
            Меню
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'pc-nav__link active' : 'pc-nav__link'}>
            Корзина
            {cartCount > 0 && <span className="pc-nav__badge">{cartCount}</span>}
          </NavLink>
          <NavLink to="/orders" className={({ isActive }) => isActive ? 'pc-nav__link active' : 'pc-nav__link'}>
            Заказы
          </NavLink>
        </div>

        <div className="pc-nav__right">
          <span className="pc-nav__phone">☎ +7 (812) 555-01-92</span>
          <NavLink to="/cart" className="pc-nav__cart-btn">
            🛒 КОРЗИНА
            {cartCount > 0 && <span className="pc-nav__badge">{cartCount}</span>}
          </NavLink>
        </div>
      </nav>
    </>
  );
};
