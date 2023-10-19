"use client";

import Loading from "@/components/ui/Loading";
import { useAllServiceQuery } from "@/redux/api/serviceApi";

const AllServices = () => {
  const { data, isLoading } = useAllServiceQuery({});
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mt-16">
      <div className="lg:grid grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-9">
          <h1>sadffffffffff</h1>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
