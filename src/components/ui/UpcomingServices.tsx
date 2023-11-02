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
    <section className="h-screen">
      <h1 className="text-3xl text-center text-black font-bold mb-10 mt-14">
        Upcoming Events
      </h1>
      <div className="lg:grid grid-cols-2 gap-x-5 gap-y-10">
        {data?.data &&
          data.data
            .slice(0, 2)
            .map((service: IService) => (
              <ServiceCard key={service.id} service={service} />
            ))}
      </div>
      <div className="p-4">
        <Card className="shadow-md rounded-xl border">
          <CardContent className="">
            <h1 className="text-lg font-bold">About Upcoming events</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              beatae ut sequi velit fuga. Dolor inventore aut natus optio soluta
              rem ullam molestiae quas provident vero iusto est labore nobis,
              architecto excepturi a beatae, illum praesentium. Hic repudiandae
              eligendi reprehenderit deleniti nostrum sed mollitia tempore quasi
              repellat itaque ipsam labore nesciunt sequi ducimus quaerat
              dignissimos quae, delectus commodi voluptates a. Aut assumenda,
              dignissimos facere neque veritatis iure facilis quaerat sequi
              atque, in quibusdam et, vitae quod nulla eum iste ullam
              exercitationem explicabo. Nostrum distinctio voluptas minima
              quaerat iste asperiores impedit voluptate provident? Unde alias
              aperiam vero numquam nulla placeat veritatis?
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UpcomingServices;
