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

const GetInTouch = ({ showModal, setShowModal }) => {
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
    job_title: "",
    launch_timeline: "",
    budget: selectedBudget || "",
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
          job_title: "",
          launch_timeline: "",
          budget: "",
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
          showModal
            ? "opacity-100 visible z-[1999]"
            : "opacity-0 invisible -z-50"
        }`}
      >
        <div
          className={`modal py-5 px-7 max-lg:pt-16 bg-white max-h-[90dvh] overflow-y-auto max-w-[98.5625rem] w-full relative transition-all duration-500 ${
            showModal ? "scale-100" : "scale-90"
          }`}
        >
          <div
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 cursor-pointer rounded-full size-10 bg-pine-700 flex justify-center items-center text-white"
          >
            <IoClose />
          </div>
          <div className="flex justify-center items-center h-full lg:flex-row flex-col gap-5">
             <div className="lg:w-[40%] w-full bg-pine-700 pt-6 pb-6 px-[1.625rem] text-white text-center">
                            <h2 className='lg:text-4xl text-3xl leading-10 font-bold'>Turn Your Idea into a <br /> Profit Making App</h2>
                            <p className='text-[1.125rem] leading-6 font-medium mt-2 2xl:px-10'>Reach out to us and start your digital transformation journey today.</p>
                            <div className="line w-full h-[.0625rem] bg-gradient-to-r from-transparent via-white to-transparent mt-4"></div>

                            <div className="card mt-6">
                                <div className="cardHeader flex justify-between items-center  gap-5 mb-3">
                                    <div className="image border border-white rounded-[1.125rem] p-[.875rem] size-[6.8125rem] aspect-square">
                                        <img src={touch1} alt="Get in Touch Modal card Profile image" className='size-full object-cover' />
                                    </div>
                                    <div className="lg:text-start">
                                        <h5 className='text-[1.125rem] leading-[1.625rem] font-bold'>Alex Johnson</h5>
                                        <p className='text-sm leading-[1.375rem] font-normal lg:text-start'>Company Name: Seoproductief Designation: Head, Marketing</p>
                                    </div>
                                    <div className="qoutes w-[4.375rem] h-[3.5rem]">
                                        <img src={qoutes} alt="Get in touch svg iamge" className='size-full' />
                                    </div>
                                </div>
                                <p className='text-sm leading-5 font-medium lg:text-start'>We developed a great partnership with Techdevise. Their dedication to our website is evident in all aspects of the site. We appreciate their attention to detail and creative approach in bringing our new exhibit to life online.</p>

                                <div className="slider mt-7">
                                    <Swiper
                                        className="mySwiper max-w-full"
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        speed={1000}
                                        loop={false}
                                        grabCursor={true}
                                        centeredSlides={true}
                                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                                        modules={[Autoplay, Pagination, A11y]}
                                        pagination={{
                                            type: 'custom',
                                            renderCustom: customPaginationRender,
                                        }}

                                        onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
                                        onSlideChange={(swiper) => {
                                            // This ensures our state is updated even if customPaginationRender isn't called immediately on slide change
                                            setCurrentSlide(swiper.realIndex + 1);
                                        }}
                                    >
                                        <SwiperSlide
                                            className="flex justify-center items-center"
                                        >
                                            <img src={mobileViewSlide} alt="Mobile View image" className='size-full max-w-[31rem] mx-auto max-h-[17.125rem] object-contain' />
                                        </SwiperSlide>
                                        <SwiperSlide
                                            className="flex justify-center items-center"
                                        >
                                            <img src={mobileViewSlide} alt="Mobile View image" className='size-full max-w-[31rem] mx-auto max-h-[17.125rem] object-contain' />
                                        </SwiperSlide>
                                        <SwiperSlide
                                            className="flex justify-center items-center"
                                        >
                                            <img src={mobileViewSlide} alt="Mobile View image" className='size-full max-w-[31rem] mx-auto max-h-[17.125rem] object-contain' />
                                        </SwiperSlide>
                                        <SwiperSlide
                                            className="flex justify-center items-center"
                                        >
                                            <img src={mobileViewSlide} alt="Mobile View image" className='size-full max-w-[31rem] mx-auto max-h-[17.125rem] object-contain' />
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className={` h-1 bg-white transition-all duration-1000 mt-[1.5rem] mb-2`} style={{ width: slideWidth }}></div>

                                    <div className="text-base text-center font-bold">
                                        <span className='text-[1.5rem]'>{currentSlide}</span> <span className='text-base'>/ {totalSlides === 0 ? '?' : totalSlides}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            <div className="lg:w-[60%] w-full">
              <form
                onSubmit={handleSubmit}
                className="sm:grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 flex flex-col gap-5"
              >
                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[4.375rem]">
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[4.375rem]">
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
                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[4.375rem]">
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
                

                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[4.375rem] relative">
                  <select
                    value={formData.job_title}
                    onChange={handleChange}
                    name="job_title"
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 pr-10 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none appearance-none"
                  >
                    <option value="" disabled hidden>
                      Job Title
                    </option>
                    {jobTitles.map((title, index) => (
                      <option key={index} value={title.value}>
                        {title.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-sm">
                    ▼
                  </div>
                </div>

                <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] min-h-[4.875rem] relative">
                  <select
                    value={formData.launch_timeline}
                    onChange={handleChange}
                    name="launch_timeline"
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 pr-10 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none appearance-none"
                  >
                    <option value="" disabled selected>
                      When do you want to launch a solution?
                    </option>
                    <option value="1">Immediately</option>
                    <option value="2">Within 1-3 months</option>
                    <option value="3">Within 3-6 months</option>
                    <option value="4">6+ months from now</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-sm">
                    ▼
                  </div>
                </div>

                <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 p-[1px] shadow-2xl shadow-black/10 rounded-[.625rem] overflow-hidden">
                  <div className="bg-white py-4 px-5 rounded-[.5625rem] text-black flex gap-5 justify-between items-center">
                    <h5 className="text-base leading-[1.625rem] font-semibold">
                      Budget
                    </h5>
                    <div className="line w-[1px] h-[49px] bg-black rounded-full"></div>
                    <div className="flex-1">
                      <ul className="flex justify-start items-center divide-x divide-black overflow-x-auto hide-scroll">
                        {budgets.map((budget, index) => (
                          <li key={index}>
                            <span
                              className={`text-base leading-[1.625rem] font-semibold px-10 text-nowrap cursor-pointer ${
                                selectedBudget === budget.value
                                  ? "text-[#157B6C]"
                                  : ""
                              }`}
                              onClick={() => {
                                setSelectedBudget(budget.value);
                                setFormData((prev) => ({
                                  ...prev,
                                  budget: budget.value,
                                }));
                              }}
                            >
                              {budget.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              <div className="col-span-2 bg-gradient-to-b from-pine-700/0 to-pine-700/30 p-[1px] shadow-2xl shadow-black/10 rounded-[.625rem] overflow-hidden max-h-[500px] overflow-y-auto">
  <h4 className="text-base leading-[1.625rem] font-semibold">
    Description
  </h4>
  <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] min-h-[4.875rem]">
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Tell us about your project..."
      className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none min-h-[150px] max-h-[150px] "
    ></textarea>
  </div>
</div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block text-white rounded-[.625rem] hover:bg-pine-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
