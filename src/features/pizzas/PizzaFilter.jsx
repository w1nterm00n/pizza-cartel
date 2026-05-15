import './PizzaFilter.css';
import { useState } from 'react';

const CATEGORIES = [
  { id: 'all',     label: 'Все',      dot: '#1A1208' },
  { id: 'classic', label: 'Классика', dot: '#C8102E' },
  { id: 'vegan',   label: 'Веган',    dot: '#2E7D3A' },
  { id: 'hot',     label: 'Острое',   dot: '#F2B829' },
];

const SORT_OPTIONS = [
  { text: 'По возрастанию цены', criteria: 'priceIncrease' },
  { text: 'По уменьшению цены',  criteria: 'priceDecrease' },
];

const chooseCategory = (category, allPizzas, setPizzas) => {
  if (category === 'all') {
    setPizzas(allPizzas);
    return;
  }
  let newArr = allPizzas.filter((pizza) => pizza.category == category);
  setPizzas(newArr);
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
    <div className="pc-toolbar">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={`pc-chip${cat.id === activeCategory ? ' pc-chip--active' : ''}`}
          onClick={() => {
            setActiveCategory(cat.id);
            chooseCategory(cat.id, allPizzas, setPizzas);
          }}
        >
          <span className="pc-chip__dot" style={{ background: cat.dot }} />
          {cat.label}
        </button>
      ))}

      <div className="pc-toolbar__sep" />

      <select
        className="pc-sort"
        onChange={(e) => chooseOption(e.target.value, setPizzas, pizzas)}
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.criteria} value={opt.criteria}>
            {opt.text.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
