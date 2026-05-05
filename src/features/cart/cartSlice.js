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
    pizzaDeleted(state, action) {
      let index = state.findIndex((item) => item.pizzaId === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { pizzaAdded, pizzaDeleted } = cartSlice.actions;
export default cartSlice.reducer;
