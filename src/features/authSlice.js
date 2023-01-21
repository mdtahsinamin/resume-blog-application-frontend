import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  name: "",
  email: "",
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: "",
  refreshToken: "",
  accessToken: "",
  isLogout: false,
};
export const createUser = createAsyncThunk(
  "auth/createUser",
  async (userData) => {
    const { data } = await axios.post(
      `http://localhost:5000/api/v1/auth/register`,
      userData
    );
    return data;
  }
);

export const login = createAsyncThunk("auth/login", async (userData) => {
  const { data } = await axios.post(
    `http://localhost:5000/api/v1/auth/login`,
    userData
  );
  return data;
});

export const getUser1 = createAsyncThunk("auth/getUser", async (userData) => {
  const { data } = await axios.post(
    `http://localhost:5000/api/v1/auth/get-userDetails`,
    userData
  );
  return data;
});
export const logout = createAsyncThunk("auth/logout", async (userData) => {
  const { data } = await axios.post(
    `http://localhost:5000/api/v1/auth/logout`,
    userData
  );
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUser1.fulfilled, (state, action) => {
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isLogout = true;
      });
  },
});

export default authSlice.reducer;
