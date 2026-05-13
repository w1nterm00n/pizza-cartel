import './PizzaFilter.css';

const CATEGORIES = ['ВСЕ', 'КЛАССИКА', 'ВЕГАН', 'ОСТРОЕ'];
const SORT_OPTIONS = ['По популярности', 'По цене', 'По названию'];

export const PizzaFilter = () => {
  return (
    <div className="pizza-filter">
      <div className="pizza-filter__section">
        <span className="pizza-filter__label">КАТЕГОРИИ</span>
        <div className="pizza-filter__categories">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={`pizza-filter__cat-btn${i === 0 ? ' pizza-filter__cat-btn--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="pizza-filter__divider" />

      <div className="pizza-filter__section">
        <span className="pizza-filter__label">СОРТИРОВКА</span>
        <select className="pizza-filter__sort">
          {SORT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
