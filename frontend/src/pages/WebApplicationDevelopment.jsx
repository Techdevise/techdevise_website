import { Link } from "react-router-dom"
import serviceBg from "/serviceBg.webp"
import arrowRightUp from "/arrowRightUp.svg"
import { Swiper, SwiperSlide } from "swiper/react";
// images 
import ourWork1 from '/ourWork1.svg'
import ourWork2 from '/ourWork2.svg'
import ourWork3 from '/ourWork3.svg'
import ourWork4 from '/ourWork4.svg'
import webServiceBg1 from '/webServiceBg1.webp'

import ecom1 from '/ecom1.svg'
import ecom2 from '/ecom2.svg'
import ecom3 from '/ecom3.svg'
import ecom4 from '/ecom4.svg'
import ecom5 from '/ecom5.svg'
import ecom6 from '/ecom6.svg'
import eComMen from '/eComMen.svg'
import robo from '/robo.svg'

import python from '/python.webp'
import why1 from '/why1.webp'
import why2 from '/why2.svg'
// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef,useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import GetInTouch from "../components/GetInTouch";
const WebApplicationDevelopment = () => {
  const [showModal, setShowModal] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);
    const ourWorkList = [
        {
            bg: "#E5FCFF",
            image: ourWork1,
            title: "Review / Planning",
            discription: "We work from the scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design etc.",
        },
        {
            bg: "#EBF8F1",
            image: ourWork2,
            title: "Design",
            discription: "Good design is absolutely necessary when it comes to CMS.We maintain a good quality in every single step of designing phase and ensure that you get a consistent result all the time. We do prefer to discuss with you before final development so as to make all the necessary changes before we start our final development.",
        },
        {
            bg: "#EDF5C0",
            image: ourWork3,
            title: "Development",
            discription: "The development process is long and complicated but you can rest assured that we will deliver a well-developed, fully functional CMS website to you. We will install your newly designed website and configure it to make sure you get a nice, SEO-friendly website without having to worry about anything.",
        },
        {
            bg: "#FFD3E5",
            image: ourWork4,
            title: "Content Upload",
            discription: "Since your new website is based on CMS, you will need content to get going. The first content upload is on us. We upload the first set of content on your website and check whether everything is alright or not. Of course, at a later stage you will be able to change the content at will.",
        },
        {
            bg: "#D0EBFF",
            image: ourWork1,
            title: "Testing",
            discription: "We make sure that the content formulated is of the finest quality and clarifies all the queries of the target audience. The keywords incorporated are adequately placed such that it helps in the ranking aspect as well. Adequate testing is initiated to make sure that no compromise is made in quality standards.",
        },
        {
            bg: "#FFF0BA",
            image: ourWork2,
            title: "Quality Delivered",
            discription: "We understand your need and ensure that you get the right quality service at an affordable price. We promise to maintain quality throughout the development phase and offer quality support post delivery as well.",
        },
    ]

    const ecom = [
        {
            icon: ecom1,
            title: 'E-Commerce Development',
            para: 'We work from the scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design etc.'
        },
        {
            icon: ecom2,
            title: 'Custom E-commerce',
            para: 'We work from the scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design etc.'
        },
        {
            icon: ecom3,
            title: 'Responsive Shopping Website',
            para: 'We work from the scratch. Our first step is to review your idea, your competitor website to understand the process, make suggestions for you, discuss the way you want it work. Once we are done, you will have the complete details of the work process and all the details of the development work, features, design etc.'
        },


        {
            icon: ecom4,
            title: 'Plug-In & Module Development',
            para: 'We not only create E-commerce websites but also develop tools and plugins that will help your website to run smoother. Our plugins will add a new edge to your E-commerce website, and hence it will surely make your website unique and better than your competitors.'
        },

        {
            icon: ecom5,
            title: 'Payment Gateway Integration',
            para: 'Do your customers complain that their payments are getting failed? Our experts understand how important it is for customers to have a smooth website. Therefore, we offer result oriented payment gateway integration that will not fail you anytime.'
        },

        {
            icon: ecom6,
            title: 'Shopping Cart Development',
            para: 'Does your website not getting enough conversions? If yes, then try out our Shopping Cart Development services. Our team will create a unique shopping cart that will ensure higher conversion rates.'
        },

    ]
    return (
        <>
            {/* web landing area section start */}
            <section style={{ backgroundImage: `url(${serviceBg})` }} className="min-h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
                <div className="main-container  text-center ">
                    <h1 className="md:text-5xl sm:text-[2.625rem] text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BEC033] mb-5">
                        Expert Website Development <br />
                        Services
                    </h1>
                    <p className="text-xl font-normal max-w-[64.1875rem] mx-auto text-white mb-[1.375rem]"><b className="font-bold">Tech Devise</b> possesses a professional team of experts! Our primary goal is to meet the requirements of our clients. We specialize in providing top-notch services as we continue to cater to the needs of our customers even after the delivery period.</p>
                    <button onClick={() => setShowModal(true)} className="bg-[#CACB87] inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><img src={arrowRightUp} alt="arrow right up" className="w-[1.125rem]" /></span></button>
                </div>
            </section>
            {/* web landing area section end */}
            {/* Our Work section start */}
            <section className="my-[4.6875rem]">
                <div className="main-container !pe-0">

                    <div className="relative">
                        <h4 className="texto max-lg:hidden absolute top-2 left-5 rotate-180 md:text-[58px] sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#f2f2f2] to-pine-700">Our Work Modules</h4>
                        <div className="lg:ps-[7.125rem] ">
                            <div className="section-header flex gap-10 lg:flex-row flex-col justify-between lg:items-center items-stretch main-container !ps-0 max-lg:!pe-10 !max-w-auto">
                                <p className="text-[20px] leading-[2.6875rem] max-w-6xl "><strong>Content Management System</strong> - Our team follows a very meticulous and precise procedure that allows us to meet the client requirements adequately within the deadline date. We take great pride in our module and the work ethic we possess.</p>
                                <div className="flex gap-2.5 justify-end items-stretch  order-1">
                                    <button ref={prevRef} className="cursor-pointer">
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
                            </div>

                            <Swiper
                                className="mySwiper h-full w-full justify-between select-none"
                                slidesPerView={1}
                                spaceBetween={25}
                                speed={1000}
                                breakpoints={{

                                    1024: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 2.9,
                                    },
                                    1536: {
                                        slidesPerView: 3.8,
                                    },
                                }}
                                grabCursor={true}
                                modules={[Autoplay, Navigation]}
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
                                {ourWorkList.map((item, index) => {
                                    return (
                                        <SwiperSlide
                                            key={index}
                                            className=""
                                        >
                                            <div className={`bg-[${item.bg}] rounded-[.9375rem] pt-10 px-7 pb-5`}>
                                                <div className={`w-[7rem] h-[7rem] rounded-full bg-[${item.roundBg}] flex items-center justify-center mb-[1.8125rem]`}>
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <h4 className="text-[1.75rem] font-semibold text-black mb-3">{item.title}</h4>
                                                <p className="text-base leading-[1.8125rem]">{item.discription}</p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Work section end */}

            {/* Our E-Commerce Services section start */}
            <section style={{ backgroundImage: `url(${webServiceBg1})` }} className="e-commerce bg-center bg-cover bg-no-repeat my-[4.6875rem] py-[4.6875rem]">
                <div className="main-container">
                    <div className="section-header text-center mb-[5.375rem]">
                        <h3 className="text-[3rem] font-extrabold  text-black mb-[1.625rem]">Our E-Commerce Services</h3>
                        <p className="text-[1.125rem] leading-[1.625rem] font-medium max-w-6xl mx-auto">We are a team of experts who offer unique and innovative E-commerce solutions. So, if you are looking to take your business digital,
                            our E-commerce services will surely help you to take your business to the next level.</p>
                    </div>
                    <div className="flex flex-col lg:pe-[16.75rem] relative">
                        <div className="flex gap-2.5 justify-start items-stretch mt-[3.25rem] order-2">
                            <button ref={prevRef2} className="cursor-pointer order-1">
                                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                                    <GoArrowLeft className="size-7" />
                                </div>
                            </button>

                            <button ref={nextRef2} className="cursor-pointer order-2">
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
                                swiper.params.navigation.prevEl = prevRef2.current;
                                swiper.params.navigation.nextEl = nextRef2.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            navigation={{
                                prevEl: prevRef2.current,
                                nextEl: nextRef2.current
                            }}
                        >
                            {ecom.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex  justify-center items-center !h-auto"
                                    >
                                        <div className="2xl:max-w-[480px] h-full w-full bg-[#FFF8E8] rounded-10 py-5 px-6 rounded-[.625rem]">
                                            <img src={item.icon} alt="" className='block size-[6.125rem] object-contain mb-[1.125rem]' />
                                            <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>{item.title}</h4>
                                            <p className="text-[1.125rem] leading-[2.125rem] font-normal">{item.para}</p>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>

                        <img src={eComMen} alt="men vector" className="absolute top-0 right-0 max-lg:hidden" />
                    </div>
                </div>
            </section>
            {/* Our E-Commerce Services section end */}

            {/* Automation section start */}
            <section>
                <div className="main-container">
                    <div className="section-header text-center mb-[5.375rem]">
                        <h3 className="text-[3rem] font-extrabold  text-black mb-[1.625rem]">Automation</h3>
                        <p className="text-[1.125rem] leading-[1.625rem] font-medium max-w-6xl mx-auto">We are a team of experts! We work together towards the sole goal of meeting our clients&apos; requirements. We promise to deliver high performance service to all of our customers and offer best possible post-delivery support.</p>
                    </div>

                    <div className="bg-white rounded-[.625rem] lg:px-[2.9375rem] p-10 lg:py-[5.3125rem] pt-[0] pb-10">
                        <div className="flex xl:flex-row flex-col 2xl:gap-[4.25rem] lg:gap-[3.125rem] gap-10">
                            <div className="flex-1 lg:order-1 order-2">
                                <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-extrabold mb-[1.875rem]">Tech Devise: Developing User friendly and Flexible automation</h2>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">
                                    At Tech Devise, we have dedicated professionals who are specialists in Robot and Control systems. We offer you Robot Based Control system to our clients. Be it the automotive industry, or consumer goods, we are ready to customize our product and offer you the best that will amaze you for sure. Whether you already have an automation system ready and just need us to update / modify, or you need a completely new and customized control system, we are always ready for the challenge. We are capable enough to build new and customized Robot Systems or we can build systems utilizing your old Robots to meet your requirement in any sector. We can even work on your old Robot to make it work efficiently, fast, and increase your pay back amount as well. In case you need to port your system to a remote place or to other cities or countries, we are always ready to do it for you. Since we have dedicated and experienced people working with us, we are sure to not only to fulfill your requirements but also build a nice relationship and understanding with you. Understanding your need is pretty much important in this field and we do the same with our clients. Be it a large project or a small one, you can always expect us to deliver cost-effective and high-performance solutions.
                                </p>
                            </div>
                            <img src={robo} alt="robo" className="lg:flex-[0_1_25rem] lg:max-w-[25rem] max-w-2xl w-full h-full mx-auto block lg:order-2 order-1" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Automation section start */}

            {/* Python section start */}
            <section className="python my-[4.6875rem] bg-[#EEFCFE] max-lg:py-[4.6875rem]">
                <div className="main-container lg:!ps-0">
                    <div className={` h-full flex-1 flex lg:flex-row flex-col  justify-start items-center gap-[2.875rem] relative transition-all duration-300 `}>
                        <img src={python} alt="modal side image" className='lg:max-w-[51.5625rem] lg:max-h-[61.9375rem] lg:h-full h-[25rem] w-full lg:object-cover object-cover' />
                        <div className="lg:flex-1 lg:overflow-y-auto">
                            <h2 className='2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-extrabold mb-[3.25rem]'>Digital Marketing Executives</h2>
                            <p className="text-[1.125rem] leading-[2.125rem] font-normal pb-12">
                                In today&apos;s world, to be a successful business owner you need to keep up with the pace. As a business owner, it’s important to deliver quick result to your clients and this is exactly where the Python comes in. Python, as you know, is one of the well-known dynamic languages that follow Object Oriented Programming laws. It helps you work in an efficient, fast, and better way to ensure quality result all the time. We at Tech Devise ensure that we put this good technology to use for our client’s betterment.
                            </p>

                            <h4 className="text-[1.75rem] leading-[2.4375rem] font-semibold mb-3">Our python experts can help you work with:</h4>
                            <ul className='ps-7 list-disc mb-9'>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    Responsive / Dynamic website
                                </li>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    Web crawlers
                                </li>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    Customized CMS
                                </li>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    Web application
                                </li>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    Framework Integration
                                </li>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    UI development
                                </li>
                                <li className='text-lg leading-[2.125rem] font-normal'>
                                    Monitor capacity and performance of existing web application
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Python section end */}

            {/* why section start */}
            <section className="why my-[4.6875rem] pb-10">
                <div className="main-container">
                    <div className="section-header text-center mb-[5.375rem]">
                        <h3 className="text-[3rem] font-extrabold  text-black mb-[1.625rem]">Why Choose Us</h3>
                        <p className="text-[1.125rem] leading-[1.625rem] font-normal max-w-6xl mx-auto">Our team focuses mainly on scalability, secure, agile, and high performance python development. This not only helps us to meet client&apos;s requirement but also helps in producing output for our clients as well. So, if you are looking for quality service at an affordable rate, then you can surely give us a call or drop us a mail and we will try to deliver you the best quality service that you can expect. While you work with Tech Devise, you can rest assured that you will always get highly responsive support even after project delivery for sure.</p>
                    </div>

                    <img src={why1} alt="why image" className="block mt-[2.375rem] mb-[4.6875rem]" />

                    <div className="flex justify-center items-center lg:flex-row flex-col lg:s-[3.1875rem] relative">
                        <h4 className="texto max-lg:hidden absolute top-[113px] text-nowrap left-0 rotate-180 sm:text-[1.225rem] text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[##666666] to-black">Our Work Modules</h4>

                        <div className="flex-1 lg:order-1 order-2">
                            <p className="text-[1.125rem] leading-[1.625rem] font-normal max-w-6xl mx-auto">
                                Artificial Intelligence as you can understand is all about implementing a system that can calculate, derive, and take decisions without having to wait for human input. All though these days in many field AI is being used, but it&apos;s still a new technology in the corporate world and requires a lot of implementation capabilities. At Tech Devise, we stand as the bridge between the corporate needs and the academic knowledge of AI. We implement the data research models into machines to offer our clients the right solution for their requirement. We have experts in our team of AI and ML. From data studies to deployment, we stay with our clients and make sure that we deliver them a capable AI-enabled system. We team up with data scientists to extract valuable information from any existing data present in any company and then optimize their business with the help AI and ML. If you wish to build scalable ML models that can improve your business progress we are definitely with you.
                            </p>
                        </div>
                        <img src={why2} alt="why 2 vector image" className="lg:order-2 order-1" />
                    </div>
                </div>
            </section>
            {/* why section end */}
                   <GetInTouch showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default WebApplicationDevelopment 