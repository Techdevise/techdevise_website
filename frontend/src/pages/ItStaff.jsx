import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// images
import staff1 from "/staff1.webp";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import CompanyLogoSlider from "../components/CompanyLogoSlider";
import stafflogo from "/stafflogo.svg";

import Itleftarrow from "/Itleftarrow.svg";
import arrowRightUp from "/arrowRightUp.svg";

import gap from "/gap.webp";
import gap1 from "/gap1.svg";
import gap2 from "/gap2.svg";
import gap3 from "/gap3.svg";
import gap4 from "/gap4.svg";

import clogo1 from "/clogo16.png";
import clogo2 from "/clogo17.png";
import clogo3 from "/clogo18.png";
import clogo4 from "/clogo19.png";
import clogo5 from "/clogo20.png";
import clogo6 from "/clogo21.png";
import clogo7 from "/clogo22.png";
import clogo8 from "/clogo23.png";

import itStaffing from "/itStaffing.webp";

import recog1 from "/recog1.webp";
import recog2 from "/recog2.webp";
import recog3 from "/recog3.webp";
import recog4 from "/recog4.webp";
import recog5 from "/recog5.webp";
import recog6 from "/recog6.webp";
import recog7 from "/recog7.webp";
import recog8 from "/recog8.webp";
import { LuMoveUpRight } from "react-icons/lu";
import HireTop from "../components/HireTop";
// images

const ItStaff = () => {
  const [roles, setRoles] = useState([]);
  const [showModal, setShowModal] = useState(false);
     const [selectedRole, setSelectedRole] = useState({ id: null, name: '' });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const coLogo = [
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
   
  ];

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/roles`);
        if (res.data.success && res.data.data) {
          setRoles(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch roles:", error);
        toast.error("Failed to load roles. Please try again later.");
      }
    };

    fetchRoles();
  }, []);

 const handleRoleClick = (role) => {
    setSelectedRole({ id: role.id, name: role.name });
    setShowModal(true);
  };


  const gapService = [
    {
      image: gap1,
      name: "Artificial intelligence",
    },
    {
      image: gap2,
      name: "IT Operations",
    },
    {
      image: gap3,
      name: "Cloud",
    },
    {
      image: gap4,
      name: "Software Development",
    },
  ];

  const recogImages = [
    recog1,
    recog2,
    recog3,
    recog4,
    recog5,
    recog6,
    recog7,
    recog8,
  ];
  return (
    <>
      {/*it staff landing section start  */}
     <section style={{ backgroundImage: `url(${staff1})` }} className="landingItStaff bg-center bg-cover bg-no-repeat mb-[4.6875rem] min-h-[100dvh] flex justify-center items-end">
                <div className="main-container">
                    <div className="pt-[6.25rem]">
                        <div className="bottomContent">
                            <div className="flex 2xl:flex-row flex-col lg:gap-5 gap-10">
                                <div className="lg:flex-1 max-w-fit">
                                    <h1 className='2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]'>Your Trusted Partner for IT Staffing and Services</h1>
                                    <p className='2xl:text-[1.10rem] text-[1rem] leading-[1.5rem] font-normal text-white 2xl:max-w-3xl text-start  max-w-6xl'>TechDevise is a professional staffing firm comprising of the knowledge, experience and network that can get you the most qualified of candidates within any form or industry within two days. We can find great talent both domestically and abroad and source the best talent globally in 50+ countries. Questions? Call us toll-free: +1 123 456 7890</p>
                                </div>
                                <div className="lg:flex-1 flex max-md:flex-wrap justify-center items-stretch gap-[1.6875rem]">
                                    <div className="border border-white bg-black/50 rounded-[1.625rem] p-[1.875rem] text-center flex justify-center items-center flex-col">
                                        <h3 className="text-[2rem] font-bold text-white">Schedule a <br className='max-2xl:hidden' /> meeting</h3>
                                        <p className='2xl:text-[1.10rem] text-[1rem] leading-[1.5rem] font-normal text-balance text-white max-w-3xl mx-auto 2xl:text-start text-center mt-5 mb-8 '>
                                            Talk with one of our experts about your IT staffing and tech solutions needs.
                                        </p>

                                        <button onClick={() => setShowModal(true)} className="bg-[#BCFFCE] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Let's Connect <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><LuMoveUpRight className='text-[18px] -rotate-12 text-black' strokeWidth={1} /> </span></button>

                                    </div>
                                    <div className="border border-white bg-black/50 rounded-[1.625rem] p-[1.875rem] text-center flex justify-center items-center flex-col">
                                        <h3 className="text-[2rem] font-bold text-white">Submit Staffing <br  className='max-2xl:hidden' />Request</h3>
                                        <p className='2xl:text-[1.10rem] text-[1rem] leading-[1.5rem] font-normal text-balance text-white max-w-3xl mx-auto 2xl:text-start text-center mt-5 mb-8 '>
                                            Talk with one of our experts about your IT staffing and tech solutions needs.
                                        </p>

                                        <button onClick={() => setShowModal(true)} className="bg-[#FFBCBE] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Get Started<span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><LuMoveUpRight className='text-[18px] -rotate-12 text-black' strokeWidth={1} /> </span></button>

                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[2.1875rem] w-full mt-[3.8125rem] bg-gradient-to-l from-[#7BDB9D] to-[#6AD2B6] py-[2.625rem] px-[2rem] translate-y-20">
                                <CompanyLogoSlider logos={coLogo} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
      {/*it staff landing section end  */}

      {/* IT Roles section start */}
      <section className="ItRoles py-[4.6875rem] pt-[4.6875rems]">
        <div className="main-container">
         <div className="sectionHeader gap-5 md:flex-row flex-col flex justify-between items-start max-md:mb-8">
    <div className="text-start">
        <h3 className='2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black mb-3'>
            We Staff IT Roles Across Any <span className='text-pine-700'>Industry</span>
        </h3>
        <p className='2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-black max-w-[85.1875rem] md:mb-[3.3125rem]'>
            TechDevise is a staffing corporation in IT that has over 5 years of experience. We have staffed it, call it whatever you want, and we would love to staff it with great folks as well. Using a specialized team of tech recruiters with an array of proprietary, AI-powered recruiting tools, candidates can be identified within two days. Even those unicorns who are not seeking a new position, yet. And we recruit, retain and grow them using our one-of-a-kind consultant care concept Learn about some of our most popular positions.
        </p>
    </div>

    <img
        src={Itleftarrow}
        className="upDown object-contain max-md:h-28 hidden md:block"
    />
</div>

          <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[25rem]:grid-cols-2 gap-x-[.75rem] gap-y-[2.3125rem]">
            {roles.map((role) => (
              <div 
                key={role.id}  
                onClick={() => handleRoleClick(role)} 
                className="border-2 border-black flex justify-between items-center rounded-full p-2 cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <span className='px-[1.375rem]'>{role.name}</span>
                <div className="size-[3.3125rem] rounded-full bg-[#E8E8E8] flex justify-center items-center">
                  <img src={arrowRightUp} alt="arrow Right Up" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* IT Roles section end */}

      {/* Service Gap section start */}
      <section className="serviceGap my-[4.6875rem] bg-[#EEFCFE]  max-lg:py-[4.6875rem]">
        <div className="main-container lg:!ps-0">
          <div
            className={` h-full flex-1 flex lg:flex-row flex-col  justify-start lg:items-stretch items-center  gap-[2.875rem] relative transition-all duration-300 `}
          >
            <img
              src={gap}
              alt="modal side image"
              className=" max-lg:h-[25rem] lg:w-[50%] w-full lg:object-cover object-cover block"
            />
            <div className="lg:flex-1 lg:overflow-y-auto py-[4.6875rem] text-center lg:text-start">
              <h2 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold mb-[1.4375rem]">
                Filling the Tech <br className="max-lg:hidden" /> Services Gap
              </h2>
              <h4 className="text-[1.5rem] font-semibold mb-4">
                Did you know…
              </h4>

              <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.5rem] font-normal pb-[1.125rem]">
                That 75% of IT decision-makers see skill gaps within their
                teams? Some of the top areas include:
              </p>

              <div className="flex lg:justify-start justify-center items-stretch gap-5 mb-[2.1875rem]">
                {gapService.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="h-[6.1875rem] mb-3  aspect-square bg-white rounded-[1.625rem] flex justify-center items-center shadow-2xl shadow-black/10">
                      <img
                        src={item.image}
                        alt="finding gap service"
                        className=" object-cover"
                      />
                    </div>
                    <span className="text-base font-semibold block max-w-[6.25rem] text-balance">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              <h4 className="text-[1.125rem] leading-[1.5rem] font-bold mb-3">
                What impact does this have on business?
              </h4>
              <ul className="ps-7 list-disc mb-9 w-fit text-start max-lg:mx-auto">
                <li className="text-base leading-[1.5rem] font-normal">
                  Reduced ability to meet business objectives
                </li>
                <li className="text-base leading-[1.5rem] font-normal">
                  Higher operating costs
                </li>
                <li className="text-base leading-[1.5rem] font-normal">
                  Longer project durations and decreased quality
                </li>
                <li className="text-base leading-[1.5rem] font-normal">
                  Increased stress among IT employees
                </li>
              </ul>

              <h4 className="text-[1.125rem] leading-[1.5rem] font-bold mb-3">
                What impact does this have on business?
              </h4>
              <p className="text-base leading-[1.5rem] font-normal">
                <strong>TechDevise</strong> we provide our IT Clients with best of world Class technology and talent solutions in our professional services segment. Our experienced staffing experts in 70+ offices throughout North America, Europe and Asia combined with our state of the art technology delivery center in mohali, India position us to service your business as it strives to achieve its strategic goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Service Gap section end */}

      {/* It staffing start */}
      <section className="itStaffing my-[4.6875rem]">
        <div className="main-container">
          <div className="relative lg:pr-[5.8125rem]">
            <h4 className="texto max-lg:hidden absolute 2xl:top-12 lg:top-22 right-5 rotate-180 2xl:text-[2.9375rem] lg:text-[2.2375rem]  text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#D5E4FF] to-pine-700 text-nowrap">
              Professional Services
            </h4>

            <div className=" lg:border border-white/10 rounded-[1.625rem] lg:p-10 flex justify-center lg:items-center items-stretch flex-col lg:flex-row gap-4 ">
              <div className="flex-[1_1_25rem]">
                <h2
                  data-aos-delay="200"
                  className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] font-bold text-black lg:w-fit mb-6 lg:text-start text-center"
                >
                  Professional Services <br />
                  Beyond <span className="text-pine-700">IT Staffing</span>
                </h2>
                <p
                  data-aos-delay="400"
                  className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-black mb-1.5 lg:max-w-3xl lg:text-start text-center"
                >
                  <strong>TechDevise</strong> is not just a staffing firm we are your strategic trading partner in technology and talent. And we put our pulse on the leading IT staffing organization together with strong technical expertise to create innovation and business change. Our professional services division provides turnkey IT services that also provide growth and development to your organization.
                </p>
                <p
                  data-aos-delay="600"
                  className="2xl:text-[1.25rem] text-[1rem] leading-[2.125rem] font-normal text-black mb-1.5 lg:max-w-3xl lg:text-start text-center"
                >
              We bring together an innovative technology strategy along with the unsurpassed staffing expertise of TechDevise so we can produce ground breaking outcomes. We combine innovative minds with the power and skill to deliver on their ideas-creating custom teams and bespoke solutions that will enable you to reach your technology destination, deliver long-term value and impact today.

                </p>
              </div>
              <div className="flex-[1_1_18.75rem]">
                <div className="">
                  <img
                    src={itStaffing}
                    alt="card image"
                    className="h-full w-full object-cover rounded-[1.625rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* It staffing end */}

      {/* Recog section start */}
      <section className="recog mt-[4.6875rem] bg-gradient-to-l from-[#FFF2DF] to-[#F7F5F3] pt-[4.6875rem] pb-[7rem]">
        <div className="main-container text-center">
          <div className="mx-auto max-w-[69.125rem]">
            <h3 className="2xl:text-[3rem] lg:text-[2.4rem] text-[2rem] text-black font-bold mb-[1.75rem]">
              Our Company Recognition
            </h3>
            <p className="2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal mb-[3.75rem]">
              <strong>Techdevise</strong> is on the list of reputable leaders in the area of IT staffing which are being known as the providers of the first-rate talent and innovative staffing and solution options. We never fail to impress and have accolades of the industry and appreciation by our clients. Our reputation stems out of being committed, experienced, and producing results that lead to business success in many industries and within technology sectors.
            </p>
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-x-[1.125rem] gap-y-[3.0625rem]">
              {recogImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white h-[15rem] mx-auto aspect-square rounded-[1.625rem] p-10 border border-[#CDCDCD] shadow-2xl shadow-black/10 flex justify-center items-center"
                >
                  <img src={item} alt={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Recog section end */}
      <HireTop
        showModal={showModal}
          selectedRole={selectedRole} 
        setShowModal={() => {
          setShowModal(!showModal);
        }}
      />
    </>
  );
};

export default ItStaff;
