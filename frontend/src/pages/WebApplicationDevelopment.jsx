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
            discription: "Each project begins with nothing. First, we will review your ideas and visit the websites of our competitors. Then we will suggest improvements and lay out everything according to your preferences. Once it has all been completed we provide a detailed description of the features, design, development, and workflow.",
        },
        {
            bg: "#EBF8F1",
            image: ourWork2,
            title: "Design",
            discription: "A properly designed layout is necessary in every CMS based site. Throughout the design phase we maintain top standards in quality to ensure that it is reliable and aesthetic. Before we even start development we have comprehensive conversations with you to ensure we make all the adjustments needed and ensure the final product will fulfill your expectations in every way possible.",
        },
        {
            bg: "#EDF5C0",
            image: ourWork3,
            title: "Development",
            discription: "We will ensure we deliver a fully operational, optimally optimized CMS website, regardless of the complexity that the development process can entail sometimes. We take care of everything so you never need to worry about a single thing, which includes installing your newly designed site, as well as optimizing it to perform and be search engine friendly.",
        },
        {
            bg: "#FFD3E5",
            image: ourWork4,
            title: "Content Upload",
            discription: "Your CMS site needs content until it is launched. Your first upload is also our responsibility where we ensure your content is uploaded in the right place and without hassles. You will also be in full control of content modification or updating later.",
        },
        {
            bg: "#D0EBFF",
            image: ourWork1,
            title: "Testing",
            discription: "We ensure that your app and web platform undergo a test run to deliver reliable and fluid software. Attentively, our team checks responsiveness, speed, functionality, and compatibility with different browsers and devices. Each element undergoes a strict testing procedure, and these parts are designed in such a way that they provide the best quality products, and they also provide a smooth experience without any bugs to your users.",
        },
        {
            bg: "#FFF0BA",
            image: ourWork2,
            title: "Quality Delivered",
            discription: " We intend to offer a quality service by maintaining an affordable price. To ensure your website runs efficiently, we shall also ensure that all the processes involved in the development process are top quality and there should be support even after the project is finished.",
        },
    ]

    const ecom = [
        {
            icon: ecom1,
            title: 'E-Commerce Development',
            para: ' We build e-commerce websites upon your idea and detailed analytical research of the competitors. We have a staff of strategic planning and recommendations that are particular with your aims. Before the launch you will be briefed on the entire features, the design elements and the development as a whole.'
        },
        {
            icon: ecom2,
            title: 'Custom E-commerce',
            para: 'Our entirely custom-made e-commerce sites are tailored to perfectly suit the objectives of your company. We research the competition, formulate major functions, and collaborate directly with you throughout the entire process. When all this work is complete, you will have access to all the technical specifications and documentation of your new platform.'
        },
        {
            icon: ecom3,
            title: 'Responsive Shopping Website',
            para: ' We create mobile friendly, responsive shopping websites that work on all the platforms . After conducting a market research and understanding your objectives we develop user friendly design which puts accessibility and usability at the forefront to ensure that your site works and looks good across all platforms.'
        },


        {
            icon: ecom4,
            title: 'Plug-In & Module Development',
            para: 'With our plugin and module development service, you can further extend the capability of your e-commerce site. However, regardless of all possible other functionality, performance enhancements, and novel features you might require, our solutions will give you a competitive advantage and a superior user experience.'
        },

        {
            icon: ecom5,
            title: 'Payment Gateway Integration',
            para: ' We ensure that your preferred e-commerce site will have a fail free transaction through the adoption of secure and trusted payment gateways. The outcome of this is that your customers will end up with an unmatched checkout process resulting in an increase in customer trust and satisfaction each time they shop.'
        },

        {
            icon: ecom6,
            title: 'Shopping Cart Development',
            para: 'We develop custom shopping carts that are optimized to increase conversions and user activity. We will also assist you in reducing the rate of abandoning orders due to the simple, fast, and seamless process of checkouts through our carts.'
        },

    ]
    return (
        <>
            {/* web landing area section start */}
            <section style={{ backgroundImage: `url(${serviceBg})` }} className="min-h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
                <div className="main-container  text-center ">
                    <h1 className="md:text-5xl sm:text-[2.625rem] text-[2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BEC033] mb-5">
                       Website Development <br />
                        Services
                    </h1>
                    <p className="text-xl font-normal max-w-[64.1875rem] mx-auto text-white mb-[1.375rem]"><b className="font-bold">Tech Devise</b> employs a professional team of experts. Our primary goal is the fulfillment of the needs of our clients. The fact that we still offer to meet the needs of our clients after the delivery period makes it our strength to offer good services.
</p>
                    <button onClick={() => setShowModal(true)} className="bg-[#CACB87] inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><img src={arrowRightUp} alt="arrow right up" className="w-[1.125rem]" /></span></button>
                </div>
            </section>
            {/* web landing area section end */}
            {/* Our Work section start */}
            <section className="my-[4.6875rem]">
                <div className="main-container !pe-0">

                    <div className="relative">
                        <h4 className="texto max-lg:hidden absolute top-2 left-5 rotate-180 md:text-[50px] lg:text-[42px] xl:text-[52px] 2xl:text-[58px] sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#f2f2f2] to-pine-700">Our Work Modules</h4>
                        <div className="lg:ps-[7.125rem] ">
                            <div className="section-header flex gap-10 lg:flex-row flex-col justify-between lg:items-center items-stretch main-container !ps-0 max-lg:!pe-10 !max-w-auto">
                                <p className="text-[20px] leading-[2.6875rem] max-w-6xl "><strong>Content Management System</strong> -  A content management system allows the users to create, manage, and publish digital content without having to possess high-level technical expertise. It simplifies the maintenance of the sites, teamwork, and lets users come up with the design, SEO, and scheduling of the content.
</p>
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
                        <p className="text-[1.125rem] leading-[1.625rem] font-medium max-w-6xl mx-auto"> We offer our solutions to customers due to our team of experts offering personalized and innovative e-commerce services. There is no doubt that our E-commerce services will help you realize the next level of your company should you want to go digital.</p>
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
                                <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-extrabold mb-[1.875rem]">Tech Devise: Creating flexible and easy to work automation solutions
</h2>
                                <p className="text-[1.125rem] leading-[2.125rem] font-normal">
Being a group of committed individuals of Tech Devise, we specialize and deal with robotic and control systems. We deliver high-tech control solutions with robotization that are highly customized to the individual business requirements of our clients with industries such as the automotive and consumer goods.It does not matter whether you have to install an entirely novel and even highly distinctive control system or you want merely to renew or improve your current automation system, here we are. We can either create the latest robotic systems on the ground up or modify your existing robots to improve performance, cost and speed.We may also provide system relocation services, when you need to move operations to another city or country, we are capable of moving your setup to the destination so easily. Whether your project is large or small, you can rely upon us to produce cost effective and high performance results.                                </p>
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
Python is a high- level programming language because it is expandable and has become one of the simplest codes to learn and apply. Python possesses a diverse library and frame and is widely used in software development programs, data science, automation, web development, and artificial intelligence. Its features amount to its versatility and strength, and being able to deal with difficult applications used by talented workers and large technological firms, but also its easy syntax, rendering it a perfect beginner programming language.
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
                        <p className="text-[1.125rem] leading-[1.625rem] font-normal max-w-6xl mx-auto">At our team, high performance, scalability, security and agility in Website development are the main areas of interest. This assists us in generating output to our clients besides addressing their requirements. This way, you are most certainly welcome to call us or leave an email, in case you are interested in our high-quality service at a decent price, and we will do our best to fulfill your satisfaction. You will be assured that the work with Tech Devise will give you quality support all the time and well even after the project delivery.</p>
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
                      <GetInTouch showModal={showModal} setShowModal={() => { setShowModal(!showModal) }} />
        </>
    )
}

export default WebApplicationDevelopment 