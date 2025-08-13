import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const slideContent = [
    {
      title: "Blockchain Consultation & <br/> Integration",
      para: "Our custom blockchain software development specialists are with you in every phase of your blockchain experience, including a complex roadmap all the way to deployment. We provide a smooth transition to the blockchain, as Techdevise possesses the required knowledge in the industry and great experience in the field.",
      image: cardTwo,
    },
    {
      title: "Layer 2 <br/> Development",
      para: "We design advanced Layer 2 solutions to overcome the constraints of base-layer blockchains. Our team builds powerful protocols like rollups and state channels that integrate effortlessly with existing blockchain infrastructures.",
      image: cardThree,
    },
    {
      title: "Blockchain Protocol <br/> Development",
      para: "Our end-to-end experience in the development of the protocol covers both the choice of the most suitable consensus mechanism and the development of robust governance structures. Our team is also leading in designing and deployment of scalable, customizable blockchain protocols that will meet your exclusive needs.",
      image: cardFour,
    },
    {
      title: "Centralized/Decentralized  Exchange <br/> Development",
      para: "TechDevise is making safe, fully adjustable, and convenient trading platforms that could be used to carry out a seamless exchange of cryptocurrencies. We place a premium on good performance and compliance with regulations and provide custom centralized and decentralized exchange architectures.",
      image: cardFive,
    },
    {
      title: "NFT Marketplace <br/> Development",
      para: "Our expertise lies in the creation of customizable non-fungible token marketplaces with highly advanced functionalities such as multi-chain support, smart contract, and secure payment gateway support. We have unique solutions that avoid duplication and make the token transactions safe and seamless.",
      image: cardSix,
    },
    {
      title: "Smart Contract Development & <br/> Audit",
      para: "We test and provide security audits of your smart contracts to be secure, reliable, and able to meet current industry standards. Our highly qualified personnel can develop, design, and audit smart contracts on various blockchain platforms.",
      image: cardSeven,
    },
    {
      title: "Crypto Wallet <br/> Development",
      para: "TechDevise offers highly qualified crypto wallet development services that deal with developing secure and efficient crypto wallets to manage digital assets. We focus on best-in-class security by using the best encryption, multiple-input signature verification and security auditing procedures.",
      image: cardEight,
    },
    {
      title: " Decentralized App (dApp) <br/> Development",
      para: "We provide end-to-end dApp development--concept, launch, and beyond. Techdevise has rich technical potential and approach to innovation to provide high-grade dApps that add value and provide boost to your digital stature.",
      image: cardNine,
    },
    {
      title: "Metaverse <br/> Development",
      para: "We craft immersive metaverse experiences that seamlessly merge the physical and digital worlds. From custom avatars to AR/VR applications, our team collaborates closely with clients to design and develop solutions to their business objectives.",
      image: cardTen,
    },
  ];

  const brackpoint = 992;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    const totalSlides = slideContent.length;
    if (windowWidth > brackpoint) {
      gsap.to(
        {},
        {
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 100px",
            end: () => `+=${totalSlides * 600}`,
            scrub: true,
            pin: true,
            anticipatePin: 0,
            markers: false,
            onUpdate: (self) => {
              const progress = self.progress;
              const newIndex = Math.floor(progress * (totalSlides - 1));
              swiperInstance.slideTo(newIndex);
            },
          },
        }
      );
    } else {
      console.log(`GSAP disabled below ${brackpoint + 1}px.`);
    }

    return () => {
      ScrollTrigger.killAll();
    };
  }, [slideContent.length, triggerRef]);

  return (
    <div className="blockchain-scroll-wrapper w-full overflow-hidden max-lg:px-10 max-sm:px-2">
      <Swiper
        ref={swiperRef}
        className="mySwiper blockChain w-full justify-between"
        slidesPerView={1}
        spaceBetween={30}
        speed={2000}
        grabCursor={true}
        centeredSlides={true}
        parallax={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Parallax, Autoplay]}
        breakpoints={{
          710: {
            slidesPerView: 1.4,
            spaceBetween: 90,
            autoplay: {
              delay: 1000,
            },
          },

          1023: {
            slidesPerView: 1.4,
            spaceBetween: 90,
            autoplay: {
              delay: 1000,
            },
          },

          1500: {
            slidesPerView: 1.9,
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
              <div className="card sm:p-6 p-3 bg-pine-900 rounded-[1.625rem] flex lg:flex-row flex-col 2xl:gap-[3.625rem] xl:gap-10 lg:gap-7 gap-5 lg:justify-center lg:items-center items-stretch shadow-lg">
                <div className="aspect-square 2xl:h-[26.5rem] xl:h-[21.875rem] lg:h-[15.625rem] h-[18.75rem]">
                  <img
                    src={item.image}
                    alt={`slide-${index + 1}`}
                    className="object-cover rounded-[1.625rem] h-full w-full block"
                  />
                </div>
                <div className="lg:flex-[1.3_1_0%] lg:text-start text-center">
                  <h3
                    className="text-xl xl:text-2xl font-bold text-white mb-4"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="text-white 2xl:text-[1rem] leading-[1.625rem]  font-normal">
                    {item.para}
                  </p>
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
