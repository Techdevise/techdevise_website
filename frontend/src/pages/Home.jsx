import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Images
import video from "/Homevideo1-BHIh2a86.mp4";
import lightOne from "/lightOne.svg";
import lightTwo from "/lightTwo.svg";
import vectorOne from "/vectorOne.svg";
import vectorTwo from "/vectorTwo.svg";
import vectorThree from "/vectorThree.svg";
import vectorFour from "/vectorFour.svg";
import vectorFive from "/vectorFive.svg";
import vectorSix from "/vectorSix.svg";
import vectorSeven from "/vectorSeven.svg";
import vectorEight from "/vectorEight.svg";
import vectorNine from "/vectorNine.svg";
import vector12 from "/vector12.svg";
import GoogleAnalytics from "/GoogleAnalytics.svg";
import VisionSlider from "../components/VisionSlider";
import cardOne from "/cardOne.webp";
import card2 from "/card2.png";
import card3 from "/card3.png";
import card4 from "/card4.png";
import card5 from "/card5.png";
import card6 from "/card6.png";
import card7 from "/card7.png";
import card8 from "/card8.png";
import card9 from "/card9.png";
import card10 from "/card10.png";
import card11 from "/card11.png";
import card12 from "/card12.png";
import card13 from "/card13.png";
import card14 from "/card15.png";
import card15 from "/card16.png";
import card16 from "/card17.png";
import card17 from "/card18.png";
import layerOne from "/layerOne.webp";

import icon1 from "/langicon/icon1.svg";
import icon2 from "/langicon/icon2.svg";
import icon3 from "/langicon/icon3.svg";
import icon4 from "/langicon/icon4.svg";
import icon5 from "/langicon/icon5.svg";
import icon6 from "/langicon/icon6.svg";
import icon7 from "/langicon/icon7.svg";
import icon8 from "/langicon/icon8.svg";
import icon9 from "/langicon/icon9.svg";
import icon10 from "/langicon/icon10.svg";
import icon11 from "/langicon/icon11.svg";
import icon12 from "/langicon/icon12.svg";
import icon13 from "/langicon/icon13.svg";
import icon14 from "/langicon/icon14.svg";
import icon15 from "/langicon/icon15.svg";
import icon16 from "/langicon/icon16.svg";
import icon17 from "/langicon/icon17.svg";
import icon18 from "/langicon/icon18.svg";
import icon19 from "/langicon/icon19.svg";
import icon20 from "/langicon/icon20.svg";
import icon21 from "/langicon/icon21.svg";
import icon22 from "/langicon/icon22.svg";
import icon23 from "/langicon/icon23.svg";
import icon24 from "/langicon/icon24.svg";
import icon25 from "/langicon/icon25.svg";
import icon26 from "/langicon/icon26.svg";
import icon27 from "/langicon/icon27.svg";
import icon28 from "/langicon/icon28.svg";
// Images
import halfDotCirleGreen from "/halfDotCirleGreen.svg";

import halfDotCircleWhite from "/halfDotCircleWhite.svg";
// social icons
import linkedin from "/linkedin.svg";
import upwork from "/upwork.svg";
import clutch from "/clutch.svg";
import trustpilot from "/trustpilot.svg";

// from image
import vector13 from "/vector13.svg";
import formBlur from "/formBlur.svg";

import { FcGoogle } from "react-icons/fc";
import { HiArrowLongRight, HiOutlineArrowLongRight } from "react-icons/hi2";
import CompanyLogoSlider from "../components/CompanyLogoSlider";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import BlockchainSlider from "../components/BlockchainSlider";
import { PiArrowCircleUpRightLight } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import TestimonialCard from "../components/TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import AutoCounter from "../components/counter";
// swiper

// state images
import state1 from "/state1.webp";
import state2 from "/state2.webp";
import state3 from "/state3.webp";
import flag1 from "/flag1.svg";
import flag2 from "/flag2.svg";
import flag3 from "/flag3.svg";
import map from "/map.svg";
import CustomRangeSlider from "../components/CustomRangeSlider";

import clogo1 from "/clogo1.svg";
import clogo2 from "/clogo2.svg";
import clogo3 from "/clogo3.svg";
import clogo4 from "/clogo4.svg";
import clogo5 from "/clogo5.svg";
import clogo6 from "/clogo6.svg";
import clogo7 from "/clogo7.svg";
import clogo8 from "/clogo8.svg";
import clogo9 from "/clogo9.svg";
import clogo10 from "/clogo10.svg";
import clogo11 from "/clogo11.svg";
import clogo12 from "/clogo12.svg";
import clogo13 from "/clogo13.svg";
import clogo14 from "/clogo14.svg";
import clogo15 from "/clogo15.svg";

import Nour_Deen from "/Nour_Deen.png";
import Harjit from "/Harjit.png";
import Shams from "/Shams.png";
import ShadyAmer from "/ShadyAmer.png";

// clock images
import dashGreen from "/dashGreen.webp";
import dashWhite from "/dashWhite.webp";
import Clock from "../components/clock";
import GetInTouch from "../components/GetInTouch";
import TextShuffling from "../components/TextShuffling";

const Home = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  const [industries, setIndustries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [currentSlide, setCurrentSlide] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [totalSlides, setTotalSlides] = useState(0);
  const prev2Ref = useRef(null);
  const next2Ref = useRef(null);
  const customPaginationRender = (swiper, current, total) => {
    setCurrentSlide(current);
    setTotalSlides(total);
  };
  const [budget, setBudget] = useState(10000);
  const clockThirSlideCircles = [
    {
      bordeColor: "border-pine-700",
      bgColor: "bg-pine-700",
      textColor: "text-white",
      arrow: halfDotCirleGreen,
      title: "Sprint Backlog",
    },
    {
      bordeColor: "border-white",
      bgColor: "bg-white",
      textColor: "text-pine-700",
      arrow: halfDotCircleWhite,
      title: "Planning",
    },

    {
      bordeColor: "border-pine-700",
      bgColor: "bg-pine-700",
      textColor: "text-white",
      arrow: halfDotCirleGreen,
      title: "Implementation",
    },
    {
      bordeColor: "border-white",
      bgColor: "bg-white",
      textColor: "text-pine-700",
      arrow: halfDotCircleWhite,
      title: "Review",
    },

    {
      bordeColor: "border-pine-700",
      bgColor: "bg-pine-700",
      textColor: "text-white",
      arrow: halfDotCirleGreen,
      title: "Retrospective",
    },
    {
      bordeColor: "border-white",
      bgColor: "bg-white",
      textColor: "text-pine-700",
      arrow: halfDotCircleWhite,
      title: "Definition of Done",
    },
  ];

  const langlistOne = [
    {
      langName: "React JS",
      icon: icon1,
    },
    {
      langName: "Vue JS",
      icon: icon2,
    },
    {
      langName: "JavaScript",
      icon: icon3,
    },
    {
      langName: "CSS",
      icon: icon4,
    },
    {
      langName: "HTML",
      icon: icon5,
    },
    {
      langName: "Next JS",
      icon: icon6,
    },
    {
      langName: "Ember",
      icon: icon7,
    },
    {
      langName: "Meteor",
      icon: icon8,
    },
  ];
  const langlistTwo = [
    {
      langName: "Java",
      icon: icon9,
    },
    {
      langName: "Node JS",
      icon: icon10,
    },
    {
      langName: "PHP",
      icon: icon11,
    },
    {
      langName: "Python",
      icon: icon12,
    },
    {
      langName: "Go",
      icon: icon13,
    },
    {
      langName: ".Net",
      icon: icon14,
    },
  ];
  const langlistThree = [
    {
      langName: "Android",
      icon: icon15,
    },
    {
      langName: "Flutter",
      icon: icon16,
    },
    {
      langName: "Cordova",
      icon: icon17,
    },
    {
      langName: "IOS",
      icon: icon18,
    },
    {
      langName: "Xamarin",
      icon: icon19,
    },
    {
      langName: "PWA",
      icon: icon20,
    },
    {
      langName: "Ionic",
      icon: icon21,
    },
    {
      langName: "React Native",
      icon: icon22,
    },
  ];

  const langlistFour = [
    {
      langName: "Figma",
      icon: icon23,
    },
    {
      langName: "Sketch",
      icon: icon24,
    },
    {
      langName: "Adobe XD",
      icon: icon25,
    },
    {
      langName: "CorelDRAW",
      icon: icon26,
    },
    {
      langName: "Photoshop",
      icon: icon27,
    },
    {
      langName: "Illustrator",
      icon: icon28,
    },
  ];
  const companyLogos = [
    {
      image: Nour_Deen,
      name: "Nour Deen",
      dis: "“Working with TechDevise was an absolute pleasure. They developed our mobile app with exceptional attention to detail, meeting deadlines without compromising quality. Communication was clear, and their post-launch support ensured a smooth user experience. We’ll definitely collaborate again.”",
    },
    {
      image: Harjit,
      name: "Harjit",
      dis: "“TechDevise transformed our outdated website into a modern, responsive platform that truly represents our brand. Their UI/UX team understood our goals perfectly, delivering a visually appealing and highly functional site. They remain our trusted partner for ongoing updates and improvements.”",
    },
    {
      image: Shams,
      name: "Shams El Akabawy",
      dis: "“We approached TechDevise for AI integration to streamline our operations, and they exceeded expectations. From strategy to implementation, their expertise was evident. Transparent reporting, innovative solutions, and a seamless rollout made this one of our best vendor experiences.”",
    },
    {
      image: ShadyAmer,
      name: "Shady Amer",
      dis: "“Our digital marketing campaign with TechDevise delivered remarkable results in just months. They combined data-driven strategies with creative execution, significantly increasing our online visibility and sales. Their team’s professionalism and commitment to results set them apart from other agencies.”",
    },
  ];

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company_name: "",
    date: "",
    time: "",
    budget: "20000",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullname)) {
      newErrors.fullname = "Name should contain only letters and spaces";
    } else if (formData.fullname.length < 3) {
      newErrors.fullname = "Name should be at least 3 characters";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be 10-15 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        budget: budget.toString(),
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
        toast.success(response.data.message || "Form submitted successfully!");

        // Reset form
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          company_name: "",
          date: "",
          time: "",
          budget: "20000",
          message: "",
        });
        setBudget(20000);
        setErrors({});
      } else {
        throw new Error(response.data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "Error submitting form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seamless`);
        if (res.data.success) {
          setIndustries(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch seamless vision data:", err);
      }
    };

    fetchIndustries();
  }, []);

  const addressList = [
    {
      bgimage: state1,
      flag: flag1,
      countryName: "India",
      address:
        "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
    },
    {
      bgimage: state2,
      flag: flag2,
      countryName: "United States",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
    },
    {
      bgimage: state3,
      flag: flag3,
      countryName: "Netherland",
      address: "Paleisstraat 1, 1012 RB Amsterdam, Netherlands",
    },
  ];
  const offshore = [
    {
      image: dashGreen,
      title: "Share your Requirements",
      discription: "Define your project needs and skills required",
    },
    {
      image: dashWhite,
      title: "Get Vetted Profile",
      discription: "Define your project needs and skills required",
    },
    {
      image: dashGreen,
      title: "Conduct Interview",
      discription: "Define your project needs and skills required",
    },
    {
      image: dashWhite,
      title: "Hire & Get Started",
      discription: "Define your project needs and skills required",
    },
  ];

  const coLogos = [
    {
      image: clogo1,
      alt: "company logo 1",
    },
    {
      image: clogo2,
      alt: "company logo 2",
    },
    {
      image: clogo3,
      alt: "company logo 3",
    },
    {
      image: clogo4,
      alt: "company logo 4",
    },
    {
      image: clogo5,
      alt: "company logo 5",
    },
    {
      image: clogo6,
      alt: "company logo 6",
    },
    {
      image: clogo7,
      alt: "company logo 7",
    },
    {
      image: clogo8,
      alt: "company logo 8",
    },
    {
      image: clogo9,
      alt: "company logo 9",
    },
    {
      image: clogo10,
      alt: "company logo 10",
    },
    {
      image: clogo11,
      alt: "company logo 11",
    },
    {
      image: clogo12,
      alt: "company logo 12",
    },
    {
      image: clogo13,
      alt: "company logo 13",
    },
    {
      image: clogo14,
      alt: "company logo 14",
    },
    {
      image: clogo15,
      alt: "company logo 15",
    },
  ];
const images = [cardOne,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  const countRef = useRef(null);
  return (
    <>
      <main className="bg-pine-999 pb-12">
        {/* Landing area section start */}
        <section className="landing-area relative z-0">
          <video
            src={video}
            playsInline
            loop
            muted
            autoPlay
            className="h-full  w-[100dvw] object-cover absolute top-0 left-0 z-[-1]"
          ></video>
          <div className="cover bg-pine-999/50 backdrop-blur-sm h-full w-full lg:pt-[5.5rem] pt-20">
            <div className=" flex justify-between items-stretch flex-col h-full">
              <div className="flex-1">
                <div className="main-container relative  flex justify-center items-stretch flex-col lg:flex-row h-full">
                  <div className="flex-[2_1_0%] flex flex-col justify-center items-stretch  pb-[1.375rem] ">
                    <div className="lights  justify-end items-start gap-[3.1781rem] hidden -mt-20 pr-14">
                      <img
                        src={lightOne}
                        alt="light one"
                        data-aos="fade-down"
                        data-aos-delay="400"
                      />
                      <img
                        src={lightTwo}
                        alt="light two"
                        data-aos="fade-down"
                        data-aos-delay="200"
                      />
                    </div>
                    <div className="mb-5  flex lg:justify-start justify-center items-start max-lg:text-center">
                      <div className="heroContent max-lg:pt-[4.875rem] max-lg:pb-[3.25rem] h-fit">
                        <div
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="heroButtons flex gap-[1.8125rem] lg:justify-start justify-center items-stretch"
                        >
                          <button className="lg:text-[1.25rem] text-[.825rem] px-5 lg:py-4 py-2 rounded-xl border border-white/40 text-white font-semibold flex justify-center items-center gap-2.5 shine-effect">
                            <FcGoogle className="size-[1.375rem]" />
                            <span>Google Partner</span>
                          </button>
                          <button className="lg:text-[1.25rem] text-[.825rem] px-5 lg:py-4 py-2 rounded-xl border border-white/40 text-white font-semibold flex justify-center items-center gap-2.5 shine-effect">
                            <img src={GoogleAnalytics} alt="google analytics" />
                            <span>Google Analytics</span>
                          </button>
                        </div>

                        <h3
                          data-aos="fade-up"
                          data-aos-delay="600"
                          className="2xl:text-[2.5rem] md:text-[1.9rem] text-[1.5rem] font-normal text-white mt-[1.875rem]"
                        >
                          Expert Development Services for you
                        </h3>
                        <TextShuffling />
                        {/* <h1
                          data-aos="fade-up"
                          data-aos-delay="800"
                          className="2xl:text-[6rem] xl:text-[5rem] lg:text-[4.375rem] md:text-[3.125rem] sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mt-3"
                        >
                          Digital marketing
                        </h1> */}
                      </div>
                    </div>
                    <div className="flex-[0_1_0%]">
                      <button
                        onClick={() => setShowModal(true)}
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        className="bg-transparent border border-white/40 rounded-[.625rem] text-[1.25rem] py-4 px-5 text-white font-normal flex justify-center items-center gap-[.75rem] w-fit max-lg:mx-auto shine-effect"
                      >
                        <span>Consult Our Experts</span>
                        <HiOutlineArrowLongRight className="size-10" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-[1_1_0%] flex flex-col justify-between items-stretch">
                    <div className="lights flex justify-end items-start gap-[3.1781rem] pe-[4.4781rem] max-lg:hidden -m-[18px]">
                      <div className="h-[170px] overflow-hidden">
                        <img
                          src={lightOne}
                          alt="light one"
                          className="h-full object-cover object-bottom"
                          data-aos="fade-down"
                        />
                      </div>
                      <div className="h-[200px] overflow-hidden">
                        <img
                          src={lightTwo}
                          alt="light two"
                          className="h-full object-cover object-bottom"
                          data-aos="fade-down"
                          data-aos-delay="200"
                        />
                      </div>
                    </div>
                    <div className="vectorOne h-[350px] mt-[3.25rem]">
                      <img
                        src={vectorOne}
                        alt="vector one"
                        className="mx-auto block h-full w-full object-contain"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[0_1_0%] bg-pine-999 shadow-[0px_4px_4px_0px_#00000040]">
                <div className="main-container !pe-0 py-[1.25rem] flex justify-start items-center">
                  <div className="flex-[0_1_0%] py-5 pe-8  border-r-2 border-white max-lg:hidden">
                    <h4 className="text-[1.15rem] font-bold text-white text-nowrap">
                      Trusted By
                    </h4>
                    <h4 className="text-[0.95rem] font-medium text-white text-nowrap mt-1.5">
                      Our global clients Network
                    </h4>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <CompanyLogoSlider logos={coLogos} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Landing area section end */}

        {/* About section start */}
        <section className="about-section mt-[3.125rem] bg-pine-999">
          <div className="main-container">
            <div className=" lg:border border-white/10 rounded-[1.625rem] lg:p-10 flex justify-center lg:items-center items-stretch flex-col lg:flex-row gap-4">
              <div className="flex-[1_1_25rem]">
                <h5 className="px-[1.125rem] py-[.5625rem] text-[1.25rem] max-lg:mb-4 font-semibold w-fit rounded-full border border-white/40 text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:text-start max-lg:mx-auto text-center">
                  About
                </h5>
                <h2
                  data-aos-delay="200"
                  className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:w-fit mb-6 lg:text-start text-center"
                >
                  Innovating the Future of <br /> Technology
                </h2>
                <p
                  data-aos-delay="400"
                  className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-white mb-1.5 lg:max-w-3xl lg:text-start text-center"
                >
                  Tech Devise possesses a professional team of experts! Our main
                  objective is to satisfy our client needs. Our area of
                  expertise is offering excellent services since we keep meeting
                  the needs of our clients even beyond the delivery term. We, at
                  Tech Devise, work very methodically to provide ultimate
                  satisfaction to clients. Our work begins with a consultation
                  with our client. We understand your needs better and suggest
                  the best solution. This is followed by development and
                  implementation of your project. Upon delivery, we assure
                  quality support and maintenance.
                </p>
                <p
                  data-aos-delay="600"
                  className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-white mb-1.5 lg:max-w-3xl lg:text-start text-center mt-4"
                >
                  At Tech Devise our dynamic and innovative team works in a
                  simple process. For us, knowing the client's preferences and
                  expectations is absolutely vital. Ensuring that the client and
                  our staff are in agreement depends mostly on effective
                  communication.{" "}
                </p>
              </div>
           <div className="flex-[1_1_18.75rem] overflow-hidden">
      <div className="xl:p-[2.125rem] p-[.8125rem] xl:rounded-[3.875rem] rounded-[2.5rem] bg-pine-950">
        <div 
          ref={sliderRef}
          className="relative h-full w-full rounded-[1.75rem] overflow-hidden"
        >
          <div
            className={`flex transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
             
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
        </section>
        {/* About section end */}

        {/* Experience section start */}
        <section ref={countRef} className="experience-section my-[6.0625rem]">
          <div className="main-container flex justify-between items-stretch xl:gap-[3.0625rem]">
            <div className="flex-1">
              <div className="grid lg:grid-cols-4 min-[480px]:grid-cols-3 grid-cols-2 lg:gap-[1.875rem] gap-[.9375rem]">
                <div className="lg:col-span-2 min-[480px]:col-span-3 col-span-2 max-lg:text-center mb-3">
                  <h3
                    data-aos="fade-down"
                    data-aos-delay="200"
                    className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold  text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700"
                  >
                    Experience
                  </h3>
                  <p
                    data-aos="fade-down"
                    className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-white lg:max-w-2xl"
                  >
                    With years of experience in the IT industry, we have
                    successfully delivered cutting-edge software solutions, web
                    and mobile applications, and enterprise-grade systems. Our
                    expertise spans various technologies, ensuring innovative,
                    scalable, and secure digital solutions tailored to your
                    business needs.
                  </p>
                </div>
                <div className="col-span-1">
                  <div className="rounded-[1.625rem] bg-[#67c792]">
                    <AutoCounter
                      sectionRef={countRef}
                      label="Visitors Today"
                      maxValue={10}
                      speed={752}
                    />
                    <h4 className="rounded-[1.625rem] 2xl:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem]  leading-[2.125rem] bg-white/60 w-full lg:h-[7.3125rem] h-[5.315rem] flex justify-center items-center text-center px-5">
                      Years of Experience
                    </h4>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="rounded-[1.625rem] bg-[#deea99]">
                    <AutoCounter
                      sectionRef={countRef}
                      label="Visitors Today"
                      maxValue={500}
                      speed={12}
                    />
                    <h4 className="rounded-[1.625rem] 2xl:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem]  leading-[2.125rem] bg-white/60 w-full lg:h-[7.3125rem] h-[5.315rem] flex justify-center items-center text-center px-5">
                      Clients
                    </h4>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="rounded-[1.625rem] bg-[#99eae0]">
                    <AutoCounter
                      sectionRef={countRef}
                      label="Visitors Today"
                      maxValue={300}
                      speed={21}
                    />
                    <h4 className="rounded-[1.625rem] 2xl:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem]  leading-[2.125rem] bg-white/60 w-full lg:h-[7.3125rem] h-[5.315rem] flex justify-center items-center text-center px-5">
                      Projects
                    </h4>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="rounded-[1.625rem] bg-[#99cbea]">
                    <AutoCounter
                      sectionRef={countRef}
                      label="Visitors Today"
                      maxValue={10}
                      speed={752}
                    />
                    <h4 className="rounded-[1.625rem] 2xl:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem]  leading-[2.125rem] bg-white/60 w-full lg:h-[7.3125rem] h-[5.315rem] flex justify-center items-center text-center px-5">
                      Countries Served
                    </h4>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="rounded-[1.625rem] bg-[#ea99b9]">
                    <AutoCounter
                      sectionRef={countRef}
                      label="Visitors Today"
                      maxValue={50}
                      speed={130}
                    />
                    <h4 className="rounded-[1.625rem] 2xl:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem]  leading-[2.125rem] bg-white/60 w-full lg:h-[7.3125rem] h-[5.315rem] flex justify-center items-center text-center px-5">
                      Employees
                    </h4>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="rounded-[1.625rem] bg-[#ea9c99]">
                    <AutoCounter
                      sectionRef={countRef}
                      label="Visitors Today"
                      maxValue={500}
                      speed={12}
                    />
                    <h4 className="rounded-[1.625rem] 2xl:text-[1.5rem] sm:text-[1.3rem] text-[1.2rem]  leading-[2.125rem] bg-white/60 w-full lg:h-[7.3125rem] h-[5.315rem] flex justify-center items-center text-center px-5">
                      Digital Marketing Solutions Delivered
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="flex-[0_1_7.3125rem] max-w-[7.3125rem] max-xl:hidden overflow-hidden"
            >
              <h2 className="2xl:text-[5.5rem] text-[5rem] inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1f2d29] to-[#08211b] rotate-90 origin-[10%_50%]">
                Experience
              </h2>
            </div>
          </div>
        </section>
        {/* Experience section end */}

        {/* Our Tech section start */}
        <section className="OurTech overflow-hidden max-lg:hidden">
          <div className="main-container">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-transparent 2xl:text-[3rem] xl:text-[2.0rem] text-[2.2rem] font-bold bg-clip-text bg-gradient-to-r from-white to-pine-700 max-w-6xl max-lg:mx-auto max-lg:text-center mb-[1.75rem]">
                Our Tech Offerings - Tailored to Your Time
                <span className="hidden lg:inline">
                  <br />
                </span>
                Zone and Business Needs
              </h2>

              <div>
                <div className="flex gap-3 mb-2">
                  <button
                    ref={prevRef}
                    className="h-[44px] w-[44px] aspect-square rounded-full bg-white text-pine-700 flex justify-center items-center cursor-pointer"
                  >
                    <GoArrowLeft className="size-6" />
                  </button>
                  <button
                    ref={nextRef}
                    className="h-[44px] w-[44px] aspect-square rounded-full bg-pine-700 text-white flex justify-center items-center cursor-pointer"
                  >
                    <GoArrowRight className="size-6" />
                  </button>
                </div>
                <div className="text-base text-center font-bold text-white">
                  <span className="text-[1.5rem]">{currentSlide}</span>{" "}
                  <span className="text-base">
                    / {totalSlides === 0 ? "?" : totalSlides}
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <Swiper
                className="mySwiper h-full w-full justify-between select-none !overflow-visible"
                spaceBetween={30}
                slidesPerView={1}
                speed={1000}
                autoplay={{ delay: 1000000 }}
                grabCursor={true}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                onInit={(swiper) => {
                  // Re-assign custom buttons after swiper is initialized
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                pagination={{
                  type: "custom",
                  renderCustom: customPaginationRender,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                breakpoints={{
                  1440: {
                    slidesPerView: 1.2,
                  },
                }}
              >
                <SwiperSlide className="flex !h-auto">
                  <div className="flex h-full justify-between items-stretch 2xlp-[2.625rem] p-9 rounded-[3rem] bg-pine-600 ">
                    {/* <div className="flex-[22rem] max-w-[22rem] aspect-square bg-[#158079] rounded-full p-3 shrink-0 self-center">
                      <div className="h-full w-full text-white text-center rounded-full border-[2px] border-dashed border-white/80 flex justify-center items-center flex-col px-4">
                        <h4 className="text-[1.625rem] leading-[2.4375rem] font-bold">
                          Staff Augmentation
                        </h4>
                        <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.75rem] font-normal p-2">
                          Hire pre-vetted developers skilled in the latest
                          technologies, ready to work around the clock to meet
                          your project needs.
                        </p>
                      </div>
                    </div> */}

                    <div className="flex-[22rem] max-w-[22rem] aspect-square bg-[#158079] rounded-full p-3 shrink-0 self-center relative">
                      {/* Outer dashed circle (inset 2px) */}
                      <div className="absolute inset-[8px] rounded-full border-[2px] border-dashed border-white/80 pointer-events-none"></div>

                      {/* Inner content */}
                      <div className="relative h-full w-full text-white text-center flex justify-center items-center flex-col px-4">
                        <h4 className="text-[1.625rem] leading-[2.4375rem] font-bold">
                          Staff Augmentation
                        </h4>
                        <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.75rem] font-normal p-2">
                          Hire pre-vetted developers skilled in the latest
                          technologies, ready to work around the clock to meet
                          your project needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex-[0_1_10rem] flex justify-end items-center flex-col">
                      <div className="clock1 w-[7.5rem]">
                        <Clock
                          countryName="USA"
                          bgColor="#FDE3DA"
                          pinColor="#646E82"
                          innerShadowColor="#FDE3DA"
                        />
                      </div>
                    </div>
                    <div className="flex-[0_1_10rem] flex justify-start items-center flex-col">
                      <div className="clock1 w-[10rem]">
                        <Clock
                          countryName="India"
                          bgColor="#B9CFEC"
                          pinColor="#646E82"
                          innerShadowColor="#B9CFEC"
                        />
                      </div>
                    </div>
                    <div className="flex-[0_1_10rem] flex justify-end items-center flex-col">
                      <div className="clock1 w-[10rem]">
                        <Clock
                          countryName="Netherlands"
                          bgColor="#719E91"
                          pinColor="#646E82"
                          innerShadowColor="#2A6C59"
                        />
                      </div>
                    </div>
                    <div className="flex-[0_1_10rem] flex justify-start items-center flex-col">
                      <div className="clock1 w-[7.5rem]">
                        <Clock
                          countryName="Canada"
                          bgColor="#EA99B9"
                          pinColor="#646E82"
                          innerShadowColor="#EA99B9"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="flex !h-auto">
                  <div className="bg-pine-600 p-[2.1875rem] text-white rounded-[3.0625rem]  ">
                    <h4 className="text-[1.625rem] mb-2 font-bold">
                      Build your offshore development team
                    </h4>
                    <p className="text-lg font-normal leading-[1.5625rem] max-w-[42.75rem]">
                      At TechDevise, setting up dedicated software development
                      team is quick and hassle-free, completed in just four
                      simple steps.
                    </p>
                    <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[2.8125rem]">
                      {offshore.map((item, index) => (
                        <div
                          key={index}
                          className="relative py-[.9375rem] pl-[1.0625rem] pr-[2.4375rem] group"
                        >
                          <img
                            src={item.image}
                            alt="dash green"
                            className="w-full absolute bottom-0 left-0 group-even:top-0"
                          />
                          <div className="bg-pine-700 h-[13.125rem] rounded-[.8125rem] pb-[1.0625rem] pl-[1.5625rem] pr-3 flex flex-col justify-end group-even:bg-white group-even:text-pine-700">
                            <h5 className="text-lg font-semibold leading-[1.5rem] mb-1.5">
                              {item.title}
                            </h5>
                            <p className="text-[16px] leading-[1.5rem]">
                              {item.discription}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex !w-auto !h-auto">
                  <div className="bg-pine-600 p-[2.1875rem] text-white rounded-[3.0625rem] w-full max-w-full min-w-full pb-[5.3125rem]">
                    <h4 className="text-[1.625rem] mb-2 font-bold">
                      Build-To-Scale Agile Teams
                    </h4>
                    <p className="text-lg font-normal leading-[1.5625rem] max-w-[42.75rem]">
                      Expand your team seamlessly by outsourcing the services of
                      professional software developers and programmers to jump
                      start your work.
                    </p>

                    <div className="mt-[4.1875rem] flex justify-start items-center gap-[2.85rem]">
                      {clockThirSlideCircles.map((item, index) => (
                        <div
                          key={index}
                          className="size-[10.5625rem]  rounded-full flex justify-center items-center aspect-square relative"
                        >
                          <div
                            className={`absolute inset-0 bg-transparent rounded-full border-2 ${item.bordeColor} border-solid scale-[100.6%] border-r-transparent border-t-transparent rotate-45`}
                          ></div>
                          <div
                            className={`absolute inset-0 bg-transparent rounded-full border-2 ${item.bordeColor} border-dashed scale-[100.6%] border-l-transparent border-b-transparent rotate-45`}
                          ></div>
                          <img
                            src={item.arrow}
                            alt="GreenArrow"
                            className="arrow absolute left-full top-1/2 -translate-y-1/2"
                          />
                          <div
                            className={`size-[8.6875rem] ${item.bgColor} rounded-full px-4 flex justify-center items-center`}
                          >
                            <span
                              className={`${item.textColor} text-[14px] leading-[1.5rem] font-normal text-center`}
                            >
                              {item.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* Our Tech section end */}
        <section className="ourServices-section my-[6.0625rem]">
          <div className="main-container">
            <div className="flex justify-center items-stretch flex-wrap lg:gap-[2.375rem] gap-[.9375rem] lg:mb-[2.375rem] mb-[.9375rem]">
              <div className="xl:w-[calc(100%_/_4_-_30px)] lg:w-[calc(100%_/_2_-_20px)] xl:order-1 order-2">
                <div className="card h-full bg-[#67C792] overflow-hidden rounded-[1.625rem] flex xl:flex-col flex-row-reverse justify-between items-stretch">
                  <div className="p-[1.4375rem]  flex-[2_1_0%]">
                    <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                      Website Development
                    </h4>
                    <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                      Looking to start your own company website? If so, our
                      skilled web developers and designers will undoubtedly give
                      you with the website of your dreams. We provide
                      comprehensive web development solutions adapted to your
                      individual requirements.
                    </p>
                    <Link
                      to="/web-app-development"
                      className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                    >
                      <span>More information</span>
                      <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                        <FiArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                  <div className="image xl:w-full flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#3aad6e] max-xl:before:rounded-[1.625rem] xl:before:w-full xl:before:h-[72%] before:h-full sm:before:w-[62%] before:w-[82%]">
                    <img
                      src={vectorTwo}
                      alt="vector two"
                      className="mx-auto max-md:h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:flex-1 flex justify-center items-stretch xl:flex-wrap max-md:flex-wrap  gap-[2.125rem] xl:order-2 order-1">
                <div className="lg:w-full w-full overflow-hidden p-[1px] rounded-[1.625rem] bg-gradient-to-b from-[#1f443c] via-[#123b32] to-[#0a3a31]">
                  <div className="h-full w-full bg-pine-999 rounded-[1.5625rem] py-5 sm:px-[1.875rem] px-4 text-center">
                    <h2
                      data-aos="fade-down"
                      data-aos-delay="200"
                      className="text-transparent 2xl:text-[3rem] lg:text:[2.5rem] text-[2.7rem] font-bold bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-3"
                    >
                      Our Services
                    </h2>
                    <p
                      data-aos="fade-down"
                      className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal text-white"
                    >
                      Tech Devise offers IT solutions that foster creativity,
                      efficiency, and security for organizations of every size.
                      Our experience covers numerous disciplines, guaranteeing
                      that your technological requirements are addressed with
                      accuracy and brilliance.
                    </p>
                  </div>
                </div>
                <div className="max-xl:hidden xl:w-full w-full">
                  <div className="card h-full bg-[#99eae0] overflow-hidden rounded-[1.625rem] flex justify-between items-stretch xl:gap-5 max-xl:flex-row-reverse">
                    <div className="p-[1.4375rem] xl:w-[65%] flex-[2_1_0%]">
                      <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                        E-commerce Website
                      </h4>
                      <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                        We all know that the eCommerce sector is booming like
                        anything. Hence, if you want to sell your products
                        online, then check our eCommerce development services
                        Our expert team offers quality eCommerce websites which
                        will surely take your business to the next level.
                      </p>
                      <Link
                        to="/web-app-development"
                        className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                      >
                        <span>More information</span>
                        <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                          <FiArrowUpRight className="size-4" />
                        </span>
                      </Link>
                    </div>
                    <div className="image xl:w-[35%] flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#5dc6b9] max-xl:before:rounded-[1.625rem] before:h-full sm:before:w-[62%] before:w-[82%]">
                      <img
                        src={vectorThree}
                        alt="vector Three"
                        className="xl:h-[178px] xl:w-[179px] max-md:h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="xl:w-[calc(100%_/_4_-_30px)] lg:w-[calc(100%_/_2_-_20px)] xl:order-1 order-2 xl:hidden">
                <div className="card h-full bg-[#99eae0] overflow-hidden rounded-[1.625rem] flex xl:flex-col flex-row-reverse justify-between items-stretch">
                  <div className="p-[1.4375rem]  flex-[2_1_0%]">
                    <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                      E-commerce Website
                    </h4>
                    <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                      We all know that the eCommerce sector is booming like
                      anything. Hence, if you want to sell your products online,
                      then check our eCommerce development services Our expert
                      team offers quality eCommerce websites which will surely
                      take your business to the next level.
                    </p>
                    <Link
                      to="/web-app-development"
                      className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                    >
                      <span>More information</span>
                      <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                        <FiArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                  <div className="image xl:w-full flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#5dc6b9] max-xl:before:rounded-[1.625rem] xl:before:w-full xl:before:h-[72%] before:h-full sm:before:w-[62%] before:w-[82%]">
                    <img
                      src={vectorThree}
                      alt="vector two"
                      className="mx-auto max-md:h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:w-[calc(100%_/_4_-_30px)] lg:w-[calc(100%_/_2_-_20px)] xl:order-3 order-3">
                <div className="card h-full bg-[#deea99] overflow-hidden rounded-[1.625rem] flex xl:flex-col flex-row-reverse justify-between items-stretch">
                  <div className="p-[1.4375rem]  flex-[2_1_0%]">
                    <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                      Digital Marketing
                    </h4>
                    <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                      Is your business finding it difficult to flourish in the
                      online world? Well, it is no surprise because if proper
                      digital marketing is not done then your website will not
                      be able to gain the desired notice from the audience.
                    </p>
                    <Link
                      to="/digital-marketing"
                      className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                    >
                      <span>More information</span>
                      <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                        <FiArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                  <div className="image xl:w-full flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#b1bf62] max-xl:before:rounded-[1.625rem] xl:before:w-full xl:before:h-[72%] before:h-full sm:before:w-[62%] before:w-[82%]">
                    <img
                      src={vectorFour}
                      alt="vector Four"
                      className="mx-auto max-md:h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="xl:w-[calc(100%_/_3_-_30px)] lg:w-[calc(100%_/_2_-_20px)] xl:order-3 order-3">
                <div className="card h-full bg-[#99cbea] overflow-hidden rounded-[1.625rem] flex xl:flex-col flex-row-reverse justify-between items-stretch">
                  <div className="p-[1.4375rem]  flex-[2_1_0%]">
                    <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                      Quality Analysis
                    </h4>
                    <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                      We offer a comprehensive package of Software Quality
                      Assurance(QA) and Testing services. We in maximising the
                      quality and performance of software solutions for our
                      clients while reducing the costs and risks.
                    </p>
                    <Link
                      to="/quality-analysis"
                      className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                    >
                      <span>More information</span>
                      <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                        <FiArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                  <div className="image xl:w-full flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#76b6de] max-xl:before:rounded-[1.625rem] xl:before:w-full xl:before:h-[69%] before:h-full sm:before:w-[62%] before:w-[82%]">
                    <img
                      src={vectorFive}
                      alt="vector Five"
                      className="mx-auto max-md:h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="xl:w-[calc(100%_/_3_-_30px)] lg:w-[calc(100%_/_2_-_20px)] xl:order-3 order-3">
                <div className="card h-full bg-[#ea99b9] overflow-hidden rounded-[1.625rem] flex xl:flex-col flex-row-reverse justify-between items-stretch">
                  <div className="p-[1.4375rem]  flex-[2_1_0%]">
                    <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                      Mobile Application development
                    </h4>
                    <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                      Our team of experts specialize in offering unique app
                      development services which can help you to scale your
                      business. Under app development we offer services like
                      android app development, iOS app development, and React
                      Native App Development.
                    </p>
                    <Link
                      to="/mobile-app-development"
                      className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                    >
                      <span>More information</span>
                      <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                        <FiArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                  <div className="image xl:w-full flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#dd7aa2] max-xl:before:rounded-[1.625rem] xl:before:w-full xl:before:h-[72%] before:h-full sm:before:w-[62%] before:w-[82%]">
                    <img
                      src={vectorSix}
                      alt="vector Six"
                      className="mx-auto max-md:h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="xl:w-[calc(100%_/_3_-_30px)] lg:w-[calc(100%_/_2_-_20px)] xl:order-3 order-3">
                <div className="card h-full bg-[#ea9c99] overflow-hidden rounded-[1.625rem] flex xl:flex-col flex-row-reverse justify-between items-stretch">
                  <div className="p-[1.4375rem]  flex-[2_1_0%]">
                    <h4 className="2xl:text-[1.5rem] text-[1.3rem] xl:leading-[1.875rem] leading-[1.4rem] font-bold text-wrap">
                      UI/UX Design
                    </h4>
                    <p className="text-[1rem] leading-[1.625rem] mt-1.5 mb-[2.3125rem] font-normal">
                      Techdevise’s UI and UX services. Our design team is a
                      small design studio with best experts in the field that
                      will help you build an engaging product easily and quickly
                    </p>
                    <Link
                      to="/"
                      className="flex justify-start items-center text-[1rem] leading-[1.875rem] font-bold gap-[.5625rem] group/link"
                    >
                      <span>More information</span>
                      <span className="size-[1.625rem] rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-200">
                        <FiArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                  <div className="image xl:w-full flex-[1_1_3.375rem] w-fit max-xl:py-10 max-xl:ps-10 flex xl:justify-center justify-end max-xl:pe-3 max-sm:pe-0 items-center relative z-0 before:absolute before:bottom-0 before:z-[-1] xl:before:right-0  max-xl:before:left-0 before:bg-[#d67f7c] max-xl:before:rounded-[1.625rem] xl:before:w-full xl:before:h-[72%] before:h-full sm:before:w-[62%] before:w-[82%]">
                    <img
                      src={vectorSeven}
                      alt="vector Seven"
                      className="mx-auto max-md:h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Tech Mobile view section start */}
        <section className="ourTechMobileView lg:hidden my-[4.6875rem]">
          <div className="main-container">
            <div className="sectionHeader mb-3.5">
              <h2 className="text-transparent lg:text-start text-center 2xl:text-[3rem] text-[2rem] font-bold bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-3">
                Our Tech Offerings - Tailored to Your Time Zone and Business
                Needs
              </h2>
            </div>

            <div className="card bg-pine-950 px-3.5 text-white py-4 text-center rounded-[1.125rem] mb-5">
              <h4 className="text-[1.3rem] font-bold mb-3">
                Staff Augmentation
              </h4>
              <p className="text-[1.2rem] font-normal">
                Hire pre-vetted developers skilled in the latest technologies,
                ready to work around the clock to meet your project needs.
              </p>
            </div>
            <div className="card bg-pine-950 px-3.5 text-white py-4 text-center rounded-[1.125rem] mb-5">
              <h4 className="text-[1.3rem] font-bold mb-3">
                Build your offshore development team
              </h4>
              <p className="text-[1.2rem] font-normal">
                At TechDevise, setting up dedicated software development team is
                quick and hassle-free, completed in just four simple steps.
              </p>
            </div>
            <div className="card bg-pine-950 px-3.5 text-white py-4 text-center rounded-[1.125rem]">
              <h4 className="text-[1.3rem] font-bold mb-3">
                Build your offshore development team
              </h4>
              <p className="text-[1.2rem] font-normal">
                At TechDevise, setting up dedicated software development team is
                quick and hassle-free, completed in just four simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Our Blockchain Development Services section start */}
        <section
          ref={sectionRef}
          className="development-services my-[6.0625rem] relative z-0"
        >
          <div className=" main-container">
            <div className="w-fit  ">
              <h2 className="text-transparent 2xl:text-[3rem] xl:text-[2.5rem] text-[2.2rem] font-bold bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-3 max-w-xl max-lg:mx-auto max-lg:text-center">
                Our Blockchain Development Services
              </h2>
              <p className="2xl:text-[1.25rem] lg:text-xl text-[1rem] leading-[1.875rem] font-normal text-white 2xl:max-w-4xl lg:max-w-3xl max-w-4xl max-lg:mx-auto max-lg:text-center pe-10">
                <strong>Tech Devise</strong> provides a full suite of blockchain
                development services to help businesses harness the full
                potential of the technology and stay ahead in today’s
                competitive web3 era.
              </p>
            </div>
          </div>
          <div className="max-xl:hidden floatImage max-h-[33rem] max-w-[45.8125rem] absolute -top-14 right-0 -z-[1] bg-pine-999 pe-[7.5rem]">
  <img
    src={vectorEight}
    alt="Blockchain animation"
    className="h-full w-full object-contain filter mix-blend-luminosity"
  />
</div>
          {/* slider */}

          <BlockchainSlider triggerRef={sectionRef} />
        </section>
        {/* Our Blockchain Development Services section end */}

        {/* Innovative Technology Solutions section start */}
        <section className="innovativeTech  my-[6.0625rem]">
          <div className="main-container">
            <div
              style={{ backgroundImage: `url(${layerOne})` }}
              className="border-[.0625rem] border-white/40 rounded-[1.625rem] 2xl:p-[3.5625rem] xl:p-10 p-8 bg-center bg-no-repeat bg-cover"
            >
              <div className="flex justify-between items-center lg:flex-row flex-col mb-[1.430rem] gap-5">
                <h3 className="flex-1 2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:w-fit mb-6 lg:text-start text-center">
                  Innovative Technology <br /> Solutions
                </h3>
                <p
                  data-aos-delay="400"
                  className="flex-1 2xl:text-[1.25rem] lg:text-xl text-[1rem] leading-[2.125rem] font-normal text-white mb-1.5 lg:max-w-3xl lg:text-start text-center lg:pr-10"
                >
                  Empowering businesses with cutting-edge IT solutions,
                  including cloud computing, cybersecurity, AI, automation, and
                  software development to drive efficiency, security, and
                  growth.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-start gap-y-6">
                <div className="xl:flex-[1_1_250px] xl:max-w-[250px] lg:flex-[1_1_200px] w-full lg:max-w-fit xl:pe-0 lg:pe-12 lg:border-r-[0.0625rem] max-lg:border-[0.0625rem] max-lg:rounded-[10px] max-lg:px-5 border-white/20">
                  <ul className="lg:block flex gap-4 justify-start items-center overflow-x-scroll hide-scroll flex-nowrap whitespace-nowrap">
                    <li
                      className="lg:pb-[2rem]  cursor-pointer max-lg:py-3 max-lg:flex-[0_0_auto] group/list"
                      onClick={() => setActiveStep(1)}
                    >
                      <span
                        className={`w-fit overflow-hidden flex justify-between items-center cursor-pointer text-nowrap  text-[1.125rem] leading-[1.8125rem] font-bold relative before:absolute before:h-[.0625rem] before:transition-all before:duration-300 before:bottom-[0.0625rem] pb-1 before:left-0 before:max-lg:hidden ${
                          activeStep == 1
                            ? "text-pine-700 before:w-full before:bg-pine-700 gap-3"
                            : "text-white before:w-0 before:bg-white gap-1"
                        }`}
                      >
                        <span>Frontend</span>
                        <HiArrowLongRight
                          className={`group-hover/list:mb-0 transition-all duration-300 size-[3] max-lg:hidden ${
                            activeStep == 1 ? "mb-0" : "-mb-12"
                          }`}
                        />
                      </span>
                    </li>
                    <li
                      className="lg:pb-[2rem]  cursor-pointer max-lg:py-3 max-lg:flex-[0_0_auto] group/list"
                      onClick={() => setActiveStep(2)}
                    >
                      <span
                        className={`w-fit overflow-hidden flex justify-between items-center cursor-pointer text-nowrap  text-[1.125rem] leading-[1.8125rem] font-bold relative before:absolute before:h-[.0625rem] before:transition-all before:duration-300 before:bottom-[0.0625rem] pb-1 before:left-0 before:max-lg:hidden ${
                          activeStep == 2
                            ? "text-pine-700 before:w-full before:bg-pine-700 gap-3"
                            : "text-white before:w-0 before:bg-white gap-1"
                        }`}
                      >
                        <span>Backend</span>
                        <HiArrowLongRight
                          className={`group-hover/list:mb-0 transition-all duration-300 size-[3] max-lg:hidden ${
                            activeStep == 2 ? "mb-0" : "-mb-12"
                          }`}
                        />
                      </span>
                    </li>
                    <li
                      className="lg:pb-[2rem]  cursor-pointer max-lg:py-3 max-lg:flex-[0_0_auto] group/list"
                      onClick={() => setActiveStep(3)}
                    >
                      <span
                        className={`w-fit overflow-hidden flex justify-between items-center cursor-pointer text-nowrap  text-[1.125rem] leading-[1.8125rem] font-bold relative before:absolute before:h-[.0625rem] before:transition-all before:duration-300 before:bottom-[0.0625rem] pb-1 before:left-0 before:max-lg:hidden ${
                          activeStep == 3
                            ? "text-pine-700 before:w-full before:bg-pine-700 gap-3"
                            : "text-white before:w-0 before:bg-white gap-1"
                        }`}
                      >
                        <span>Mobile</span>
                        <HiArrowLongRight
                          className={`group-hover/list:mb-0 transition-all duration-300 size-[3] max-lg:hidden ${
                            activeStep == 3 ? "mb-0" : "-mb-12"
                          }`}
                        />
                      </span>
                    </li>
                    <li
                      className="lg:pb-[0.4rem] cursor-pointer max-lg:py-3 max-lg:flex-[0_0_auto]  group/list"
                      onClick={() => setActiveStep(4)}
                    >
                      <span
                        className={`w-fit overflow-hidden flex justify-between items-center cursor-pointer text-nowrap  text-[1.125rem] leading-[1.8125rem] font-bold relative before:absolute before:h-[.0625rem] before:transition-all before:duration-300 before:bottom-[0.0625rem] pb-1 before:left-0 before:max-lg:hidden ${
                          activeStep == 4
                            ? "text-pine-700 before:w-full before:bg-pine-700 gap-3"
                            : "text-white before:w-0 before:bg-white gap-1"
                        }`}
                      >
                        <span>UI/UX Desing</span>
                        <HiArrowLongRight
                          className={`group-hover/list:mb-0 transition-all duration-300 size-[3] max-lg:hidden ${
                            activeStep == 4 ? "mb-0" : "-mb-12"
                          }`}
                        />
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="lg:flex-[2_1_500px]  2xl:ps-[6.8125rem] xl:ps-[4.375rem] lg:ps-[3.125rem] ps-0 pe-0 lg:pe-[1.125rem] xl:pe-[1.875rem] 2xl:pe-[3.25rem]">
                  {activeStep === 1 && (
                    <div className="lg:grid lg:grid-cols-4 flex flex-wrap justify-start items-center md:gap-[1.5625rem] gap-2">
                      {langlistOne.map((item, index) => (
                        <div
                          key={index}
                          className="max-lg:flex-[1_1_150px] max-sm:flex-[1_0_100px] sm:border-[.0625rem] sm:px-2 px-[2] border-white/40 rounded-[.625rem] bg-pine-600 lg:max-w-[16.5rem] lg:min-h-[6rem] max-lg:py-3 lg:w-full flex justify-center items-center md:gap-4 gap-2"
                        >
                          <img
                            src={item.icon}
                            alt="lang icon"
                            className=" lg:size-[3rem] sm:size-[30px] size-[18px]"
                          />{" "}
                          <span className="text-white text-[1.25rem] leading-[1.8125rem] font-normal text-nowrap">
                            {item.langName}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="lg:grid lg:grid-cols-4 flex flex-wrap justify-start items-center md:gap-[1.5625rem] gap-2">
                      {langlistTwo.map((item, index) => (
                        <div
                          key={index}
                          className="max-lg:flex-[1_1_150px] max-sm:flex-[1_0_100px] sm:border-[.0625rem] sm:px-2 px-[2] border-white/40 rounded-[.625rem] bg-pine-600 lg:max-w-[16.5rem] lg:min-h-[6rem] max-lg:py-3 lg:w-full flex justify-center items-center md:gap-4 gap-2"
                        >
                          <img
                            src={item.icon}
                            alt="lang icon"
                            className=" lg:size-[3rem] sm:size-[30px] size-[18px]"
                          />{" "}
                          <span className="text-white text-[1.25rem] leading-[1.8125rem] font-normal text-nowrap">
                            {item.langName}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeStep === 3 && (
                    <div className="lg:grid lg:grid-cols-4 flex flex-wrap justify-start items-center md:gap-[1.5625rem] gap-2">
                      {langlistThree.map((item, index) => (
                        <div
                          key={index}
                          className="max-lg:flex-[1_1_150px] max-sm:flex-[1_0_100px] sm:border-[.0625rem] sm:px-2 px-[2] border-white/40 rounded-[.625rem] bg-pine-600 lg:max-w-[16.5rem] lg:min-h-[6rem] max-lg:py-3 lg:w-full flex justify-center items-center md:gap-4 gap-2"
                        >
                          <img
                            src={item.icon}
                            alt="lang icon"
                            className=" lg:size-[3rem] sm:size-[30px] size-[18px]"
                          />{" "}
                          <span className="text-white text-[1.25rem] leading-[1.8125rem] font-normal text-nowrap">
                            {item.langName}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeStep === 4 && (
                    <div className="lg:grid lg:grid-cols-4 flex flex-wrap justify-start items-center md:gap-[1.5625rem] gap-2">
                      {langlistFour.map((item, index) => (
                        <div
                          key={index}
                          className="max-lg:flex-[1_1_150px] max-sm:flex-[1_0_100px] sm:border-[.0625rem] sm:px-2 px-[2] border-white/40 rounded-[.625rem] bg-pine-600 lg:max-w-[16.5rem] lg:min-h-[6rem] max-lg:py-3 lg:w-full flex justify-center items-center md:gap-4 gap-2"
                        >
                          <img
                            src={item.icon}
                            alt="lang icon"
                            className=" lg:size-[3rem] sm:size-[30px] size-[18px]"
                          />{" "}
                          <span className="text-white text-[1.25rem] leading-[1.8125rem] font-normal text-nowrap">
                            {item.langName}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovative Technology Solutions section end */}

        {/* socialLink section start */}
        <section className="find  my-[6.0625rem]">
          <div className="main-container">
            <div className="flex justify-center items-center gap-5 lg:flex-row flex-col rounded-[1.625rem] p-6 bg-pine-600">
              <div className="flex-1 flex justify-start items-center gap-x-16">
                <h4 className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:w-fit mb-6 lg:text-start text-center">
                  You can Find <br /> Us on
                </h4>
                <img
                  src={vectorNine}
                  alt="vector nine"
                  className="max-lg:hidden min-xl:h-[5.525rem]"
                />
              </div>
              <div className="flex-1 max-lg:w-full grid lg:grid-cols-2 grid-cols-4 rounded-[1.625rem] overflow-hidden">
                <a
                  href="https://www.linkedin.com/company/techdevise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-[8.25rem] bg-[#0077b5] flex justify-between items-center gap-2 lg:px-12 px-3 group/link"
                >
                  <img src={linkedin} alt="linkedin" className="h-[2rem]" />
                  <PiArrowCircleUpRightLight className="size-12 text-white/80 group-hover/link:visible group-hover/link:opacity-100 group-hover/link:rotate-0 group-hover/link:scale-100 scale-90 opacity-0 rotate-45 invisible transition-all duration-500" />
                </a>
                <a
                  href="https://www.upwork.com/agencies/techdevise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-[8.25rem] bg-[#14a800] flex justify-between items-center gap-2 lg:px-12 px-3 group/link"
                >
                  <img src={upwork} alt="upwork" className="h-[2rem]" />
                  <PiArrowCircleUpRightLight className="size-12 text-white/80 group-hover/link:visible group-hover/link:opacity-100 group-hover/link:rotate-0 group-hover/link:scale-100 scale-90 opacity-0 rotate-45 invisible transition-all duration-500" />
                </a>
                <a
                  href="https://clutch.co/profile/tech-devise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-[8.25rem] bg-[#17313b] flex justify-between items-center gap-2 lg:px-12 px-3 group/link"
                >
                  <img src={clutch} alt="clutch" className="h-[1.59rem]" />
                  <PiArrowCircleUpRightLight className="size-12 text-white/80 group-hover/link:visible group-hover/link:opacity-100 group-hover/link:rotate-0 group-hover/link:scale-100 scale-90 opacity-0 rotate-45 invisible transition-all duration-500" />
                </a>

                <a
                  href="https://www.trustpilot.com/review/techdevise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-[8.25rem] bg-[#0ab67b] flex justify-between items-center gap-2 lg:px-12 px-3 group/link"
                >
                  <img src={trustpilot} alt="trustpilot" className="h-[2rem]" />
                  <PiArrowCircleUpRightLight className="size-12 text-white/80 group-hover/link:visible group-hover/link:opacity-100 group-hover/link:rotate-0 group-hover/link:scale-100 scale-90 opacity-0 rotate-45 invisible transition-all duration-500" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* socialLink section end */}

        {/* Seamless Vision start */}

        <section className="my-[6.0625rem]">
          <div className="main-container">
            <div className="md:border-[.0625rem] border-white/20 rounded-3xl flex max-lg:flex-wrap items-center lg:justify-between justify-center 2xl:p-14 gap-12 lg:p-12 md:p-10">
              <div className="lg:pb-[3.3125rem] lg:w-1/2 w-full ">
                <h4 className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:w-fit mb-6 lg:text-start text-center">
                  A Seamless Vision that Adapts to Every Industry
                  <span>&apos;</span>s Demands
                </h4>
                <p className="text-white font-medium 2xl:text-[1.25rem] lg:text-xl text-[1rem] leading-[1.875rem] lg:mb-16 mb-7 max-lg:text-center">
                  We deliver flexible and innovative IT solutions tailored to
                  meet the evolving needs of various industries, ensuring
                  efficiency, scalability, and long-term success.
                </p>
                <div className="p-6 bg-gradient-to-b from-pine-600/70 to-pine-600 rounded-3xl md:flex max-xl:flex-wrap items-center xl:justify-between justify-center lg:gap-3 gap-5">
                  <div className="gallerySlider md:hidden py-10">
                    <VisionSlider />.
                  </div>

                  <p className="text-white 2xl:text-[1.20rem] lg:text-[14px] text-[1rem]  leading-[2.25rem] max-xl:text-center max-lg:mb-4">
                    Fuel Success in a Digital- First World with{" "}
                    <span className="text-xl">300+ </span>
                    Visionaries.
                  </p>
                  <Link
                    to="/contact-us"
                    className="text-lg font-bold leading-none px-5 py-5 rounded-[.8125rem] max-lg:mx-auto flex gap-5 whitespace-nowrap bg-white text-(--color-pine-700) items-center"
                  >
                    Let's Innovate Together{" "}
                    <BsArrowRight className="size-[1.875rem]" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 w-full  grid grid-cols-4 gap-[.625rem] max-md:hidden">
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className="relative rounded-[1.625rem] overflow-hidden"
                  >
                    <img
                      src={`${API_BASE_URL}/images${industry.image}`}
                      alt={industry.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/0 via-black/40 to-black/85  p-3 text-sm text-white font-semibold">
                      {" "}
                      {industry.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Seamless Vision end */}

        {/* testimonial slider start */}
        <section className="pb-[6.0625rem]">
          <div className="main-container">
            <div className="flex justify-between gap-5 items-end mb-6">
              <h4 className=" 2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700">
                What our customers say <br /> about us
              </h4>

              <div className="flex gap-3">
                <button
                  ref={prev2Ref}
                  className="h-[44px] w-[44px] aspect-square rounded-full bg-white text-pine-700 flex justify-center items-center cursor-pointer"
                >
                  <GoArrowLeft className="size-6" />
                </button>
                <button
                  ref={next2Ref}
                  className="h-[44px] w-[44px] aspect-square rounded-full bg-pine-700 text-white flex justify-center items-center cursor-pointer"
                >
                  <GoArrowRight className="size-6" />
                </button>
              </div>
            </div>

            <div className="">
              <Swiper
                className="mySwiper h-full w-full justify-between select-none"
                spaceBetween={30}
                slidesPerView={1}
                speed={1000}
                // parallax={true}
                autoplay={{ delay: 10000000 }}
                grabCursor={true}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  1300: {
                    slidesPerView: 2,
                  },
                }}
                onInit={(swiper) => {
                  // Re-assign custom buttons after swiper is initialized
                  swiper.params.navigation.prevEl = prev2Ref.current;
                  swiper.params.navigation.nextEl = next2Ref.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                navigation={{
                  prevEl: prev2Ref.current,
                  nextEl: next2Ref.current,
                }}
              >
                {companyLogos.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center items-center group transition-all duration-200"
                    >
                      <TestimonialCard
                        image={item.image}
                        title={item.name}
                        discription={item.dis}
                        // className={"group-[.swiper-slide-active]:scale-x-100 scale-x-0 origin-left transition-all"}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
        {/* testimonial slider end */}

        {/* Let’s Talk start */}
        <section className="pb-[6.0625rem]">
          <ToastContainer position="top-right" autoClose={5000} />
          <div className="main-container">
            <div className="border-[.0625rem] border-white/40 rounded-3xl flex flex-wrap items-start relative">
              <img
                src={formBlur}
                alt="formBlur"
                className="absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none w-1/2"
              />
              <div className="p-14 pb-0 lg:w-[45%] w-full relative before:w-[1px] before:h-[calc(100%_-_100px)] before:absolute before:right-0 before:top-1/2 before:-translate-1/2 before:bg-[#FFFFFF14] before:z-10 lg:text-start text-center">
                <h4 className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 lg:w-fit mb-5">
                  Let<span>&apos;</span>s Talk
                </h4>
                <h5 className="2xl:text-[1.375rem] lg:text-[1.45rem] text-[2rem] font-medium text-white lg:w-fit mb-6 lg:text-start text-center">
                  Partner with tech catalysts who transform ideas into impact.
                </h5>
                <p className="text-white font-medium text-[1.1  5rem] mb-16 mt-3">
                  Book your free consultation with us.
                </p>
                <img
                  src={vector13}
                  alt="form image"
                  className="w-full max-w-[28.9375rem] max-h-[25.625rem] object-contain lg:object-left max-lg:mx-auto"
                />
              </div>
              <div className="lg:w-[55%] w-full 2xl:p-14 lg:p-10 md:p-8 sm:p-5 p-3 max-sm:pb-5">
                <h4 className="text-[1.45rem] text-white font-bold mb-[2.0625rem]">
                  Speak with our Experts
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap justify-between">
                    <div className="md:w-[calc(100%/_2-_12.5px)] w-full">
                      <input
                        type="text"
                        name="fullname"
                        className="inputControl"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:w-[calc(100%/_2-_12.5px)] w-full">
                      <input
                        type="email"
                        name="email"
                        className="inputControl"
                        placeholder="Business Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:w-[calc(100%/_2-_12.5px)] w-full">
                      <input
                        type="number"
                        name="phone"
                        className="inputControl"
                        placeholder="Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="md:w-[calc(100%/_2-_12.5px)] w-full">
                      <input
                        type="text"
                        name="company_name"
                        className="inputControl"
                        placeholder="Company name"
                        value={formData.company_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative md:w-[calc(100%/_2-_12.5px)] w-full">
                      <input
                        type="date"
                        name="date"
                        className="inputControl home-date custom-icon"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="relative md:w-[calc(100%/_2-_12.5px)] w-full">
                      <input
                        type="time"
                        name="time"
                        className="inputControl home-time custom-icon"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>

                    {/* <div className="md:w-[calc(100%/_2-_12.5px)] w-full">
                      <select
                        className="inputControl"
                        name="job_title"
                        value={formData.job_title}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Job Title</option>
                        <option value="1">Entrepreneur</option>
                        <option value="2">Manager</option>
                        <option value="3">Director</option>
                        <option value="4">C-Level</option>
                        <option value="5">Student</option>
                        <option value="6">Other</option>
                      </select>
                    </div>
                    <div className="md:w-[calc(100%/_2-_12.5px)] w-full">
                      <select
                        className="inputControl"
                        name="launch_timeline"
                        value={formData.launch_timeline}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Launch timeline?</option>
                        <option value="1">Immediately</option>
                        <option value="2">1-3 months</option>
                        <option value="3">3-6 months</option>
                        <option value="4">6+ months</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <CustomRangeSlider
                        min={0}
                        max={20000}
                        step={100}
                        value={budget}
                        onChange={(value) => {
                          setBudget(value);
                          setFormData((prev) => ({
                            ...prev,
                            budget: value.toString(),
                          }));
                        }}
                        label="Budget"
                        formatValue={formatCurrency}
                        formatCurrency={formatCurrency(budget)}
                      />
                    </div> */}
                    <div className="w-full">
                      <textarea
                        name="message"
                        className="inputControl resize-none"
                        rows={6}
                        placeholder="About Project"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="w-full">
                      <button
                        type="submit"
                        className="bg-white rounded-[.625rem] py-2.5 px-5 border-0 outline-0 text-xl font-bold leading-[1.8125rem] text-[#137365] max-sm:block max-sm:w-full max-sm:py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Let’s Talk end */}

        {/* Location start */}
        <section className="pb-[1.0625rem]">
          <div className="main-container text-white">
            <div className="text-center mb-[3.9375rem]">
              <h4 className="font-bold text-[#157B6C] leading-[3.625rem] text-[2rem] mb-1.5">
                Location
              </h4>
              <h3 className="lg:text-[3.4375rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold leading-none mb-5">
                We&apos;d love to here from you
              </h3>
              <p className="text-lg font-medium leading-[1.8125rem] inline-block relative">
                We have offices and teams all around the world.{" "}
                <img
                  src={vector12}
                  alt="vector12"
                  className="w-[5.6875rem] z-10 absolute top-full lg:left-full left-1/2 -translate-x-1/2 shake-v"
                />
              </p>
            </div>
            <div className="grid gap-[1.375rem] xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-[4.1875rem] pb-[7rem] relative z-0">
              <img
                src={map}
                alt="map"
                className="max-w-full xl:h-full object-contain absolute top-0 left-1/2 -translate-x-1/2 -z-[1]"
              />
              {addressList.map((listitem, index) => (
                <div
                  key={index}
                  className="border border-[#0a2a20] py-[1.0625rem] px-5 rounded-[1.625rem] flex gap-[1.9375rem] items-center bg-[#071712]"
                >
                  <img
                    src={listitem.bgimage}
                    alt="indai bg"
                    className="2xl:w-[10.0625rem] 2xl:h-[10.8125rem] w-[9.375rem] h-[11.875rem] rounded-[1.625rem] object-cover"
                  />
                  <div className="grow">
                    <div className="flex gap-[.9375rem] items-center mb-[1.375rem]">
                      <img
                        src={listitem.flag}
                        alt="indaiFlag"
                        className="w-[3.1875rem] h-[2.125rem]"
                      />
                      <span className="font-bold capitalize">
                        {listitem.countryName}
                      </span>
                    </div>
                    <p className="2xl:text-lg text-base font-medium leading-[1.8125rem]">
                      {listitem.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Location end */}
        <GetInTouch
          showModal={showModal}
          setShowModal={() => {
            setShowModal(!showModal);
          }}
        />
      </main>
    </>
  );
};

export default Home;
