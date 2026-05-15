import { useToppingListQuery } from '../../app/api';

export const CartToppings = ({ toppings }) => {
  const { data: API_TOPPINGS, isLoading, isError } = useToppingListQuery();

  if (isLoading || isError) return null;

  const active = toppings
    ?.filter((t) => t.amount > 0)
    .map((t) => {
      const api = API_TOPPINGS.find((a) => a.id === t.id);
      return api ? { ...t, name: api.name, unitPrice: api.price } : null;
    })
    .filter(Boolean) ?? [];

  if (active.length === 0) return null;

  return (
    <div className="pcc-item__toppings">
      {active.map((t, i) => (
        <span key={t.id}>
          {i > 0 && ' · '}
          + {t.name}: {t.amount} × {t.unitPrice} ₽
        </span>
      ))}
    </div>
  );
};
