import React, { useState, useEffect } from "react";
import axios from "axios";
import qualityBg from "/qualityBg.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiArrowUpRight } from "react-icons/fi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import CompanyLogoSlider from "../components/CompanyLogoSlider";
import { GoArrowRight } from "react-icons/go";

import quailtySlideLogo1 from "/quailtySlideLogo1.svg";

import cloudCard1 from "/cloudCard1.webp";
import cloudCard2 from "/cloudCard2.webp";
import cloudCard3 from "/cloudCard3.webp";
import cloudCard4 from "/cloudCard4.webp";
import cloudCard5 from "/cloudCard5.webp";
import cloudCard6 from "/cloudCard6.webp";
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

import gain1 from "/gain1.png";
import gain2 from "/gain2.png";
import gain3 from "/gain3.png";
import gain4 from "/gain4.png";
import gain5 from "/gain5.png";

import vectorGirl from "/vectorGirl.png";

import analystBg from "/analystBg.jpg";

import analyst1 from "/analyst1.webp";
import analyst2 from "/analyst2.webp";
import analyst3 from "/analyst3.webp";
import analyst4 from "/analyst4.webp";
import GetInTouch from "../components/GetInTouch";
import FallingBeams from "../components/FallingBeams";
const QualityAnalysis = () => {
  const [isActiveTab, setActiveTab] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setOpen] = useState(1);
  const [activeService, setActiveService] = useState("digitalAssurance");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
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

  const [services, setServices] = useState({
    digitalAssurance: {
      title: "Digital Assurance",
      description: "Coupling your digital assurance journey to quality",
      items: [],
    },
    digitalEngineering: {
      title: "Digital Engineering",
      description: "Driving quality in enterprise platforms",
      items: [],
    },
  });

  const BASE_URL = `${API_BASE_URL}/images`;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const [assuranceRes, engineeringRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/digital_As`),
          axios.get(`${API_BASE_URL}/api/digital_Eng`),
        ]);

        if (assuranceRes.data.success && engineeringRes.data.success) {
          setServices({
            digitalAssurance: {
              title: "Digital Assurance",
              description: "Coupling your digital assurance journey to quality",
              items: assuranceRes.data.data,
            },
            digitalEngineering: {
              title: "Digital Engineering",
              description: "Driving quality in enterprise platforms",
              items: engineeringRes.data.data,
            },
          });
        }
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      }
    };

    fetchServices();
  }, []);
  const tabBtn = [
    "100% Cloud Based",
    "TechDevice Explorer",
    "Cross-Functional",
    "TestAgent powered by Copado AI Platform",
    "Complete End-to-End Testing",
    "Tackle Defects Faster",
  ];

  const tabContent = [
    {
      image: cloudCard1,
      para: "Test execution has never been so fast and installations or continuous maintenance are not needed. Our implementation minimizes your total cost of ownership and it entirely eliminates hardware maintenance related hassle. Get worry free performance, accelerated release cycles and an enhanced efficiency without having to worry about anything infrastructure related, resulting in a focus on your innovation.",
    },
    {
      image: cloudCard2,
      para: " As your preferred end-to-end digital solutions partner, we enable you to unleash the latest innovations, accelerate your development and quicken your business transformation. Be it the idea or its implementation, our knowledge helps you to become adaptive, smarter in delivering and nowhere to be seen in the fast changing digital world. Whatever is your objective, achieve your goals with seeksolutions tailored to speed, scalability and long-range success.",
    },
    {
      image: cloudCard3,
      para: "  We integrate development, design, QA as well as operations teams such that they fit together in perfect harmony making collaboration a walk in the park at any point. With silo elimination and effective communication, we cut the delivery cycles and promote quality. The outcome is an efficient process that brings success at every layer, concept to customer satisfaction which enables your business to be at a similar speed, faster in terms of innovation and expansion.",
    },
    {
      image: cloudCard4,
      para: "Our smart test automation tool intelligently uses the capabilities of artificial intelligence  to achieve maximized test coverage, faster execution time, and reliable quality. It is easily integrated into your DevOps pipeline and builds dependable high-quality releases on every release. We integrate intelligence automation with unlimited feedback, assisting to help you mitigate risks, speed delivery, and be confident in every release phase.",
    },
    {
      image: cloudCard5,
      para: "Each and every layer of system including user interface and the backend systems needs to work in a perfect manner such that the experience is flawless. We are concerned with performance as well as usability, ensuring all parts and pieces integrate well to provide fast, stable and the ease of interaction. The outcome is an excellent, well-working solution that not only satisfies the technicality but also enjoys the solution through every point of contact.",
    },
    {
      image: cloudCard6,
      para: "Quickly resolve issues with tools and processes that identify and repair defects earlier in the development process. Our method leverages AI-powered insights, automatic testing, and collaborative work, to identify issues before they affect the production. We assist you to assure quality, maintain delivery dates, and keep your projects on track start to finish by avoiding delays and eliminating rework.",
    },
  ];

  const gainSlider = [
    {
      image: gain1,
      title:
        "TechDevise Helped a Leading Mobile App Development Agency in UK Achieve Fully Functional Apps and Faster Time- to - Market",
      para: "TechDevise delivered end-to-end functional testing services to ensure that mobile apps are functioning seamlessly to deliver user experience (UX) and performed risk-driven functional testing to ensure optimal test coverage.",
    },

    {
      image: gain2,
      title:
        "TechDevise helped a Leading Farm Credit Services Provider Achieve 90% Reduced QA Cycle Time and 50% Reduced Time to Market with Automated Functional Testing",
      para: "To help client achieve the required goal, we enabled end-to-end functional automation testing of their farm credit application suite comprising of more than ten applications using the recent DevOps CI/CD methodology..",
    },

    {
      image: gain3,
      title:
        "TechDevise Assisted a US-Based Financial Services Company Achieve 100% Automation and Reduce QA Costs By 40%",
      para: "TechDevise partnered with the client to understand the application flow and assisted automating test cases and batch execution. Our client has successfully saved costs, streamlined the processes, and scaled the business..",
    },

    {
      image: gain4,
      title:
        "TechDevise Helped a Leading Insurance Company in the U.S. Achieve a Fully Functional Website and Reduced Time-to-Market by 30%",
      para: "TechDevise worked with the client to understand various insurance processes and suggested a flexible and cost-effective framework. Reduced time to market by 30% and saved significant costs..",
    },

    {
      image: gain5,
      title:
        "Helps an Audio Streaming Services Provider Achieve 50% Faster Time-to-Market",
      para: "TechDevise deployed a team in a hybrid (Onsite & offshore) model and performed test advisory to create automation roadmap and set up the Enterprise-level test automation tool, UiPath Test Suite-based solution by working closely with the client’s teams..",
    },
  ];

  const openSlide = [
    {
      image: analyst1,
      title: "NelsonHall",
      para: "TechDevise recognized as a Leader in NelsonHall’s NEAT Vendor Evaluation for Quality Engineering (RPA-Based Test Automation).",
    },
    {
      image: analyst2,
      title: "Gartner",
      para: "TechDevise recognized as a Representative Vendor in Gartner® 2023 Market Guide for Application Testing Services Under Pure-Play Testing Services Providers..",
    },
    {
      image: analyst3,
      title: "Everest Group",
      para: "TechDevise positioned as a Major Contender and Star Performer in the Next-generation QE services PEAK Matrix Assessment..",
    },
    {
      image: analyst4,
      title: "ISG",
      para: "TechDevise recognized as a Contender in ISG Provider Lens™ Next-Gen ADM services report for Continuous Testing..",
    },
  ];
  return (
    <>
      {/*landing area of Ai Development sections start  */}
    <section className="landing mb-[4.6875rem] min-h-svh bg-bottom bg-cover bg-no-repeat flex flex-col justify-center items-center relative overflow-hidden">
  {/* Background Video */}
  <video
    src={qualityBg}
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay (dark layer for readability) */}
  {/* <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div> */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#061611] opacity-70"></div>
  {/* Content */}
  <div className="landing flex-1 w-full flex justify-center items-center relative z-10">
    <div className="w-full max-w-[64.1875rem] m-auto text-center">
      <h5 className="text-base font-medium rounded-full bg-white/15 text-white px-8 py-[1.125rem] w-fit mx-auto mb-8">
        Quality Analysis
      </h5>
      <h1 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9A9A14] mb-5">
        Redefining Software Quality using AI Engineering Excellence,
        Assuring Accuracy
      </h1>
      <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal text-white mb-[1.375rem]">
        Enhance the performance of your business by up to 20 times using
        our advanced AI development solutions. Automate repetitive tasks,
        make data-driven decisions, and drive operational efficiency.
        Work half as much, with more time on your hands and better use of your
        resources.
      </p>

      <button
        onClick={() => setShowModal(true)}
        className="bg-[#9EDF84] text-black shine-effect inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base cursor-pointer group/link"
      >
        Consult Our Experts{" "}
        <span className="ms-auto w-11 h-11 rounded-full aspect-square bg-white text-black flex justify-center items-center group-hover/link:rotate-45 transition-all duration-400">
          <FiArrowUpRight className="size-6" />
        </span>
      </button>
    </div>
  </div>

  {/* Bottom Logos Section */}
  <div className="flex-[0_1_0%] w-full bg-transparent relative z-10">
    <div className="main-container !pe-0 py-[1.25rem] flex justify-start items-center">
      <div className="flex-[0_1_0%] py-5 pe-8 border-r-2 border-white max-lg:hidden">
        <h4 className="text-xl font-bold text-white text-nowrap">Our Esteemed</h4>
        <h4 className="text-xl font-normal text-white text-nowrap mt-1.5">Clients</h4>
      </div>
      <div className="flex-1 overflow-hidden">
        <CompanyLogoSlider opacity={"!opacity-100"} logos={coLogos} />
      </div>
    </div>
  </div>
</section>
      {/*landing area of Ai Development sections end  */}

      {/* Business section start */}
      <section className="business my-[4.6875rem]">
        <div className="main-container">
          <div className="section-header text-center mb-[5.375rem] max-w-5xl mx-auto">
            <h5 className="text-base font-medium text-white w-fit mx-auto mb-5 py-[1.125rem] px-[3.4375rem] rounded-full bg-gradient-to-b from-[#0B6F4F] via-[#021811] to-[#000000]">
              What we do
            </h5>
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-[1.625rem]">
              Accelerate your business
            </h3>
            <p className="2xl:text-[1.20rem] text-[1rem] leading-[1.625rem] font-medium">
              Our digital business-based transformation strategy and
              implementation services are designed to enable businesses today
              and position those businesses to succeed in the environments of
              the future.
            </p>
          </div>

          <div className="tabButtons flex justify-center items-center gap-[3.8125rem] my-12">
            <button
              onClick={() => setActiveService("digitalAssurance")}
              className={` cursor-pointer text-xl leading-[1.75rem] font-bold ${
                activeService === "digitalAssurance"
                  ? "text-[#014DA2]"
                  : "text-black"
              }`}
            >
              Digital Assurance
            </button>
            <button
              onClick={() => setActiveService("digitalEngineering")}
              className={` cursor-pointer text-xl leading-[1.75rem] font-bold ${
                activeService === "digitalEngineering"
                  ? "text-[#014DA2]"
                  : "text-black"
              }`}
            >
              Digital Engineering
            </button>
          </div>

          <div className="flex justify-center items-stretch flex-wrap gap-5">
            {services[activeService]?.items.map((item, index) => (
              <div key={index} className="flex-[1_1_400px]">
                <div className="h-full w-full">
                  <div
                    style={{ backgroundImage: `url(${BASE_URL}${item.image})` }}
                    className="bg-center rounded-[1.625rem] bg-cover bg-no-repeat px-[1.375rem] py-4 w-full h-[23.875rem] flex justify-start items-end"
                  >
                    <div className="cardBody text-white">
                      <h4 className="text-[1.75rem] leading-[1.7375rem] font-semibold mb-3 pe-24">
                        {item.name}
                      </h4>
                      <p className="text-base leading-[1.4125rem] font-normal">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Business section end */}

      {/* Gain Insights into our Services start */}
  <section className="services relative my-[4.6875rem] py-[2.6875rem] bg-gradient-to-r from-[#062D22]  to-[#021711] overflow-hidden">
  {/* Falling beams layer */}
  <div className="absolute inset-0 z-0 beams-container"></div>
  <FallingBeams />
        <div className="relative z-10 main-container">
          <div className="section-header text-center text-white mb-[2.8125rem]">
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-balance mb-[1.625rem]">
              Gain Insights into our Services
            </h3>
            <p className="2xl:text-[1.125rem] text-[1rem] leading-[1.625rem] 2xl:max-w-7xl lg:max-w-6xl mx-auto font-medium">
              Browse our wide offering of services that can implement your ideas
              into a successful online solution. We deliver end-to-end
              experience to build and grow high-performance Android apps,
              spanning strategy and design, development, deployment, and
              post-release support. Find out how we leverage innovation,
              operational excellence, and experience to help organizations
              achieve their goals.
            </p>
          </div>

          <Swiper
            className="mySwiper w-full [&>.swiper-wrapper]:items-stretch order-1 blockChain"
            spaceBetween={46}
            slidesPerView={1}
            speed={1000}
            autoplay={{ delay: 5000 }}
            grabCursor={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {gainSlider.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center !h-auto pb-4"
              >
                <div className="flex flex-col lg:flex-row items-center bg-balance rounded-[1.625rem] overflow-hidden w-full min-h-[28rem]">
                  {/* Image Left */}
                  <div className="w-full lg:w-[40%] h-auto flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full  rounded-[1.625rem] "
                    />
                  </div>

                  {/* Content Right */}
                  <div className="w-full lg:w-[60%] p-8 lg:p-16 text-white flex flex-col justify-center">
                    <h4 className="2xl:text-[32px] lg:text-[20px] text-[20px] font-bold mb-6  2xl:leading-[46px] leading-[25px]">
                      {item.title}
                    </h4>
                    <p className="2xl:text-[1.125rem] text-[1rem] leading-[1.875rem] mb-8">
                      {item.para}
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-transparent shine-effect w-[15.24rem]  cursor-pointer group/link text-white border border-white inline-flex p-1.5 rounded-full items-center justify-center pl-4 gap-2 font-medium text-base"
                    >
                      Consult Our Experts
                      <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
                        <FiArrowUpRight className="text-[18px] text-pine-700" />
                      </span>
                    </button>
                    {/* <button
              onClick={() => setShowModal(true)}
              className="bg-transparent text-black shine-effect inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base cursor-pointer group/link"
            >
              Consult Our Experts{" "}
              <span className="ms-auto w-11 h-11 rounded-full aspect-square bg-white text-black flex justify-center items-center group-hover/link:rotate-45 transition-all duration-400">
                <FiArrowUpRight className="size-6" />
              </span>
            </button> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Gain Insights into our Services end */}

      {/* Transformations section start */}
      <section className="transformations my-[4.6875rem]">
        <div className="main-container">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-10 ">
            <div className="flex-[1_1_23.125rem] max-xl:hidden 2xl:max-w-[25.125rem] xl:max-w-[20.625rem] max-w-[20.625rem] max-lg:mx-auto lg:order-1 order-2">
              <img
                src={vectorGirl}
                alt="robo image"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="flex-1 lg:text-start text-center lg:order-2 order-1 flex justify-center items-stretch flex-wrap gap-10">
              <div className="flex-[1_1_23.3125rem] text-black rounded-10 py-9 rounded-[1.625rem] scale-100 ">
                <h4 className="text-[2rem] leading-[3rem] font-bold mb-3">
                  Fuelling your digital transformation and assurance goals
                </h4>
                <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem]">
                  We lead with innovation to deliver resilient solutions with
                  maximum impact. We instill quality throughout the product
                  development lifecycle with end-to-end service capabilities,
                  converging development and quality assurance domains.
                </p>
              </div>
              <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                <h4 className="text-[1.75rem] font-semibold mb-3 lg:pe-16">
                  Adapting Next Gen Technologies
                </h4>
                <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal">
                  We leverage next-gen and AI technologies in our Digital
                  Assurance and engineering solutions to ensure you make
                  data-driven decisions, streamline processes, and optimize
                  workflows through advanced analytics, ML, and AI-driven
                  automation.
                </p>
              </div>
              <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                <h4 className="text-[1.75rem] font-semibold mb-3 lg:pe-16">
                  Leading through innovation
                </h4>
                <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal">
                  Our experienced resource pool implements an innovation-led
                  journey of exploration, experimentation, and evolution. Our
                  Quality Engineering is at the forefront of innovation with
                  experimentation, iteration, rapid prototyping to quickly
                  validate ideas.
                </p>
              </div>
              <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                <h4 className="text-[1.75rem] font-semibold mb-3 lg:pe-16">
                  Focusing on the Customer's Business Outcomes
                </h4>
                <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal">
                  Our tailored solutions address your specific business goals
                  and needs. We are your one-stop-shop for Quality Engineering
                  services capabilities from functional to non-functional
                  testing with next-gen testing services like AI, RPA, Cloud.
                </p>
              </div>
              <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                <h4 className="text-[1.75rem] font-semibold mb-3 lg:pe-16">
                  Digital Engineering with Quality DNA
                </h4>
                <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal">
                  Our expertise on end-to-end digital engineering empowers
                  businesses to embrace change, drive growth, and unlock their
                  full potential in the digital age. As the world&apos;s 5th
                  largest QA & software testing company, quality is in our DNA.
                </p>
              </div>
              <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                <h4 className="text-[1.75rem] font-semibold mb-3 lg:pe-16">
                  Scaling with Agility
                </h4>
                <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-normal">
                  We provide solutions based on real-world usage and insights,
                  enabling clients to iterate rapidly, refine their ideas, and
                  drive innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transformations section end */}

      {/* Analyst section start  */}
      <section
        style={{ backgroundImage: `url(${analystBg})` }}
        className="analyst my-[4.6875rem] py-[4.6875rem]"
      >
        <div className="main-container">
          <div className="lg:flex 2xl:flex-row flex-col justify-center gap-10 items-stretch text-white">
            <div className="2xl:w-[30%] w-full lg:text-start text-center">
              <h3 className="2xl:text-[2.6rem] lg:text-[2.4rem] text-[2rem] font-bold leading-[3.1875rem] font-extrabold">
                Analyst <br className="max-lg:hidden" />
                Recognition
              </h3>

              <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal mt-[1.5625rem] pb-[2.3125rem] 2xl:max-w-7xl  lg:max-w-6xl">
                Our AI development services company delivers cutting-edge
                computer vision models for image recognition, object detection,
                and quality inspections. These models are powered by our AI
                software development services to enhance efficiency.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="cursor-pointer bg-transparent shine-effect  text-white border group/link border-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
              >
                Get In Touch{" "}
                <span className="ms-auto w-11 h-11  rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
                  <FiArrowUpRight className="text-[18px]  text-pine-700" />{" "}
                </span>
              </button>
            </div>
            <div className="2xl:w-[70%] w-full max-lg:mt-10">
              <div className="flex lg:flex-row flex-row flex-wrap justify-start items-stretch lg:h-[39.125rem] gap-5">
                {openSlide.map((item, index) => (
                  <div
                    onMouseEnter={() => setOpen(index + 1)}
                    key={index}
                    className={`transition-all cursor-pointer duration-1000 overflow-hidden max-lg:h-[25rem] max-lg:flex-[1_1_300px] ${
                      isOpen == index + 1
                        ? "lg:w-[39rem] lg:flex-[1_1_39rem] "
                        : "lg:w-[10%] lg:flex-[1_1_10%] "
                    }`}
                  >
                    <div
                      style={{ backgroundImage: `url(${item.image})` }}
                      className="bg-center rounded-[1.625rem] bg-cover bg-no-repeat px-[1.375rem] py-4 w-full h-full flex justify-start items-end relative"
                    >
                      <h4
                        className={`text-[1.75rem] leading-[2.4375rem] font-semibold max-lg:hidden absolute bottom-5 left-10 mb-3 text-nowrap texto rotate-180 tracking-wide  transition-all duration-1000  delay-100 ${
                          isOpen == index + 1
                            ? "opacity-0"
                            : "opacity-100 delay-700"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <div
                        className={`cardBody text-white transition-all duration-1000 delay-500 ${
                          isOpen == index + 1
                            ? "mb-0 opacity-100"
                            : "lg:-mb-32 lg:opacity-0"
                        }`}
                      >
                        <h4 className="text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 text-nowrap tracking-wide">
                          {item.title}
                        </h4>
                        <p className=" text-base leading-[1.8125rem] font-normal min-w-[20rem]">
                          {item.para}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Analyst section end  */}

      {/* Cloud section start  */}
      <section className="Cloud my-[4.6875rem]">
        <div className="main-container">
          <div className="w-full max-w-[64.1875rem] m-auto text-center mb-[5.3125rem]">
            <h3 className=" 2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-5">
              Turn Your Team into Test Automation Experts
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] font-normal text-black mb-[1.375rem]">
              {" "}
              Equip your teams with intelligent tools and hassle-free,
              keyword-based automation.Enable enterprise-scale high-quality
              releases, enhance team collaboration, and automatize testing
              process.
            </p>
          </div>

          <div className="tabsForCloud bg-white border border-[#d3d3d3] rounded-[1.625rem] shadow-2xl shadow-black/10 py-10 px-[2.6875rem]">
            <ul className=" flex justify-start items-center gap-10 overflow-x-auto hide-scroll mb-14">
              {tabBtn.map((btn, index) => (
                <li
                  onClick={() => setActiveTab(index + 1)}
                  key={index}
                  className={`2xl:text-[1.10rem] text-[1rem] leading-[2.4375rem] font-bold text-nowrap cursor-pointer pb-3 border-b-2 transition-all duration-300 ${
                    isActiveTab === index + 1
                      ? "text-pine-700 border-pine-700"
                      : " text-black border-transparent "
                  }`}
                >
                  {btn}
                </li>
              ))}
            </ul>
            {tabContent.map((item, index) => (
              <div
                key={index}
                className={`lg:flex-row flex-col justify-center items-center 2xl:gap-32 lg:gap-20 gap-5 ${
                  isActiveTab == index + 1 ? "flex" : "hidden"
                }`}
              >
                <div className="lg:flex-[1_1_51.625rem]  max-lg:mx-auto lg:order-2 order-1  relative lg:pe-[3.375rem]">
                  <h4 className="texto absolute 2xl:-top-0  lg:-top-0 -top-6 right-0 max-lg:hidden rotate-0 tracking-[10px] text-nowrap 2xl:text-[1.6875rem] text-xl leading-[2.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#005163] to-[#01090A]">
                    Automation Experts
                  </h4>

                  <img
                    src={item.image}
                    alt="cloudcard image"
                    className="h-full w-full rounded-[1.625rem] object-contain"
                  />
                </div>
                <div className="lg:flex-[1_1_29.25rem] lg:order-1 order-2 lg:text-start text-center">
                  <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] text-black font-normal my-9">
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Cloud section end  */}
      <GetInTouch
        showModal={showModal}
        setShowModal={() => {
          setShowModal(!showModal);
        }}
      />
    </>
  );
};

export default QualityAnalysis;
