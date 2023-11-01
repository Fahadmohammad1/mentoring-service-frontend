import Banner from "@/components/ui/Banner";
import ServiceCard from "@/components/ui/ServiceCard";
import Services from "@/components/ui/Services";
import TopCategories from "@/components/ui/TopCategories";
import UpcomingServices from "@/components/ui/UpcomingServices";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <TopCategories />
      <UpcomingServices />
    </>
  );
};

export default HomePage;
