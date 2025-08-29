import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FiArrowUpRight } from "react-icons/fi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
// images
import serviceBgPhone from "/serviceBgPhone.mp4";
import play from "/play.svg";
import vector14 from "/vector14.svg";
import mapWhite from "/mapWhite.svg";
import arrowRightUp from "/arrowRightUp.png";
import ios from "/ios.svg";
import android from "/android.svg";
import reactNative from "/reactNative.svg";
import quality1 from "/quality1.svg";
import quality2 from "/quality2.svg";
import quality3 from "/quality3.svg";
import quality4 from "/quality4.svg";
import quality5 from "/quality5.svg";
import quality6 from "/quality6.svg";
import quality7 from "/quality7.webp";
import AndroidImg from "/AndroidImg.jpg";
import UIUXImg from "/UIUXImg.jpg";
import TechStakImg from "/TechStakImg.jpg";
import AppDevelopmentImg from "/AppDevelopmentImg.jpg";
import AnalyzingImg from "/AnalyzingImg.jpg";
import MaintenanceImg from "/MaintenanceImg.jpg";
import react from "/react.svg";

import native0 from "/native0.svg";
import native1 from "/native1.png";
import native2 from "/native2.svg";
import native3 from "/native3.svg";
import native4 from "/native4.svg";
import native5 from "/native5.svg";
import native6 from "/native6.svg";

import bglayerdevices from "/bglayerdevices.webp";

import langlogo1 from "/logoIcons0/lang1.svg";
import langlogo2 from "/logoIcons0/lang2.svg";
import langlogo3 from "/logoIcons0/lang3.svg";
import langlogo4 from "/logoIcons0/lang4.svg";
import langlogo5 from "/logoIcons0/lang5.svg";
import langlogo6 from "/logoIcons0/lang6.svg";
import langlogo7 from "/logoIcons0/lang7.svg";
import langlogo8 from "/logoIcons0/lang8.svg";
// lang icons 1 to 5 start
import langlogo11 from "/logoIcons1/lang1.svg";
import langlogo12 from "/logoIcons1/lang2.svg";
import langlogo13 from "/logoIcons1/lang3.svg";
import langlogo15 from "/logoIcons1/lang5.svg";
import langlogo16 from "/logoIcons1/lang6.svg";
//  1 end

import langlogo21 from "/logoIcons2/lang1.svg";
import langlogo22 from "/logoIcons2/lang2.svg";
import langlogo23 from "/logoIcons2/lang3.svg";
import langlogo24 from "/logoIcons2/lang4.svg";
import langlogo25 from "/logoIcons2/lang5.svg";
import langlogo26 from "/logoIcons2/lang6.svg";
import langlogo27 from "/logoIcons2/lang7.svg";
import langlogo28 from "/logoIcons2/lang8.svg";
import langlogo29 from "/logoIcons2/lang9.svg";
// 2 end

import langlogo31 from "/logoIcons3/lang1.svg";
import langlogo32 from "/logoIcons3/lang2.svg";
import langlogo33 from "/logoIcons3/lang3.svg";
// import langlogo34 from "/logoIcons3/lang4.svg";
import langlogo36 from "/logoIcons3/lang6.svg";
import langlogo37 from "/logoIcons3/lang7.svg";
import langlogo38 from "/logoIcons3/lang8.svg";
import langlogo39 from "/logoIcons3/lang9.svg";
// 3 end

import langlogo41 from "/logoIcons4/lang1.svg";
import langlogo42 from "/logoIcons4/lang2.svg";
import langlogo43 from "/logoIcons4/lang3.svg";
import langlogo44 from "/logoIcons4/lang4.svg";
import langlogo45 from "/logoIcons4/lang5.svg";
// 4 end

import langlogo51 from "/logoIcons5/lang1.svg";
import langlogo52 from "/logoIcons5/lang2.svg";
import langlogo53 from "/logoIcons5/lang3.svg";
import langlogo54 from "/logoIcons5/lang4.svg";

// lang icons 1 to 5 end

// images
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import GetInTouch from "../components/GetInTouch";
const MobileApplicationDevelopment = () => {
  const [slides, setSlides] = useState([]);
  const [isActiveSlide, setActiveSlide] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isQualityActive, setQualityActive] = useState(1);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [isTab, setIsTab] = useState(1);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);
  const prevRefLang = useRef(null);
  const nextRefLang = useRef(null);

  const tab = [
    { tabTitle: "iOS App Development Ideation" },
    { tabTitle: "iOS Application Design and Strategy" },
    { tabTitle: "iOS App Development and Quality Assurance" },
    { tabTitle: "Launch Strategy and Support" },
  ];

  const tabPanel = [
    {
      title: "iOS App Development Ideation",
      para: "Before making any final coding decisions, it is critical to understand and assess the motivations behind the app in issue. Examine the application value proposition, target audience expectations, and end-user experience. It assists us in identifying appropriate solutions to the problems.",
      image: vector14,
    },
    {
      title: "iOS Application Design and Strategy",
      para: "We focus on building the application's structure and designing a user interface that is easy to use. Our plan makes sure the UI/UX conforms with iOS standards and gives end users an excellent experience.",
      image: vector14,
    },
    {
      title: "iOS App Development and Quality Assurance",
      para: "Our developers integrate ideas into functional, successful iOS applications. To make sure that the app runs easily on all iOS devices, we include thorough testing cycles.",
      image: vector14,
    },
    {
      title: "Launch Strategy and Support",
      para: "In order to ensure app success, we help you with app store deployment and offer post-launch maintenance, performance tracking, and ongoing updates.",
      image: vector14,
    },
  ];

  // Content for each tab
  const qualityContent = [
    {
      id: 1,
      text: "<strong>Android Application Ideation</strong> is a critical factor that must be considered in order to reach your desired goal. Our team is prepared to research and brainstorm allowing us to formulate strategies before initiating the coding process. The Ideation process will help you to achieve long term objectives.",
      image: AndroidImg, // You should replace with appropriate image for each tab
    },
    {
      id: 2,
      text: "<strong>UI/UX Design For Android Development </strong> ensures your app is user-friendly and visually appealing. Our designers create intuitive interfaces that enhance user experience and engagement, following the latest design trends and Android guidelines.",
      image: UIUXImg, // Replace with appropriate image
    },
    {
      id: 3,
      text: "<strong>Tech Stack and Android Application Architecture </strong> forms the foundation of your app. We select the most suitable technologies and design scalable architectures to ensure your app performs optimally and can grow with your business needs.",
      image: TechStakImg, // Replace with appropriate image
    },
    {
      id: 4,
      text: "<strong>Android App Development</strong> brings your idea to life. Our developers implement clean, efficient code following best practices to create high-performance applications that meet your specifications and user expectations.",
      image: AppDevelopmentImg, // Replace with appropriate image
    },
    {
      id: 5,
      text: "<strong>Analyzing Android Solutions</strong> involves thorough testing and evaluation. We examine every aspect of your app to identify potential improvements, optimize performance, and ensure it stands out in the competitive Play Store market.",
      image: AnalyzingImg, // Replace with appropriate image
    },
    {
      id: 6,
      text: "<strong>Maintenance</strong> is crucial for long-term success. We provide ongoing support, updates, and improvements to keep your app running smoothly, secure, and compatible with new Android versions and devices.",
      image: MaintenanceImg, // Replace with appropriate image
    },
  ];

  const BASE_URL = `${API_BASE_URL}/images`;
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/react_native`);
        if (response.data.success) {
          setSlides(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching slides:", error.message);
      }
    };
    fetchSlides();
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const native = [
    {
      icon: native1,
      hoverBg: "bg-[#CFF8FF]",
      title: "React Native App Development",
      para: "Under our React Native App Development service we offer cross-development apps that can be used to run on android, iOS, and other mobile platforms as well. React Native App Development costs less and also takes less time to develop.",
    },

    {
      icon: native2,
      hoverBg: "bg-[#C5FDC9]",
      title: "React Native Customizations",
      para: "Our team specializes in React Native app Customizations. Hence, whatever feature you require in your app, our team will be able to offer the same. Also, our React Native Customizations are affordably priced. Contact us today for the best quote.",
    },

    {
      icon: native3,
      hoverBg: "bg-[#DFCFFF]",
      title: "React Plugin Development",
      para: "At TechDevise we also offer React Plugin Development services. We not only create apps but also create React Plugin which can be used across various mobile platforms. All our services are priced at a pocket-friendly rate. Contact us today to know more.",
    },

    {
      icon: native4,
      hoverBg: "bg-[#FDE7C5]",
      title: "React Interactive UI Development",
      para: "At TechDevise we offer React Interactive UI Development services. The experts in our team will be able to provide the right kind of React Interactive UI as per your needs. Hence, if you are looking for similar services at affordable rates, contact us today!",
    },

    {
      icon: native5,
      hoverBg: "bg-[#C5CBFD]",
      title: "React Native Consulting",
      para: "At TechDevise, we not only offer development and design services, but we also offer to consult services as well. If you want to know more about React Native, opt for our React Native Consulting today. We ensure that you will be satisfied by consulting us.",
    },

    {
      icon: native6,
      hoverBg: "bg-[#FDC5C6]",
      title: "React Native Support & Maintenance",
      para: "If you are looking for quality React Native Support & Maintenance, then we have the best engineers to look after your projects. Our team expertise in various React Native Support & Maintenance services and we assure you that all your projects will run smoothly with our maintenance and support services.",
    },
  ];

  const logos = [
    langlogo1,
    langlogo2,
    langlogo3,
    langlogo4,
    langlogo5,
    langlogo6,
    langlogo7,
    langlogo8,
    langlogo11,
    langlogo12,
    langlogo13,
    langlogo15,
   
  ];
  // const logoSliders = [logoIcon1, logoIcon2, logoIcon3, logoIcon4, logoIcon5]
  const logos2 = [
     langlogo16,
    langlogo21,
    langlogo22,
    langlogo23,
    langlogo24,
    langlogo25,
    langlogo26,
    langlogo27,
    langlogo28,
    langlogo29,
    langlogo31,
    langlogo32,
    langlogo33,
    // langlogo34,
    langlogo36,
  ]
  const logos3 = [
    
    langlogo37,
    langlogo38,
    langlogo39,
    langlogo41,
    langlogo42,
    langlogo43,
    langlogo44,
    langlogo45,
    langlogo51,
    langlogo52,
    langlogo53,
    langlogo54,
  ]

  return (
    <>
      {/*landing area of Mobile Application Development start  */}
   

<section className="landing mb-[4.6875rem] min-h-svh relative flex justify-center items-center overflow-hidden">
  {/* Background Video */}
  <video
    src={serviceBgPhone}
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay Color */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#061611] opacity-85"></div>

  {/* Content */}
  <div className="relative w-full max-w-[64.1875rem] m-auto text-center z-10">
    <div className="relative size-[65px] mx-auto aspect-square mb-7 rounded-full flex justify-center items-center">
      <div className="circle absolute top-0 left-0 rounded-full border-2 border-white h-full w-full animate-ping"></div>
      <div className="circle absolute top-[30%] left-[30%] -translate-[25%] rounded-full border-2 border-white size-[70%] animate-ping"></div>
      <img
        src={play}
        alt="play icon"
        className="mx-auto h-full w-full aspect-square"
      />
    </div>

    <h1 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-5">
      Custom Mobile App <br />
      Development Services
    </h1>

    <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal text-white mb-[1.375rem]">
      Use our blockchain-secured and AI-driven mobile app development
      services to transform your designs into modern mobile experiences.
      We create unique mobile applications for iOS and Android that
      include the newest, most advanced technologies.
    </p>

    <button
      onClick={() => setShowModal(true)}
      className="bg-pine-700 inline-flex group/link p-1.5 rounded-full items-center justify-center shine-effect pl-[1.0625rem] gap-[2.0625rem] font-medium text-base text-white cursor-pointer"
    >
      Consult Our Experts{" "}
      <span className="ms-auto w-11 h-11 rounded-full aspect-square bg-white text-pine-700 flex justify-center items-center group-hover/link:rotate-45 transition-all duration-400">
        <FiArrowUpRight className="size-6" />
      </span>
    </button>
  </div>
</section>
      {/*landing area of Mobile Application Development end  */}

      {/* Solutions section start */}
      <section className="solutions my-[4.6875rem]">
        <div className="main-container">
          <div className="relative">
            <h4 className="texto absolute -top-0 left-5 max-lg:hidden rotate-180 text-nowrap sm:text-[2.05rem] text-[2rem] leading-[4.375rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#f2f2f2] to-pine-700">
              Solutions to Explore
            </h4>
            <div className="flex-1 lg:ps-[7.125rem]">
              <ul className="tabs flex justify-start flex-nowrap overflow-x-scroll hide-scroll gap-3 mb-9 ">
                {tab.map((tbs, index) => (
                  <li
                    key={index}
                    onClick={() => setIsTab(index + 1)}
                    className={`${
                      isTab == index + 1
                        ? "border-pine-300 bg-pine-300 text-white"
                        : "border-black bg-transparent text-black"
                    } text-base text-nowrap font-semibold border py-3 px-3 rounded-[.625rem] flex justify-center items-center gap-3 cursor-pointer `}
                  >
                    {tbs.tabTitle}{" "}
                    <HiOutlineArrowLongRight className="size-5 " />
                  </li>
                ))}
              </ul>
              {tabPanel.map((panel, i) => (
                <div
                  key={i}
                  className={` lg:justify-between lg:flex-row flex-col items-center 2xl:gap-[9.375rem] gap-10  ${
                    isTab == i + 1 ? "flex" : "hidden"
                  }`}
                >
                  <div className="lg:flex-1">
                    <h2 className="text-[3rem] text-black font-bold max-w-xl mb-9">
                      {panel.title}
                    </h2>
                    <p className="text-[1.125rem] leading-[2.125rem] font-normal">
                      {panel.para}
                    </p>
                  </div>
                  <img
                    src={panel.image}
                    alt="vector image"
                    className="max-w-[21.125rem] max-h-[17.9375rem] h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Solutions section end */}

      {/* Building ios app section start */}
      <section className="Building ios my-[4.6875rem] py-[4.875rem] bg-gradient-to-r from-[#FCFFEE] to-[#DEEA99]">
        <div className="main-container">
          <div className="flex justify-center items-start lg:flex-row flex-col 2xl:gap-[6.25rem] lg:gap-[4.375rem] gap-10">
            {/* Dynamic image that syncs with active slide */}
            {slides.length > 0 && (
              <img
                src={`${BASE_URL}${slides[currentSlideIndex]?.image}`}
                alt={slides[currentSlideIndex]?.title || "Slide image"}
                className="lg:max-w-[32.875rem] lg:max-h-[29.3125rem] w-full h-full lg:object-contain object-cover transition-opacity duration-500"
              />
            )}

            <div className="lg:w-[calc(100%_-_32.875rem)] w-full flex flex-col">
              <div className="flex justify-between items-center gap-5 order-2">
                {/* <Link to="/mobile-application-development" className='flex w-fit gap-3 justify-center items-center py-3 px-5 rounded-[10px] border border-black bg-[#F7FBDF] text-base font-semibold text-black'>
                More Information <HiOutlineArrowLongRight className='size-10' />
              </Link> */}

                <div className="flex gap-2.5 justify-between items-stretch order-1">
                  <button ref={prevRef} className="cursor-pointer "aria-label="Previous slide">
                    <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                      <GoArrowLeft className="size-7" aria-hidden="true"/>
                    </div>
                  </button>

                  <button ref={nextRef} className="cursor-pointer order-2" aria-label="Next slide">
                    <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                      <GoArrowRight className="size-7" aria-hidden="true" />
                    </div>
                  </button>
                </div>
              </div>

              {slides.length > 0 ? (
                <Swiper
                  className="mySwiper w-full order-1"
                  spaceBetween={30}
                  slidesPerView={1}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  modules={[Autoplay, Navigation]}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  onSlideChange={handleSlideChange}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                >
                  {slides.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className="flex flex-col justify-center items-start "
                    >
                      <h2 className="text-black lg:text-[3rem] md:text-[2.5rem] sm:text-[2.3rem] text-[2rem] font-bold">
                        {item.title}
                      </h2>
                      <p className="my-6 text-[1.125rem] leading-[2.125rem] font-semibold text-black">
                        {item.message}
                      </p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="w-full order-1 flex justify-center items-center min-h-[200px]">
                  <p>Loading slides...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Building ios app section end */}

      {/* Comprehensive section start*/}
      <section className="comprehensive my-[4.6875rem]">
        <div className="main-container">
          <div className="flex lg:flex-row flex-col lg:gap-[6.25rem] gap-10 justify-center items-center">
            .
            <div
              style={{ backgroundImage: `url(${mapWhite})` }}
              className="flex-1 max-w-[706px] bg-center bg-contain bg-no-repeat lg:py-20"
            >
              <h3 className="text-[2.875rem] leading-[4.375rem] font-bold">
                Comprehensive Mobile App Development Services We Provide
              </h3>
              <p className="text-[1.125rem] leading-[1.625rem] font-medium">
                We provide complete mobile app development services, from
                concept to deployment, to provide a perfect and special user
                experience.
              </p>
            </div>
            <div className="flex-1">
              <div className="flex gap-4 items-stretch flex-wrap justify-center">
                <div className="rounded-[1.625rem] h-[10.0625rem] bg-[#EA99B9] flex gap-6 justify-center items-center px-8">
                  <div className="bg-white rounded-full size-[5.5rem] aspect-square flex justify-center items-center">
                    <img
                      src={ios}
                      alt="ios logo"
                      className=" size-12 rounded-full"
                    />
                  </div>
                  <span className="text-[1.5rem] leading-[2.1875rem] font-extrabold">
                    iOS App <br />
                    Development
                  </span>
                </div>
                <div className="rounded-[1.625rem] h-[10.0625rem] bg-[#99EAE0] flex gap-6 justify-center items-center px-8">
                  <div className="bg-white rounded-full size-[5.5rem] aspect-square flex justify-center items-center">
                    <img
                      src={android}
                      alt="ios logo"
                      className=" size-12 rounded-full"
                    />
                  </div>
                  <span className="text-[1.5rem] leading-[2.1875rem] font-extrabold">
                    Android App <br />
                    Development
                  </span>
                </div>
                <div className="rounded-[1.625rem] h-[10.0625rem] bg-[#99CBEA] flex gap-6 justify-center items-center px-8">
                  <div className="bg-white rounded-full size-[5.5rem] aspect-square flex justify-center items-center">
                    <img
                      src={reactNative}
                      alt="ios logo"
                      className=" size-12 rounded-full"
                    />
                  </div>
                  <span className="text-[1.5rem] leading-[2.1875rem] font-extrabold">
                    React Native <br />
                    Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Comprehensive section end*/}

      {/* Develop Top-Quality section start */}
      <section className="topQuality my-[4.6875rem]">
        <div className="main-container">
          <div className="relative z-0 py-24 lg:px-20 px-5 text-center before:absolute before:w-full before:h-3/4 before:top-0 before:left-0 before:bg-white before:-z-10">
            <h3 className="mb-11 2xl:text-[3rem] lg:[2.5rem] sm:text-3xl text-2xl font-bold text-balance leading-[3.5rem]">
              Develop Top-Quality Applications to dominate the Android Play
              Store
            </h3>

            <ul className="flex flex-wrap justify-center items-center gap-5 mb-[3.4375rem] ">
              <li
                onClick={() => setQualityActive(1)}
                className={`w-fit p-3 rounded-full shine-effect text-base font-semibold flex justify-center items-center gap-3 border border-black transition-all duration-300  cursor-pointer ${
                  isQualityActive == 1
                    ? "bg-gradient-to-r from-[#F4D8D8] to-[#EE94B8]"
                    : "bg-white"
                }`}
              >
                <span>Android Application Ideation</span>
                <div
                  className={`size-[3.3125rem] aspect-square flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer ${
                    isQualityActive == 1 ? "bg-white" : "bg-[#EE94B8]"
                  }`}
                >
                  <img src={quality1} alt="" />
                </div>
              </li>
              <li
                onClick={() => setQualityActive(2)}
                className={`w-fit p-3 rounded-full text-base shine-effect font-semibold flex justify-center items-center gap-3 border border-black transition-all duration-300 cursor-pointer ${
                  isQualityActive == 2
                    ? "bg-gradient-to-r from-[#FFEEED] to-[#EA9C99]"
                    : "bg-white"
                }`}
              >
                <span>UI/UX Design For Android Development</span>

                <div
                  className={`size-[3.3125rem] aspect-square flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer ${
                    isQualityActive == 2 ? "bg-white" : "bg-[#EA9C99]"
                  }`}
                >
                  <img src={quality2} alt="" />
                </div>
              </li>
              <li
                onClick={() => setQualityActive(3)}
                className={`w-fit p-3 rounded-full text-base shine-effect font-semibold flex justify-center items-center gap-3 border border-black transition-all duration-300 cursor-pointer ${
                  isQualityActive == 3
                    ? "bg-gradient-to-r from-[#F1FFF7] to-[#67C792]"
                    : "bg-white"
                }`}
              >
                <span>Tech Stack and Android Application Architecture</span>
                <div
                  className={`size-[3.3125rem] aspect-square flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer ${
                    isQualityActive == 3 ? "bg-white" : "bg-[#67C792]"
                  }`}
                >
                  <img src={quality3} alt="" />
                </div>
              </li>
              <li
                onClick={() => setQualityActive(4)}
                className={`w-fit p-3 rounded-full text-base shine-effect font-semibold flex justify-center items-center gap-3 border border-black transition-all duration-300 cursor-pointer ${
                  isQualityActive == 4
                    ? "bg-gradient-to-r from-[#FDF9DF] to-[#FFE74E]"
                    : "bg-white"
                }`}
              >
                <span>Android App Development</span>
                <div
                  className={`size-[3.3125rem] aspect-square flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer ${
                    isQualityActive == 4 ? "bg-white" : "bg-[#FFE74E]"
                  }`}
                >
                  <img src={quality4} alt="" />
                </div>
              </li>
              <li
                onClick={() => setQualityActive(5)}
                className={`w-fit p-3 rounded-full text-base shine-effect font-semibold flex justify-center items-center gap-3 border border-black transition-all duration-300 cursor-pointer ${
                  isQualityActive == 5
                    ? "bg-gradient-to-r from-[#F0DCFF] to-[#C897EB]"
                    : "bg-white"
                }`}
              >
                <span>Analyzing Android Solutions</span>
                <div
                  className={`size-[3.3125rem] aspect-square flex justify-center items-center rounded-full transition-all duration-300 cursor-pointer ${
                    isQualityActive == 5 ? "bg-white" : "bg-[#C897EB]"
                  }`}
                >
                  <img src={quality5} alt="" />
                </div>
              </li>
              <li
                onClick={() => setQualityActive(6)}
                className={`w-fit p-3 rounded-full text-base shine-effect font-semibold flex justify-center items-center gap-3 border border-black transition-all duration-300 cursor-pointer ${
                  isQualityActive == 6
                    ? "bg-gradient-to-r from-[#FFFCDD] to-[#DAD07A]"
                    : "bg-white"
                }`}
              >
                <span>Maintenance</span>
                <div
                  className={`size-[3.3125rem] aspect-square flex justify-center items-center rounded-full transition-all duration-300  cursor-pointer${
                    isQualityActive == 6 ? "bg-white" : "bg-[#DAD07A]"
                  }`}
                >
                  <img src={quality6} alt="" />
                </div>
              </li>
            </ul>
            {qualityContent.map((item) => (
              <div
                key={item.id}
                className={`${
                  isQualityActive === item.id ? "block" : "hidden"
                }`}
              >
                <p
                  className="text-[1.125rem] leading-[2.125rem] font-normal max-w-5xl mx-auto mb-[3.4375rem]"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
                <img
                  src={item.image}
                  alt={`Content for tab ${item.id}`}
                  className="w-full lg:h-[39.625rem] ms:h-[31.25rem] h-[25rem] object-cover rounded-[1.625rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Develop Top-Quality section end */}

      {/* React Native section start */}
      <section className="reactNative bg-gradient-to-b from-[#F2F4FF] to-[#EDEFFD] mt-[4.6875rem] py-[4.1875rem]">
        <div className="main-container">
          <div className="flex justify-between items-end relative">
            <div className="lg:text-start text-center">
              <h3 className="2xl:text-5xl sm:text-4xl text-3xl font-bold text-black mb-3">
                React Native App Development
              </h3>
              <p className="text-[1.125rem] leading-[2.125rem] font-normal text-black lg:max-w-4xl text-balance">
                Tech Devise provides a range of services related to React Native
                app development. Our services are all designed to meet your
                demands. To learn more about our services, get in touch with us
                right now.{" "}
              </p>
            </div>
            <img
              src={react}
              alt="react native icon"
              className="absolute lg:top-0 top-24 right-5 block max-lg:hidden animate-spin"
            />
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-[4.0625rem] gap-[2.875rem]">
            <img
              src={native0}
              alt="navtive 0 side image"
              className=" max-lg:mx-auto block"
            />
            <div className="col-span-2 flex flex-col">
              <div className="flex gap-2.5 justify-start items-stretch mt-[3.25rem] order-2">
                <button ref={prevRef2} className="cursor-pointer order-1"  aria-label="Previous slide">
                  <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                    <GoArrowLeft className="size-7" aria-hidden="true" />
                  </div>
                </button>

                <button ref={nextRef2} className="cursor-pointer order-2 " aria-label="Next slide">
                  <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                    <GoArrowRight className="size-7" aria-hidden="true"/>
                  </div>
                </button>
              </div>

              <Swiper
                className="mySwiper w-full [&>.swiper-wrapper]:items-stretch order-1"
                spaceBetween={46}
                slidesPerView={1}
                loop={true}
                speed={1000}
                autoplay={{ delay: 1000 }}
                grabCursor={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1025: {
                    slidesPerView: 1,
                  },
                  1536: {
                    slidesPerView: 2,
                  },
                }}
                onInit={(swiper) => {
                  // Re-assign custom buttons after swiper is initialized
                  swiper.params.navigation.prevEl = prevRef2.current;
                  swiper.params.navigation.nextEl = nextRef2.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                navigation={{
                  prevEl: prevRef2.current,
                  nextEl: nextRef2.current,
                }}
              >
                {native.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="flex justify-center items-center !h-auto"
                    >
                      <div
                        className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 2xl:max-w-[480px] h-full w-full bg-white rounded-[1.625rem] py-5 px-6 ${item.hoverBg}`}
                      >
                        <span
                          className={`absolute  top-10 left-9 z-0 h-10 w-10 rounded-full  ${item.hoverBg} transition-all duration-900 group-hover:scale-[50] `}
                        ></span>

                        {/* content always on top */}
                        <div className="relative z-10">
                          <img
                            src={item.icon}
                            alt=""
                            className="block size-[6.125rem] object-contain mb-[1.125rem]"
                          />
                          <h4 className="text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24">
                            {item.title}
                          </h4>
                          <p className="text-[1.125rem] leading-[2.125rem] font-normal">
                            {item.para}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* React Native section end */}

      {/* Tech Stack We Use section start */}
  <section className="py-20 bg-white">
  <div className="px-5">
  
        <div className="w-full max-w-6xl m-auto text-center 2xl:mb-[5.3125rem] mb-[1.3125rem]">
                        <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-8">
                          Tech Stack We Use
                        </h3>
                        <p className="2xl:text-[1.250rem] text-[1rem] font-normal text-black mb-[4.375rem]">Our AI app developers excel in a diverse and advanced tech stack. From backend frameworks to development
                            tools, we meticulously select the best-in-class components to ensure your app meets the most stringent technical standards.</p>
                    </div>

    {/* Row 1 - medium speed, left */}
    <div className="overflow-hidden relative">
      <div className="flex gap-10 animate-scroll-slow">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>

    {/* Row 2 - faster, right */}
    <div className="overflow-hidden relative mt-6 2xl:mt-10">
      <div className="flex gap-10 animate-scroll-fast-reverse">
        {[...logos2, ...logos2].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>

    {/* Row 3 - slowest, left */}
    <div className="overflow-hidden relative mt-6 2xl:mt-10 mb-5">
      <div className="flex gap-10 animate-scroll-slowest">
        {[...logos3, ...logos3].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`logo-${i}`}
            className="h-20 sm:h-24 md:h-28 lg:h-32 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  </div>
</section>



      
      {/* Tech Stack We Use section end */}
      <GetInTouch
        showModal={showModal}
        setShowModal={() => {
          setShowModal(!showModal);
        }}
      />
    </>
  );
};
export default MobileApplicationDevelopment;
