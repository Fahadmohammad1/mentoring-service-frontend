"use client";

import { useAllServiceQuery } from "@/redux/api/serviceApi";
import React from "react";
import Loading from "./Loading";
import ServiceCard from "./ServiceCard";
import { IService } from "@/types";
import { Card, CardContent } from "@mui/material";

const UpcomingServices = () => {
  const { data, isLoading } = useAllServiceQuery({});
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="mt-24">
      <h1 className="lg:text-3xl text-xl text-center text-black font-bold mb-10">
        Upcoming Events
      </h1>
      <div className="lg:grid grid-cols-2 gap-x-5 gap-y-10 lg:px-5 xl:px-0">
        {data?.data &&
          data.data
            .slice(0, 2)
            .map((service: IService) => (
              <ServiceCard key={service.id} service={service} />
            ))}
      </div>
      <div className="xl:p-4 lg:p-5 p-4">
        <Card className="shadow-md rounded-xl border mt-5">
          <CardContent className="">
            <h1 className="lg:text-lg text-base pb-2 font-bold">
              About Upcoming events
            </h1>
            <p className="text-justify">
              Get ready to embark on a journey of knowledge and discovery with
              our upcoming events! At Mentor platform, we believe in fostering a
              community of lifelong learners, and our events are designed to
              ignite your curiosity and passion for learning. Mark your
              calendars and join us for an unforgettable experience. Our events
              are crafted to provide you with valuable insights and knowledge
              from experts in the field. Connect with like-minded individuals,
              speakers, and industry professionals to expand your network.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UpcomingServices;
