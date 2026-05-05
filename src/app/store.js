import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import themeReducer from '../features/theme/themeSlice';
import pizzasReducer from '../features/pizzas/pizzasSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    pizzas: pizzasReducer,
  },
});
