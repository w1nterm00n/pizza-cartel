import { Order } from '../features/orders/Order';
//сделать fetch заказов с апишки
//вывести их

export const OrdersPage = () => {
  const mockOrder = {
    date: '12-13-2020',
    totalPrice: '120',
    items: [
      {
        id: 1,
        name: 'hui',
        size: '123 size',
        toppingsCount: '2',
        price: '20',
      },
      {
        id: 1,
        name: 'hui',
        size: '123 size',
        toppingsCount: '2',
        price: '20',
      },
    ],
  };

  return (
    <div>
      <h1>Отображение заказов</h1>
      <Order order={mockOrder} />
    </div>
  );
};
