import { baseApi } from "./baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
    }),
    createStudent: build.mutation({
      query: (studentData) => ({
        url: "/profile/create-studentProfile",
        method: "POST",
        data: studentData,
      }),
    }),
    createGuardian: build.mutation({
      query: (guardianData) => ({
        url: "/profile/create-guardianProfile",
        method: "POST",
        data: guardianData,
      }),
    }),
    createTeacher: build.mutation({
      query: (teacherData) => ({
        url: "/profile/create-teacherProfile",
        method: "POST",
        data: teacherData,
      }),
    }),
  }),
});

export const {
  useMyProfileQuery,
  useCreateStudentMutation,
  useCreateGuardianMutation,
  useCreateTeacherMutation,
} = profileApi;
