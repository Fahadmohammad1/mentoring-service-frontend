"use client";

import UploadImage from "@/components/Form/UploadImage";
import BreadCrumb from "@/components/ui/BreadCrumb";
import { tokenKey } from "@/constants/tokenKey";
import { useResetTokenMutation } from "@/redux/api/authApi";
import { useCreateTeacherMutation } from "@/redux/api/profileApi";
import { useAppSelector } from "@/redux/hooks";
import { removeUserInfo, storeUserInfo } from "@/services/auth.service";
import { Card } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  contactNo: string;
  gender: string;
  presentAddress: string;
  class: string;
  institutionName: string;
  designation: string;
  experienceYear: string;
  subjectOfExpertise: string;
};

const CreateTeacherProfile = () => {
  const [createTeacher] = useCreateTeacherMutation();
  const [resetToken] = useResetTokenMutation();
  const [imageUrl, setImageUrl] = useState("");

  const { userId } = useAppSelector((state) => state.user.user);

  const fields = [
    { Contact: "contactNo" },
    { Gender: "gender" },
    { Address: "presentAddress" },
    { Institution: "institutionName" },
    { Designation: "designation" },
    { Degree: "degree" },
    { YearofExperience: "experienceYear" },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res: Record<string, unknown> = await createTeacher({
      ...data,
      userId,
      avatar: imageUrl,
      role: "teacher",
      subjectOfExpertise: [data.subjectOfExpertise],
    });

    if (res?.data) {
      const { token } = await resetToken({}).unwrap();
      removeUserInfo(tokenKey);
      if (await token) {
        storeUserInfo({ accessToken: token });
      }
    }

    reset();
  };

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "create teacher profile",
            link: "/profile/createTeacher",
          },
        ]}
      />
      <Card
        sx={{ minWidth: 290, maxWidth: 750 }}
        className="rounded-lg w-full border"
      >
        <h3 className="font-bold text-center py-2">
          Needed student information
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start justify-start pt-3 pr-10 pb-6 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
        >
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-7">
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
                  Subject of expertise
                </p>
                <input
                  {...register("subjectOfExpertise", {
                    required: true,
                  })}
                  type="text"
                  className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                />
                {errors.subjectOfExpertise && (
                  <span className="text-red-600">
                    Subject of expertise is required
                  </span>
                )}
              </div>
              <div className="relative mb-3">
                <UploadImage setImageUrl={setImageUrl} />
              </div>
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
      </Card>
    </div>
  );
};

export default CreateTeacherProfile;
