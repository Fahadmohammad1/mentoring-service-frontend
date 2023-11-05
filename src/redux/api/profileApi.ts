import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    createStudent: build.mutation({
      query: (studentData) => ({
        url: "/profile/create-studentProfile",
        method: "POST",
        data: studentData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    createTeacher: build.mutation({
      query: (teacherData) => ({
        url: "/profile/create-teacherProfile",
        method: "POST",
        data: teacherData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useMyProfileQuery,
  useCreateStudentMutation,
  useCreateTeacherMutation,
} = profileApi;
