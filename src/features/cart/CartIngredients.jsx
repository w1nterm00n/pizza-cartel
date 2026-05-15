export const CartIngredients = ({ ingredients }) => {
  if (!ingredients?.length) return null;
  return (
    <div className="pcc-item__ings">
      {ingredients.map((ing) => (
        <span key={ing} className="pcc-item__ing-pill">{ing}</span>
      ))}
    </div>
  );
};
