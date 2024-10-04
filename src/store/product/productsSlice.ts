import { createSlice } from "@reduxjs/toolkit";
import { ProductProps, TLoading } from "../../types/shared";
import actGetProducts from "./act/actGetProducts";

interface ProductsStateProps {
  records: ProductProps[];
  loading: TLoading;
  error: string | null;
}

const initialState: ProductsStateProps = {
  records: [],
  loading: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProducts };
export default productsSlice.reducer;
