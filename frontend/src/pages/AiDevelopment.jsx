import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import AiBg from "/AiBg.webp";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import CompanyLogoSlider from "../components/CompanyLogoSlider";

// images
import AiCoLogo from "/AiCoLogo.svg";

import whyAiBot from "/whyAiBot.svg";

import AiLogoBg from "/AiLogoBg.webp";
import AiLogo from "/AiLogo.svg";

import object from "/object.svg";
// lang icons 0 to 5 start 
import langlogo1 from '/logoIcons0/lang1.svg'
import langlogo2 from '/logoIcons0/lang2.svg'
import langlogo3 from '/logoIcons0/lang3.svg'
import langlogo4 from '/logoIcons0/lang4.svg'
import langlogo5 from '/logoIcons0/lang5.svg'
import langlogo6 from '/logoIcons0/lang6.svg'
import langlogo7 from '/logoIcons0/lang7.svg'
import langlogo8 from '/logoIcons0/lang8.svg'
// lang icons 1 to 5 start
import langlogo11 from "/logoIcons1/lang1.svg";
import langlogo12 from "/logoIcons1/lang2.svg";
import langlogo13 from "/logoIcons1/lang3.svg";
import langlogo14 from "/logoIcons1/lang4.svg";
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
import langlogo34 from "/logoIcons3/lang4.svg";
import langlogo35 from "/logoIcons3/lang5.svg";
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
import pillersBg from "/pillersBg.webp";
import pillerRobo from "/pillerRobo.svg";

import AiTech from "/AiTech.webp";
import { LuMoveRight } from "react-icons/lu";
import GetInTouch from "../components/GetInTouch";
const AiDevelopment = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRefLang = useRef(null);
  const nextRefLang = useRef(null);
    const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [isactiveModalStep, setActiveModalStep] = useState(1);
   const [isActiveSlide, setActiveSlide] = useState(1);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [services, setServices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const aiEnhance = [
    "AI Consultation",
    "AI Software Development",
    "AI App Development",
    "Enterprise AI Solutions Development",
    "AI Chatbot Development Services",
    "Generative AI Development Services",
    "Computer Vision Applications",
    "Predictive Analytics",
    "Machine Learning Model Development",
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

  useEffect(() => {
    const fetchAiSolutions = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/ai`);
        if (res.data.success) {
          console.log("Fetched AI Solutions:", res.data.data);
          setCards(res.data.data);
        } else {
          console.error("Failed to fetch AI solutions");
        }
      } catch (err) {
        console.error("Error fetching AI solutions:", err);
      }
    };

    fetchAiSolutions();
  }, []);
  useEffect(() => {
    const fetchAIServices = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/ai_service`);
        if (response.data.success) {
          setServices(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching AI services:", error);
        setError("Failed to load AI services");
      } finally {
        setLoading(false);
      }
    };

    fetchAIServices();
  }, []);

  if (loading) return <div>Loading AI services...</div>;
  // if (error) return <div>{error}</div>;
  // if (!services.length) return <div>No AI services available</div>;
 const logoIcon0 = [langlogo1, langlogo2, langlogo3, langlogo4, langlogo5, langlogo6, langlogo7, langlogo8]
    const logoIcon1 = [langlogo11, langlogo12, langlogo13, langlogo14, langlogo15, langlogo16]
    const logoIcon2 = [langlogo21, langlogo22, langlogo23, langlogo24, langlogo25, langlogo26, langlogo27, langlogo28, langlogo29]
    const logoIcon3 = [langlogo31, langlogo32, langlogo33, langlogo34, langlogo35, langlogo36, langlogo37, langlogo38, langlogo39]
    const logoIcon4 = [langlogo41, langlogo42, langlogo43, langlogo44, langlogo45]
    const logoIcon5 = [langlogo51, langlogo52, langlogo53, langlogo54]
   const slides = [
        { item: logoIcon0 },
        { item: logoIcon1 },
        { item: logoIcon2 },
        { item: logoIcon3 },
        { item: logoIcon4 },
        { item: logoIcon5 },
    ]

  const modalTabContent = [1, 2, 3, 4, 5, 6];
  const stackTab = [
    "Programming Languages",
    "Frameworks",
    "Databases",
    "Devops",
    "Payment Gateways",
    "Clouds",
  ];
  return (
    <>
      {/*landing area of Ai Development sections start  */}
      <section className="landing mb-[4.6875rem] min-h-svh flex flex-col justify-center items-center ">
        <div
          style={{ backgroundImage: `url(${AiBg})` }}
          className="landing flex-1 w-full bg-bottom bg-cover bg-no-repeat flex justify-center items-center "
        >
          <div className="w-full max-w-[64.1875rem] m-auto text-center">
            <h5 className="text-base font-medium rounded-full bg-white/15 text-white px-8 py-[1.125rem] w-fit mx-auto mb-8">
              AI solutions that deliver real ROI
            </h5>
            <h1 className=" 2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-5">
              Best AI Development Company
            </h1>
            <p className="2xl:text-[1.10rem] text-[1rem] font-normal text-white mb-[1.375rem]">
              We create flexible, smart AI applications that are tailored to the goals of your company.Creativity, accuracy, and effective results-oriented development are what our clients trust us with.

            </p>
            
            <button onClick={() => setShowModal(true)}
              className="bg-[#22D5E4] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
            >
              Consult Our Experts{" "}
              <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center">
                <GoArrowRight className="text-[18px] -rotate-12 text-pine-700" />{" "}
              </span>
            </button>
          </div>
        </div>

        <div className="flex-[0_1_0%] w-full bg-gradient-to-r from-[#005163] via-[#01313B] to-[#01090A] shadow-[0px_4px_4px_0px_#00000040]">
          <div className="main-container !pe-0 py-[1.25rem] flex justify-start items-center">
            <div className="flex-[0_1_0%] py-5 pe-8  border-r-2 border-white max-lg:hidden">
              <h4 className="text-xl font-bold text-white text-nowrap">
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
      </section>
      {/*landing area of Ai Development sections end  */}

      {/* Why Choose AI section start */}
      <section className="whyChooseAi bg-gradient-to-r from-white to-[#D5D5D5] my-[4.6875rem] py-[4.6875rem]">
        <div className="main-container">
          <div className="section-header text-center mb-[5.375rem] max-w-5xl mx-auto">
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-[1.625rem]">
              Why Choose AI Integrated Solutions For Your Business?
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-medium">
              AI-based tools will enhance decision-making, efficiency, and streamline operations. The solutions will help your company become more adaptable, competitive, and future-ready.

            </p>
          </div>
          <div className="flex flex-col lg:ps-[21.75rem] relative">
            <img
              src={whyAiBot}
              alt="ai images"
              className="absolute top-0 left-0 max-lg:hidden"
            />

            <div className="flex gap-2.5 justify-end items-stretch mt-[3.25rem] order-2">
              <button ref={prevRef} className="cursor-pointer order-1">
                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                  <GoArrowLeft className="size-7" />
                </div>
              </button>

              <button ref={nextRef} className="cursor-pointer order-2">
                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                  <GoArrowRight className="size-7" />
                </div>
              </button>
            </div>

            {cards.length > 0 ? (
              <Swiper
                className="mySwiper w-full [&>.swiper-wrapper]:items-stretch order-1"
                spaceBetween={46}
                slidesPerView={1}
                speed={1000}
                autoplay={{ delay: 5000 }}
                grabCursor={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1536: {
                    slidesPerView: 3,
                  },
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
              >
                {cards.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center !h-auto"
                  >
                    <div className="h-full w-full">
                      <div
                        style={{
                          backgroundImage: `url(${API_BASE_URL}/images/${item.image})`,
                        }}
                        className="bg-center rounded-[.625rem] bg-cover bg-no-repeat px-[1.375rem] py-4 w-full h-[23.875rem] flex justify-start items-end"
                      >
                        <div className="cardBody text-white">
                          <h4 className="text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24">
                            {item.title}
                          </h4>
                          <p className="text-base leading-[1.8125rem] font-normal">
                            {item.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="w-full text-center py-10 order-1">
                <p>Loading AI solutions...</p>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Why Choose AI section end */}

      {/* .positions list section start  */}
      <section className="open-positions my-[4.6875rem] pb-[3rem]">
        <div className="main-container">
          <div className="sectionHeader text-center text-black max-w-5xl mx-auto mb-[4rem]">
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold mb-[1.875rem]">
              Enhance Profitability with Our Intelligent AI Development Services
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.75rem]">
            Automate the processes with state-of-the-art AI solutions, decrease costs, and support smarter growth.Our experienced team delivers tailor-made AI solutions that drive productivity and maximize profitability.

            </p>
          </div>

          {/* Positions */}
          <div className="">
            <div className="flex gap-[1.875rem] lg:flex-row flex-col lg:justify-between justify-center items-stretch">
              <div className="lg:w-[32.5625rem] bg-gradient-to-r from-[#005163] to-[#01090A] lg:px-[2.25rem] lg:py-[3rem] p-5 pb-0 rounded-[.9375rem]">
                <ul className="lg:block flex justify-start items-center gap-5 max-lg:mb-5 overflow-x-auto hide-scroll">
                  {services.map((service, index) => (
                    <li key={service._id || index} className="">
                      <div
                        onClick={() => setSelectedIndex(index)}
                        className="flex justify-between items-center py-[1.3125rem] lg:gap-4 gap-2 cursor-pointer border-b border-white/10"
                      >
                        <span
                          className={`text-xl leading-[1.625rem] text-nowrap ${
                            selectedIndex === index
                              ? "text-white font-bold"
                              : "text-white/55"
                          }`}
                        >
                          {service.title}
                        </span>
                        <LuMoveRight
                          className={`text-2xl ${
                            selectedIndex === index
                              ? "text-white"
                              : "text-white/55"
                          }`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {services.length > 0 && (
                <div
                  className={`flex-1 rounded-[.9375rem] overflow-hidden flex-col flex`}
                >
                  <div className="image flex-1 overflow-hidden rounded-t-[.9375rem]">
                    <img
                      src={`${API_BASE_URL}/images${services[selectedIndex].image}`}
                      alt={services[selectedIndex].title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="cardBody text-white bg-gradient-to-r from-[#005163] to-[#01090A] p-9 rounded-b-[.9375rem]">
                    <h4 className="text-[2.5rem] font-bold mb-3.5">
                      {services[selectedIndex].title}
                    </h4>
                    <p className="text-xl leading-[2.125rem] font-normal">
                      {services[selectedIndex].message}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* .positions list section end  */}

      {/* Ai Work section Start */}
      <section
        style={{ backgroundImage: `url(${AiLogoBg})` }}
        className="Ai-work my-[4.6875rem] lg:py-[8.1875rem] py-[4.6875rem] bg-center bg-cover bg-no-repeat"
      >
        <div className="main-container">
          <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[3.8125rem]">
            <img
              src={AiLogo}
              alt=""
              className="mx-auto object-contain mb-[2.5625rem] block filter mix-blend-luminosity"
            />
            <p className="2xl:text-[1.10rem] text-[1rem] text-white leading-[2.1875rem] font-medium">
              Artificial intelligence (AI) allows machines to emulate human intelligence by learning data and improving over time.It is used to make more intelligent decisions, automate tasks, and transform industries rapidly and precisely.
            </p>
          </div>

          <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#DCE1FC] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  20%
                </span>
              </div>
              <div className="text">
                <span className="text-[1.125rem] leading-[2.125rem] font-mediums">
                  Reduction in Manual Work
                </span>
              </div>
            </div>

            <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#FFEDEF] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  30%
                </span>
              </div>
              <div className="text">
                <span className="text-[1.125rem] leading-[2.125rem] font-mediums">
                  Lower Operational Costs
                </span>
              </div>
            </div>

            <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#E1FCDC] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  40%
                </span>
              </div>
              <div className="text">
                <span className="text-[1.125rem] leading-[2.125rem] font-mediums">
                  Faster Data Reporting
                </span>
              </div>
            </div>

            <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#FFF9E6] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  30%
                </span>
              </div>
              <div className="text">
                <span className="text-[1.125rem] leading-[2.125rem] font-mediums">
                  Increased Productivity
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[4.625rem]">
             <button onClick={() => setShowModal(true)} className="bg-[#22D5E4] text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></button>
           
          </div>
        </div>
      </section>
      {/* Ai Work section end */}

      {/* Models section start  */}
      <section className="models my-[4.6875rem]">
    <div className="main-container">
        <div className="w-full max-w-[64.1875rem] m-auto text-center lg:mb-[5.3125rem] mb-14">
            <h5 className='text-base font-medium rounded-full bg-[#E3E3E3] text-black px-8 py-[1.125rem] w-fit mx-auto mb-8'>We are #1 AI Development Company around the Globe</h5>
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-5">
                Models our AI Developers are Proficient with
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] font-normal text-black mb-[1.375rem]">Our team is very proficient in designing and optimizing advanced AI models, including computer vision, machine learning, deep learning, and natural language processing.We work with frameworks like TensorFlow, PyTorch, OpenCV, and transformer-based models to provide robust AI solutions.</p>
        </div>

        <div className="tabsForModels bg-white border border-[#d3d3d3] rounded-[15px] shadow-2xl shadow-black/10 py-10 md:px-[2.6875rem] p-4">
            <ul className=' flex justify-start items-center md:gap-[4.9375rem] sm:gap-7 gap-4 overflow-x-auto hide-scroll md:mb-14 mb-8'>
                <li onClick={() => setActiveModalStep(1)} className={`sm:text-xl text-base leading-[2.4375rem] text-nowrap sm:pb-3 pb-1 border-b-2 ${isactiveModalStep == 1 ? 'border-[#342674] text-[#342674]' : 'border-transparent text-black'}`}>Computer Vision Models</li>
                <li onClick={() => setActiveModalStep(2)} className={`sm:text-xl text-base leading-[2.4375rem] text-nowrap sm:pb-3 pb-1 border-b-2 ${isactiveModalStep == 2 ? 'border-[#342674] text-[#342674]' : 'border-transparent text-black'}`}>Machine Learning Models</li>
                <li onClick={() => setActiveModalStep(3)} className={`sm:text-xl text-base leading-[2.4375rem] text-nowrap sm:pb-3 pb-1 border-b-2 ${isactiveModalStep == 3 ? 'border-[#342674] text-[#342674]' : 'border-transparent text-black'}`}>NLP Models</li>
                <li onClick={() => setActiveModalStep(4)} className={`sm:text-xl text-base leading-[2.4375rem] text-nowrap sm:pb-3 pb-1 border-b-2 ${isactiveModalStep == 4 ? 'border-[#342674] text-[#342674]' : 'border-transparent text-black'}`}>Deep Learning Models</li>
                <li onClick={() => setActiveModalStep(5)} className={`sm:text-xl text-base leading-[2.4375rem] text-nowrap sm:pb-3 pb-1 border-b-2 ${isactiveModalStep == 5 ? 'border-[#342674] text-[#342674]' : 'border-transparent text-black'}`}>Hybrid Models</li>
                <li onClick={() => setActiveModalStep(6)} className={`sm:text-xl text-base leading-[2.4375rem] text-nowrap sm:pb-3 pb-1 border-b-2 ${isactiveModalStep == 6 ? 'border-[#342674] text-[#342674]' : 'border-transparent text-black'}`}>Generative Models</li>
            </ul>
            {modalTabContent.map((item, index) => (
                <div key={item} className={`flex lg:flex-row flex-col justify-center items-stretch 2xl:gap-32 gap-20 ${isactiveModalStep == index + 1 ? 'flex' : 'hidden'}`}>
                    <div className="flex-[1_1_26.3125rem] max-w-[26.3125rem] max-lg:mx-auto lg:order-1 order-2">
                        <img src={object} alt="object image" className='h-full w-full object-contain' />
                    </div>
                    <div className="flex-1 lg:order-2 order-1 lg:text-start text-center">
                        {/* <h3 className='md:text-[2.5rem] text-[2rem] font-extrabold text-black'>{item}</h3> */}
                        <p className='2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] text-black font-normal my-9'>
                            {index === 0 && "Our areas of interest include developing state-of-the-art computer vision models that enable computers to see, analyze and interpret visual data. Whether you require object detection or face recognition, our models can aid in automating intelligence and decisions within real-time."}
                            {index === 1 && "We develop Machine learning models that learn and make predictions to automate complex tasks, using power machine models. Our solutions are customizable to address practical business problems of diverse industries."}
                            {index === 2 && "We create sophisticated Natural Language Processing (NLP) models which comprehend, interpret and produce human languages. Using chatbots, sentiment analysis, or models in all spheres of life, our technology can optimize the communication process and reveal text data insights."}
                            {index === 3 && "We create and implement deep learning systems or models to resemble the human brain to handle computation-heavy data such as images, audio and text. The applications run at a high-performance level in computer vision, speech recognition, and natural language understanding using these models."}
                            {index === 4 && "We create a mixed AI model that engages the advantages of several methods together, such as machine learning, deep learning, and rule-based systems, to improve their accuracy and versatility. These models best fit into perceptively tackling real-world complex problems more productively."}
                            {index === 5 && "We build generative AI that can create entirely new content, like text, images and music, by learning from existing data. They give rise to novel and innovative creative opportunities, along with content generation possibilities across industries."}
                        </p>
                        <button onClick={() => setShowModal(true)} className="bg-[#342674] text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></button>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>
      {/* Models section end  */}

      {/* 5 Pillers section start */}
       <section style={{ backgroundImage: `url(${pillersBg})` }} className="5_pillers my-[4.6875rem] bg-center bg-no-repeat bg-cover">
                <div className="main-container">
                    <div className="flex lg:flex-row flex-col justify-center items-start ">
                        <div className="flex-[1_1_24.9375rem] max-xl:hidden max-w-[24.9375rem] max-lg:mx-auto lg:order-1 order-2">
                            <img src={pillerRobo} alt="robo image" className='h-full w-full object-contain' />
                        </div>
                        <div className="flex-1 lg:order-2 order-1 flex justify-center items-stretch flex-wrap gap-10 py-[4.6875rem]">

                            <div className="sm:max-w-[23.3125rem] flex-[1_1_23.3125rem] text-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='md:text-[2.1875rem] text-[2rem] font-bold'>5 Pillars of Our AI Development Services</h4>
                                <p className="text-base leading-[1.625rem]">TechDevise is a leading AI development firm with the pillars of Advanced Technology, Custom Solutions, Expert Talent, Seamless Integration and End-to-End Support to execute even the most complicated AI projects successfully.</p>
                            </div>
                            <div className="sm:max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Data Quality</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal"> In ensuring quality of the data, we ascertain reliability, completeness, consistency, and accuracy in all data sets. Effective AI and analytics solutions depend on clean, well structured data.</p>
                            </div>
                            <div className="sm:max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Explainability</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">Explainability is one of the key aspects of the AI systems we design to make model decisions transparent and comprehensible. This assists stakeholders to interpret results with certainty, adhere to the rules and make informed decisions.</p>
                            </div>
                            <div className="sm:max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Scalability</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal"> Our artificial intelligence is designed to be scalable, which means that they easily fit the evolving needs of your business. We design systems that can operate reliably at any scale, whether it is supporting an increasing amount of data or supporting an increasing amount of users.</p>
                            </div>
                            <div className="sm:max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Predictable ROI</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal"> We target to deliver AI solutions with measurable impact and a consistent ROI. Our strategic approach creates real business value, efficiency, and sustained growth on every project.</p>
                            </div>
                            <div className="sm:max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Security</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">Security is the most important aspect in our overall AI development process which ensures that your systems and data will never be in danger. The privacy of our data and data security related deployments and compliance observances are on an industrial scale of criteria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      {/* 5 Pillers section end */}

      {/* AI tech section start */}
    <section className="aiTech my-[4.6875rem]">
                <div className="main-container">
                 <div className="w-full max-w-6xl m-auto text-center mb-[5.3125rem]">
                        <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-8">
                            Tech Stack, We Use As an Artificial
                            Intelligence Development Company!
                        </h3>
                        <p className="2xl:text-[1.250rem] text-[1rem] font-normal text-black mb-[4.375rem]">Our AI app developers excel in a diverse and advanced tech stack. From backend frameworks to development
                            tools, we meticulously select the best-in-class components to ensure your app meets the most stringent technical standards.</p>
                    </div>

                    <div className="">
                        <div style={{ backgroundImage: `url(${AiTech})` }} className=" bg-no-repeat bg-center lg:py-[2.1875rem] lg:px-[3.125rem] p-5 rounded-[.625rem] ">
                            <ul className='flex justify-between flex-nowrap text-white overflow-x-scroll hide-scroll md:gap-[4.5rem] gap-8 lg:mb-10 mb-4'>
                                {stackTab.map((item, index) => (
                                    <li onClick={() => setActiveSlide(index + 1)} key={index} className={`2xl:text-[1.25rem] text-[1rem] cursor-pointer lg:leading-[2.4375rem] font-semibold text-nowrap relative w-fit mb-3 before:absolute before:h-[.125rem] before:bg-white before:bottom-0 before:left-0 before:transition-all before:duration-300 ${isActiveSlide == index + 1 ? ' before:w-full' : ' before:w-0'}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col">

                                <div className="hidden gap-2.5 justify-end items-stretch lg:mt-[3.25rem] mt-4 order-2">
                                    <button ref={prevRefLang} className="cursor-pointer order-1">
                                        <div className="size-12 rounded-full aspect-square flex justify-center items-center text-black bg-white">
                                            <GoArrowLeft className="size-7" />
                                        </div>
                                    </button>

                                    <button ref={nextRefLang} className="cursor-pointer order-2">
                                        <div className="size-12 rounded-full aspect-square flex justify-center items-center text-black bg-white">
                                            <GoArrowRight className="size-7" />
                                        </div>
                                    </button>
                                </div>

                                {slides.map((slide, index) => (

                                    <Swiper
                                        className={`mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:!ease-linear order-1  ${isActiveSlide == index + 1 ? 'flex' : '!hidden'}`}
                                        slidesPerView={'auto'}
                                        spaceBetween={30}
                                        speed={3000}
                                        loop={true}
                                        autoplay={{ delay: 1, disableOnInteraction: false }}
                                        grabCursor={true}
                                        modules={[Navigation, Autoplay]}
                                        onInit={(swiper) => {
                                            // Re-assign custom buttons after swiper is initialized
                                            swiper.params.navigation.prevEl = prevRefLang.current;
                                            swiper.params.navigation.nextEl = nextRefLang.current;
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                        }}
                                        navigation={{
                                            prevEl: prevRefLang.current,
                                            nextEl: nextRefLang.current
                                        }}
                                    >

                                        {slide.item.map((itm, index) => {
                                            return (
                                                <SwiperSlide
                                                    key={index}
                                                    className="flex justify-center items-center lg:!w-[10rem] !w-[6rem]"
                                                >
                                                    <img
                                                        src={itm}
                                                        alt='logo'
                                                        className="block object-contain lg:h-[9.375rem] lg:w-[10.5rem] mx-auto"
                                                    />
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      {/* AI tech section end */}
          <GetInTouch showModal={showModal} setShowModal={() => { setShowModal(!showModal) }} />
    </>
  );
};

export default AiDevelopment;
