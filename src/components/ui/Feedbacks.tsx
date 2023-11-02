import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Feedbacks = () => {
  const reviews = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
      name: "Majharul Islam Tanvir",
      description: "",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
      name: "Juboraj Islam Mamun",
      description: "",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
      name: "Kamrul Hasan Tousif",
      description: "",
    },
  ];
  return (
    <section className="h-screen w-10/12 mx-auto">
      <h1 className="text-3xl text-center text-black font-bold mb-10 mt-7">
        Learner&apos;s feedbacks
      </h1>
      <div className="lg:grid grid-cols-3 gap-5">
        {reviews.map((review) => (
          <div key={review.id} className="">
            <div className="flex gap-x-10 px-5">
              <Image
                className="-mt-3"
                src={review.image}
                width={60}
                height={60}
                alt="avatar"
              />
              <h6 className="font-bold py-2">{review.name}</h6>
            </div>
            <div className="p-5">
              <div className="flex justify-start text-[#F9A14A]">
                <FaQuoteLeft />
              </div>
              <p className="text-justify text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                pariatur veniam eaque amet architecto iure illo quia. Quibusdam,
                iure deleniti.
              </p>
              <div className="flex justify-end text-[#F9A14A]">
                <FaQuoteRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
