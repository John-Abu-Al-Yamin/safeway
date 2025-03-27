import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetDataToken } from "@/hooks/useGetData";
import { useInsertData } from "@/hooks/useInsertData";
import { useInsUpdateData } from "@/hooks/useUpdateData";

const initialState = {
  user: null,
  currentUser: null,
  userProfile: null,
  userChangePassword: null,
};

// ================ Login ===============
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, thunkAPI) => {
    try {
      const res = await useInsertData("/api/v1/auth/login", data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

// ================ Signup ===============
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (data, thunkAPI) => {
    try {
      const res = await useInsertData("/api/v1/auth/signup", data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

// ================ Get Logged User ===============
export const getLoggedUser = createAsyncThunk(
  "user/getLoggedUser",
  async (_, thunkAPI) => {
    try {
      const res = await useGetDataToken("/api/v1/users/getMe");
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

// ================ Update Profile ===============
export const updateUserProfileData = createAsyncThunk(
  "user/updateUserProfileData",
  async (data, thunkAPI) => {
    try {
      const res = await useInsUpdateData("/api/v1/users/updateMe", data);
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

// ================ Update Password ===============
export const updateUserPassword = createAsyncThunk(
  "user/updateUserPassword",
  async (data, thunkAPI) => {
    try {
      const res = await useInsUpdateData(
        "/api/v1/users/changeMyPassword",
        data
      );
      return res;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      loginUser.fulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );

    builder.addCase(
      signupUser.fulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );

    builder.addCase(
      getLoggedUser.fulfilled,
      (state, action) => {
        state.currentUser = action.payload;
      }
    );

    builder.addCase(
      updateUserProfileData.fulfilled,
      (state, action) => {
        state.userProfile = action.payload;
      }
    );

    builder.addCase(
      updateUserPassword.fulfilled,
      (state, action) => {
        state.userChangePassword = action.payload;
      }
    );
  },
});

export default authSlice.reducer;