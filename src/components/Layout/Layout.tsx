import React from "react";
import Navbar from "../ui/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../ui/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
