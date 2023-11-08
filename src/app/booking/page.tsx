"use client";

import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import learning from "../../assets/Online learning-bro.png";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import Loading from "@/components/ui/Loading";

type Inputs = {
  name?: string;
  location?: string;
  authorName?: string;
  authorEmail?: string;
  category?: string;
  description?: string;
  fee?: number;
};

const CreateBookingPage = () => {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("id");
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  const { userId } = useAppSelector((state) => state.user.user);
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  const fields = [
    { Title: "title" },
    { Location: "location" },
    { Category: "category" },
    { Status: "status" },
    { Description: "description" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm<Inputs>();

  useEffect(() => {
    if (user.role !== "teacher") {
      toast.error("Please create teacher profile");
      router.push("/profile");
    }
  }, [router, user.role]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // const res = await addService({
    // }).unwrap();
    // if (res?.id) {
    //   toast.success("Service added");
    //   router.push("/");
    // } else {
    //   toast.error("failed to add service");
    // }
    // reset();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mt-20 mx-auto mb-5">
      <h1 className="text-3xl font-bold text-[#F9A14A] text-center py-5">
        Book service
      </h1>
      <div className="flex justify-center items-center flex-row-reverse gap-x-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="lg:grid grid-cols-2 gap-3">
            {fields.map((field, i) => (
              <div key={i} className="relative mb-3">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute uppercase">
                  {Object.keys(field)}
                </p>
                <input
                  {...register(Object.values(field)[0] as keyof Inputs, {
                    required: true,
                  })}
                  type="text"
                  placeholder={`your service ${Object.values(field)[0]}`}
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
                {errors[Object.values(field)[0] as keyof Inputs] &&
                  touchedFields[Object.values(field)[0] as keyof Inputs] && (
                    <span className="text-red-600">
                      {Object.keys(field)} is required
                    </span>
                  )}
              </div>
            ))}
            <div className="relative mb-3">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute uppercase">
                Fee
              </p>
              <input
                {...register("fee", {
                  required: true,
                })}
                type="number"
                placeholder="$20 or $0"
                className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
              />
              {errors.fee && (
                <span className="text-red-600">Price is required</span>
              )}
            </div>

            <div className="relative">
              <input
                type="submit"
                className="w-full inline-block pt-3 pr-5 pb-3 pl-5 text-xl font-medium text-center text-black bg-[#F9A14A]
                  rounded-lg transition duration-200 hover:border hover:bg-white hover:border-[#4EAC95] ease"
              />
            </div>
          </div>
        </form>
        <Image src={learning} height={300} width={450} alt="professor" />
      </div>
    </section>
  );
};

export default CreateBookingPage;
