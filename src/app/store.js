import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from '../features/pizzas/pizzasSlice';
import cartReducer from '../features/cart/cartSlice';
import { api } from './api.js';
import { saveCartToLocalStorage } from '../utils/localStorage';

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

store.subscribe(() => {
  saveCartToLocalStorage(store.getState().cart);
});
