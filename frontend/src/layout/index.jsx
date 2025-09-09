/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import logoHome from "/logo_home.png";
import ChatBoat from "/ChatBoat.png";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
import GetCallBack from "../components/GetCallBack";
const index = () => {
   const [showModal1, setShowModal1] = useState(false);
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
        <div className="whatsappLogo size-[4.0056rem] fixed z-[999] bottom-[2.5rem] left-[2.5rem] aspect-square rounded-full bg-white">
          <div className="h-full w-full rounded-full flex justify-center items-center relative">
            <MdOutlineWhatsapp className="text-green-500 size-[2rem] animate-ping absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            <MdOutlineWhatsapp className="text-green-500 size-[2rem]" />
          </div>
        </div>
        </a>
  
     {/* <button
  onClick={() => setShowModal1(true)}
  className="fixed bottom-28 left-10 z-[999] group"
>
  <div className="relative flex flex-col items-center ">
    <div className="bg-[#0f2e2e] text-white rounded-full px-1 pb-1 pt-3 flex flex-col items-center justify-center shadow-md border border-dashed border-white shine-effect">
      <span className="rotate-180 [writing-mode:vertical-rl] text-md font-medium">
        Get a Call Back
      </span>
      <div className="mt-2 relative size-[3.4056rem] rounded-full bg-white flex justify-center items-center">
        <img
          src={logoHome}
          alt="Call"
          className="size-[2.3rem] animate-ping absolute"
        />
        <img src={logoHome} alt="Call" className="size-[2.4rem] relative" />
      </div>
    </div>


  </div>
</button> */}

        {/* <div className="  fixed z-[999] bottom-[2.5rem] right-[2.5rem]  ">
    <div className="h-[100px] w-[100px]  flex justify-center items-center relative">
    <img
          src={ChatBoat}
          alt="Call"
          className="h-[20px] w-[60px] animate-ping absolute"
        />
        <img src={ChatBoat} alt="Call" className="h-[55px] w-[100px] relative" />
    </div>
  </div> */}
    <GetCallBack
        showModal1={showModal1}
        setShowModal1={() => setShowModal1(!showModal1)}/>
    </>
  );
};

export default index;
