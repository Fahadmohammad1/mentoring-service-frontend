import React from "react";
import Navbar from "../ui/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Toaster />
    </>
  );
};

export default Layout;
