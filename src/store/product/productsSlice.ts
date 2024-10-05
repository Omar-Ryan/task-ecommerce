import { createSlice } from "@reduxjs/toolkit";
import { ProductProps, TLoading } from "../../types/shared";
import actGetProducts from "./act/actGetProducts";
import actGetProductDetails from "./act/actGetProductDetails";

interface ProductsStateProps {
  records: ProductProps[];
  productDetails: ProductProps | null;
  loading: TLoading;
  error: string | null;
}

const initialState: ProductsStateProps = {
  records: [],
  productDetails: null,
  loading: "idle",
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle get products
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

    // Handle get product details
    builder.addCase(actGetProductDetails.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductDetails.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productDetails = action.payload;
    });
    builder.addCase(actGetProductDetails.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProducts, actGetProductDetails };
export default productsSlice.reducer;
