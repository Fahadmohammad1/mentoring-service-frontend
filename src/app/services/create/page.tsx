"use client";

import UploadImage from "@/components/Form/UploadImage";
import { useAddServiceMutation } from "@/redux/api/serviceApi";
import { useAppSelector } from "@/redux/hooks";
import { LessonType } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import professor from "../../../assets/Professor.gif";
import Image from "next/image";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import localizedFromat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFromat);

type Inputs = {
  name?: string;
  language?: string;
  authorName?: string;
  authorEmail?: string;
  category?: string;
  description?: string;
  fee?: number;
  lessonType: LessonType;
};

const CreateService = () => {
  const [imageUrl, setImageUrl] = useState("");
  const { userId } = useAppSelector((state) => state.user.user);
  const [addService] = useAddServiceMutation();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  const [lessonType, setLessonType] = useState("");

  // -------------------------------
  // Get current date and time
  let currentDate = new Date();

  // Extract individual components
  let day: any = currentDate.getDate();
  let month: any = currentDate.getMonth() + 1; // Note: Month is zero-based, so we add 1
  let year: any = currentDate.getFullYear();
  let hours: any = currentDate.getHours();
  let minutes: any = currentDate.getMinutes();
  let seconds: any = currentDate.getSeconds();

  // Format components as needed
  // Ensure leading zeros for single-digit values
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  const [dateTime, setDateTime] = useState<Dayjs | null | any>(dayjs());

  //---------------------------------

  const handleChange = (event: SelectChangeEvent) => {
    setLessonType(event.target.value);
  };

  const fields = [
    { Title: "title" },
    { Category: "category" },
    { Description: "description" },
    { Language: "language" },
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
    // const { fee, lessonType } = data;

    // const res = await addService({
    //   ...data,
    //   userId,
    //   thumbnail: imageUrl,
    //   fee: Number(fee),
    //   lessonType,
    // }).unwrap();

    // if (res?.id) {
    //   toast.success("Service added");
    //   router.push("/");
    // } else {
    //   toast.error("failed to add service");
    // }
    console.log(dayjs(dateTime).format("LLLL"));
    reset();
  };

  return (
    <section className="mt-20 mx-auto mb-5">
      <h1 className="text-3xl font-bold text-[#F9A14A] text-center py-5">
        Describe what you want to teach
      </h1>
      <div className="flex justify-center items-center flex-row-reverse gap-x-5">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="lg:grid grid-cols-2 gap-3">
            {fields.map((field, i) => (
              <div key={i} className="relative mb-3">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-1.5 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute uppercase">
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
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-1.5 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute uppercase">
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
            <div className="relative mb-3">
              <FormControl sx={{ m: 1, minWidth: 300 }} className="m-0">
                <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute uppercase z-20">
                  Lesson Type
                </p>
                <Select
                  {...register("lessonType", {
                    required: true,
                  })}
                  labelId="lesson-type-label"
                  id="lesson-type-small"
                  value={lessonType}
                  label="Lesson Type"
                  onChange={handleChange}
                >
                  <MenuItem value={"pre_recorded"}>Pre-recorded</MenuItem>
                  <MenuItem value={"live"}>Live</MenuItem>
                </Select>
              </FormControl>
              {errors.lessonType && (
                <span className="text-red-600">Service type is required</span>
              )}
            </div>
            {lessonType === "live" && (
              <div className="relative mb-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoItem label="Live Schedule">
                    <DateTimePicker
                      value={dateTime}
                      onChange={(newValue) => setDateTime(newValue)}
                    />
                  </DemoItem>
                </LocalizationProvider>
                {errors.lessonType && (
                  <span className="text-red-600">Service type is required</span>
                )}
              </div>
            )}
            <div className="relative mb-3">
              <UploadImage setImageUrl={setImageUrl} />
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
        <Image src={professor} height={300} width={450} alt="professor" />
      </div>
    </section>
  );
};

export default CreateService;
