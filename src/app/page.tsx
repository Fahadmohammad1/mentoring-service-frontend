import Banner from "@/components/ui/Banner";
import BookmarkModal from "@/components/ui/BookmarkModal";
import Feedbacks from "@/components/ui/Feedbacks";
import Footer from "@/components/ui/Footer";
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
      <BookmarkModal />
      <Services />
      <TopCategories />
      <UpcomingServices />
      <Overview />
      <Feedbacks />
      <Sponsor />
      <Footer />
    </>
  );
};

export default HomePage;
