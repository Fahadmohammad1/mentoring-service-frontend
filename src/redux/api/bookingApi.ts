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
    myBookings: build.query({
      query: () => ({
        url: "/booking/my-bookings",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddToBookingMutation, useMyBookingsQuery } = bookingApi;
