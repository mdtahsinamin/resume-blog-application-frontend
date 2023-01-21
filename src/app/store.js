import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import { authenticationApi } from "./../features/api/authenciationApi";

const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    user: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
});

export default store;
