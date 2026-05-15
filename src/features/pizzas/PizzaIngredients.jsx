const toggleIngredient = (ingredient, ingredients, setIngredients) => {
  if (ingredients.includes(ingredient)) {
    setIngredients(ingredients.filter((i) => i !== ingredient));
  } else {
    setIngredients([...ingredients, ingredient]);
  }
};

export const PizzaIngredients = ({ defaultIngredients, ingredients, setIngredients }) => {
  return (
    <div className="pcd-ings">
      {defaultIngredients.map((ingredient) => {
        const isAdded = ingredients?.includes(ingredient) ?? true;
        return (
          <div
            key={ingredient}
            className={`pcd-ing removable${isAdded ? ' on' : ''}`}
            onClick={() => toggleIngredient(ingredient, ingredients, setIngredients)}
          >
            <div className="pcd-ing__check">
              {isAdded && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </div>
            <div
              className="pcd-ing__nm"
              style={!isAdded ? { textDecoration: 'line-through', color: 'var(--pc-stone-soft)' } : {}}
            >
              {ingredient}
            </div>
            <div className="pcd-ing__px">{isAdded ? 'включено' : 'убрано'}</div>
          </div>
        );
      })}
    </div>
  );
};
