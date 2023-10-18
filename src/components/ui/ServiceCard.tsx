import React from "react";

const ServiceCard = () => {
  return (
    <section>
      <div className="flex gap-10 h-full from-red-100 via-red-300 to-blue-500 bg-gradient-to-br">
        <div className="p-4 items-center justify-center lg:w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img
            className="mx-auto w-full block w-4/12 h-40 rounded-lg"
            alt="art cover"
            loading="lazy"
            src="https://thetapacademy.com/wp-content/uploads/2023/04/What-is-Data-Structure-and-Algorithm.png"
          />
          <div className="sm:w-8/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-md font-semibold text-cyan-900 text-justify">
                  Data Structure and Alogorithm guidline - Online session
                </h4>
              </div>
              <div className="flex items-center space-x-4 justify-between">
                <div className="flex gap-3 space-y-1">
                  <img
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    className="rounded-full h-8 w-8"
                  />
                  <span className="text-sm">
                    Yeah same question here too 🔥
                  </span>
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
                  <div className="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                    <span>23</span>
                  </div>
                  <div className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                    <span>23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
