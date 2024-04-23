"use client";

import loginImage from "../../assets/authenticate.gif";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  useUserLoginMutation,
  useUserSignupMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import toast, { Toaster } from "react-hot-toast";

type Inputs = {
  email?: string;
  password?: string;
  confirmPass?: string;
  firstName?: string;
  lastName?: string;
};

const LoginPage = () => {
  const [alignment, setAlignment] = useState("login");
  const [userLogin] = useUserLoginMutation();
  const [userSignup] = useUserSignupMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    if (alignment === "login") {
      const res = await userLogin({ email, password }).unwrap();

      if (res?.token) {
        router.push("/profile");
        toast.success("Login successfull!");
        storeUserInfo({ accessToken: res?.token });
      } else {
        toast.error("Login failed");
      }

      reset();
    } else {
      const res = await userSignup({ ...data }).unwrap();

      if (res?.token) {
        router.push("/profile");
        toast.success("Sign up successfull!");
        storeUserInfo({ accessToken: res?.token });
      } else {
        toast.error("Sign up failed");
      }

      reset();
    }
  };

  return (
    <section className="relative">
      <div
        className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mb-0 mx-auto max-w-7xl
      xl:px-5 lg:flex-row"
      >
        <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-16 lg:flex-row">
          <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-6/12">
            <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
              <Image width={500} height={400} src={loginImage} alt="login" />
            </div>
            <ToggleButtonGroup
              className="flex justify-center"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                value="login"
                className={`${
                  alignment === "login" && "bg-[#F9A14A] text-black"
                } rounded-full`}
              >
                Login
              </ToggleButton>
              <ToggleButton value="signup" className="rounded-full">
                Sign Up
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            {alignment === "login" ? (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-start justify-start pt-6 pr-10 pb-6 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <p className="w-full text-2xl font-medium text-center leading-snug font-serif text-[#151D34]">
                  Please login to your account
                </p>
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-7">
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Email
                    </p>
                    <input
                      {...register("email", { required: true })}
                      placeholder="abc@gmail.com"
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none
 focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Password
                    </p>
                    <input
                      {...register("password", { required: true })}
                      placeholder="Password"
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                    {errors.password && (
                      <span className="text-red-600">Password is required</span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="submit"
                      className="w-full inline-block pt-3 pr-5 pb-3 pl-5 text-xl font-medium text-center text-black bg-[#F9A14A]
                  rounded-lg transition duration-200 hover:bg-white hover:border hover:border-[#4EAC95] ease"
                    />
                  </div>
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-start justify-start pt-4 pr-10 pb-6 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <p className="w-full text-2xl font-medium text-center leading-snug font-serif">
                  Create new account
                </p>
                <div className="w-full mt-4 mr-0 mb-0 ml-0 relative space-y-7">
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      First Name
                    </p>
                    <input
                      {...register("firstName", { required: true })}
                      placeholder="Mr"
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none
 focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                    {errors.firstName && (
                      <span className="text-red-600">
                        Firstname is required
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Last Name
                    </p>
                    <input
                      {...register("lastName", { required: true })}
                      placeholder="Doe"
                      type="text"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                    {errors.lastName && (
                      <span className="text-red-600">
                        last name is required
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Email
                    </p>
                    <input
                      {...register("email", { required: true })}
                      placeholder="abc@gmail.com"
                      type="email"
                      className="border placeholder-gray-400 focus:outline-none
 focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                    {errors.email && (
                      <span className="text-red-600">Email is required</span>
                    )}
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Password
                    </p>
                    <input
                      {...register("password", { required: true })}
                      placeholder="Enter a strong password"
                      type="password"
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                    />
                    {errors.password && (
                      <span className="text-red-600">Password is required</span>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="submit"
                      className="w-full inline-block pt-3 pr-5 pb-3 pl-5 text-xl font-medium text-center text-black bg-[#F9A14A]
                  rounded-lg transition duration-200 hover:bg-white ease hover:border hover:border-[#4EAC95]"
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default LoginPage;
