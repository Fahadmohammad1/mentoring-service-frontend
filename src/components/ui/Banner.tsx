import Image from "next/image";
import React from "react";
import banner from "../../assets/banner.gif";
import { Button } from "@mui/material";
import { SiGooglemeet } from "react-icons/si";

const Banner = () => {
  return (
    <section className=" dark:text-black h-screen mt-10">
      <div className="lg:grid grid-cols-12">
        <div className="col-span-6 mb-5">
          <Image src={banner} width={650} height={200} alt="banner" />
        </div>
        <div className="mx-auto flex flex-col justify-center items-center h-full text-center col-span-6">
          <h1 className="text-tertiary lg:text-7xl text-3xl font-bold">
            Learn from best teacher&apos;s around the world
          </h1>
          <Button
            variant="outlined"
            className="flex items-center gap-3 mt-7 bg-white hover:border-1 hover:text-black hover:border-[#00DFBF]"
          >
            Book Session
            <SiGooglemeet />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
