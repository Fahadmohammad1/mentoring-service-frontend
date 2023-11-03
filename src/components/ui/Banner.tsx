import Image from "next/image";
import React from "react";
import banner from "../../assets/Webinar.gif";
import { Button } from "@mui/material";
import { SiGooglemeet } from "react-icons/si";

const Banner = () => {
  return (
    <section className=" dark:text-black h-screen mt-10">
      <div className="lg:grid grid-cols-12 h-full">
        <div className="mx-auto flex flex-col text-start justify-center  h-full col-span-6 pl-3">
          <span className="text-start font-bold text-[#F9A14A] mb-3">
            Your personalized way to
          </span>
          <h1 className="lg:text-7xl text-3xl font-bold tracking-wide">
            Learn from best mentor&apos;s around the world
          </h1>
          <Button
            variant="outlined"
            className="flex items-center w-1/4 gap-3 mt-7 bg-[#F9A14A] hover:border-1 text-black hover:border-[#4EAC95]"
          >
            Book
            <SiGooglemeet />
          </Button>
          <div className="flex mt-10 gap-10">
            <p>
              <span className="text-3xl text-[#F9A14A]">110+</span>
              <br />
              Mentors
            </p>
            <div className="border-2"></div>
            <p>
              <span className="text-3xl text-[#F9A14A]">20k+</span>
              <br />
              Students
            </p>
          </div>
        </div>
        <div className="col-span-6 mb-5 flex items-center">
          <Image src={banner} width={650} height={200} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
