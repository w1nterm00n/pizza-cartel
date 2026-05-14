import './PizzaIngredients.css';

const toggleIngredient = (ingredient, ingredients, setIngredients) => {
  if (ingredients.includes(ingredient)) {
    setIngredients(ingredients.filter((i) => i !== ingredient)); //удаляем из массива
  } else {
    setIngredients([...ingredients, ingredient]); //добавляем в массив
  }
};

export const PizzaIngredients = ({
  defaultIngredients,
  ingredients,
  setIngredients,
}) => {
  return (
    <ul className="ingredients">
      {defaultIngredients.map((ingredient) => {
        const isAdded = ingredients?.includes(ingredient) ?? true;
        return (
          <li key={ingredient}>
            <button
              type="button"
              className={`ingredient${isAdded ? ' ingredient--added' : ' ingredient--removed'}`}
              onClick={() =>
                toggleIngredient(ingredient, ingredients, setIngredients)
              }
            >
              <span className="ingredient__icon">{isAdded ? '✓' : '+'}</span>
              <span className="ingredient__name">{ingredient}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
