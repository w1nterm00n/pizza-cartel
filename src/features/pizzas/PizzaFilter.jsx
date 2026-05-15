import './PizzaFilter.css';
import { useState } from 'react';

const CATEGORIES = ['all', 'classic', 'vegan', 'hot'];
const SORT_OPTIONS = [
  { text: 'По возрастанию цены', criteria: 'priceIncrease' },
  { text: 'По уменьшению цены', criteria: 'priceDecrease' },
];

const chooseCategory = (category, allPizzas, setPizzas) => {
  if (category === 'all') {
    setPizzas(allPizzas);
    return;
  }
  let newArr = allPizzas.filter((pizza) => pizza.category == category);
  setPizzas(newArr);
  return;
};

const chooseOption = (value, setPizzas, pizzas) => {
  let newArr;
  if (value == 'priceIncrease') {
    newArr = [...pizzas].sort((a, b) => a.price - b.price);
  }
  if (value == 'priceDecrease') {
    newArr = [...pizzas].sort((a, b) => b.price - a.price);
  }
  setPizzas(newArr);
};

export const PizzaFilter = ({ setPizzas, allPizzas, pizzas }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="pizza-filter">
      <div className="pizza-filter__section">
        <span className="pizza-filter__label">КАТЕГОРИИ</span>
        <div className="pizza-filter__categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`pizza-filter__cat-btn${cat === activeCategory ? ' pizza-filter__cat-btn--active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                chooseCategory(cat, allPizzas, setPizzas);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="pizza-filter__divider" />

      <div className="pizza-filter__section">
        <span className="pizza-filter__label">СОРТИРОВКА</span>
        <select
          className="pizza-filter__sort"
          onChange={(e) => chooseOption(e.target.value, setPizzas, pizzas)}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.criteria} value={opt.criteria}>
              {opt.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
