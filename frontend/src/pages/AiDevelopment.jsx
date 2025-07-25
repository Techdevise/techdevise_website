import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'

import AiBg from '/AiBg.webp'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import CompanyLogoSlider from '../components/CompanyLogoSlider'

// images
import AiCoLogo from "/AiCoLogo.svg";
import whyAi1 from '/whyAi1.webp';
import whyAi2 from '/whyAi2.webp';
import whyAi3 from '/whyAi3.webp';
import whyAi4 from '/whyAi4.webp';
import whyAi5 from '/whyAi5.webp';
import whyAi6 from '/whyAi6.webp';
import whyAi7 from '/whyAi7.webp';
import whyAi8 from '/whyAi8.webp';
import whyAiBot from '/whyAiBot.svg';

import AiTabimage0 from '/AiTabimage0.webp'
import AiTabimage1 from '/AiTabimage1.webp'
import AiTabimage2 from '/AiTabimage2.webp'
import AiTabimage3 from '/AiTabimage3.webp'
import AiTabimage4 from '/AiTabimage4.webp'
import AiTabimage5 from '/AiTabimage5.webp'
import AiTabimage6 from '/AiTabimage6.webp'
import AiTabimage7 from '/AiTabimage7.webp'
import AiTabimage8 from '/AiTabimage8.webp'

import AiLogoBg from '/AiLogoBg.webp'
import AiLogo from '/AiLogo.svg'

import object from '/object.svg'


// lang icons 1 to 5 start
import langlogo11 from '/logoIcons1/lang1.svg'
import langlogo12 from '/logoIcons1/lang2.svg'
import langlogo13 from '/logoIcons1/lang3.svg'
import langlogo14 from '/logoIcons1/lang4.svg'
import langlogo15 from '/logoIcons1/lang5.svg'
import langlogo16 from '/logoIcons1/lang6.svg'
//  1 end

import langlogo21 from '/logoIcons2/lang1.svg'
import langlogo22 from '/logoIcons2/lang2.svg'
import langlogo23 from '/logoIcons2/lang3.svg'
import langlogo24 from '/logoIcons2/lang4.svg'
import langlogo25 from '/logoIcons2/lang5.svg'
import langlogo26 from '/logoIcons2/lang6.svg'
import langlogo27 from '/logoIcons2/lang7.svg'
import langlogo28 from '/logoIcons2/lang8.svg'
import langlogo29 from '/logoIcons2/lang9.svg'
// 2 end 

import langlogo31 from '/logoIcons3/lang1.svg'
import langlogo32 from '/logoIcons3/lang2.svg'
import langlogo33 from '/logoIcons3/lang3.svg'
import langlogo34 from '/logoIcons3/lang4.svg'
import langlogo35 from '/logoIcons3/lang5.svg'
import langlogo36 from '/logoIcons3/lang6.svg'
import langlogo37 from '/logoIcons3/lang7.svg'
import langlogo38 from '/logoIcons3/lang8.svg'
import langlogo39 from '/logoIcons3/lang9.svg'
// 3 end

import langlogo41 from '/logoIcons4/lang1.svg'
import langlogo42 from '/logoIcons4/lang2.svg'
import langlogo43 from '/logoIcons4/lang3.svg'
import langlogo44 from '/logoIcons4/lang4.svg'
import langlogo45 from '/logoIcons4/lang5.svg'
// 4 end

import langlogo51 from '/logoIcons5/lang1.svg'
import langlogo52 from '/logoIcons5/lang2.svg'
import langlogo53 from '/logoIcons5/lang3.svg'
import langlogo54 from '/logoIcons5/lang4.svg'

import pillersBg from '/pillersBg.webp'
import pillerRobo from '/pillerRobo.svg'

import AiTech from '/AiTech.webp'
import { LuMoveRight } from 'react-icons/lu';
const AiDevelopment = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const prevRefLang = useRef(null);
    const nextRefLang = useRef(null);
    const [activeStep, setActiveStep] = useState(1);

    const aiEnhance = [
        "AI Consultation",
        "AI Software Development",
        "AI App Development",
        "Enterprise AI Solutions Development",
        "AI Chatbot Development Services",
        "Generative AI Development Services",
        "Computer Vision Applications",
        "Predictive Analytics",
        "Machine Learning Model Development"
    ]

    const aiEnhanceTabs = [
        {
            image: AiTabimage0,
            title: 'AI Consultation',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage1,
            title: 'AI Software Development',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage2,
            title: 'AI App Development',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage3,
            title: 'Enterprise AI Solutions Development',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage4,
            title: 'AI Chatbot Development Services',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage5,
            title: 'Generative AI Development Services',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage6,
            title: 'Computer Vision Applications',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage7,
            title: 'Predictive Analytics',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },

        {
            image: AiTabimage8,
            title: 'Machine Learning Model Development',
            para: 'Our experts guide you through the AI development process, helping you understand how AI can address your challenges. From concept to deployment, we provide insights into the stages of AI development for a clear roadmap for success.'
        },
    ]
    const coLogos = [
        {
            image: AiCoLogo,
            alt: "company logo 1",
        },
        {
            image: AiCoLogo,
            alt: "company logo 2",
        },
        {
            image: AiCoLogo,
            alt: "company logo 3",
        },
        {
            image: AiCoLogo,
            alt: "company logo 4",
        },
        {
            image: AiCoLogo,
            alt: "company logo 5",
        },
        {
            image: AiCoLogo,
            alt: "company logo 6",
        },
        {
            image: AiCoLogo,
            alt: "company logo 7",
        },
        {
            image: AiCoLogo,
            alt: "company logo 8",
        },
        {
            image: AiCoLogo,
            alt: "company logo 9",
        },
        {
            image: AiCoLogo,
            alt: "company logo 10",
        },
        {
            image: AiCoLogo,
            alt: "company logo 11",
        },
        {
            image: AiCoLogo,
            alt: "company logo 12",
        },
        {
            image: AiCoLogo,
            alt: "company logo 13",
        },
        {
            image: AiCoLogo,
            alt: "company logo 14",
        },
        {
            image: AiCoLogo,
            alt: "company logo 15",
        },
    ];


    const whyAiSlide = [
        {
            icon: whyAi1,
            title: 'AI Chatbots for Support',
            para: 'Cut customer service costs using AI chatbots to automate responses and handle inquiries 24/7.',
        },

        {
            icon: whyAi2,
            title: 'Smart Pricing Models',
            para: 'Use AI-driven insights to analyze market trends and optimize pricing strategies for maximum profit.',
        },

        {
            icon: whyAi3,
            title: 'Predictive Analytics',
            para: 'Make better business decisions with predictive AI analytics that forecast trends and customer behaviour.',
        },

        {
            icon: whyAi4,
            title: 'Automated Reporting',
            para: 'Generate accurate reports in minutes with AI-powered automation, saving time and effort.',
        },

        {
            icon: whyAi5,
            title: 'Personalized Marketing',
            para: 'Personalize your marketing campaigns based on real-time customer data for higher engagement.',
        },

        {
            icon: whyAi6,
            title: 'Minimizes Human Errors',
            para: 'Reduce human errors and speed up data handling with automated AI data managing systems.',
        },

        {
            icon: whyAi7,
            title: 'Inventory Management',
            para: 'Manage inventory more efficiently and reduce wastage with AI-driven management solutions.',
        },

        {
            icon: whyAi8,
            title: 'AI Route Planning',
            para: 'Cut delivery times and reduce costs by optimizing delivery routes with AI for faster service.',
        },
    ]

    const logoIcon1 = [langlogo11, langlogo12, langlogo13, langlogo14, langlogo15, langlogo16]
    const logoIcon2 = [langlogo21, langlogo22, langlogo23, langlogo24, langlogo25, langlogo26, langlogo27, langlogo28, langlogo29]
    const logoIcon3 = [langlogo31, langlogo32, langlogo33, langlogo34, langlogo35, langlogo36, langlogo37, langlogo38, langlogo39]
    const logoIcon4 = [langlogo41, langlogo42, langlogo43, langlogo44, langlogo45]
    const logoIcon5 = [langlogo51, langlogo52, langlogo53, langlogo54]

    const stackTab = ['Programming Languages', 'Frameworks', 'Databases', 'Devops', 'Payment Gateways', 'Clouds']
    return (
        <>
            {/*landing area of Ai Development sections start  */}
            <section className="landing mb-[4.6875rem] min-h-svh flex flex-col justify-center items-center ">
                <div style={{ backgroundImage: `url(${AiBg})` }} className="landing flex-1 w-full bg-bottom bg-cover bg-no-repeat flex justify-center items-center ">
                    <div className="w-full max-w-[64.1875rem] m-auto text-center">
                        <h5 className='text-base font-medium rounded-full bg-white/15 text-white px-8 py-[1.125rem] w-fit mx-auto mb-8'>AI solutions that deliver real ROI</h5>
                        <h1 className=" md:text-5xl sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-5">
                            Best AI Development Company
                        </h1>
                        <p className="text-xl font-normal text-white mb-[1.375rem]">Boost your business operations 20x with our advanced AI development services. Automate repetitive
                            tasks, make data-driven decisions, and run your business more efficiently with less effort.</p>
                        <Link to="/" className="bg-[#22D5E4] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                    </div>
                </div>

                <div className="flex-[0_1_0%] w-full bg-gradient-to-r from-[#005163] via-[#01313B] to-[#01090A] shadow-[0px_4px_4px_0px_#00000040]">
                    <div className="main-container !pe-0 py-[1.25rem] flex justify-start items-center">
                        <div className="flex-[0_1_0%] py-5 pe-8  border-r-2 border-white max-lg:hidden">
                            <h4 className="text-xl font-bold text-white text-nowrap">
                                Trusted By
                            </h4>
                            <h4 className="text-xl font-medium text-white text-nowrap mt-1.5">
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
                        <h3 className="text-[3rem] font-extrabold  text-black mb-[1.625rem]">Why Choose AI Integrated Solutions
                            For Your Business?</h3>
                        <p className="text-[1.125rem] leading-[1.625rem] font-medium">From chatbots to predictive analytics systems, our AI development company offers customized artificial intelligence
                            development services. Turn raw data into actionable reports, predict customer behavior, and increase workforce
                            productivity with our intelligent AI services.</p>
                    </div>
                    <div className="flex flex-col lg:ps-[21.75rem] relative">


                        <img src={whyAiBot} alt="ai images" className="absolute top-0 left-0 max-lg:hidden" />
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
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current
                            }}
                        >
                            {whyAiSlide.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex  justify-center items-center !h-auto"
                                    >
                                        <div className=" h-full w-full">
                                            <div style={{ backgroundImage: `url(${item.icon})` }} className='bg-center rounded-[.625rem] bg-cover bg-no-repeat px-[1.375rem] py-4 w-full h-[23.875rem] flex justify-start items-end'>
                                                <div className="cardBody text-white">
                                                    <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>{item.title}</h4>
                                                    <p className="text-base leading-[1.8125rem] font-normal">{item.para}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* Why Choose AI section end */}

            {/* .positions list section start  */}
            <section className="open-positions my-[4.6875rem] pb-[3rem] ">
                <div className="main-container">
                    <div className="sectionHeader text-center text-black  max-w-5xl mx-auto mb-[4rem]">
                        <h3 className='text-[3rem] font-bold mb-[1.875rem]'>Enhance Profitability with Our
                            Intelligent AI Development Services</h3>
                        <p className='text-[1.125rem] leading-[1.75rem]'>
                            At TechDevise, we specialize in delivering custom AI development solutions that cater to your business&apos;s unique needs. As a
                            top AI development company, we ensure innovation meets practicality for every industry.
                        </p>
                    </div>

                    {/* Positions */}
                    <div className="">
                        <div className="flex gap-[1.875rem] lg:flex-row flex-col lg:justify-between justify-center items-stretch">
                            <div className="lg:w-[32.5625rem] bg-gradient-to-r from-[#005163] to-[#01090A] lg:px-[2.25rem] lg:py-[3rem] p-5 pb-0 rounded-[.9375rem]">
                                <ul className='lg:block flex justify-start items-center gap-5 max-lg:mb-5 overflow-x-auto hide-scroll'>
                                    {aiEnhance.map((tbs, index) => (
                                        <li key={index} className=''>
                                            <div onClick={() => setActiveStep(index + 1)} className='flex justify-between items-center py-[1.3125rem] lg:gap-4 gap-2 cursor-pointer border-b border-white/10'>
                                                <span className={`text-xl leading-[1.625rem] text-nowrap ${activeStep == index + 1 ? 'text-white font-bold' : 'text-white/55'}`}>{tbs}</span>
                                                <LuMoveRight className={`text-2xl ${activeStep == index + 1 ? 'text-white' : 'text-white/55'} `} />
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            {aiEnhanceTabs.map((AiTabs, index) => (

                                <div key={index} className={`flex-1 rounded-[.9375rem] overflow-hidden flex-col ${activeStep == index + 1 ? 'flex' : 'hidden'}`}>
                                    <div className="image flex-1 overflow-hidden rounded-t-[.9375rem]">
                                        <img src={AiTabs.image} alt="Tab section Image" className='h-full w-full object-cover' />
                                    </div>
                                    <div className="cardBody text-white bg-gradient-to-r from-[#005163] to-[#01090A] p-9 rounded-b-[.9375rem]">
                                        <h4 className='text-[2.5rem] font-bold mb-3.5'>{AiTabs.title}</h4>
                                        <p className='text-xl leading-[2.125rem] font-normal'>{AiTabs.para}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>
            {/* .positions list section end  */}

            {/* Ai Work section Start */}
            <section style={{ backgroundImage: `url(${AiLogoBg})` }} className='Ai-work my-[4.6875rem] lg:py-[8.1875rem] py-[4.6875rem] bg-center bg-cover bg-no-repeat'>
                <div className="main-container">
                    <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[3.8125rem]">
                        <img src={AiLogo} alt="" className='mx-auto object-contain mb-[2.5625rem] block filter mix-blend-luminosity' />
                        <p className='text-[1.25rem] text-white leading-[2.1875rem] font-medium'>Our Artificial intelligence development solutions helped businesses reduce manual work and everyday tasks by 40%. Book a free consultation with our custom AI development services agency to automate your business operations.</p>
                    </div>

                    <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#DCE1FC] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">20%</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Reduction in Manual Work</span>
                            </div>
                        </div>

                        <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#FFEDEF] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">30%</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Lower Operational Costs</span>
                            </div>
                        </div>

                        <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#E1FCDC] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">40%</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Faster Data Reporting</span>
                            </div>
                        </div>

                        <div className="col py-[1.9375rem] rounded-[.9375rem] px-[2rem] bg-[#FFF9E6] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">30%</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Increased Productivity</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-[4.625rem]">
                        <Link to="/" className="bg-[#22D5E4] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                    </div>
                </div>
            </section>
            {/* Ai Work section end */}

            {/* Models section start  */}
            <section className="models my-[4.6875rem]">
                <div className="main-container">
                    <div className="w-full max-w-[64.1875rem] m-auto text-center mb-[5.3125rem]">
                        <h5 className='text-base font-medium rounded-full bg-white/15 text-white px-8 py-[1.125rem] w-fit mx-auto mb-8'>We are #1 AI Development Company around the Globe</h5>
                        <h3 className=" md:text-5xl sm:text-[2.625rem] text-[2.55rem] font-extrabold text-black mb-5">
                            Models our AI Developers are Proficient with
                        </h3>
                        <p className="text-xl font-normal text-black mb-[1.375rem]">As a leading Blockchain development company, TechDevise only hires Blockchain developers with a proven track record. That&apos;s why we can handle any task or project, even the most complicated ones.</p>
                    </div>

                    <div className="tabsForModels bg-white border border-[#d3d3d3] rounded-[15px] shadow-2xl shadow-black/10 py-10 px-[2.6875rem]">
                        <ul className=' flex justify-start items-center gap-[4.9375rem] overflow-x-auto hide-scroll mb-14'>
                            <li className='text-xl leading-[2.4375rem] text-nowrap pb-3 border-b-2 border-[#342674]'>Computer Vision Models</li>
                            <li className='text-xl leading-[2.4375rem] text-nowrap pb-3 border-b-2 border-[#342674]'>Machine Learning Models</li>
                            <li className='text-xl leading-[2.4375rem] text-nowrap pb-3 border-b-2 border-[#342674]'>NLP Models</li>
                            <li className='text-xl leading-[2.4375rem] text-nowrap pb-3 border-b-2 border-[#342674]'>Deep Learning Models</li>
                            <li className='text-xl leading-[2.4375rem] text-nowrap pb-3 border-b-2 border-[#342674]'>Hybrid Models</li>
                            <li className='text-xl leading-[2.4375rem] text-nowrap pb-3 border-b-2 border-[#342674]'>Generative Models</li>
                        </ul>
                        <div className="flex lg:flex-row flex-col justify-center items-stretch 2xl:gap-32 gap-20">
                            <div className="flex-[1_1_26.3125rem] max-w-[26.3125rem] max-lg:mx-auto lg:order-1 order-2">
                                <img src={object} alt="object image" className='h-full w-full object-contain' />
                            </div>
                            <div className="flex-1 lg:order-2 order-1 lg:text-start text-center">
                                <h3 className='text-[2.5rem] font-extrabold text-black'>Computer <br />
                                    Vision Models</h3>
                                <p className='text-xl leading-[2.125rem] text-black font-normal my-9'>Our AI development services company delivers cutting-edge computer vision models for image recognition, object detection, and quality inspections. These models are powered by our AI software development services to enhance efficiency.</p>
                                <Link to="/" className="bg-[#342674] text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                    Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                            </div>
                        </div>
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

                            <div className="max-w-[23.3125rem] flex-[1_1_23.3125rem] text-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[2.1875rem] font-extrabold'>5 Pillars of Our AI Development Services</h4>
                                <p className="text-base leading-[1.625rem]">As a leading Blockchain development company, TechDevise only hires Blockchain developers with a proven track record. That&apos;s why we can handle any task or project, even the most complicated ones.</p>
                            </div>
                            <div className="max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Data Quality</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">Our AI ML development services built the foundation for clean, structured, and reliable data solutions. By leveraging AI development frameworks, we ensure the best possible datasets power your AI models.</p>
                            </div>
                            <div className="max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Explainability</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">We prioritize transparency by making AI solutions easily interpretable for businesses and end-users alike. With our top-class AI development process, your enterprise gains clear and actionable outcomes from AI-driven analytics.</p>
                            </div>
                            <div className="max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Scalability</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">Our AI systems are built to grow with your business. From initial deployment to future expansions, we offer scalable solutions that adapt to your evolving needs, providing long-term value and flexibility.</p>
                            </div>
                            <div className="max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Predictable ROI</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">We guarantee a predictable return on investment by aligning AI strategies with business goals. Our AI development platforms streamline operations and optimize decision-making for better profitability.</p>
                            </div>
                            <div className="max-w-[23.3125rem] flex-[1_1_23.3125rem] bg-white rounded-10 py-9 px-[1.125rem] rounded-[1.625rem] scale-100 ">
                                <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>Security</h4>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">We implement robust security measures during the AI software development process to ensure compliance and data integrity. As the best AI development company, we offer scalable AI systems tailored to meet your needs.</p>
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
                        <h3 className=" md:text-5xl sm:text-[2.625rem] text-[2.55rem] font-extrabold text-black mb-8">
                            Tech Stack, We Use As an Artificial
                            Intelligence Development Company!
                        </h3>
                        <p className="text-xl font-normal text-black mb-[4.375rem]">Our AI app developers excel in a diverse and advanced tech stack. From backend frameworks to development
                            tools, we meticulously select the best-in-class components to ensure your app meets the most stringent technical standards.</p>
                    </div>

                    <div className="">
                        <div style={{ backgroundImage: `url(${AiTech})` }} className=" bg-no-repeat bg-center bg-cover py-[2.1875rem] px-[3.125rem] rounded-[.625rem] ">
                            <ul className='flex justify-start flex-nowrap text-white overflow-x-scroll hide-scroll gap-[4.5rem] mb-10 px-[3.125rem]'>
                                {stackTab.map((item, index) => (
                                    <li key={index} className='text-[1.5rem] leading-[2.4375rem] font-semibold text-nowrap relative w-fit pb-3 before:absolute before:w-full before:h-[.125rem] before:bg-white before:bottom-0 before:left-0'>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col px-[3.125rem]">

                                <div className="flex gap-2.5 justify-end items-stretch mt-[3.25rem] order-2">
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
                                <Swiper
                                    className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:!ease-linear order-1"
                                    slidesPerView={'auto'}
                                    spaceBetween={30}
                                    speed={500}
                                    loop={true}
                                    // autoplay={{ delay: 1, disableOnInteraction: false }}
                                    grabCursor={true}
                                    modules={[Navigation]}
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
                                    {logoIcon2.map((item, index) => {
                                        return (
                                            <SwiperSlide
                                                key={index}
                                                className="flex justify-center items-center !w-[10rem]"
                                            >
                                                <img
                                                    src={item}
                                                    alt='logo'
                                                    className="block object-contain h-[9.375rem] w-[10.5rem] mx-auto"
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* AI tech section end */}
        </>
    )
}

export default AiDevelopment
