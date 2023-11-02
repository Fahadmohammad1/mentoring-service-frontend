"use client";

import { useAllServiceQuery } from "@/redux/api/serviceApi";
import ServiceCard from "./ServiceCard";
import { IService } from "@/types";
import Loading from "./Loading";

const Services = () => {
  const { data, isLoading } = useAllServiceQuery({});
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="container mx-auto h-screen">
      <h1 className="text-3xl text-center text-black font-bold mb-10 mt-7">
        Services you can book
      </h1>
      <div className="lg:grid grid-cols-2 gap-x-5 gap-y-10">
        {data?.data &&
          data.data
            .slice(0, 4)
            .map((service: IService) => (
              <ServiceCard key={service.id} service={service} />
            ))}
      </div>
    </section>
  );
};

export default Services;
