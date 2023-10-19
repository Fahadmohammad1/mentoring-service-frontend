"use client";

import UploadImage from "@/components/Form/UploadImage";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hooks";
import { ServiceType } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  name?: string;
  location?: string;
  authorName?: string;
  authorEmail?: string;
  category?: string;
  duration?: string;
  description?: string;
  price?: number;
  serviceType: ServiceType;
};

const CreateService = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { userId } = useAppSelector((state) => state.user.user);
  const [addService] = useAddServiceMutation();
  const router = useRouter();

  const fields = [
    { ServiceName: "name" },
    { Location: "location" },
    { Category: "category" },
    { Duration: "duration" },
    { Description: "description" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { price } = data;
    const res = await addService({
      ...data,
      userId,
      thumbnail: imageUrl,
      price: Number(price),
    }).unwrap();

    if (res.id) {
      toast.success("Service added");
      router.push("/");
    }

    reset();
  };

  return (
    <section className="mt-24 w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center py-5">
        Add your service here
      </h1>
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
              {...register("price", {
                required: true,
              })}
              type="number"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
            {errors.price && (
              <span className="text-red-600">Price is required</span>
            )}
          </div>
          <div className="relative mb-3">
            <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute uppercase">
              ServiceType
            </p>
            <input
              {...register("serviceType", {
                required: true,
              })}
              type="text"
              className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
            />
            {errors.serviceType && (
              <span className="text-red-600">Service type is required</span>
            )}
          </div>
          <div className="relative mb-3">
            <UploadImage setImageUrl={setImageUrl} />
          </div>
          <div className="relative">
            <input
              type="submit"
              className="w-full inline-block pt-3 pr-5 pb-3 pl-5 text-xl font-medium text-center text-white bg-[#00DFBF]
                  rounded-lg transition duration-200 hover:bg-[#2B444E] ease"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateService;
