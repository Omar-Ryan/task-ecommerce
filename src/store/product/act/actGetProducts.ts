import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductProps } from "../../../types/shared";

export const actGetProducts = createAsyncThunk(
  "product/actGetProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<ProductProps>(
        "https://fakestoreapi.com/products"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("an unexpected error");
      }
    }
  }
);

export default actGetProducts;
