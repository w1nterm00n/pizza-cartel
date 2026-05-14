import { useOrderListQuery } from '../app/api';
import { Order } from '../features/orders/Order';
//сделать fetch заказов с апишки
//вывести их

export const OrdersPage = () => {
  const {
    data: orders,
    isLoading,
    isError,
    isSuccess,
  } = useOrderListQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isSuccess) {
    console.log('ORDERS ', orders);
  }
  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Ошибка загрузки заказов</p>;

  return (
    <div>
      <h1>Отображение заказов</h1>
      {isSuccess &&
        [...orders]
          .reverse()
          .map((order) => <Order order={order} key={order.id} />)}
    </div>
  );
};
