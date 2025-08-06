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
import arrowRightUp from "/arrowRightUp.svg"
import SEO from "/SEO.svg"
import facebookBlack from "/facebookBlack.svg"
import xBlack from "/xBlack.svg"
import instagramBlack from "/instagramBlack.svg"
import youtubeBlack from "/youtubeBlack.svg"
import managementBlack from "/managementBlack.svg"
import add1 from "/add1.svg"
import add2 from "/add2.svg"
  import add3 from "/add5.svg"
import add4 from "/add4.svg"
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
        description: 'Our specialty at Tech Devise is custom SEO solutions that improve the visibility of your website on the main search engines. Our strategy guarantees that your website will rank better, draw more visitors, and remain competitive in the ever changing digital market.',
        bg: 'bg-[#FEEEBB]',
        textColor: 'text-[#EAD182]'
    },
    {
        number: '02',
        title: 'Keyword Research',
        description: 'A complete keyword analysis is essential to realizing your full online potential. To find high-impact keywords that complement your brand and increase targeted traffic and content relevancy across all of your digital channels, Tech Devise carries out in-depth research.',
        bg: 'bg-[#C0E3F5]',
        textColor: 'text-[#6BA3BF]'
    },
    {
        number: '03',
        title: 'Regular Reports',
        description: 'You may learn a lot about the development of your website and the outcomes of digital marketing with our frequent performance reports. We monitor important parameters, pinpoint your advantages and disadvantages, and provide useful information that helps you improve your long-term performance.',
        bg: 'bg-[#CAC0F5]',
        textColor: 'text-[#9080D7]'
    },
    {
        number: '04',
        title: 'Competitor analysis',
        description: "Use Tech Devise's competitor analysis to get the upper hand. We keep a careful eye on your competitors' methods to spot patterns, identify flaws, and help you in position your company to greater market share.",
        bg: 'bg-[#FEBBBC]',
        textColor: 'text-[#DA7273]'
    },
    {
        number: '05',
        title: 'SEO Content optimization',
        description: 'To keep up with SEO best practices, our content specialists polish and optimize the copy on your website. In order to help you rank higher and keep your audience interested and returning, we make sure your material is not only keyword-rich but also interesting and educational.',
        bg: 'bg-[#B6F1A5]',
        textColor: 'text-[#579C43]'
    },
    {
        number: '06',
        title: 'Result Oriented Strategies',
        description: 'We don’t believe in one-size-fits-all marketing. Every business has different goals, and we create strategies that aim directly at yours. From planning to execution, everything we do is focused on generating results you can measure — and momentum you can build on.',
        bg: 'bg-[#FFDDA5]',
        textColor: 'text-[#EDB749]'
    }
];
const socialMediaData = [
    {
        image: managementBlack,
        title: 'Social Media Management',
        description: 'Social media platforms have an important effect on and dependence on the current internet market. You may now use social media platforms to communicate with your audiences more successfully thanks to Tech Devise.',
        bg: 'bg-[#DBFFE5]', // The light green background from your image
        roundBg: 'bg-[#94E4AB]' // The darker green background for the circular icon area
    },
    {
        image: contentBlack,
        title: 'Content Creation',
        description: "The TechDevise team will assist you in creating captivating content that will grab your target audience's interest. Boost your social media presence with profitable and original content.",
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: keywordBlack,
        title: 'Keyword Research',
        description: "In order improve each post's long-term reach, our knowledgeable staff takes care to find and highlight the most pertinent keyword in each social media post.",
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: managementBlack,
        title: 'Daily post comment monitoring',
        description: "Our team maintains and manages full communication between you and your audiences. The Tech Devise team will handle all of the clients' questions and concerns.",
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: contentBlack,
        title: 'Regular Posting',
        description: 'Social media posts must be produced and shared on a frequent basis in order to succeed on these platforms. On your behalf, the Tech Devise team will create eye-catching creatives and publish them regularly.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
    {
        image: keywordBlack,
        title: 'Contest Suggestions',
        description: 'We always search for chances to hold competitions to boost your social media presence. Your brand will be able to grow like wildfire as a result. Therefore, you can be sure that your clientele will grow if you choose to use our social media marketing services.',
        bg: 'bg-[#DBFFE5]',
        roundBg: 'bg-[#94E4AB]'
    },
];
const services = [
    {
        image: AdwordsIcon1, // You'll need to import these images or provide their full paths
        title: 'Keyword Research',
        description: "Excellent keywords are the foundation of the best campaigns. Our staff does extensive research to identify cost-effective, relevant, and high-performing keywords that complement your company's objectives. The outcome? more exposure, improved clicks, and more conversions without going over budget on the incorrect phrases."
    },
    {
        image: AdwordsIcon2,
        title: 'Detailed Reporting',
        description: 'We support complete openness. Because of this, you will receive performance reports every week that highlight our progress and future goals. You will always feel in charge of your Google Ads investment thanks to transparent analytics and real-time progress.'
    },
    {
        image: AdwordsIcon3,
        title: 'Competitor Campaign Analysis',
        description: 'We must be fully aware of what other people are doing if you want to beat them. To understand their ad strategy, keyword selections, and ranking positions, our staff thoroughly analyzes competitors. This enables us to create more intelligent Google Ads campaigns that increase visibility and ROI.'
    },
    {
        image: AdwordsIcon4,
        title: 'Landing Page Creation',
        description: 'A powerful ad is only half the story — the landing page seals the deal. We create visually appealing, high-converting landing pages tailored to your audience. Our design and content approach ensures that your traffic doesn’t just land — it converts.'
    },
    {
        image: AdwordsIcon5,
        title: 'Campaign Creation',
        description: "We manage every facet of your Google Ads campaign, from planning to launch. Our skilled staff creates well-planned campaigns based on market trends and your company's objectives. The outcome? advertisements that function, engage, and generate revenue in addition to simply running."
    },
    {
        image: AdwordsIcon6,
        title: 'Precise Campaign ROI Calculations',
        description: 'We calculate the return on investment (ROI) of your campaign using actual data and performance insights before you spend a dime. This gives you complete trust in your investment by ensuring that you have a comprehensive picture of what to expect, from reach to earnings.'
    }
];
    const addSlide = [
        {
            title: 'Show up',
            description:"Appear at the right time when your audience is actively searching.",
            bgColor: 'bg-[#CEEAD6]',
            textColor: 'text-[#1F8E3D]',
            image: add1,
        },
        {
            title: 'Be found',
                 description:"Ensure your business is discovered by potential customers at every click.",
            bgColor: 'bg-[#FEF7E0]',
            textColor: 'text-[#F29900]',
            image: add2,
        },
        {
            title: 'Drive sales',
                 description:"Convert ad clicks into actual income by running focused, high-converting campaigns.",
            bgColor: 'bg-[#D2E3FC]',
            textColor: 'text-[#1C73E8]',
            image: add3,
        },
        {
            title: 'Stand out',
                 description:"Capture attention instantly and rise above your competitors with strategic Google Ads",
            bgColor: 'bg-[#FCE8E6]',
            textColor: 'text-[#C5221F]',
            image: add4,
        },
    ]
const DigitalMarketingOne = () => {

    const [showModal, setShowModal] = useState(false);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef2 = useRef(null);
    const nextRef2 = useRef(null);
    
    const [isActiveTab, setActiveTab] = useState(1);

 const tabContent = [1, 2, 3, 4, 5]
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
                            <p className='text-xl leading-[2.125rem] text-white mb-[2.125rem]'>One of the most creative and hopeful SEO professionals at Tech Devise works hard to produce solutions. Your website's ranking will quickly increase thanks to our results-driven SEO tactics. Get in touch with us immediately to find out more!</p>
                          
                               <button onClick={() => setShowModal(true)} className="bg-pine-300 inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">Consult Our Experts <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><img src={arrowRightUp} alt="arrow right up" className="w-[1.125rem]" /></span></button>
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
                            <p className='text-xl font-medium leading-[2.1875rem] mb-0'>Are you it challenging to attract visitors to your company's website? If the response is yes, it is a frequent problem for all websites because it is hard to stand out in the crowded field of millions of websites on the internet.</p>
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
                    <div className="flex flex-wrap items-start justify-between gap-2.5">
                        <div className="lg:w-[calc(100%_-_13.125rem)] w-full lg:text-start text-center">
                            <h2 className='text-5xl font-extrabold leading-none mb-9'>Our Social Media Marketing Services</h2>
                            <p className='font-medium text-xl leading-7 lg:mb-20 mb-5'>At Tech Devise our team of Social Media experts strives to provide our clients with the best social media marketing solutions that will surely improve your business's online visibility. With the help of your experts, you can increase your online customer base as well. 
  </p>

                            <div className='w-full lg:hidden gap-3 flex justify-center items-center'>
                                <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                    <img src={facebookBlack} alt="facebookBlack" className='lg:size-[3.5625rem] size-10' />
                                </div>
                                <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                    <img src={xBlack} alt="xBlack" className='lg:size-[3.5625rem] size-10' />
                                </div>
                                <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                    <img src={instagramBlack} alt="instagramBlack" className='lg:size-[3.5625rem] size-10' />
                                </div>
                                <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                    <img src={youtubeBlack} alt="youtubeBlack" className='lg:size-[3.5625rem] size-10' />
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col">

                                <div className="flex gap-2.5 lg:justify-start justify-center items-stretch mt-[3.25rem] order-2">
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
                                    loop={true}
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
                                    autoplay={{ delay: 1000 }}
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
                                            <div className={`${item.bg} lg:text-start text-center rounded-[.9375rem] pt-10 px-7 pb-5 min-h-full`}>
                                                <div className={`size-[7rem] rounded-full ${item.roundBg} flex items-center justify-center mb-[1.8125rem] lg:mx-0 mx-auto`}>
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
                        <div className='lg:w-fit w-full lg:block gap-3 hidden justify-center items-center'>
                            <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={facebookBlack} alt="facebookBlack" className='lg:size-[3.5625rem] size-10' />
                            </div>
                            <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={xBlack} alt="xBlack" className='lg:size-[3.5625rem] size-10' />
                            </div>
                            <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={instagramBlack} alt="instagramBlack" className='lg:size-[3.5625rem] size-10' />
                            </div>
                            <div className="border border-dashed border-black lg:size-[9rem] size-20 rounded-full flex items-center mb-[1.8125rem] justify-center">
                                <img src={youtubeBlack} alt="youtubeBlack" className='lg:size-[3.5625rem] size-10' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Social Media section end */}

            {/* Google Adwords section start */}
           <section className='pt-[6.75rem]'>
                <div className="main-container">
                    <h3 className='md:text-5xl text-3xl font-extrabold leading-none mb-[1.9375rem] text-center'>Google Adwords</h3>
                    <p className='mb-[3.8125rem] w-fll max-w-[67.0625rem] mx-auto text-lg leading-[2.125rem] text-center'>Wanting to rank your website higher on Google search pages? If yes, then contact us and our Google Adwords experts to suggest the best strategies to get the most out of your Google Adwords campaigns. Contact us today to know more.</p>
                    <div className="bg-[#F5F7FB] py-[5.3125rem] 2xl:px-[3.4375rem] px-7 rounded-[.9375rem] relative flex gap-5 max-lg:flex-wrap">
                        <img src={line} alt="line" className='w-[9.8125rem] absolute top-full right-full -mt-14 -mr-14 shake-v' />
                        <div className="lg:w-2/5 w-full xl:pr-10 lg:text-start text-center">
                            <h3 className='xl:text-5xl lg:text-4xl text-3xl font-extrabold leading-none mb-[1.9375rem]'>The Services we offer under Google Adwords</h3>
                            <p className='mb-[3.8125rem] max-w-[67.0625rem] mx-auto text-lg leading-[2.125rem]'>As everyone knows, there are millions of websites on the internet. Therefore, getting your website to stand out in this vast competition is a difficult task. But nothing is impossible. You may increase your website's visibility and get the traffic you want with the assistance of our Google Adword specialists. Our staff will help you develop performance-driven Google AdWords ads that will propel your company forward.</p>
                        </div>
                        <div className="lg:w-3/5 w-full xl:pl-10">
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
                                    loop={true}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            centeredSlides: false,
                                        },
                                        1024: {
                                            slidesPerView: 1.5,
                                            centeredSlides: true,
                                        },
                                        1400: {
                                            slidesPerView: 2,
                                        },
                                    }}
                                    grabCursor={true}
                                    autoplay={{ delay: 1000 }}
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
                                            <div className={`bg-white rounded-[.9375rem] pt-10 px-7 pb-5 min-h-full lg:text-start text-center`}>
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
           <section className='lg:pt-[3.625rem] sm:py-28 pt-20 pb-20 lg:pb-[7.375rem]'>
                <div className="main-container">


                    <Swiper
                        className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:items-stretch"
                        slidesPerView={1}
                        spaceBetween={30}
                        speed={1000}
                        grabCursor={true}
                        loop={true}
                        modules={[Autoplay]}
                        autoplay={{ delay: 1000 }}
                    >
                        {addSlide.map((item, index) => (
                            <SwiperSlide key={index} className='!h-auto'>
                                <div className="flex items-center justify-center">
                                    <div className={`md:size-[20.5625rem] size-[12.5rem] aspect-square rounded-[1.25rem] flex items-center justify-center relative ${item.bgColor}`}>
                                        <MdOutlinePlayCircleFilled className={`${item.textColor} absolute text-3xl top-3 left-3`} />
                                        <img src={item.image} alt="add" className='w-8/12' />
                                    </div>
                                    <div className="-ml-10 z-10">
                                        <h2 className={`${item.textColor} text-[clamp(3.125rem,_7vw,_8.0625rem)] font-bold`}>{item.title}</h2>
                                        <h2 className='text-[clamp(2.3rem,_5vw,_5.75rem)] font-bold'>with Google Ads</h2>
                                        <p className='text-[1.0625rem] lg:pl-24 md:12'>{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* Google Ads  section start*/}

            {/*Our PPC Expert section start*/}
         <section className='pt-[4.375rem] pb-[7.5625rem] bg-gradient-to-r from-[#E3FFEB] to-[#C2EAF2]'>
    <div className="main-container">
        <h2 className="text-center xl:text-5xl lg:text-4xl text-3xl font-bold">Why Hire Our PPC Expert?</h2>
        <p className='max-w-[55.125rem] w-full mx-auto text-center text-lg font-medium leading-7 mb-12 mt-3 '>Google has verified Tech Devise as a professional Adwords agency. Our relationship and certification attest to our thorough understanding of Google Adwords.</p>

        {/* Positions */}
        <div className="bg-white shadow-xl shadow-gray-600/5 rounded-[.625rem] lg:py-[3.4375rem] lg:px-[2.375rem] p-3">
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-stretch">
                <div className="lg:w-[25.625rem] lg:border-r border-black/20  lg:pe-[3.3125rem]">
                    <ul className='lg:block flex justify-start items-center gap-5 max-lg:mb-5 overflow-x-auto hide-scroll'>
                        <li onClick={() => setActiveTab(1)} className='mb-3.5'>
                            <div className={`text-black lg:min-h-[4.8125rem] min-h-[3.4375rem] border border-black flex rounded-full items-center justify-between lg:p-3 p-1 gap-[2.0625rem] font-medium text-base transition-all duration-300 ${isActiveTab == 1 ? 'bg-gradient-to-r from-[#D8F4E5] to-[#5CEA90]' : 'bg-white'}`}>
                                <span className='text-base font-semibold ps-5 text-nowrap'>Certified Agency</span>
                                <span className={`ms-auto size-[3.3125rem] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${isActiveTab == 1 ? 'bg-white' : 'bg-[#5CEA90]'}`}>
                                    <PiArrowUpRightBold className='text-[18px] text-black' strokeWidth={2} />
                                </span>
                            </div>
                        </li>
                        <li onClick={() => setActiveTab(2)} className='mb-3.5'>
                            <div className={`text-black lg:min-h-[4.8125rem] min-h-[3.4375rem] border border-black flex rounded-full items-center justify-between lg:p-3 p-1 gap-[2.0625rem] font-medium text-base transition-all duration-300 ${isActiveTab == 2 ? 'bg-gradient-to-r from-[#FFD9D8] to-[#EA9C99]' : 'bg-white'}`}>
                                <span className='text-base font-semibold ps-5 text-nowrap'>24 x 7 Support</span>
                                <span className={`ms-auto size-[3.3125rem] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${isActiveTab == 2 ? 'bg-white' : 'bg-[#EA9C99]'}`}>
                                    <PiArrowUpRightBold className='text-[18px] text-black' strokeWidth={2} />
                                </span>
                            </div>
                        </li>
                        <li onClick={() => setActiveTab(3)} className='mb-3.5'>
                            <div className={`text-black lg:min-h-[4.8125rem] min-h-[3.4375rem] border border-black flex rounded-full items-center justify-between lg:p-3 p-1 gap-[2.0625rem] font-medium text-base transition-all duration-300 ${isActiveTab == 3 ? 'bg-gradient-to-r from-[#DDFFEC] to-[#67C792]' : 'bg-white'}`}>
                                <span className='text-base font-semibold ps-5 text-nowrap'>Affordable</span>
                                <span className={`ms-auto size-[3.3125rem] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${isActiveTab == 3 ? 'bg-white' : 'bg-[#67C792]'}`}>
                                    <PiArrowUpRightBold className='text-[18px] text-black' strokeWidth={2} />
                                </span>
                            </div>
                        </li>
                        <li onClick={() => setActiveTab(4)} className='mb-3.5'>
                            <div className={`text-black lg:min-h-[4.8125rem] min-h-[3.4375rem] border border-black flex rounded-full items-center justify-between lg:p-3 p-1 gap-[2.0625rem] font-medium text-base transition-all duration-300 ${isActiveTab == 4 ? 'bg-gradient-to-r from-[#FFF8CE] to-[#FFE74E]' : 'bg-white'}`}>
                                <span className='text-base font-semibold ps-5 text-nowrap'>Experience</span>
                                <span className={`ms-auto size-[3.3125rem] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${isActiveTab == 4 ? 'bg-white' : 'bg-[#FFE74E]'}`}>
                                    <PiArrowUpRightBold className='text-[18px] text-black' strokeWidth={2} />
                                </span>
                            </div>
                        </li>
                        <li onClick={() => setActiveTab(5)} className='mb-3.5'>
                            <div className={`text-black lg:min-h-[4.8125rem] min-h-[3.4375rem] border border-black flex rounded-full items-center justify-between lg:p-3 p-1 gap-[2.0625rem] font-medium text-base transition-all duration-300 ${isActiveTab == 5 ? 'bg-gradient-to-r from-[#F1DEFF] to-[#C897EB]' : 'bg-white'}`}>
                                <span className='text-base font-semibold ps-5 text-nowrap'>Flexible Plans</span>
                                <span className={`ms-auto size-[3.3125rem] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ${isActiveTab == 5 ? 'bg-white' : 'bg-[#C897EB]'}`}>
                                    <PiArrowUpRightBold className='text-[18px] text-black' strokeWidth={2} />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                
                {/* Tab Content */}
                <div className="flex-1 lg:ps-[5.75rem] justify-center items-center min-h-[18.75rem] flex">
                    {isActiveTab === 1 && (
                        <p className='text-[1.125rem] leading-[1.625rem] font-normal lg:text-start text-center'>
                            <strong className='font-semibold'>Tech Devise</strong> is certified by Google as a reputed Adword agency. Our certification and partnership prove that we know all the intricate details about Google Adwords. As certified professionals with validated qualifications, our PPC specialists make sure your campaigns follow industry best practices and continuously yield the best results.
                        </p>
                    )}
                    {isActiveTab === 2 && (
                        <p className='text-[1.125rem] leading-[1.625rem] font-normal lg:text-start text-center'>
                            We offer 24/7 support to ensure your campaigns continue to function properly. We can help you with any question or urgent change.
                        </p>
                    )}
                    {isActiveTab === 3 && (
                        <p className='text-[1.125rem] leading-[1.625rem] font-normal lg:text-start text-center'>
                            Get expert PPC management without overspending. Our pricing is transparent and budget-friendly, designed to deliver high ROI at every level of investment.
                        </p>
                    )}
                    {isActiveTab === 4 && (
                        <p className='text-[1.125rem] leading-[1.625rem] font-normal lg:text-start text-center'>
                            Our PPC experts have years of practical expertise and know what works and what doesn't, which will save you time and increase your return on investment.
                        </p>
                    )}
                    {isActiveTab === 5 && (
                        <p className='text-[1.125rem] leading-[1.625rem] font-normal lg:text-start text-center'>
                            We offer PPC campaigns that may be customized to your unique goals, timetable, and budget, regardless of the size of your business.
                        </p>
                    )}
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