import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link } from 'react-router-dom'
import CompanyLogoSlider from '../components/CompanyLogoSlider'
import { GoArrowRight } from 'react-icons/go'

import quailtySlideLogo1 from '/quailtySlideLogo1.svg'
import qualityBg from '/qualityBg.webp'

import cloudCard1 from '/cloudCard1.webp'
import cloudCard2 from '/cloudCard2.webp'
import cloudCard3 from '/cloudCard3.webp'
import cloudCard4 from '/cloudCard4.webp'
import cloudCard5 from '/cloudCard5.webp'
import cloudCard6 from '/cloudCard6.webp'
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

import gain1 from '/gain1.webp'
import gain2 from '/gain2.webp'
import gain3 from '/gain3.webp'
import gain4 from '/gain4.webp'
import gain5 from '/gain5.webp'

import vectorGirl from '/vectorGirl.svg'

import analystBg from '/analystBg.webp'

import analyst1 from '/analyst1.webp'
import analyst2 from '/analyst2.webp'
import analyst3 from '/analyst3.webp'
import analyst4 from '/analyst4.webp'
import GetInTouch from '../components/GetInTouch';
const QualityAnalysis = () => {

    const [isActiveTab, setActiveTab] = useState(1);
const [showModal, setShowModal] = useState(false);
    const [isOpen, setOpen] = useState(1);
 const [activeService, setActiveService] = useState('digitalAssurance');
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
      items: []
    },
    digitalEngineering: {
      title: "Digital Engineering",
      description: "Driving quality in enterprise platforms",
      items: []
    }
  });

  const BASE_URL = `${API_BASE_URL}/images`; 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const [assuranceRes, engineeringRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/digital_As`),
          axios.get(`${API_BASE_URL}/api/digital_Eng`)
        ]);

        if (assuranceRes.data.success && engineeringRes.data.success) {
          setServices({
            digitalAssurance: {
              title: "Digital Assurance",
              description: "Coupling your digital assurance journey to quality",
              items: assuranceRes.data.data
            },
            digitalEngineering: {
              title: "Digital Engineering",
              description: "Driving quality in enterprise platforms",
              items: engineeringRes.data.data
            }
          });
        }
      } catch (error) {
        console.error("Failed to fetch service data:", error);
      }
    };

    fetchServices();
  }, []);
    const tabBtn = ["100% Cloud Based", "TechDevice Explorer", "Cross-Functional", "TestAgent powered by Copado AI Platform", "Complete End-to-End Testing", "Tackle Defects Faster"]

    const tabContent = [
        {
            image: cloudCard1,
            para: 'Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.'
        },
        {
            image: cloudCard2,
            para: 'Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.'
        },
        {
            image: cloudCard3,
            para: 'Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.'
        },
        {
            image: cloudCard4,
            para: 'Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.'
        },
        {
            image: cloudCard5,
            para: 'Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.'
        },
        {
            image: cloudCard6,
            para: 'Test Execution at lightning speed with nothing to install or maintain. Reduce total cost of ownership and eliminate the need for any hardware maintenance.'
        },
    ]

    const gainSlider = [
        {
            image: gain1,
            title: 'TechDevise Helped a Leading Mobile App Development Agency in UK Achieve Fully Functional Apps and Faster Time- to - Market',
            para: 'TechDevise delivered end-to-end functional testing services to ensure that mobile apps are functioning seamlessly to deliver user experience (UX) and performed risk-driven functional testing to ensure optimal test coverage.'
        },

        {
            image: gain2,
            title: 'TechDevise helped a Leading Farm Credit Services Provider Achieve 90% Reduced QA Cycle Time and 50% Reduced Time to Market with Automated Functional Testing',
            para: 'To help client achieve the required goal, we enabled end-to-end functional automation testing of their farm credit application suite comprising of more than ten applications using the recent DevOps CI/CD methodology..'
        },

        {
            image: gain3,
            title: 'TechDevise Assisted a US-Based Financial Services Company Achieve 100% Automation and Reduce QA Costs By 40%',
            para: 'TechDevise partnered with the client to understand the application flow and assisted automating test cases and batch execution. Our client has successfully saved costs, streamlined the processes, and scaled the business..'
        },

        {
            image: gain4,
            title: 'TechDevise Helped a Leading Insurance Company in the U.S. Achieve a Fully Functional Website and Reduced Time-to-Market by 30%',
            para: 'TechDevise worked with the client to understand various insurance processes and suggested a flexible and cost-effective framework. Reduced time to market by 30% and saved significant costs..'
        },

        {
            image: gain5,
            title: 'Helps an Audio Streaming Services Provider Achieve 50% Faster Time-to-Market',
            para: 'TechDevise deployed a team in a hybrid (Onsite & offshore) model and performed test advisory to create automation roadmap and set up the Enterprise-level test automation tool, UiPath Test Suite-based solution by working closely with the client’s teams..'
        },
    ]

    const openSlide = [
        {
            image: analyst1,
            title: 'NelsonHall',
            para: 'TechDevise recognized as a Leader in NelsonHall’s NEAT Vendor Evaluation for Quality Engineering (RPA-Based Test Automation).'
        },
        {
            image: analyst2,
            title: 'Gartner',
            para: 'TechDevise recognized as a Representative Vendor in Gartner® 2023 Market Guide for Application Testing Services Under Pure-Play Testing Services Providers..'
        },
        {
            image: analyst3,
            title: 'Everest Group',
            para: 'TechDevise positioned as a Major Contender and Star Performer in the Next-generation QE services PEAK Matrix Assessment..'
        },
        {
            image: analyst4,
            title: 'ISG',
            para: 'TechDevise recognized as a Contender in ISG Provider Lens™ Next-Gen ADM services report for Continuous Testing..'
        },
    ]
    return (
        <>
            {/*landing area of Ai Development sections start  */}
            <section style={{ backgroundImage: `url(${qualityBg})` }} className="landing mb-[4.6875rem] min-h-svh bg-bottom bg-cover bg-no-repeat flex flex-col justify-center items-center ">
                <div className="landing flex-1 w-full flex justify-center items-center ">
                    <div className="w-full max-w-[64.1875rem] m-auto text-center">
                        <h5 className='text-base font-medium rounded-full bg-white/15 text-white px-8 py-[1.125rem] w-fit mx-auto mb-8'>Quality Analysis</h5>
                        <h1 className=" md:text-5xl sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9A9A14] mb-5">
                            Redefining Software Quality using AI Engineering
                            Excellence, Assuring Accuracy
                        </h1>
                        <p className="text-xl font-normal text-white mb-[1.375rem]">Boost your business operations 20x with our advanced AI development services. Automate repetitive
                            tasks, make data-driven decisions, and run your business more efficiently with less effort.</p>
                        <button onClick={() => setShowModal(true)} className="bg-[#9EDF84] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></button>
                    </div>
                </div>

                <div className="flex-[0_1_0%] w-full bg-transparent">
                    <div className="main-container !pe-0 py-[1.25rem] flex justify-start items-center">
                        <div className="flex-[0_1_0%] py-5 pe-8  border-r-2 border-white max-lg:hidden">
                            <h4 className="text-xl font-bold text-white text-nowrap">
                                Our Esteemed
                            </h4>
                            <h4 className="text-xl font-normal text-white text-nowrap mt-1.5">
                                Clients
                            </h4>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <CompanyLogoSlider opacity={'!opacity-100'} logos={coLogos} />
                        </div>
                    </div>
                </div>
            </section>
            {/*landing area of Ai Development sections end  */}


            {/* Business section start */}
             <section className="business my-[4.6875rem]">
      <div className="main-container">
        <div className="section-header text-center mb-[5.375rem] max-w-5xl mx-auto">
          <h5 className='text-base font-medium text-white w-fit mx-auto mb-5 py-[1.125rem] px-[3.4375rem] rounded-full bg-gradient-to-b from-[#0B6F4F] via-[#021811] to-[#000000]'>What we do</h5>
          <h3 className="text-[3rem] font-extrabold text-black mb-[1.625rem]">Accelerate your business</h3>
          <p className="text-[1.125rem] leading-[1.625rem] font-medium">
            With an emphasis on digital business transformation, we consult and implement programs aimed at
            strengthening enterprises in the present while ensuring preparedness for the future.
          </p>
        </div>

        <div className="tabButtons flex justify-center items-center gap-[3.8125rem] my-12">
          <button 
            onClick={() => setActiveService('digitalAssurance')}
            className={`text-xl leading-[1.75rem] font-bold ${activeService === 'digitalAssurance' ? 'text-[#014DA2]' : 'text-black'}`}
          >
            Digital Assurance
          </button>
          <button 
            onClick={() => setActiveService('digitalEngineering')}
            className={`text-xl leading-[1.75rem] font-bold ${activeService === 'digitalEngineering' ? 'text-[#014DA2]' : 'text-black'}`}
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
                  className='bg-center rounded-[.625rem] bg-cover bg-no-repeat px-[1.375rem] py-4 w-full h-[23.875rem] flex justify-start items-end'
                >
                  <div className="cardBody text-white">
                    <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>{item.name}</h4>
                    <p className="text-base leading-[1.8125rem] font-normal">{item.message}</p>
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
            <section className="services my-[4.6875rem] py-[4.6875rem] bg-gradient-to-b from-[#0B6F4F] via-[#021811] to-[#021711] ">
                <div className="main-container">
                    <div className="section-header lg:text-start text-center text-white mb-[2.8125rem]">
                        <div className="flex justify-between items-center">
                            <h3 className="text-[3rem] font-extrabold text-balance mb-[1.625rem]">Gain Insights into <br /> our Services</h3>
                            <Link to="/" className="bg-transparent text-white border border-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                Skip <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>

                        </div>
                        <p className="text-base leading-[1.625rem] font-medium">Explore the comprehensive suite of services we offer, designed to transform your ideas into impactful digital solutions. From initial strategy and design to development, deployment, and ongoing support , we provide everything you need to build and scale top-performing Android applications. Dive deeper to see how we help businesses achieve their goals through innovation, efficiency, and expert execution.</p>
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
                        {gainSlider.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className="flex  justify-center items-center !h-auto pb-[4.875rem]"
                                >
                                    <div style={{ backgroundImage: `url(${item.image})` }} className="min-h-[51.5rem] text-white flex justify-start items-end bg-center bg-no-repeat bg-cover rounded-[1.5625rem] relative px-12 py-28">
                                        <div className="content max-w-7xl">
                                            <h4 className="text-[3rem] font-extrabold text-balance mb-[1.625rem]">{item.title}</h4>
                                            <p className='text-xl leading-[2.1875rem] my-8'>{item.para}</p>
                                            <Link to="/" className="bg-transparent text-white border border-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                                Know More <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>


                </div>
            </section>
            {/* Gain Insights into our Services end */}

            {/* Transformations section start */}
            <section className="transformations my-[4.6875rem]">
                <div className="main-container">
                    <div className="flex lg:flex-row flex-col justify-center items-center 2xl:gap-10 ">
                        <div className="flex-[1_1_23.125rem] max-xl:hidden max-w-[23.125rem] max-lg:mx-auto lg:order-1 order-2">
                            <img src={vectorGirl} alt="robo image" className='h-full w-full object-contain' />
                        </div>
                        <div className="flex-1 lg:order-2 order-1 flex justify-center items-stretch flex-wrap gap-10">

                            <div className="flex-[1_1_23.3125rem] text-black rounded-10 py-9 rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[2rem] leading-[3rem] font-extrabold mb-3'>Fuelling your digital transformation and assurance goals</h4>
                                <p className="text-base leading-[1.625rem]">We lead with innovation to deliver resilient solutions with maximum impact. We instill quality throughout the product development lifecycle with end-to-end service capabilities, converging development and quality assurance domains.</p>
                            </div>
                            <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] font-semibold mb-3 pe-24'>Adapting Next Gen Technologies</h4>
                                <p className="text-base leading-[1.625rem] font-normal">We leverage next-gen and AI technologies in our Digital Assurance and engineering solutions to ensure you make data-driven decisions, streamline processes, and optimize workflows through advanced analytics, ML, and AI-driven automation.</p>
                            </div>
                            <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] font-semibold mb-3 pe-24'>Leading through innovation</h4>
                                <p className="text-base leading-[1.625rem] font-normal">Our experienced resource pool implements an innovation-led journey of exploration, experimentation, and evolution. Our Quality Engineering is at the forefront of innovation with experimentation, iteration, rapid prototyping to quickly validate ideas.</p>
                            </div>
                            <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] font-semibold mb-3 pe-24'>Focusing on the Customer's Business Outcomes</h4>
                                <p className="text-base leading-[1.625rem] font-normal">Our tailored solutions address your specific business goals and needs. We are your one-stop-shop for Quality Engineering services capabilities from functional to non-functional testing with next-gen testing services like AI, RPA, Cloud.</p>
                            </div>
                            <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] font-semibold mb-3 pe-24'>Digital Engineering with Quality DNA</h4>
                                <p className="text-base leading-[1.625rem] font-normal">Our expertise on end-to-end digital engineering empowers businesses to embrace change, drive growth, and unlock their full potential in the digital age. As the world&apos;s 5th largest QA & software testing company, quality is in our DNA.</p>
                            </div>
                            <div className="flex-[1_1_23.3125rem] bg-[#C6EBDF] rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] font-semibold mb-3 pe-24'>Scaling with Agility</h4>
                                <p className="text-base leading-[1.625rem] font-normal">We provide solutions based on real-world usage and insights, enabling clients to iterate rapidly, refine their ideas, and drive innovation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Transformations section end */}

            {/* Analyst section start  */}
               <section style={{ backgroundImage: `url(${analystBg})` }} className="analyst my-[4.6875rem] py-[4.6875rem]">
                <div className="main-container">
                    <div className="lg:flex 2xl:flex-row flex-col justify-center gap-10 items-stretch text-white">
                        <div className="2xl:w-[30%] w-full lg:text-start text-center">
                            <h3 className='text-[2.5rem] leading-[3.1875rem] font-extrabold'>Analyst <br className='max-lg:hidden' />
                                Recognition</h3>

                            <p className='text-xl leading-[2.125rem] font-normal mt-[1.5625rem] pb-[2.3125rem]'>
                                Our AI development services company delivers cutting-edge computer vision models for image recognition, object detection, and quality inspections. These models are powered by our AI software development services to enhance efficiency.
                            </p>
                            <Link to="/" className="bg-transparent text-white border border-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                Know More <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>

                        </div>
                        <div className="2xl:w-[70%] w-full max-lg:mt-10">
                            <div className="flex lg:flex-row flex-row flex-wrap justify-start items-stretch lg:h-[39.125rem] gap-5">
                                {openSlide.map((item, index) => (
                                    <div onMouseEnter={() => setOpen(index + 1)} key={index} className={`transition-all duration-1000 overflow-hidden max-lg:h-[25rem] max-lg:flex-[1_1_300px] ${isOpen == index + 1 ? 'lg:w-[39rem] lg:flex-[1_1_39rem] ' : 'lg:w-[10%] lg:flex-[1_1_10%] '}`}>
                                        <div style={{ backgroundImage: `url(${item.image})` }} className='bg-center rounded-[.625rem] bg-cover bg-no-repeat px-[1.375rem] py-4 w-full h-full flex justify-start items-end relative'>
                                            <h4 className={`text-[1.75rem] leading-[2.4375rem] font-semibold max-lg:hidden absolute bottom-5 left-10 mb-3 text-nowrap texto rotate-180 tracking-wide  transition-all duration-1000  delay-100 ${isOpen == index + 1 ? 'opacity-0' : 'opacity-100 delay-700'}`}>{item.title}</h4>
                                            <div className={`cardBody text-white transition-all duration-1000 delay-500 ${isOpen == index + 1 ? 'mb-0 opacity-100' : 'lg:-mb-32 lg:opacity-0'}`}>
                                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 text-nowrap tracking-wide'>{item.title}</h4>
                                                <p className=" text-base leading-[1.8125rem] font-normal min-w-[20rem]">{item.para}</p>
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
                        <h3 className=" md:text-5xl sm:text-[2.625rem] text-[2.55rem] font-extrabold text-black mb-5">
                            Turn Your Team into Test Automation Experts
                        </h3>
                        <p className="text-xl font-normal text-black mb-[1.375rem]">Leverage user-friendly keywords and smart automation to unify experiences across teams and deliver quality releases at enterprise scale.</p>
                    </div>

                    <div className="tabsForCloud bg-white border border-[#d3d3d3] rounded-[15px] shadow-2xl shadow-black/10 py-10 px-[2.6875rem]">
                        <ul className=' flex justify-start items-center gap-10 overflow-x-auto hide-scroll mb-14'>
                            {tabBtn.map((btn, index) => (
                                <li onClick={() => setActiveTab(index + 1)} key={index} className={`text-xl leading-[2.4375rem] font-bold text-nowrap cursor-pointer pb-3 border-b-2 transition-all duration-300 ${isActiveTab === index + 1 ? 'text-pine-700 border-pine-700' : ' text-black border-transparent '}`}>{btn}</li>
                            ))}
                        </ul>
                        {tabContent.map((item, index) => (
                            <div key={index} className={`lg:flex-row flex-col justify-center items-center 2xl:gap-32 lg:gap-20 gap-5 ${isActiveTab == index + 1 ? 'flex' : 'hidden'}`}>
                                <div className="lg:flex-[1_1_51.625rem]  max-lg:mx-auto lg:order-2 order-1  relative lg:pe-[3.375rem]">
                                    <h4 className="texto absolute -top-5 right-0 max-lg:hidden rotate-0 tracking-[10px] text-nowrap 2xl:text-[1.6875rem] text-xl leading-[2.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#005163] to-[#01090A]">Automation Experts</h4>

                                    <img src={item.image} alt="cloudcard image" className='h-full w-full rounded-[.9375rem] object-contain' />
                                </div>
                                <div className="lg:flex-[1_1_29.25rem] lg:order-1 order-2 lg:text-start text-center">

                                    <p className='text-xl leading-[2.125rem] text-black font-normal my-9'>{item.para}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Cloud section end  */}
            <GetInTouch showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}


export default QualityAnalysis