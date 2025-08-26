import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// images
import touch1 from "/touch1.webp";
import qoutes from "/qoutes.svg";
import mobileViewSlide from "/mobileViewSlide.webp";
import { IoCheckmark, IoClose } from "react-icons/io5";
import { ImImage } from "react-icons/im";
import FlagInput from "./FlagInput";
import CustomSelector from "./CustomSelector";

const GetCallBack = ({ showModal1, setShowModal1 }) => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const customPaginationRender = (swiper, current, total) => {
    setCurrentSlide(current);
    setTotalSlides(total);
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    // job_title: "",
    // launch_timeline: "",
    // budget: selectedBudget || "",
    message: "",
  });

  const jobTitles = [
    { value: "1", label: "Software Engineer" },
    { value: "2", label: "Data Scientist" },
    { value: "3", label: "Product Manager" },
    { value: "4", label: "UX/UI Designer" },
    { value: "5", label: "Marketing Specialist" },
  ];

  const budgets = [
    { value: "1", label: "$5k - $25k" },
    { value: "2", label: "$25k - $50k" },
    { value: "3", label: "$50k - $100k" },
    { value: "4", label: "$100k - $200k" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.fullname || !formData.email || !formData.phone) {
        throw new Error("Please fill in all required fields");
      }

      const payload = {
        ...formData,
        budget: selectedBudget || formData.budget,
      };

      const response = await axios.post(
        `${API_BASE_URL}/api/experts`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("Form submitted successfully!");
        // Reset form
        setFormData({
          fullname: "",
          email: "",
          phone: "",
        //   job_title: "",
        //   launch_timeline: "",
        //   budget: "",
          message: "",
        });
        setSelectedBudget(null);
      } else {
        throw new Error(response.data.message || "Failed to submit form");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Error submitting form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const slideWidth = currentSlide * 25 + "%";

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <div
        className={`fixed inset-0 z-[1199] flex justify-center items-center py-12 bg-black/50 px-5 transition-all duration-500  ${
          showModal1
            ? "opacity-100 visible z-[1999]"
            : "opacity-0 invisible -z-50"
        }`}
      >
        <div
          className={`modal py-5 px-7 max-lg:pt-16 bg-white max-h-[90dvh] overflow-y-auto 2xl:max-w-[45.5625rem] max-w-[35.5625rem] w-full relative transition-all duration-500 rounded-[1.625rem] ${
            showModal1 ? "scale-100" : "scale-90"
          }`}
        >
          <div
            onClick={() => setShowModal1(false)}
            className="absolute  top-2  right-2 cursor-pointer rounded-full size-8 bg-pine-700 flex justify-center items-center text-white"
          >
            <IoClose />
          </div>
          <div className="flex justify-center items-center h-full lg:flex-row flex-col gap-5">
            <div className="lg:w-[90%] w-full mt-5">
          <h1 className="font-bold mb-5 text-[1.50rem]">Discuss your Idea with a <span className="text-pine-400">CTO!</span> </h1>
              <form
                onSubmit={handleSubmit}
                className="sm:grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 flex flex-col gap-5"
              >
                <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[3.975rem]">
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
               
                <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[3.975rem]">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                    required
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
 <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[3.975rem]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Business Email"
                    required
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
             
                <div className="col-span-2 bg-gradient-to-b from-pine-700/0 to-pine-700/30 p-[1px] shadow-2xl shadow-black/10 rounded-[.625rem] overflow-hidden max-h-[500px] overflow-y-auto">
                  {/* <h4 className="text-base leading-[1.625rem] font-semibold">
                    Description
                  </h4> */}
                  <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] min-h-[4.875rem]">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please Share Your Business Requirements"
                      className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none min-h-[150px] max-h-[150px] "
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block text-white rounded-[.625rem] hover:bg-pine-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Call Me Now!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCallBack;
