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
  }),
});

export const { useUserLoginMutation, useUserSignupMutation } = authApi;
