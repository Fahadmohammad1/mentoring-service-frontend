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
    <section className="container mx-auto lg:my-24 mt-64 lg:px-5 xl:px-0">
      <h1 className="lg:text-3xl text-xl text-center text-black font-bold mb-10">
        Recently added lessons
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
