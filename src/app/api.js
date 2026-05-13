import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  //главная функция RTK Query, которая генерирует Redux slice и React hooks для работы с данными.
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3001/`,
  }),
  endpoints: (build) => ({
    pizzaList: build.query({
      query() {
        return 'pizzas';
      },
    }),
    pizzaDetail: build.query({
      query({ id }) {
        return `pizzas/${id}/`;
      },
    }),
    toppingList: build.query({
      query() {
        return 'toppings';
      },
    }),
    toppingDetail: build.query({
      query({ id }) {
        return `toppings/${id}/`;
      },
    }),
  }),
});

export const {
  usePizzaListQuery,
  usePizzaDetailQuery,
  useToppingListQuery,
  useToppingDetailQuery,
} = api;
export { api };
