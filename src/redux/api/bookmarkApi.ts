import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const saveApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToBookmark: build.mutation({
      query: (serviceData) => ({
        url: "/bookmark/add",
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: [tagTypes.bookmark],
    }),
    allBookmarkItem: build.query({
      query: () => ({
        url: "/bookmark",
        method: "GET",
      }),
      providesTags: [tagTypes.bookmark],
    }),
  }),
});

export const { useAddToBookmarkMutation, useAllBookmarkItemQuery } = saveApi;
