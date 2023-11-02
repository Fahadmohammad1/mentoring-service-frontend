import Banner from "@/components/ui/Banner";
import Feedbacks from "@/components/ui/Feedbacks";
import Overview from "@/components/ui/Overview";
import Services from "@/components/ui/Services";
import Sponsor from "@/components/ui/Sponsor";
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
      <Overview />
      <Feedbacks />
      <Sponsor />
    </>
  );
};

export default HomePage;
