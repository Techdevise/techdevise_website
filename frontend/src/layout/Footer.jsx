import React, { useEffect, useState } from "react";

import Logo from "../../public/Logo.svg";
import { Link } from "react-router-dom";
import footerOne from "../../public/footerOne.webp";
import footerTwo from "../../public/footerTwo.webp";
import { RiMapPin2Fill } from "react-icons/ri";
import { TbMailFilled } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
const Footer = () => {
 const [blogs, setBlogs] = useState([]);
const [loading, setLoading] = useState(true);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL = `${API_BASE_URL}/images`;

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
    };
  
    // Fetch blogs from the API
   useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/blogs`);
      if (response.data.success) {
        const sortedBlogs = [...response.data.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(sortedBlogs.slice(0, 2));
         console.log(response);
         
      } else {
        console.error("Error fetching blogs:", response.data.message);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  fetchBlogs();
}, []);
  
  return (
    <>
      <footer className="-mt-12 py-[1.375rem] bg-gradient-to-b from-pine-700 to-pine-999 sm:rounded-t-[3.25rem] rounded-t-[2.1875rem]">
        <div className="main-container">
          {/* Send mail */}
          <div className="mail md:flex hidden justify-between items-center pb-[1.125rem]">
            <h3 className="2xl:text-[2.25rem] lg:text-[1.25rem] text-[1.5rem] lg:leading-[2.875rem] leading-[2.25rem] font-semibold text-white">
              Keep up with the latest
            </h3>
            <form className="lg:max-w-[35.625rem] max-w-[29.25rem] w-full h-[4.125rem] gap-4 flex justify-end items-center ">
              <div className="inline-flex items-center border-b border-white">
                {/* Left side icon */}
                <TbMailFilled className="text-white size-6 mr-2" />

                {/* Right side email input */}
                <input
                  type="email"
                  id="emailInput"
                  className="bg-transparent h-[50px] flex-1 text-[1.125rem] leading-[1.875rem] text-white placeholder:text-white appearance-none focus-visible:ring-0 focus-visible:outline-0 w-full autofill:bg-transparent autofill:text-white"
                  placeholder="Email"
                  required
                  onChange={(e) => {
                    const button = document.getElementById("sendButton");
                    button.disabled = !e.target.validity.valid;
                  }}
                />
              </div>

              <button
                id="sendButton"
                type="submit"
                disabled
                className="lg:px-[4.1125rem] px-[1.125rem] h-[50px] rounded-[.4375rem] text-[1.25rem] font-bold text-pine-700 bg-white shine-effect disabled:bg-white disabled:cursor-not-allowed relative group"
                title="Please enter email"
              >
                Send
                <span className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
                  Please enter email
                </span>
              </button>
            </form>
          </div>
          {/* Line */}
          <div className="line max-md:hidden w-full h-[1px] bg-white/35"></div>

          {/* Intro / menus / cards */}
          <div className="flex md:justify-between justify-center items-stretch gap-5 md:pt-[1.625rem] pt-[.75rem] md:mb-[1.125rem]">
            <div className="flex-[1_1_31.25rem] max-w-fit">
              <Link to="/" className="mb-4 block w-fit max-md:mx-auto">
                <img src={Logo} alt="logo" className="h-[2.5rem] w-auto" />
              </Link>
              <p className="text-[.910rem] leading-[1.6875rem] text-white font-medium w-full max-w-xl max-md:text-center">
                Tech Devise is a digital solution provider which offers various
                digital services that will help your online business to
                flourish. We expertise in providing services like digital
                marketing, app development, web development, CMS development and
                many more.
              </p>
              <div className="flex justify-start items-center gap-[.9375rem] mt-[2.125rem]">
                <Link
                  to="/contact-us"
                  className="w-fit block max-md:mx-auto py-2.5 px-5 rounded-[.625rem] bg-white text-[1.05rem] leading-[1.8125rem] font-bold text-pine-700 shine-effect"
                >
                  Contact Now!
                </Link>
                <a
                  href="https://www.facebook.com/Techdevise9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center size-10 rounded-full aspect-square bg-[#3B5998]"
                >
                  <FaFacebookF className="size-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/techdevise_it_services/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center size-10 rounded-full aspect-square bg-[#fff]"
                >
                  <BiLogoInstagram className="size-5 text-black" />
                </a>
                <a
                  href="https://www.linkedin.com/company/techdevise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center size-10 rounded-full aspect-square bg-[#0077b5]"
                >
                  <FaLinkedinIn className="size-5 text-white" />
                </a>

                <a
                  href="https://x.com/it_devise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center size-10 rounded-full aspect-square bg-[#fff]"
                >
                  <FaXTwitter className="size-5 text-black" />
                </a>
              </div>
            </div>
            <div className="flex-[1_1_12.6rem] max-w-fit max-md:hidden">
              <h5 className="font-bold text-[1.325rem] leading-[1.6875rem] text-white mb-[.9375rem]">
                Services
              </h5>
              <ul>
                <li className="mb-3">
                  <Link
                    to="/mobile-app-development"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Mobile Application Development
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/blockchain"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Blockchain Development
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/web-app-development"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Website Development
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/digital-marketing"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/quality-analysis"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Quality Analysis
                  </Link>
                </li>

                <li className="mb-3">
                  <Link
                    to="/it-staff"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    IT Staffing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-[1_1_12.6rem] max-w-fit max-md:hidden">
              <h5 className="font-bold text-[1.325rem] leading-[1.6875rem] text-white mb-[.9375rem]">
                Quick Link
              </h5>
              <ul>
                <li className="mb-3">
                  <Link
                    to="/about"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    About TechDevise
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/contact-us"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/our-blogs"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    Our Blogs
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/fqa"
                    className="text-[.910rem] leading-[1.6875rem] font-normal text-nowrap text-white"
                  >
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-[1_1_21.874rem] max-w-fit max-lg:hidden">
              <h5 className="font-bold text-[1.325rem] leading-[1.6875rem] text-white mb-[.9375rem]">
                Recent Blogs
              </h5>

             <div className="flex gap-4 mb-[1.9375rem]">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="flex-1 max-w-[10.8125rem] bg-white p-1.5 rounded-[.625rem]"
    >
      <img
        src={`${BASE_URL}/${blog.image}`} // Assuming blog.image is stored filename
        alt={blog.title}
        className="rounded-sm max-w-[10.925rem] h-[6.2975rem] object-cover"
      />
      <p className="text-[.8rem] text-black font-medium mt-[.5625rem]">
        {blog.title.length > 35
          ? blog.title.slice(0, 32) + "..."
          : blog.title}
      </p>
      <p
        className="bg-pine-700 rounded-[.625rem] text-[.825rem] leading-[1.875rem] font-semibold text-white px-5 block w-fit mt-4"
      >
        {formatDate(blog.date)}
      </p>
    </div>
  ))}
</div>

              <Link
                to="/our-blogs"
                className="ms-auto block w-fit underline  text-white bg-transparent text-[.910rem] font-normal  px-1 shine-effect -mt-5"
              >
                View More
              </Link>
            </div>
          </div>
          {/* Contact info */}
          <div className="py-[1.8125rem] px-[1.6875rem] rounded-[1.625rem] flex flex-wrap 2xl:justify-between lg:justify-between justify-center xl:items-center items-start xl:gap-5 gap-10 md:bg-white/5 md:mb-[1.125rem] mb-[1.11rem]">
            <div className=" max-w-fit flex justify-start items-start gap-[.775rem]">
              <RiMapPin2Fill className="size-[1.5rem] text-white" />
              <p className="text-[.910rem] lg:text-nowrap leading-[1.8125rem] text-white font-medium w-full ">
                F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar,
                Punjab 160071
              </p>
            </div>
            <div className=" max-w-fit">
              <Link
                to="mailto:Info@techdevise.com"
                target="_block"
                className="flex justify-center items-center text-nowrap gap-2 font-medium text-[.910rem] leading-[1.6875rem] text-white"
              >
                <TbMailFilled className="text-white size-6" />{" "}
                <span>Info@techdevise.com</span>
              </Link>
            </div>
            <div className="max-w-fit">
              <Link
                to="tel: +91 788-903-8027"
                className="flex justify-center items-center text-nowrap gap-2 font-medium text-[.910rem] leading-[1.875rem] text-white"
              >
                {" "}
                <IoCall className="text-white size-6" />{" "}
                <span>+91 788-903-8027</span>
              </Link>
            </div>
          </div>

          {/* footer bottom */}
          <div className="flex flex-wrap sm:justify-between justify-center max-sm:gap-x-16 items-center">
            <div className="flex gap-[1.6875rem] ">
              <Link
                to="/Privacy-Policy"
                className="text-[.910rem]  leading-[29px] font-medium text-white text-nowrap"
              >
                Privacy Policy
              </Link>
              <div className="h-[1.375rem] w-[1px] bg-white"></div>
              <Link
                to="/Terms-Conditions"
                className="text-[.910rem]  leading-[29px] font-medium text-white text-nowrap"
              >
                Terms & Conditions
              </Link>
            </div>
            <p className="text-[.910rem] leading-[29px] font-medium text-white text-nowrap">
              Techdevise © 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
