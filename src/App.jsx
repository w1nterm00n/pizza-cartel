import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { OrdersPage } from './pages/OrdersPage';
import { PizzaPage } from './pages/PizzaPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/pizza/:id" element={<PizzaPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
