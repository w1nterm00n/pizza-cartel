import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from '../features/pizzas/pizzasSlice';
import cartReducer from '../features/cart/cartSlice';
import { api } from './api.js';

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
