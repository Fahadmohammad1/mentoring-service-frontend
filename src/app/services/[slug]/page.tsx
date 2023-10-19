"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import Loading from "@/components/ui/Loading";

const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading } = useSingleServiceQuery(params.slug);
  if (isLoading) {
    <Loading />;
  }

  return (
    <section className="container mx-auto mt-20">
      <div className="p-4 items-center justify-center mx-auto lg:w-[820px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-2xl hover:rounded-2xl">
        <Image
          width={100}
          height={100}
          className="mx-auto w-6/12 h-full rounded-lg"
          alt="art cover"
          loading="lazy"
          src={data.thumbnail}
        />
        <div className="sm:w-8/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-cyan-900 text-justify">
                {data.name}
              </h4>
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <div className="flex gap-3 space-y-1">
                <Image
                  height={50}
                  width={50}
                  src={data.authorImage}
                  className="rounded-full h-8 w-8"
                  alt="avatar"
                />
                <span className="text-sm">{data.authorName}</span>
              </div>
              <div className=" px-3 py-1 rounded-lg flex space-x-2 flex-row">
                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                  <span className="text-md mx-1">80</span>
                </div>
                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                  <span className="text-md mx-1">80</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <div className="text-grey-500 flex flex-row space-x-1  my-4">
                <p className="text-xs">2 hours ago</p>
              </div>
              <div className="flex flex-row space-x-1">
                <div className="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                  <AiOutlineShoppingCart />
                </div>
                <div className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                  <span>Book</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
