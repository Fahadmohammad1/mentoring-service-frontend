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
    <section className="container mx-auto">
      <h1 className="text-3xl text-center text-[#151D34] font-bold mt-3 mb-7">
        Available events and sessions
      </h1>
      <div className="lg:grid grid-cols-2 gap-5">
        {data?.data &&
          data.data.map((service: IService) => (
            <ServiceCard key={service.id} service={service} />
          ))}
      </div>
    </section>
  );
};

export default Services;
