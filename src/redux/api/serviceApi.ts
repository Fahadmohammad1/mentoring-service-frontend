import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation({
      query: (serviceData) => ({
        url: "/service/create-service",
        method: "POST",
        data: serviceData,
      }),
      invalidatesTags: [tagTypes.service],
    }),
    allService: build.query({
      query: (query) => ({
        url: `/service`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.service],
    }),
    singleService: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
    myServices: build.query({
      query: () => ({
        url: "/service/my-services",
        method: "GET",
      }),
      providesTags: [tagTypes.service],
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `/service/delete-service/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useAllServiceQuery,
  useSingleServiceQuery,
  useMyServicesQuery,
  useDeleteServiceMutation,
} = serviceApi;
