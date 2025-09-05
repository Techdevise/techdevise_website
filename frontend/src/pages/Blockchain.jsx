import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import play from "/play.svg";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import video from "/blockchainBg.mp4";
// images
import blockchainBg from "/blockchainBg.webp";
import playVector from "/playVector.svg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
// Fist slider
import axios from "axios";

import sliderIconF from "/sliderIconF.svg";

import sliderSBg from "/sliderSBg.webp";
import slideTBg from "/slideTBg.webp";

import slideSIcon1 from "/slideSIcon1.svg";
import slideSIcon2 from "/slideSIcon2.svg";
import slideSIcon3 from "/slideSIcon3.svg";

import slideTIcon1 from "/slideTIcon1.svg";
import slideTIcon2 from "/slideTIcon2.svg";
import slideTIcon3 from "/slideTIcon3.svg";

import boxArrowDown from "/boxArrowDown.svg";
import boxArrowUp from "/boxArrowUp.svg";

import platform1 from "/Platform1.svg";
import platform2 from "/Platform2.svg";
import platform3 from "/Platform3.svg";
import platform4 from "/Platform4.svg";
import platform5 from "/Platform5.svg";
import platform6 from "/Platform6.svg";
import platform7 from "/Platform7.svg";
import platform8 from "/Platform8.svg";
import platform9 from "/Platform9.svg";
import platform10 from "/Platform10.svg";

import expertise1 from "/expertise1.png";
import expertise2 from "/expertise2.png";
import expertise3 from "/expertise3.png";
import GetInTouch from "../components/GetInTouch";

const Blockchain = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const BASE_URL = `${API_BASE_URL}/images`;
      const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef2 = useRef(null);
  const nextRef2 = useRef(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/blockchain_con`);
        const data = await res.json();
        if (data.success) {
          setSlides(data.data);
        } else {
          console.error("API Error:", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchSlides();
  }, []);



  const slideS = [
    {
      icon: slideSIcon1,
      title: "Blockchain Bridges",
      para: "We provide effective and safe blockchain bridges to promote smooth communication across various blockchain networks. This increases your project's reach and compatibility across local networks while enabling easy asset transfers, data sharing, and cross-chain functionality.",
    },
    {
      icon: slideSIcon2,
      title: "Metaverse Spaces",
      para: "Be it a virtual office, gallery, event space, or brand experience, our team designs immersive and engaging metaverse environments that are customized to your specifications. We use technology and creativity to create inspiring and engaging digital environments.",
    },
    {
      icon: slideSIcon3,
      title: "Decentralized Exchanges (DEX)",
      para: "We create and construct safe, easy-to-use decentralized exchange systems that provide users complete asset control. Without sacrificing security or transparency, our DEX systems provide real-time trading, liquidity choices, and sophisticated functionality.",
    },

    {
      icon: slideSIcon1,
      title: "Smart Contracts",
      para: "Our developers create tamper-proof, effective smart contracts based on your business logic. Additionally, we do thorough audits of contracts to make sure they are secure, error-free, and operate precisely as planned on the blockchain network of your choice.",
    },
    {
      icon: slideSIcon2,
      title: "NFT Marketplaces",
      para: "Users can mint, purchase, sell, and trade digital assets on our scalable and reliable NFT marketplaces. We offer the resources and design to facilitate user development, whether it is for collectibles, gaming, music, or art.",
    },
    {
      icon: slideSIcon3,
      title: "Crypto Wallets",
      para: "Secure, multi-currency support is provided by our custom crypto wallet development services for both web and mobile platforms. For both personal and business use, features include biometric security, DeFi integration, private key management, and smooth transactions.",
    },
  ];

  const slideT = [
    {
      icon: slideTIcon1,
      title: "Certified Blockchain Experts",
      para: "Tech Devise’s team includes certified blockchain professionals who deliver secure, innovative, and reliable decentralized solutions for any industry.",
    },
    {
      icon: slideTIcon2,
      title: "Client-Focused Blockchain Approach",
      para: "At Tech Devise, we tailor every blockchain solution around your business goals, ensuring practical value and measurable outcomes.",
    },
    {
      icon: slideTIcon3,
      title: "Compliance-Assured Blockchain Products",
      para: "Our blockchain solutions are built to meet global regulatory standards, keeping your business safe, transparent, and legally sound.",
    },

    {
      icon: slideTIcon1,
      title: "24/7 Blockchain Support",
      para: "Tech Devise offers round-the-clock technical assistance, so your blockchain systems stay secure, updated, and fully operational anytime.",
    },
    {
      icon: slideTIcon2,
      title: "Quick Turnaround Time",
      para: "We put efficiency first and provide excellent blockchain solutions quickly—without sacrificing security, performance, or the objectives of your project.",
    },
    {
      icon: slideTIcon3,
      title: "Proven Track Record and Expertise",
      para: "With successful blockchain projects across industries, Tech Devise brings deep expertise and a strong portfolio you can trust.",
    },
  ];

  const platforms = [
    platform1,
    platform2,
    platform3,
    platform4,
    platform5,
    platform6,
    platform7,
    platform8,
    platform9,
    platform10,
  ];





  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/blogs`);
        if (response.data.success) {
          const sortedBlogs = [...response.data.data].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setBlogs(sortedBlogs.slice(0, 3)); // Show latest 3 blogs
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

  if (loading) {
    return <p className="text-center py-10">Loading blogs...</p>;
  }
  return (
    <>
      {/*landing area of BlockChain Development sections start  */}
     <section className="landing mb-[4.6875rem] min-h-svh relative flex justify-center items-center overflow-hidden">
  {/* Background Video */}
  <video
    src={video}
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Overlay Color */}
  <div className="absolute top-0 left-0 w-full h-full bg-[#061611] opacity-80"></div>

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
      Blockchain Development Company
    </h1>
    <p className="2xl:text-[1.10rem] text-[1rem] font-normal text-white mb-[1.375rem]">
      We help lead the transition to the web3 future with our cutting-edge
      blockchain development services, having experience with more than 40
      blockchain protocols.
    </p>
    <button
      onClick={() => setShowModal(true)}
      className="bg-pine-700 text-white inline-flex shine-effect p-1.5 cursor-pointer rounded-full items-center group/link justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
    >
      Consult Our Experts{" "}
      <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
        <FiArrowUpRight className="text-[18px] text-pine-700" />
      </span>
    </button>
  </div>
</section>
      {/*landing area of BlockChain Development sections end  */}

      {/* Re-Invent section Start */}
      <section className="re-invent my-[4.6875rem]">
        <div className="main-container">
          <div className="sectionHeader text-center max-w-6xl mx-auto mb-[5.4375rem]">
            <h2
              data-aos-delay="200"
              className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-7  text-center"
            >
              Re-Invent Security For Business With Our Blockchain App
              Development Services
            </h2>

            <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.1875rem] font-medium">
              Our secure Blockchain development solutions are helpful to both
              large organizations looking to re-invent the value chain and those
              aiming to launch a new business.
            </p>
          </div>

          <div className="flex gap-[1.8125rem] justify-center items-stretch lg:flex-row-reverse flex-col">
            <div className="2xl:w-[60%] lg:w-[70%] w-full">
              <div className="bg-white h-full rounded-[1.625rem] 2xl:py-[5.75rem] lg:py-16 py-12 2xl:px-[4.4375rem] lg:px-12 px-10">
                <div className="icon size-[7.9375rem] lg:mb-[1.9375rem] mb-6">
                  <img
                    src={sliderIconF}
                    alt="slider icon"
                    className="size-full"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex gap-2.5 justify-start mt-[1.9375rem] items-stretch order-2">
                    <button ref={prevRef} className="cursor-pointer"  aria-label="Previous slide">
                      <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                        <GoArrowLeft className="size-7" aria-hidden="true" />
                      </div>
                    </button>

                    <button ref={nextRef} className="cursor-pointer"   aria-label="Next slide">
                      <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
                        <GoArrowRight className="size-7" aria-hidden="true"/>
                      </div>
                    </button>
                  </div>

                  <Swiper
                    className="mySwiper w-full order-1"
                    spaceBetween={30}
                    slidesPerView={1}
                    speed={1000}
                    autoplay={{ delay: 5000 }}
                    grabCursor={false}
                    allowTouchMove={false}
                    modules={[Autoplay, Navigation]}
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
                    {slides.map((slide, index) => (
                      <SwiperSlide
                        key={index}
                        className="flex justify-center items-center"
                      >
                        <h3 className="2xl:text-[3rem] lg:text-[2.7rem] sm:text-[2.5rem] text-[2rem] leading-[4.3125rem] font-extrabold lg:mb-[1.9375rem] mb-6">
                          {slide.title}
                        </h3>

                        <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-medium">
                          {slide.message}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="2xl:w-[40%] lg:w-[30%] w-full">
              <Swiper
                className="mySwiper w-full h-full order-1"
                spaceBetween={30}
                slidesPerView={1}
                effect={"fade"}
                speed={1000}
                autoplay={{ delay: 5000 }}
                grabCursor={false}
                allowTouchMove={false}
                modules={[Autoplay, Navigation, EffectFade]}
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
                {slides.map((slide, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center !h-full"
                  >
                    <img
                      src={`${BASE_URL}/${slide.image}`}
                      alt="Slider Image"
                      className="h-full object-cover rounded-[1.625rem] w-full max-lg:max-h-[18.75rem]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Re-Invent section end */}

      {/* Solutions section start */}
      <section
        style={{ backgroundImage: `url(${sliderSBg})` }}
        className="solutions bg-center bg-cover bg-no-repeat my-[4.6875rem] py-[4.6875rem]"
      >
        <div className="main-container">
          <div className="section-header text-center lg:text-start mb-[5.375rem]">
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold  text-black mb-[1.625rem]">
              Blockchain Development Solutions We Deliver
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-medium max-w-6xl">
              With our professional blockchain development services, which are
              intended to revolutionize and improve your business operations
              with specialized, flexible solutions, you can unleash the full
              potential of your enterprise.
            </p>
          </div>
          <div className="flex flex-col lg:ps-[16.75rem] relative">
            <div className="flex gap-2.5 justify-end items-stretch mt-[3.25rem] order-2">
              <button ref={prevRef2} className="cursor-pointer order-1"  aria-label="Previous slide">
                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                  <GoArrowLeft className="size-7" aria-hidden="true"/>
                </div>
              </button>

              <button ref={nextRef2} className="cursor-pointer order-2" aria-label="Next slide">
                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                  <GoArrowRight className="size-7" aria-hidden="true"/>
                </div>
              </button>
            </div>
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
              {slideS.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex  justify-center items-center !h-auto"
                  >
                    <div className="2xl:max-w-[480px] h-full w-full bg-white rounded-[1.625rem] py-5 px-6 ">
                      <img
                        src={item.icon}
                        alt=""
                        className="block size-[6.125rem] object-contain mb-[1.125rem]"
                      />
                      <h4 className="text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24">
                        {item.title}
                      </h4>
                      <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal">
                        {item.para}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Solutions section end */}

      {/* Solutions section start */}
      <section className="solutions my-[4.6875rem] py-[4.6875rem]">
        <div className="main-container">
          <div className="section-header text-center lg:text-start mb-[5.375rem]">
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold  text-black mb-[1.625rem]">
              Why Are We The Perfect Fit To Be Your Blockchain Development
              Company?
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.625rem] font-medium max-w-6xl">
              We provide safe, scalable blockchain solutions that are customized
              to your particular company objectives by fusing certified
              experience, cutting-edge technology, and client-focused methods.
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${slideTBg})` }}
            className="flex flex-col  bg-center bg-cover bg-no-repeat py-[4.6875rem] px-[3.75rem] rounded-[1.625rem] overflow-hidden relative"
          >
            <div className="flex gap-2.5 justify-center items-stretch mt-[3.25rem] order-2">
              <button ref={prevRef2} className="cursor-pointer order-1"  aria-label="Previous slide">
                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                  <GoArrowLeft className="size-7" aria-hidden="true"/>
                </div>
              </button>

              <button ref={nextRef2} className="cursor-pointer order-2"   aria-label="Next slide">
                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                  <GoArrowRight className="size-7" aria-hidden="true"/>
                </div>
              </button>
            </div>
            <Swiper
              className="mySwiper w-full [&>.swiper-wrapper]:items-stretch order-1 !overflow-visible"
              spaceBetween={100}
              slidesPerView={1}
              speed={1000}
              loop={true}
              autoplay={{ delay: 5000 }}
              grabCursor={true}
              modules={[Autoplay, Navigation]}
              centeredSlides={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1536: {
                  slidesPerView: 3,
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
              {slideT.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex  justify-center items-center !h-auto pb-4 group"
                  >
                    <div className="mx-auto h-full w-full bg-white rounded-10 py-9 px-8 rounded-[1.625rem] relative scale-100 ">
                      <img
                        src={boxArrowDown}
                        alt="bottom arrow to top"
                        className="absolute -bottom-2 scale-110 left-3 w-full h-auto group-[.swiper-slide-active]:invisible group-[.swiper-slide-active]:opacity-0 group-[.swiper-slide-active]:bottom-0 transition-all duration-1000"
                      />
                      <img
                        src={boxArrowUp}
                        alt="top arrow to top"
                        className="absolute -top-2 scale-110 left-3 w-full h-auto invisible opacity-0 group-[.swiper-slide-active]:visible group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:top-0 transition-all duration-1000"
                      />
                      <img
                        src={item.icon}
                        alt=""
                        className="block size-[6.125rem] object-contain mb-[1.125rem]"
                      />
                      <h4 className="text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24">
                        {item.title}
                      </h4>
                      <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal">
                        {item.para}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Solutions section end */}

      {/* Transform section Start */}
      <section className="transform my-[4.6875rem] lg:py-[8.1875rem] py-[4.6875rem] bg-gradient-to-r from-[#FDFDFD] to-[#BBD2DC]">
        <div className="main-container">
          <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[3.8125rem]">
            <h2
              data-aos-delay="200"
              className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-7 text-center text-balance"
            >
              Let's Transform Your Operations with TechDevise Custom Blockchain
              Development
            </h2>

            <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.1875rem] font-medium">
              Allow TechDevise to transform your company with performance-,
              scalability-, and security-focused blockchain solutions. We
              develop technology that simplifies processes and opens up new
              digital opportunities from conception to implementation.
            </p>
          </div>

          <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            <div className="col py-[1.9375rem] px-[2rem] bg-[#DCE1FC] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  150+
                </span>
              </div>
              <div className="text">
                <span className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-mediums">
                  Dynamic Blockchain Professional
                </span>
              </div>
            </div>

            <div className="col py-[1.9375rem] px-[2rem] bg-[#FFEDEF] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  50+
                </span>
              </div>
              <div className="text">
                <span className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-mediums">
                  Projects Successfully Deployed
                </span>
              </div>
            </div>

            <div className="col py-[1.9375rem] px-[2rem] bg-[#E1FCDC] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  85+
                </span>
              </div>
              <div className="text">
                <span className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-mediums">
                  Client Triumph and Success
                </span>
              </div>
            </div>

            <div className="col py-[1.9375rem] px-[2rem] bg-[#FFF9E6] flex max-md:flex-wrap justify-center items-center gap-5">
              <div className="num">
                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">
                  98+
                </span>
              </div>
              <div className="text">
                <span className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-mediums">
                  Client Retention Rate
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[4.625rem]">
            <button
              onClick={() => setShowModal(true)}
              className="bg-pine-999 text-white shine-effect inline-flex p-1.5 cursor-pointer rounded-full group/link items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
            >
              Consult Our Experts{" "}
              <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
                <FiArrowUpRight className="text-[18px]  text-pine-700" />{" "}
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Transform section end */}

      {/* Platforms section Start */}
      <section className="platforms my-[4.6875rem]">
        <div className="main-container">
          <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[4.5625rem]">
            <h2
              data-aos-delay="200"
              className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-7  text-center text-balance"
            >
              Our Expertise In Blockchain Development Services Spans Multiple
              Platforms
            </h2>

            <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.1875rem] font-medium">
              We can create safe, scalable, and personalized solutions for
              Ethereum, BNB Chain, Polygon, and Solana thanks to our
              multi-platform blockchain development services knowledge.
            </p>
          </div>

          <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 lg:gap-[2.5625rem] gap-[1.5625rem]">
            {platforms.map((image, index) => (
              <div
                key={index}
                className="col border border-[#D3D3D3] shadow-2xl shadow-black/10 rounded-[1.625rem] lg:w-[18rem] lg:h-[15.4375rem] max-lg:size-[10.375rem] max-sm:size-[8.375rem] max-lg:aspect-square flex justify-center items-center"
              >
                <img
                  src={image}
                  alt="logo's of platform"
                  className="lg:size-auto size-[5rem]"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-[4.625rem]">
            <button
              onClick={() => setShowModal(true)}
              className="bg-pine-999 text-white shine-effect inline-flex cursor-pointer p-1.5 group/link rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
            >
              Consult Our Experts{" "}
              <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
                <FiArrowUpRight className="text-[18px] text-pine-700" />{" "}
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Platforms section end */}

      {/* Expertise section Start */}
      <section className="expertise my-[4.6875rem] lg:py-[8.1875rem] py-[4.6875rem] bg-gradient-to-r from-[#FDFDFD] to-[#F1F4E5]">
      <div className="main-container">
        <div className="sectionHeader text-center max-w-7xl mx-auto mb-[3.8125rem]">
          <h2
            data-aos-delay="200"
            className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-7 text-center text-balance"
          >
            Featured Blog
          </h2>
          <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.1875rem] font-medium">
            As a leading Blockchain development company, TechDevise only hires Blockchain developers with a proven track record. That’s why we can handle any task or project, even the most complicated ones.
          </p>
        </div>

        <div className="flex xl:flex-row flex-col justify-center items-stretch gap-[2.4375rem]">
          {/* Left column: two stacked blogs */}
          <div className="xl:flex-1 flex flex-col gap-[2.4375rem] justify-start items-stretch">
            {blogs.slice(0, 2).map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-[1.625rem] shadow-2xl shadow-black/5 border border-[#D3D3D3] px-7 py-[1.875rem] gap-[1.8125rem] flex justify-start min-[540px]:items-center min-[540px]:flex-row flex-col"
              >
                <div className="flex-[1_1_17.125rem] min-[540px]:max-w-[17.125rem] h-[18.9375rem] rounded-[1.625rem] overflow-hidden">
                  <img
                    src={`${BASE_URL}/${blog.image}`}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="cardBody flex-1">
                  <h6 className="text-xl font-semibold text-pine-700">Blog</h6>
                  <h5 className="text-xl font-bold text-black mt-4 mb-7">
                    {blog.title}
                  </h5>
                  <h6 className="text-xl text-[#9F9F9F] mb-[2.25rem]">
                    {formatDate(blog.date)}
                  </h6>
                  <div className="flex justify-start items-center">
                    <Link
                      to={`/our-blogs`}
                      className="bg-pine-700 shine-effect text-white inline-flex p-1.5 rounded-full items-center justify-center group/link pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
                    >
                      Read More
                      <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
                        <FiArrowUpRight className="text-[18px] text-pine-700" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: big blog card */}
          {blogs[2] && (
            <div className="xl:flex-1">
              <div className="h-full max-xl:gap-[1.8125rem] flex xl:flex-col min-[540px]:flex-row flex-col justify-start items-stretch bg-white rounded-[.9375rem] shadow-2xl shadow-black/5 border border-[#D3D3D3] px-7 py-7">
                <div className="rounded-[1.25rem] overflow-hidden w-full xl:max-h-[27.9375rem] min-[540px]:mb-[2.375rem] max-xl:flex-[1_1_17.125rem] max-xl:min-[540px]:max-w-[17.125rem] max-xl:h-[18.9375rem]">
                  <img
                    src={`${BASE_URL}/${blogs[2].image}`}
                    alt={blogs[2].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="cardBody max-xl:flex-1">
                  <h6 className="text-xl font-semibold text-pine-700">Blog</h6>
                  <h5 className="text-xl font-bold text-black mt-4 mb-7">
                    {blogs[2].title}
                  </h5>
                  <h6 className="text-xl text-[#9F9F9F] mb-[2.25rem]">
                    {formatDate(blogs[2].date)}
                  </h6>
                  <div className="flex justify-start items-center">
                    <Link
                      to={`/our-blogs`}
                      className="bg-pine-700 shine-effect text-white inline-flex p-1.5 rounded-full items-center justify-center group/link pl-[2.0625rem] gap-[2.0625rem] font-medium text-base"
                    >
                      Read More
                      <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center group-hover/link:rotate-45 transition-all duration-400">
                        <FiArrowUpRight className="text-[18px] text-pine-700" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
      {/* Expertise section end */}
        <GetInTouch showModal={showModal} setShowModal={() => { setShowModal(!showModal) }} />
    </>
  );
};

export default Blockchain;
