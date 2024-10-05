// actGetProductDetails.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(`Failed to fetch product details , ${error}`);
    }
  }
);

export default actGetProductDetails;
