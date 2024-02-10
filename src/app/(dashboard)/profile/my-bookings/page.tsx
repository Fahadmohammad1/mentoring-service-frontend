"use client";

import BookingTable from "@/components/ui/BookingTable";
import Loading from "@/components/ui/Loading";
import { useMyBookingsQuery } from "@/redux/api/bookingApi";

const MyBookings = () => {
  const { data, isLoading } = useMyBookingsQuery({});
  // console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <BookingTable data={data} />
    </section>
  );
};

export default MyBookings;
