import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/shared";

interface CartStateProps {
  items: { [key: number]: number };
  productFullInfo: ProductProps[];
}

const initialState: CartStateProps = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    incQuantity: (state, action) => {
      state.items[action.payload]++;
    },
    decQuantity: (state, action) => {
      if (state.items[action.payload] > 0) {
        state.items[action.payload]--;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
  },
});
export const { addToCart, removeFromCart, incQuantity, decQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
