"use client";

import Loading from "@/components/ui/Loading";
import { useMyBookingsQuery } from "@/redux/api/bookingApi";

const MyBookings = () => {
  const { data, isLoading } = useMyBookingsQuery({});
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
      <h1>heloooooooooooooooooooo</h1>
    </section>
  );
};

export default MyBookings;
