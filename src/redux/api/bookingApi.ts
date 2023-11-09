import { baseApi } from "./baseApi";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addToBooking: build.mutation({
      query: (bookingData) => ({
        url: "/booking/create-booking",
        method: "POST",
        data: bookingData,
      }),
    }),
  }),
});

export const { useAddToBookingMutation } = bookingApi;
