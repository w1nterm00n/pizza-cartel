import { NavLink } from 'react-router-dom';
import './Footer.css';

export const Footer = () => (
  <footer className="pc-footer">
    <div className="pc-footer__inner">
      <div className="pc-footer__brand">
        <div className="pc-footer__brand-name">PIZZA CARTEL</div>
        <div className="pc-footer__brand-since">семья ест первой</div>
        <p>Бруклинская пицца с 1992 года. Три точки в городе. Один и тот же рецепт теста.</p>
      </div>
      <div>
        <h4>ЕДА</h4>
        <NavLink to="/">Меню</NavLink>
        <a>Акции</a>
        <a>Кейтеринг</a>
        <a>Подарочные карты</a>
      </div>
      <div>
        <h4>АДРЕСА</h4>
        <a>Мулберри-Стрит</a>
        <a>Смит-Стрит</a>
        <a>Астория</a>
        <a>Время работы</a>
      </div>
      <div>
        <h4>СЕМЬЯ</h4>
        <a>Программа лояльности</a>
        <a>Вакансии</a>
        <a>Пресса</a>
        <NavLink to="/orders">История заказов</NavLink>
      </div>
    </div>
    <div className="pc-footer__copyright">
      © 1992–2026 PIZZA CARTEL · Сделано громко · Без тонкого теста
    </div>
  </footer>
);
