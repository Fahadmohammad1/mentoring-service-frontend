import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignup: build.mutation({
      query: (signupData) => ({
        url: "/auth/signup",
        method: "POST",
        data: signupData,
      }),
    }),
    userLogin: build.mutation({
      query: (loginData) => ({
        url: "/auth/signin",
        method: "POST",
        data: loginData,
      }),
    }),
    resetToken: build.mutation({
      query: () => ({
        url: "/auth/reset-token",
        method: "POST",
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserSignupMutation } = authApi;
