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
    pizzaIncrease(state, action) {
      let pizza = state.find((item) => item.pizzaId === action.payload);
      pizza.amount++;
    },
    pizzaDecrease(state, action) {
      let index = state.findIndex((item) => item.pizzaId === action.payload);
      if (state[index].amount > 1) {
        state[index].amount--;
      } else {
        state.splice(index, 1);
      }
    },
    cartCleared(state) {
      state.splice(0);
    },
  },
});

export const {
  pizzaAdded,
  pizzaDeleted,
  pizzaDecrease,
  pizzaIncrease,
  cartCleared,
} = cartSlice.actions;
export default cartSlice.reducer;
