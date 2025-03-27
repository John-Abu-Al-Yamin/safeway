import useDeleteData from "@/hooks/useDeleteData";
import { useGetData } from "@/hooks/useGetData";
import { useInsertDataWithImage } from "@/hooks/useInsertData";
import { useInUpdateDataWithImage } from "@/hooks/useUpdateData";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  product: null,
  loading: true,
  error: null,
  deleteProducts: [],
};

// Thunks
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (limit, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products?limit=${limit}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching products"
      );
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/products/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error fetching product"
      );
    }
  }
);

export const addProducts = createAsyncThunk(
  "product/addProducts",
  async (data, thunkAPI) => {
    try {
      const res = await useInsertDataWithImage(`/api/v1/products`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error adding product"
      );
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    try {
      await useDeleteData(`/api/v1/products/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error deleting product"
      );
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await useInUpdateDataWithImage(`/api/v1/products/${id}`, data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error updating product"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch products";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(addProducts.fulfilled, (state, action) => {
        if (state.products) {
          state.products.push(action.payload);
        } else {
          state.products = [action.payload];
        }
        state.loading = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products =
          state.products?.filter(
            (product) => product.id !== action.payload
          ) || null;
        state.loading = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;