import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';

import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VisionSlider = () => {
  const [industries, setIndustries] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Fetching industries data from API
  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seamless`);
        if (res.data.success) {
          setIndustries(res.data.data); // assuming data is an array of { image, title }
        }
      } catch (err) {
        console.error("Failed to fetch seamless vision data:", err);
      }
    };

    fetchIndustries();
  }, []);

  return (
    <div className="flex gap-5 justify-between items-stretch">
      <button ref={prevRef} className="rounded-2xl p-5 flex justify-center items-center bg-white/5 cursor-pointer order-1">
        <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
          <GoArrowLeft className="size-7" />
        </div>
      </button>

      <button ref={nextRef} className="rounded-2xl p-5 flex justify-center items-center bg-white/5 cursor-pointer order-3">
        <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
          <GoArrowRight className="size-7" />
        </div>
      </button>

      <Swiper
        className="mySwiper rounded-xl mx-auto justify-between select-none order-2"
        spaceBetween={30}
        slidesPerView={1}
        speed={1000}
        loop={true}
        autoplay={{ delay: 10000000 }}
        grabCursor={true}
        centeredSlides={true}
        modules={[Autoplay, Navigation]}
        onInit={(swiper) => {
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
        {industries.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <img
                 src={`${API_BASE_URL}/images${item.image}`}
                alt={item.title || "industry image"}
                className="w-full max-[412px]:h-[197px] block aspect-square object-cover mx-auto"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 pb-10 px-8 bg-gradient-to-b from-black/0 via-black/40 to-black/85 p-3 text-2xl text-white font-semibold flex justify-start items-end">
                {item.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VisionSlider;
