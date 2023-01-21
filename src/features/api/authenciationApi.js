import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    getUserDetails: builder.mutation({
      query: (data) => ({
        url: "auth/get-userDetails",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "auth/logout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetUserDetailsMutation } =
  authenticationApi;
