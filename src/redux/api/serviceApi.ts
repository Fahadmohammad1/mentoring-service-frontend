import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation({
      query: (serviceData) => ({
        url: "/service/create-service",
        method: "POST",
        data: serviceData,
      }),
    }),
    allService: build.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    singleService: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddServiceMutation,
  useAllServiceQuery,
  useSingleServiceQuery,
} = serviceApi;
