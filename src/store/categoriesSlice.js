import { useGetData } from "@/hooks/useGetData";
import { useInsertDataWithImage } from "@/hooks/useInsertData";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  category: null,
  oneCategory: [],
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData("/api/v1/categories", id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (id, thunkAPI) => {
    try {
      const res = await useGetData(`/api/v1/categories/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (formData, thunkAPI) => {
    try {
      const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.category = action.payload;
    });

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.oneCategory = action.payload;
    });

    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.category = action.payload;
    });
  },
});

export default categoriesSlice.reducer;