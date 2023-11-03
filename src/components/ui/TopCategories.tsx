import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import tutorial from "../../assets/tutorial.png";
import { BiMath } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import { FaLanguage } from "react-icons/fa";
import { BsCodeSlash, BsRobot } from "react-icons/bs";
import { TbBrandGrammarly } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Advance Math",
      icon: <BiMath />,
      lessons: "160+ lessons",
    },
    {
      id: 2,
      name: "Speaking English",
      icon: <FaLanguage />,
      lessons: "200+ lessons",
    },
    {
      id: 3,
      name: "Programming",
      icon: <BsCodeSlash />,
      lessons: "270+ lessons",
    },
    {
      id: 4,
      name: "English Grammer",
      icon: <TbBrandGrammarly />,
      lessons: "50+ lessons",
    },
    {
      id: 5,
      name: "Graphics Design",
      icon: <SiAdobephotoshop />,
      lessons: "120+ lessons",
    },
    {
      id: 6,
      name: "Machine learning",
      icon: <BsRobot />,
      lessons: "100+ lessons",
    },
  ];
  return (
    <section className="lg:my-24 my-10 px-5 lg:px-0">
      <h1 className="lg:text-3xl text-xl text-center text-black font-bold mb-10">
        Featured Categories
      </h1>
      <div className="xl:flex items-center">
        <div className="lg:flex justify-center">
          <Image src={tutorial} width={350} height={400} alt="tutorial" />
        </div>
        <div className="mt-10 lg:mt-10 lg:px-5 xl:px-0">
          <div className="lg:grid grid-cols-3 gap-y-10 gap-x-5">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="shadow-md border rounded-lg mb-7 lg:mb-0"
                sx={{ minWidth: 180 }}
              >
                <CardContent className="flex items-center justify-center gap-x-5">
                  <span className="text-3xl text-[#F9A14A]">
                    {category.icon}
                  </span>
                  <div>
                    <p className="font-bold xl:text-xl lg:text-base text-lg">
                      {category.name}
                    </p>
                    <p>{category.lessons}</p>
                  </div>
                  <span>
                    <AiOutlineRight />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
