import { PizzasList } from '../features/pizzas/PizzasList';
import { MenuBanner } from '../components/MenuBanner';

export const MenuPage = () => {
  return (
    <div>
      <MenuBanner />
      <PizzasList />
    </div>
  );
};
