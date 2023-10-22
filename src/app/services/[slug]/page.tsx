"use client";

import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import Loading from "@/components/ui/Loading";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading } = useSingleServiceQuery(params.slug);
  if (isLoading) {
    <Loading />;
  }
  console.log(data);
  return (
    <section className="container mx-auto mt-20">
      <div className="bg-white text-black">
        <Badge
          color="primary"
          badgeContent={data?.serviceType === "remote" ? "online" : "offline"}
          max={1}
        >
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 shadow-xl">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                {data?.name}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Welcome to Company Name, your gateway to unforgettable travel
                experiences. We are a leading travel and tour company dedicated
                to creating exceptional journeys for adventurers, explorers, and
                wanderers like you.
              </p>
              <div className="flex items-center gap-6">
                <Image
                  src={data?.authorImage}
                  alt="avatar"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="flex justify-between w-full">
                  <div>
                    <h4 className="font-bold text-lg text-tertiary">
                      {data?.authorName}
                    </h4>
                    <p>{data?.authorEmail}</p>
                    <p>{data?.location}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Fee: $<span className="text-red-500">{data?.price}</span>
                    </h4>
                    <p>duration: {data?.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
              <Image
                width={500}
                height={300}
                src={data?.thumbnail}
                alt="mockup"
                className="rounded-lg"
              />
            </div>
          </div>
        </Badge>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
