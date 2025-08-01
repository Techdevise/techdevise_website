import React, { useRef, useState } from 'react'
import seoBg from "/seoBg.webp"
import girl from '/girl.webp'
import girl1 from '/girl1.svg'
import girl2 from '/girl2.svg'
import girl3 from '/girl3.svg'
import girl4 from '/girl4.svg'
import girl5 from '/girl5.svg'
import girl6 from '/girl6.svg'
import girl7 from '/girl7.svg'

import SEO from "/SEO.svg"
import facebookBlack from "/facebookBlack.svg"
import xBlack from "/xBlack.svg"
import instagramBlack from "/instagramBlack.svg"
import youtubeBlack from "/youtubeBlack.svg"
import managementBlack from "/managementBlack.svg"
import add from "/add.svg"
import keywordBlack from "/keywordBlack.svg"
import contentBlack from "/contentBlack.svg"
import AdwordsIcon1 from "/AdwordsIcon1.svg"
import AdwordsIcon2 from "/AdwordsIcon2.svg"
import AdwordsIcon3 from "/AdwordsIcon3.svg"
import AdwordsIcon4 from "/AdwordsIcon4.svg"
import AdwordsIcon5 from "/AdwordsIcon5.svg"
import AdwordsIcon6 from "/AdwordsIcon6.svg"
import play from "/play.svg"
import line from "/line.svg"
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { FaCaretRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { PiArrowUpRightBold } from 'react-icons/pi'
import GetInTouch from '../../components/GetInTouch'
const imageData = [
    {
        number: '01',
        title: 'SEO Optimization',
        description: 'At Tech Devise, we offer unique SEO optimization services that will increase the ranking of your websites on various search engines. We will help your website to become SEO optimized and this will ensure an increase in search engine ranking.',
        bg: 'bg-[#FEEEBB]',
        textColor: 'text-[#EAD182]'
    },
    {
        number: '02',
        title: 'Keyword Research',
        description: 'Analysis of effective keywords is a critical aspect that helps you analyze the overall performance of your firm. With the keywords hence becomes imperative. Tech Devise ensures to scan and chalk out the most relevant keywords that are duly added to all your online content.',
        bg: 'bg-[#C0E3F5]',
        textColor: 'text-[#6BA3BF]'
    },
    {
        number: '03',
        title: 'Regular Reports',
        description: 'Keep track of your online operations will help you to analyze the overall performance of your firm. With the assistance of the Tech Devise team, you can now avail regular reports that identify specific loopholes present in your online strategies.',
        bg: 'bg-[#CAC0F5]',
        textColor: 'text-[#9080D7]'
    },
    {
        number: '04',
        title: 'Competitor analysis',
        description: 'In order to be successful in the market, it is essential that you track the movement of your competitors. Tech Devise helps to build competitive advantage in the market by analyzing the operations of your direct industry competitors.',
        bg: 'bg-[#FEBBBC]',
        textColor: 'text-[#DA7273]'
    },
    {
        number: '05',
        title: 'SEO Content optimization',
        description: 'The content listed plays a vital role in grabbing the attention of your target audience. The professional team of Tech Devise are highly experienced and can form lobe engaging and creative content that captivates your target audience in the long run.',
        bg: 'bg-[#B6F1A5]',
        textColor: 'text-[#579C43]'
    },
    {
        number: '06',
        title: 'Result Oriented Strategies',
        description: 'At Tech Devise, we believe in generating results. The foremost goal of our company is to meet client expectations. Therefore, the strategies formulated are result-oriented that will surely give your business long-term benefits.',
        bg: 'bg-[#FFDDA5]',
        textColor: 'text-[#EDB749]'
    }
];
const socialMediaData = [
    {
        image: managementBlack,
        title: 'Social Media Management',
        description: 'The present online market is heavily influenced and reliant on Social Media Platforms. With the assistance of Tech Devise, you can now connect with your audiences more effectively through Social Media Platforms.',
        bg: 'bg-[#DBFFE5]', // The light green background from your image
        roundBg: 'bg-[#94E4AB]' // The darker green background for the circular icon area
    },
    {
        image: contentBlack,
        title: 'Content Creation',
        description: 'The Tech Devise team will help you to compose engaging content that attracts the attention of your target audience. Increase your Social Media reach with lucrative and creative content.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: keywordBlack,
        title: 'Keyword Research',
        description: 'Our expert team makes sure to identify and highlight the most relevant keyword in every Social Media Post such that the reach of every post is maximized in the long run.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: managementBlack,
        title: 'Daily post comment monitoring',
        description: 'Complete interaction between you and your audiences is maintained and handled by our team. All the queries and issues of the customers will be addressed by the Tech Devise team.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: contentBlack,
        title: 'Regular Posting',
        description: 'In order to be successful on Social Media platforms, it is essential that regular social media posts are created and released. The Tech Devise team will formulate attractive creatives and post them regularly on your behalf.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: keywordBlack,
        title: 'Contest Suggestions',
        description: 'We always look out for opportunities where you can conduct contests to increase your social media engagement. This will allow you to spread your brand like a wildfire. So, if you opt for our Social Media marketing services, you can be assured that your customer base will surely increase.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
];
const services = [
    {
        image: AdwordsIcon1, // You'll need to import these images or provide their full paths
        title: 'Keyword Research',
        description: 'The most important factor to get the best result from your Adword campaign is the selection of the right keywords. Our experts will find the best keywords that suit your business and will increase traffic to your website.'
    },
    {
        image: AdwordsIcon2,
        title: 'Detailed Reporting',
        description: 'We believe in maintaining a transparent relationship with our clients. Hence, we offer weekly reports about the work done and the results it is fetching. This way you will understand the progress of these marketing campaigns.'
    },
    {
        image: AdwordsIcon3,
        title: 'Competitor Campaign Analysis',
        description: 'Our expert team knows how you can get the best results from your Google Adword campaigns. We offer a detailed competitor analysis to know where your competitor stands in Google rankings. Hence, accordingly, we formulate the best Google Adword campaign to get the highest ROI.'
    },
    {
        image: AdwordsIcon4,
        title: 'Landing Page Creation',
        description: 'Our expert team understands that only investing in Google Adwords is not enough to ensure conversions. Hence, we provide unique and out of the box landing page and development services to increase the conversion rate.'
    },
    {
        image: AdwordsIcon5,
        title: 'Campaign Creation',
        description: 'We not only create strategies for Google Adword campaign but also have the expertise to create these campaigns and implement them. The campaigns created by us are planned meticulously to ensure that you get the highest ROI.'
    },
    {
        image: AdwordsIcon6,
        title: 'Precise Campaign ROI Calculations',
        description: 'We believe that if you are investing in anything, then you should get some assurance from our end. For every campaign, we do a precise calculation about how successful the campaign is going to get and what are the possible results out of it.'
    }
];
const DigitalMarketingOne = () => {
    const [showModal, setShowModal] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);


    return (
        <>
            {/* landing area section start */}
            <section style={{ backgroundImage: `url(${seoBg})` }} className='bg-no-repeat bg-cover pt-[5.5625rem] flex items-center justify-center overflow-hidden'>
                <div className="main-container">
                    <div className="flex max-lg:flex-col items-stretch justify-between">
                        <div className="w-full max-w-[51.1875rem] self-center py-14 lg:text-start text-center">
                            <h1 className="lg:text-[3.875rem] text-[2.8rem] font-extrabold text-transparent bg-clip-text bg-[linear-gradient(90deg,_#FFFFFF_0%,_#EDF5F3_7.5%,_#D4E7E4_17.5%,_#157B6C_95.5%)] mb-7">
                                Renowned <br className='max-lg:hidden' />
                                SEO Experts
                            </h1>
                            <p className='text-xl leading-[2.125rem] text-white mb-[2.125rem]'>At Tech Devise we have one of the most promising and talented SEO experts who strive to deliver results. Our resulted oriented SEO strategies will ensure that your website ranking is boosted in no time. Contact us today to know more!</p>
                            <div className="flex max-sm:flex-col sm:items-center justify-start gap-12">
                                <button className="border-pine-300 bg-pine-300 text-white text-base text-nowrap font-semibold border py-3 px-5 rounded-[.625rem] flex justify-center items-center gap-3">Explore more <HiOutlineArrowLongRight className='size-10' /></button>
                                <button className='flex items-center justify-center gap-12'>
                                    <div className="relative size-[65px] mx-auto aspect-square mb-7 rounded-full flex justify-center items-center">
                                        <div className="circle absolute top-0 left-0 rounded-full border-2 border-white h-full w-full animate-ping"></div>
                                        <div className="circle absolute top-[30%] left-[30%] -translate-[25%] rounded-full border-2 border-white size-[70%] animate-ping"></div>
                                        <img src={play} alt="play icon" className="mx-auto h-full w-full aspect-square " />
                                    </div>
                                    <span className='font-bold text-xl text-white'>Play Video</span>
                                </button>
                            </div>
                            <h2 className='text-[clamp(9rem,_13vw,_15.75rem)] max-lg:hidden text-white font-extrabold opacity-5 leading-none mt-9 mb-4'>SEO</h2>
                        </div>
                        <div className="lg:max-w-2/5 w-full pt-7 self-end max-lg:hidden">
                            <button className="block mb-28 text-2xl font-bold leading-none py-2.5 px-11 rounded-xl border-2 border-pine-200 text-white mx-auto">BUSINESS GROWTH</button>
                            <div className="w-full relative">
                                <img src={girl} alt="seoRightImage" className='w-full h-full max-h-[40.25rem] block object-contain' />
                                <img src={girl1} alt="seoRightImage" className='w-full h-full shake-z absolute inset-0 block' />
                                <img src={girl2} alt="seoRightImage" className='w-full h-full shake absolute inset-0 xl:left-10 block' />
                                <img src={girl3} alt="seoRightImage" className='w-full h-full shake-v absolute inset-0 lx:left-16 block' />
                                <img src={girl4} alt="seoRightImage" className='w-full h-full shake absolute inset-0 xl:left-8 block' />
                                <img src={girl5} alt="seoRightImage" className='w-full h-full shake-v absolute inset-0 xl:-left-10 block' />
                                <img src={girl6} alt="seoRightImage" className='w-full h-full shake absolute inset-0 xl:-left-16 block' />
                                <img src={girl7} alt="seoRightImage" className='w-full h-full shake-v absolute inset-0 2xl:-left-10 xl:-left-3 block' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* landing area section end */}

            {/* Ranking section start */}
           <section className='pt-[4.3125rem] pb-28 overflow-hidden'>
                <div className="main-container">
                    <div className="flex max-lg:flex-wrap items-center justify-between mb-10">
                        <div className="w-full max-w-[61.5625rem] lg:text-start text-center">
                            <h2 className="md:text-[3rem] text-[2.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B8CEC1] to-[#157B6C] mb-7">
                                Give Your Website Ranking a Boost With Our Proven SEO Strategies.
                            </h2>
                            <p className='text-xl font-medium leading-[2.1875rem] mb-0'>Is your business website struggling to attract visitors? If yes, then it is a common problem for every website because the internet is flooded with millions of websites and getting attention among this crowded place is a challenging task. </p>
                        </div>
                        <img src={SEO} alt="seo" className="w-full max-w-[35.4162rem]" />
                    </div>
                    <div className="col-span-2 flex flex-col">

                        <div className="flex gap-2.5 lg:justify-start justify-center items-stretch mt-[3.25rem] order-2">
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
                            className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:items-stretch !overflow-visible"
                            slidesPerView={1}
                            spaceBetween={25}
                            speed={1000}
                            breakpoints={{

                                1024: {
                                    slidesPerView: 1.5,
                                },
                                1200: {
                                    slidesPerView: 2,
                                },
                                1536: {
                                    slidesPerView: 3,
                                },
                            }}
                            grabCursor={true}
                            loop={true}
                            autoplay={{ delay: 1000 }}
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
                            {imageData.map((item, index) => (
                                <SwiperSlide key={index} className='!h-auto'>
                                    <div className={`${item.bg} lg:text-start text-center rounded-[.9375rem] pt-10 px-7 pb-5 min-h-full`}>
                                        <h2 className={`${item.textColor} text-[6rem] font-bold leading-none mb-3`}>{item.number}</h2>
                                        <h4 className="text-[1.75rem] font-semibold text-black mb-3">{item.title}</h4>
                                        <p className="text-base leading-[1.8125rem]">{item.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* Ranking section end */}

            {/* Social Media section start */}
            <section className='bg-gradient-to-r from-pine-100 to-pine-300 py-24'>
                <div className="main-container">
                    <div className="flex items-start justify-between gap-2.5">
                        <div className="w-[calc(100%_-_13.125rem)]">
                            <h2 className='text-5xl font-extrabold leading-none mb-9'>Our Social Media Marketing Services</h2>
                            <p className='font-medium text-xl leading-7 mb-20'>At Tech Devise our team of Social Media experts strives to provide our clients with the best social media marketing solutions that will surely
                                improve your business&apos;s online visibility. With the help of your experts, you can increase your online customer base as well.  </p>
                            <div className="col-span-2 flex flex-col">

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
                                    className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:items-stretch"
                                    slidesPerView={1}
                                    spaceBetween={25}
                                    speed={1000}
                                    breakpoints={{

                                        1024: {
                                            slidesPerView: 1.5,
                                        },
                                        1200: {
                                            slidesPerView: 2,
                                        },
                                        1536: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    grabCursor={true}
                                    modules={[Autoplay, Navigation]}
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
                                    {socialMediaData.map((item, index) => (
                                        <SwiperSlide key={index} className='!h-auto'>
                                            <div className={`${item.bg} rounded-[.9375rem] pt-10 px-7 pb-5 min-h-full`}>
                                                <div className={`w-[7rem] h-[7rem] rounded-full ${item.roundBg} flex items-center justify-center mb-[1.8125rem]`}>
                                                    <img src={item.image} alt={item.title} className='w-[3.1875rem]' />
                                                </div>
                                                <h4 className="text-[1.75rem] font-semibold text-black mb-3">{item.title}</h4>
                                                <p className="text-base leading-[1.8125rem]">{item.description}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <div className='w-fit'>
                            <div className="border border-dashed border-black w-[9rem] h-[9rem] rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={facebookBlack} alt="facebookBlack" className='w-[3.5625rem] h-[3.5625rem]' />
                            </div>
                            <div className="border border-dashed border-black w-[9rem] h-[9rem] rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={xBlack} alt="xBlack" className='w-[3.5625rem] h-[3.5625rem]' />
                            </div>
                            <div className="border border-dashed border-black w-[9rem] h-[9rem] rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={instagramBlack} alt="instagramBlack" className='w-[3.5625rem] h-[3.5625rem]' />
                            </div>
                            <div className="border border-dashed border-black w-[9rem] h-[9rem] rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={youtubeBlack} alt="youtubeBlack" className='w-[3.5625rem] h-[3.5625rem]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Social Media section end */}

            {/* Google Adwords section start */}
            <section className='py-[6.75rem]'>
                <div className="main-container">
                    <h3 className='md:text-5xl text-3xl font-extrabold leading-none mb-[1.9375rem] text-center'>Google Adwords</h3>
                    <p className='mb-[3.8125rem] w-fll max-w-[67.0625rem] mx-auto text-lg leading-[2.125rem] text-center'>Wanting to rank your website higher on Google search pages? If yes, then contact us and our Google Adwords experts to suggest the best strategies to get the most out of your Google Adwords campaigns. Contact us today to know more.</p>
                    <div className="bg-[#F5F7FB] py-[5.3125rem] 2xl:px-[3.4375rem] px-7 rounded-[.9375rem] relative flex flex-wrap">
                        <img src={line} alt="line" className='w-[9.8125rem] absolute top-full right-full -mt-14 -mr-14' />
                        <div className="lg:w-2/5 w-full pr-10">
                            <h3 className='lg:text-5xl text-3xl font-extrabold leading-none mb-[1.9375rem]'>The Services we offer under Google Adwords</h3>
                            <p className='mb-[3.8125rem] max-w-[67.0625rem] mx-auto text-lg leading-[2.125rem]'>We all know that the internet is flooded with millions of websites. Hence, getting your website to be noticed among this huge crowd is a challenging task. But nothing is impossible. With the help from our Google Adword experts, you can achieve the desired traffic to your website and improve its visibility. Our team will assist you in creating result-oriented Google Adword campaigns that will take your business to the next level.</p>
                        </div>
                        <div className="lg:w-3/5 w-full pl-10">
                            <div className="col-span-2 flex flex-col">

                                <div className="flex gap-2.5 justify-end items-stretch mt-[3.25rem] order-2">
                                    <button ref={prevRef2} className="cursor-pointer order-1">
                                        <div className="size-12 rounded-full aspect-square flex justify-center items-center text-black bg-white">
                                            <GoArrowLeft className="size-7" />
                                        </div>
                                    </button>

                                    <button ref={nextRef2} className="cursor-pointer order-2">
                                        <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
                                            <GoArrowRight className="size-7" />
                                        </div>
                                    </button>
                                </div>
                                <Swiper
                                    className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:items-stretch"
                                    slidesPerView={1}
                                    spaceBetween={44}
                                    speed={1000}
                                    breakpoints={{

                                        1024: {
                                            slidesPerView: 1.5,
                                        },
                                        1200: {
                                            slidesPerView: 1.5,
                                        },
                                        1400: {
                                            slidesPerView: 2,
                                        },
                                    }}
                                    grabCursor={true}
                                    modules={[Autoplay, Navigation]}
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
                                    {services.map((item, index) => (
                                        <SwiperSlide key={index} className='!h-auto'>
                                            <div className={`bg-white rounded-[.9375rem] pt-10 px-7 pb-5 min-h-full`}>
                                                <img src={item.image} alt={item.title} className='w-[2.9375rem] h-[2.9375rem] inline-block mb-[.9375rem]' />
                                                <h4 className="text-[1.75rem] font-semibold text-black mb-3">{item.title}</h4>
                                                <p className="text-base leading-[1.8125rem]">{item.description}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Google Adwords section end */}

            {/* Google Ads  section start*/}
            <section className='pt-[3.625rem] pb-[7.375rem]'>
                <div className="main-container">
                    <div className="flex items-center justify-center">
                        <div className="w-[20.5625rem] h-[20.5625rem] rounded-[1.25rem] flex items-center justify-center relative bg-[#CEEAD6]">
                            <MdOutlinePlayCircleFilled className='text-[#1F8E3D] absolute text-3xl top-3 left-3' />
                            <img src={add} alt="add" className='w-8/12' />
                        </div>
                        <div className="-ml-10 z-10">
                            <h2 className='text-[#1F8E3D] text-[clamp(3.125rem,_7vw,_8.0625rem)] font-bold'>Show up</h2>
                            <h2 className='text-[clamp(2.3rem,_5vw,_5.75rem)] font-bold'>with Google Ads</h2>
                            <p className='text-[1.0625rem] lg:pl-24 md:12'>Whatever your business goal, drive better results with Performance Max.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Google Ads  section start*/}

            {/*Our PPC Expert section start*/}
            <section className='pt-[4.375rem] pb-[7.5625rem] bg-gradient-to-r from-[#E3FFEB] to-[#C2EAF2]'>
                <div className="main-container">
                    <h2 className="text-center text-5xl font-bold">Why Hire Our PPC Expert?</h2>
                    <p className='max-w-[55.125rem] w-full mx-auto text-center text-lg font-medium leading-7 mb-12 mt-3 '>Tech Devise is certified by Google as a reputed Adword agency. Our certification and partnership
                        prove that we know all the intricate details about Google Adwords.</p>

                    {/* Positions */}
                    <div className="bg-white shadow-xl shadow-gray-600/5 rounded-[.625rem] py-[3.4375rem] px-[2.375rem]">
                        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-stretch">
                            <div className="lg:w-[25.625rem] lg:border-r border-black/20  pe-[3.3125rem]">
                                <ul className='lg:block flex justify-start items-center gap-5 max-lg:mb-5 overflow-x-auto hide-scroll'>

                                    <li className='mb-3.5'>
                                        <div className={` text-black bg-gradient-to-r from-[#D8F4E5] to-[#5CEA90] min-h-[4.8125rem] border border-black flex rounded-full items-center justify-between p-3 gap-[2.0625rem] font-medium text-base`}>
                                            <span className='text-base font-semibold ps-5 text-nowrap'>Certified Agency</span>
                                            <span className="ms-auto size-[3.3125rem] aspect-square rounded-full bg-[#fff] flex items-center justify-center"><PiArrowUpRightBold className='text-[18px]  text-black' strokeWidth={2} /> </span>
                                        </div>
                                    </li>
                                    <li className='mb-3.5'>
                                        <div className={` text-black bg-white min-h-[4.8125rem] border border-black flex rounded-full items-center justify-between p-3 gap-[2.0625rem] font-medium text-base`}>
                                            <span className='text-base font-semibold ps-5 text-nowrap'>Certified Agency</span>
                                            <span className="ms-auto size-[3.3125rem] aspect-square rounded-full bg-[#EA9C99] flex items-center justify-center"><PiArrowUpRightBold className='text-[18px]  text-black' strokeWidth={2} /> </span>
                                        </div>
                                    </li>
                                    <li className='mb-3.5'>
                                        <div className={` text-black bg-white min-h-[4.8125rem] border border-black flex rounded-full items-center justify-between p-3 gap-[2.0625rem] font-medium text-base`}>
                                            <span className='text-base font-semibold ps-5 text-nowrap'>Certified Agency</span>
                                            <span className="ms-auto size-[3.3125rem] aspect-square rounded-full bg-[#67C792] flex items-center justify-center"><PiArrowUpRightBold className='text-[18px]  text-black' strokeWidth={2} /> </span>
                                        </div>
                                    </li>
                                    <li className='mb-3.5'>
                                        <div className={` text-black bg-white min-h-[4.8125rem] border border-black flex rounded-full items-center justify-between p-3 gap-[2.0625rem] font-medium text-base`}>
                                            <span className='text-base font-semibold ps-5 text-nowrap'>Certified Agency</span>
                                            <span className="ms-auto size-[3.3125rem] aspect-square rounded-full bg-[#FFE74E] flex items-center justify-center"><PiArrowUpRightBold className='text-[18px]  text-black' strokeWidth={2} /> </span>
                                        </div>
                                    </li>
                                    <li className='mb-3.5'>
                                        <div className={` text-black bg-white min-h-[4.8125rem] border border-black flex rounded-full items-center justify-between p-3 gap-[2.0625rem] font-medium text-base`}>
                                            <span className='text-base font-semibold ps-5 text-nowrap'>Certified Agency</span>
                                            <span className="ms-auto size-[3.3125rem] aspect-square rounded-full bg-[#C897EB] flex items-center justify-center"><PiArrowUpRightBold className='text-[18px]  text-black' strokeWidth={2} /> </span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className={`flex-1 lg:ps-[5.75rem] flex justify-center items-center min-h-[18.75rem]`}>

                                <p className='text-[1.125rem] leading-[1.625rem] font-normal'><strong className='font-semibold'>Tech Devise </strong> is certified by Google as a reputed Adword agency. Our certification and partnership prove that we know all  the intricate details about Google Adwords.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/*Our PPC Expert section end*/}
<GetInTouch showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default DigitalMarketingOne