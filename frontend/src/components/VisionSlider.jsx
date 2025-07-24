import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';


// minigrid images
import minigrid1 from '/minigrid1.webp'
import minigrid2 from '/minigrid2.webp'
import minigrid3 from '/minigrid3.webp'
import minigrid4 from '/minigrid4.webp'
import minigrid5 from '/minigrid5.webp'
import minigrid6 from '/minigrid6.webp'
import minigrid7 from '/minigrid7.webp'
import minigrid8 from '/minigrid8.webp'
import minigrid9 from '/minigrid9.webp'
import minigrid10 from '/minigrid10.webp'
import minigrid11 from '/minigrid11.webp'
import minigrid12 from '/minigrid12.webp'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const VisionSlider = () => {

        const prevRef = useRef(null);
        const nextRef = useRef(null);
    const miniGridLoop = [
        { id: 1, image: minigrid1, title: "Healthcare" },
        { id: 2, image: minigrid2, title: "Fitness" },
        { id: 3, image: minigrid3, title: "Real Estate" },
        { id: 4, image: minigrid4, title: "Social Media" },
        { id: 5, image: minigrid5, title: "E-commerce" },
        { id: 6, image: minigrid6, title: "Education" },
        { id: 7, image: minigrid7, title: "Entertainment" },
        { id: 8, image: minigrid8, title: "Food Delivery" },
        { id: 9, image: minigrid9, title: "Beauty & Salon Booking" },
        { id: 10, image: minigrid10, title: "Dating App Development" },
        { id: 11, image: minigrid11, title: "Laundry Services" },
        { id: 12, image: minigrid12, title: "Taxi  Booking" },
    ]
    return (
        <>
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
                    className="mySwiper  rounded-xl  mx-auto justify-between select-none order-2"
                    spaceBetween={30}
                    slidesPerView={1}
                    speed={1000}
                    loop={true}
                    autoplay={{ delay: 10000000 }}
                    grabCursor={true}
                    centeredSlides={true}
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
                    {miniGridLoop.map((minigrid, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className="flex justify-center items-center "
                            >
                                <div key={index} className="relative rounded-xl overflow-hidden aspect-square">
                                    <img src={minigrid.image} alt="mini grid image" className="w-full max-[412px]:h-[197px] block aspect-square object-cover mx-auto" />
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 pb-10 px-8 bg-gradient-to-b from-black/0 via-black/40 to-black/85  p-3 text-2xl text-white font-semibold flex justify-start items-end">{minigrid.title}</div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>


            </div>

        </>
    );
};

export default VisionSlider;