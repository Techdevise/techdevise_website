
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

// Images
import cardTwo from "../../public/cardTwo.webp";
import cardThree from "../../public/cardThree.webp";
import cardFour from "../../public/cardFour.webp";
import cardFive from "../../public/cardFive.webp";
import cardSix from "../../public/cardSix.webp";
import cardSeven from "../../public/cardSeven.webp";
import cardEight from "../../public/cardEight.webp";
import cardNine from "../../public/cardNine.webp";
import cardTen from "../../public/cardTen.webp";

gsap.registerPlugin(ScrollTrigger);

const BlockchainSlider = ({ triggerRef }) => {
    const swiperRef = useRef(null);

    const slideContent = [
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardTwo,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardThree,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardFour,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardFive,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardSix,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardSeven,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardEight,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardNine,
        },
        {
            title: "Blockchain Consultation & Integration",
            para:
                "From strategy development to implementation, our custom Blockchain software development experts will guide you through every stage of your blockchain application development journey. Tech Devise deep industry knowledge and proven track record ensure successful blockchain integration.",
            image: cardTen,
        },
    ];

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        const totalSlides = slideContent.length;

        gsap.to({}, {
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top 100px",
                end: () => `+=${totalSlides * 400}`,
                scrub: true,
                pin: true,
                anticipatePin: 0,
                markers: false,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const newIndex = Math.floor(progress * (totalSlides - 1));
                    swiperInstance.slideTo(newIndex);
                },
            }
        });

        return () => {
            ScrollTrigger.killAll();
        };
    }, [slideContent.length, triggerRef]);

    return (
        <div className="blockchain-scroll-wrapper w-full overflow-hidden max-lg:px-10">
            <Swiper
                ref={swiperRef}
                className="mySwiper blockChain w-full justify-between"
                slidesPerView={1}
                spaceBetween={30}
                speed={400}
                grabCursor={true}
                centeredSlides={false}
                parallax={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Parallax]}
                breakpoints={{
                    710: {
                        slidesPerView: 2,
                        centeredSlides: false, 
                    },
                    1024: {
                        slidesPerView: 1.6,
                        centeredSlides: true, 
                    },
                }}

            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-0%"
                />
                {slideContent.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex justify-center items-center group !h-auto"
                    >
                        <div
                            data-swiper-parallax="0%"
                            className="py-20 transition-all duration-1000 lg:group-[.swiper-slide-active]:scale-110 lg:scale-90"
                        >
                            <div className="card p-6 bg-pine-900 rounded-3xl flex lg:flex-row flex-col 2xl:gap-[3.625rem] xl:gap-10 lg:gap-7 gap-5 lg:justify-center lg:items-center items-stretch shadow-lg">
                                <div className="aspect-square 2xl:h-[26.5rem] xl:h-[21.875rem] lg:h-[15.625rem] h-[18.75rem]">
                                    <img
                                        src={item.image}
                                        alt={`slide-${index + 1}`}
                                        className="object-cover rounded-2xl h-full w-full block"
                                    />
                                </div>
                                <div className="lg:flex-[1.3_1_0%]">
                                    <h3 className="text-3xl xl:text-4xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-white text-xl">{item.para}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BlockchainSlider;
