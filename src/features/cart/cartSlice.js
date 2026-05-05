import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    pizzaAdded(state, action) {
      const existing = state.find(
        (pizza) => pizza.pizzaId === action.payload.pizzaId,
      );
      if (existing) {
        existing.amount++;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { pizzaAdded } = cartSlice.actions;
export default cartSlice.reducer;
