export const CartIngredients = ({ ingredients }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px',
      }}
    >
      {ingredients.map((ingredient) => (
        <li
          key={ingredient}
          style={{
            fontSize: '12px',
            background: '#e8ddb5',
            padding: '2px 8px',
            borderRadius: '10px',
            color: '#1a0f07',
          }}
        >
          {ingredient}
        </li>
      ))}
    </ul>
  );
};
