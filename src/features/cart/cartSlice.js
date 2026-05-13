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
        existing.options.push(action.payload.options[0]);
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
      let existing = state.find((item) => item.pizzaId === action.payload.id);
      console.log(existing);
      existing.amount++;
      //если его размер стандарт - оставляем цену, если мини - уменьшаем на 20%, макси - увеличиваем на 20%
      existing.options.push(action.payload.options[0]);
    },
    pizzaDecrease(state, action) {
      //просто удаляем самый последний
      let index = state.findIndex((item) => item.pizzaId === action.payload);
      if (state[index].amount > 1) {
        //если больше одного
        state[index].amount--;
        state[index].options.pop();
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
