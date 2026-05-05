import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav>
    <NavLink to="/">Menu</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <NavLink to="/orders">Orders</NavLink>
  </nav>
);
