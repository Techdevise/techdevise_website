import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// images

import { Autoplay } from "swiper/modules";

const CompanyLogoSlider = ({logos}) => {
 
  return (
    <>
      <Swiper
        className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:!ease-linear"
        slidesPerView={'auto'}
        spaceBetween={30}
        speed={2000}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        grabCursor={true}   
        modules={[Autoplay]}
      >
        {logos.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center !w-[10rem]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="block object-contain mx-auto opacity-65"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CompanyLogoSlider;
