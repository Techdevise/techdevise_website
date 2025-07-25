import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Link } from 'react-router-dom'

// images
import blockchainBg from '/blockchainBg.webp'
import playVector from '/playVector.svg'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
// Fist slider 
import blockFSlider0 from '/blockFSlider0.webp'
import blockFSlider1 from '/blockFSlider1.webp'
import blockFSlider2 from '/blockFSlider2.webp'
import blockFSlider3 from '/blockFSlider3.webp'
import blockFSlider4 from '/blockFSlider4.webp'
import blockFSlider5 from '/blockFSlider5.webp'
import blockFSlider6 from '/blockFSlider6.webp'

import sliderIconF from '/sliderIconF.svg'

import sliderSBg from '/sliderSBg.webp'
import slideTBg from '/slideTBg.webp'

import slideSIcon1 from '/slideSIcon1.svg'
import slideSIcon2 from '/slideSIcon2.svg'
import slideSIcon3 from '/slideSIcon3.svg'

import slideTIcon1 from '/slideTIcon1.svg'
import slideTIcon2 from '/slideTIcon2.svg'
import slideTIcon3 from '/slideTIcon3.svg'

import boxArrowDown from '/boxArrowDown.svg'
import boxArrowUp from '/boxArrowUp.svg'

import platform1 from '/Platform1.svg'
import platform2 from '/Platform2.svg'
import platform3 from '/Platform3.svg'
import platform4 from '/Platform4.svg'
import platform5 from '/Platform5.svg'
import platform6 from '/Platform6.svg'
import platform7 from '/Platform7.svg'
import platform8 from '/Platform8.svg'
import platform9 from '/Platform9.svg'
import platform10 from '/Platform10.svg'

import expertise1 from '/expertise1.png'
import expertise2 from '/expertise2.png'
import expertise3 from '/expertise3.png'

const Blockchain = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);
    const sliderFImages = [blockFSlider0, blockFSlider1, blockFSlider2, blockFSlider3, blockFSlider4, blockFSlider5, blockFSlider6]

    const sliderFContent = [
        {
            title: 'Smart Contrac Development & Audit',
            para: 'Our smart contract development company designs and deploys self-executing contracts tailored to business needs. TechDevise smart contract development services ensure smooth functionality across blockchain networks.',
        },

        {
            title: 'Enterprise Blockchain Development',
            para: 'Being a leading enterprise blockchain development company, we specialize in creating high-performance networks. By leveraging our enterprise blockchain development services, you can improve operational efficiency.',
        },

        {
            title: 'Blockchain Integration',
            para: 'Our blockchain development solutions enable businesses to integrate distributed ledger technology with minimal disruption. Our custom blockchain development company ensures automation across multiple industries.',
        },

        {
            title: 'Layer 1 Blockchain Development',
            para: 'Being a top blockchain software development company, we create scalable networks with custom consensus mechanisms. This blockchain application development ensures security, efficiency, and flexibility for future growth.',
        },

        {
            title: 'Layer 2 Blockchain Solutions',
            para: 'Our blockchain solutions development focuses on optimizing scalability through rollups and sidechains. Businesses can hire blockchain developers to create efficient Layer 2 solutions that improve network performance.',
        },

        {
            title: 'NFT Development',
            para: 'Our NFT development company specializes in creating blockchain-based digital assets for gaming, art, and real estate. With NFT development services, businesses can build NFT marketplaces and mint tokens.',
        },

        {
            title: 'Web3 Development',
            para: 'TechDevise Web3 development services include creating blockchain-powered platforms. Businesses seeking blockchain app development services can build Web3 applications that redefine user interaction and data privacy.',
        },
    ]

    const slideS = [
        {
            icon: slideSIcon1,
            title: 'Blockchain Bridges',
            para: 'Our blockchain development service professionals develop bespoke blockchain bridges        tailored to your specific needs, allowing seamless interoperability and asset transfers across diverse blockchain networks.'
        },
        {
            icon: slideSIcon2,
            title: 'Metaverse Spaces',
            para: 'Our blockchain app development services are constantly pushing the limits of what will inspire the next in the metaverse for users worldwide, whether it’s a virtual showroom, a collaborative workspace, or an entertainment venue, we got you covered.'
        },
        {
            icon: slideSIcon3,
            title: 'Decentralized Exchanges (DEX)',
            para: 'We create secure, scalable and customizable DEX platforms, designed for operators, asset managers, token issuers, brokers, and dealers, offer users seamless access to extensive digital assets while ensuring they have complete control over their funds.'
        },


        {
            icon: slideSIcon1,
            title: 'Blockchain Bridges',
            para: 'Our blockchain development service professionals develop bespoke blockchain bridges        tailored to your specific needs, allowing seamless interoperability and asset transfers across diverse blockchain networks.'
        },
        {
            icon: slideSIcon2,
            title: 'Metaverse Spaces',
            para: 'Our blockchain app development services are constantly pushing the limits of what will inspire the next in the metaverse for users worldwide, whether it’s a virtual showroom, a collaborative workspace, or an entertainment venue, we got you covered.'
        },
        {
            icon: slideSIcon3,
            title: 'Decentralized Exchanges (DEX)',
            para: 'We create secure, scalable and customizable DEX platforms, designed for operators, asset managers, token issuers, brokers, and dealers, offer users seamless access to extensive digital assets while ensuring they have complete control over their funds.'
        },


    ]

    const slideT = [
        {
            icon: slideTIcon1,
            title: 'Certified Blockchain Experts',
            para: 'Work with a team of certified blockchain experts with extensive experience across various industries.'
        },
        {
            icon: slideTIcon2,
            title: 'Client-Focused Blockchain Approach',
            para: 'We prioritize our clients needs, ensuring transparent and flexible development processes.'
        },
        {
            icon: slideTIcon3,
            title: 'Client-Focused Blockchain Approach',
            para: 'Our products comply with industry standards, ensuring security and reliability.'
        },


        {
            icon: slideTIcon1,
            title: 'Certified Blockchain Experts',
            para: 'Work with a team of certified blockchain experts with extensive experience across various industries.'
        },
        {
            icon: slideTIcon2,
            title: 'Client-Focused Blockchain Approach',
            para: 'We prioritize our clients needs, ensuring transparent and flexible development processes.'
        },
        {
            icon: slideTIcon3,
            title: 'Client-Focused Blockchain Approach',
            para: 'Our products comply with industry standards, ensuring security and reliability.'
        },


    ]

    const platforms = [platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10]
    return (
        <>
            {/*landing area of BlockChain Development sections start  */}
            <section style={{ backgroundImage: `url(${blockchainBg})` }} className="landing mb-[4.6875rem] min-h-svh bg-bottom bg-cover bg-no-repeat flex justify-center items-center ">
                <div className="w-full max-w-[64.1875rem] m-auto text-center">
                    <img src={playVector} alt="play icon" className='mx-auto mb-7' />
                    <h1 className=" md:text-5xl sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-5">
                        Blockchain Development Company
                    </h1>
                    <p className="text-xl font-normal text-white mb-[1.375rem]">With expertise in over 40 blockchain protocols, we are leading the charge toward the web3 future with our advanced blockchain development services.</p>
                    <Link to="/" className="bg-pine-700 text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                        Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                </div>
            </section>
            {/*landing area of BlockChain Development sections end  */}

            {/* Re-Invent section Start */}
            <section className='re-invent my-[4.6875rem]'>
                <div className="main-container">
                    <div className="sectionHeader text-center  max-w-6xl mx-auto mb-[5.4375rem]">
                        <h2
                            data-aos-delay="200"
                            className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] text-black mb-7 font-extrabold text-center"
                        >
                            Re-Invent Security For Business With Our Blockchain App Development Services
                        </h2>

                        <p className='text-[1.25rem] leading-[2.1875rem] font-medium'>Whether you are planning to start a venture or a large-scale organization looking to re-invent the value chain, our trusted Blockchain development solutions got you covered.</p>
                    </div>

                    <div className="flex gap-[1.8125rem] justify-center items-stretch lg:flex-row-reverse flex-col">

                        <div className="2xl:w-[60%] lg:w-[70%] w-full">
                            <div className="bg-white h-full rounded-[1.625rem] 2xl:py-[5.75rem] lg:py-16 py-12 2xl:px-[4.4375rem] lg:px-12 px-10">
                                <div className="icon size-[7.9375rem] lg:mb-[1.9375rem] mb-6">
                                    <img src={sliderIconF} alt="slider icon" className='size-full' />
                                </div>

                                <div className="flex flex-col">

                                    <div className="flex gap-2.5 justify-start mt-[1.9375rem] items-stretch  order-2">
                                        <button ref={prevRef} className="cursor-pointer">
                                            <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-black">
                                                <GoArrowLeft className="size-7" />
                                            </div>
                                        </button>

                                        <button ref={nextRef} className="cursor-pointer ">
                                            <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
                                                <GoArrowRight className="size-7" />
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
                                        {sliderFContent.map((slideContent, index) => (
                                            <SwiperSlide
                                                key={index}
                                                className="flex justify-center items-center "
                                            >
                                                <h3 className='2xl:text-[3rem] lg:text-[2.7rem] sm:text-[2.5rem] text-[2rem] leading-[4.3125rem] font-extrabold lg:mb-[1.9375rem] mb-6'>
                                                    {slideContent.title}
                                                </h3>

                                                <p className='text-[1.125rem] leading-[1.625rem] font-medium'>
                                                    {slideContent.para}
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
                                effect={'fade'}
                                speed={1000}
                                autoplay={{ delay: 5000 }}
                                grabCursor={false}
                                allowTouchMove={false}
                                modules={[Autoplay, Navigation, EffectFade]}
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
                                {sliderFImages.map((slideImage, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="flex justify-center items-center !h-full"
                                    >
                                        <img src={slideImage} alt="Slider Image" className='h-full object-cover rounded-[1.625rem] w-full max-lg:max-h-[18.75rem]' />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* Re-Invent section end */}

            {/* Solutions section start */}
            <section style={{ backgroundImage: `url(${sliderSBg})` }} className="solutions bg-center bg-cover bg-no-repeat my-[4.6875rem] py-[4.6875rem]">
                <div className="main-container">
                    <div className="section-header text-center lg:text-start mb-[5.375rem]">
                        <h3 className="text-[3rem] font-extrabold  text-black mb-[1.625rem]">Blockchain Development Solutions We Deliver</h3>
                        <p className="text-[1.125rem] leading-[1.625rem] font-medium max-w-6xl">Unlock your business’s full potential with our expert blockchain development services, designed to
                            transform and innovate your operations with tailor-made, agile solutions.</p>
                    </div>
                    <div className="flex flex-col lg:ps-[16.75rem] relative">
                        <div className="flex gap-2.5 justify-end items-stretch mt-[3.25rem] order-2">
                            <button ref={prevRef2} className="cursor-pointer order-1">
                                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                                    <GoArrowLeft className="size-7" />
                                </div>
                            </button>

                            <button ref={nextRef2} className="cursor-pointer order-2">
                                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
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
                            {slideS.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex  justify-center items-center !h-auto"
                                    >
                                        <div className="2xl:max-w-[480px] h-full w-full bg-white rounded-10 py-5 px-6 rounded-[.625rem]">
                                            <img src={item.icon} alt="" className='block size-[6.125rem] object-contain mb-[1.125rem]' />
                                            <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>{item.title}</h4>
                                            <p className="text-[1.125rem] leading-[2.125rem] font-normal">{item.para}</p>
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
                        <h3 className="text-[3rem] font-extrabold  text-black mb-[1.625rem]">Blockchain Development Solutions We Deliver</h3>
                        <p className="text-[1.125rem] leading-[1.625rem] font-medium max-w-6xl">Unlock your business&apos;s full potential with our expert blockchain development services, designed to
                            transform and innovate your operations with tailor-made, agile solutions.</p>
                    </div>
                    <div style={{ backgroundImage: `url(${slideTBg})` }} className="flex flex-col  bg-center bg-cover bg-no-repeat py-[4.6875rem] px-[3.75rem] rounded-[1.625rem] overflow-hidden relative">
                        <div className="flex gap-2.5 justify-center items-stretch mt-[3.25rem] order-2">
                            <button ref={prevRef2} className="cursor-pointer order-1">
                                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                                    <GoArrowLeft className="size-7" />
                                </div>
                            </button>

                            <button ref={nextRef2} className="cursor-pointer order-2">
                                <div className="size-12 rounded-full aspect-square flex justify-center items-center text-pine-700 bg-white">
                                    <GoArrowRight className="size-7" />
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
                                nextEl: nextRef2.current
                            }}
                        >
                            {slideT.map((item, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex  justify-center items-center !h-auto pb-4 group"
                                    >
                                        <div className="mx-auto h-full w-full bg-white rounded-10 py-9 px-8 rounded-[1.625rem] relative scale-100 ">
                                            <img src={boxArrowDown} alt="bottom arrow to top" className='absolute -bottom-2 scale-110 left-3 w-full h-auto group-[.swiper-slide-active]:invisible group-[.swiper-slide-active]:opacity-0 group-[.swiper-slide-active]:bottom-0 transition-all duration-1000' />
                                            <img src={boxArrowUp} alt="top arrow to top" className='absolute -top-2 scale-110 left-3 w-full h-auto invisible opacity-0 group-[.swiper-slide-active]:visible group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:top-0 transition-all duration-1000' />
                                            <img src={item.icon} alt="" className='block size-[6.125rem] object-contain mb-[1.125rem]' />
                                            <h4 className='text-[1.75rem] leading-[2.4375rem] font-semibold mb-3 pe-24'>{item.title}</h4>
                                            <p className="text-[1.125rem] leading-[2.125rem] font-normal">{item.para}</p>
                                        </div>

                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section >
            {/* Solutions section end */}

            {/* Transform section Start */}
            <section className='transform my-[4.6875rem] lg:py-[8.1875rem] py-[4.6875rem] bg-gradient-to-r from-[#FDFDFD] to-[#BBD2DC]'>
                <div className="main-container">
                    <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[3.8125rem]">
                        <h2
                            data-aos-delay="200"
                            className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance"
                        >
                            Let's Transform Your Operations with TechDevise Custom Blockchain Development
                        </h2>

                        <p className='text-[1.25rem] leading-[2.1875rem] font-medium'>As a trusted Blockchain software development company with the experience of managing Blockchain projects of varied complexity levels, we offer expertise to turn your idea into secure, scalable and trusted solution.</p>
                    </div>

                    <div className="grid 2xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
                        <div className="col py-[1.9375rem] px-[2rem] bg-[#DCE1FC] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">150+</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Dynamic Blockchain Professional</span>
                            </div>
                        </div>

                        <div className="col py-[1.9375rem] px-[2rem] bg-[#FFEDEF] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">50+</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Projects Successfully Deployed</span>
                            </div>
                        </div>

                        <div className="col py-[1.9375rem] px-[2rem] bg-[#E1FCDC] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">85+</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Client Triumph and Success</span>
                            </div>
                        </div>

                        <div className="col py-[1.9375rem] px-[2rem] bg-[#FFF9E6] flex max-md:flex-wrap justify-center items-center gap-5">
                            <div className="num">
                                <span className="lg:text-[2rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance">98+</span>
                            </div>
                            <div className="text">
                                <span className='text-[1.125rem] leading-[2.125rem] font-mediums'>Client Retention Rate</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-[4.625rem]">
                        <Link to="/" className="bg-pine-999 text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                    </div>


                </div>
            </section>
            {/* Transform section end */}

            {/* Platforms section Start */}
            <section className='platforms my-[4.6875rem]'>
                <div className="main-container">
                    <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[4.5625rem]">
                        <h2
                            data-aos-delay="200"
                            className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance"
                        >
                            Our Expertise In Blockchain Development Services Spans Multiple Platforms
                        </h2>

                        <p className='text-[1.25rem] leading-[2.1875rem] font-medium'>As a leading Blockchain development company, TechDevise only hires Blockchain developers with a proven track record. That&apos;s why we can handle any task or project, even the most complicated ones.</p>
                    </div>

                    <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-[2.5625rem]">
                        {platforms.map((image, index) => (
                            <div key={index} className="col border border-[#D3D3D3] shadow-2xl shadow-black/10 rounded-[.9375rem] lg:w-[18rem] lg:h-[15.4375rem] max-lg:size-[10.375rem] max-lg:aspect-square flex justify-center items-center">
                                <img src={image} alt="logo's of platform" className='lg:size-auto size-[5rem]' />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-[4.625rem]">
                        <Link to="/" className="bg-pine-999 text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                            Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                    </div>


                </div>
            </section>
            {/* Platforms section end */}

            {/* Expertise section Start */}
            <section className='expertise my-[4.6875rem] lg:py-[8.1875rem] py-[4.6875rem] bg-gradient-to-r from-[#FDFDFD] to-[#F1F4E5]'>
                <div className="main-container">
                    <div className="sectionHeader text-center  max-w-7xl mx-auto mb-[3.8125rem]">
                        <h2
                            data-aos-delay="200"
                            className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] text-black mb-7 font-extrabold text-center text-balance"
                        >
                            Lour Expertise In Blockchain Development Services Spans Multiple Platforms
                        </h2>

                        <p className='text-[1.25rem] leading-[2.1875rem] font-medium'>As a leading Blockchain development company, TechDevise only hires Blockchain developers with a proven track record. That’s why we can handle any task or project, even the most complicated ones.</p>
                    </div>

                    <div className="flex xl:flex-row flex-col justify-center items-stretch gap-[2.4375rem]">
                        <div className="xl:flex-1 flex flex-col gap-[2.4375rem] justify-start items-stretch">
                            <div className="bg-white rounded-[.9375rem] shadow-2xl shadow-black/5 border border-[#D3D3D3] px-7 py-[1.875rem] gap-[1.8125rem] flex justify-start min-[540px]:items-center min-[540px]:flex-row flex-col">
                                <div className="flex-[1_1_17.125rem] min-[540px]:max-w-[17.125rem] h-[18.9375rem] rounded-[1.25rem] overflow-hidden">
                                    <img src={expertise1} alt="first card image" className='h-full w-full object-cover' />
                                </div>
                                <div className="cardBody flex-1">
                                    <h6 className='text-xl font-semibold text-pine-700'>Blog</h6>
                                    <h5 className='text-xl font-bold text-black mt-4 mb-7'>How to Implement Blockchain in Business? A Complete Guide</h5>
                                    <h6 className='text-xl text-[#9F9F9F] mb-[2.25rem]'>June 30, 2020</h6>
                                    <div className="flex justify-start items-center">
                                        <Link to="/" className="bg-pine-700 text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Read More <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[.9375rem] shadow-2xl shadow-black/5 border border-[#D3D3D3] px-7 py-[1.875rem] gap-[1.8125rem] flex justify-start min-[540px]:items-center min-[540px]:flex-row flex-col">
                                <div className="flex-[1_1_17.125rem] min-[540px]:max-w-[17.125rem] h-[18.9375rem] rounded-[1.25rem] overflow-hidden">
                                    <img src={expertise2} alt="first card image" className='h-full w-full object-cover' />
                                </div>
                                <div className="cardBody flex-1">
                                    <h6 className='text-xl font-semibold text-pine-700'>Blog</h6>
                                    <h5 className='text-xl font-bold text-black mt-4 mb-7'>How to Implement Blockchain in Business? A Complete Guide</h5>
                                    <h6 className='text-xl text-[#9F9F9F] mb-[2.25rem]'>June 30, 2020</h6>
                                    <div className="flex justify-start items-center">
                                        <Link to="/" className="bg-pine-700 text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Read More <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:flex-1">
                            <div className="h-full max-xl:gap-[1.8125rem] flex xl:flex-col min-[540px]:flex-row flex-col justify-start items-stretch bg-white rounded-[.9375rem] shadow-2xl shadow-black/5 border border-[#D3D3D3] px-7 py-7">
                                <div className="rounded-[1.25rem] overflow-hidden w-full xl:max-h-[27.9375rem] min-[540px]:mb-[2.375rem] max-xl:flex-[1_1_17.125rem] max-xl:min-[540px]:max-w-[17.125rem] max-xl:h-[18.9375rem]">
                                    <img src={expertise3} alt="big card image" className="h-full w-full object-cover" />
                                </div>
                                <div className="cardBody max-xl:flex-1">
                                    <h6 className='text-xl font-semibold text-pine-700'>Blog</h6>
                                    <h5 className='text-xl font-bold text-black mt-4 mb-7'>Telemedicine 2.0 - A Comprehensive Guide On What Healthcare Providers Need To Know?</h5>
                                    <h6 className='text-xl text-[#9F9F9F] mb-[2.25rem]'>June 30, 2020</h6>
                                    <div className="flex justify-start items-center">
                                        <Link to="/" className="bg-pine-700 text-white inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Read More <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><GoArrowRight className='text-[18px] -rotate-12 text-pine-700' /> </span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Expertise section end */}
        </>
    )
}

export default Blockchain
