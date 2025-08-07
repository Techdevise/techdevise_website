/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
const index = () => {
  useEffect(() => {
    AOS.init({
      // Optional settings
      duration: 1000, // animation duration in milliseconds
      once: true, // whether animation should only happen once
    });
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <>
      <Header />
      <div className="min-h-dvh">
        <Outlet />
      </div>
      <Footer />

<a
  href="https://wa.me/916284766746"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="whatsappLogo size-[4.0056rem] fixed z-[999] bottom-[2.5rem] right-[2.5rem] aspect-square rounded-full bg-white">
    <div className="h-full w-full rounded-full flex justify-center items-center relative">
      <MdOutlineWhatsapp className="text-green-500 size-[2rem] animate-ping absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      <MdOutlineWhatsapp className="text-green-500 size-[2rem]" />
    </div>
  </div>
</a>

   
  
    </>
  );
};

export default index;
