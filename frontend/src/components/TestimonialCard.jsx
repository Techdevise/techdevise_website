import vectorten from "/vectorten.svg"
import vector11 from "/vector11.svg"
import { FaStar } from "react-icons/fa";
const TestimonialCard = ({ image, title, discription, className, dataSwiperParallax }) => {
    return (
        <>
            <div data-swiper-parallax={dataSwiperParallax} className={`max-lg:hidden z-0 relative testimonialCard py-[2.125rem] px-[2.1875rem] bg-[#062018] rounded-[1.625rem] flex items-center justify-start h-[22.875rem] group overflow-hidden`}>
                <div className="relative w-[10.5rem] h-[18.5rem] shrink-0">
                    <img src={image} alt="testi image" className="w-full h-full rounded-[1.0625rem] object-cover" />
                    <button className="z-10 absolute top-1/2 left-1/2 -translate-1/2"><img src={vectorten} alt="video fill" className="w-full h-full object-cover" /></button>
                </div>
                <div className={` text-white testiIner overflow-hidden px-[1.875rem]  ${className}`}>
                    <h4 className="text-xl font-extrabold">{title}</h4>
                    <p className="leading-[1.5625rem] text-lg mb-2">{discription}</p>
                    <div className="flex text-[#B88533] text-2xl gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <div className="absolute bottom-10 right-16 -z-10">
                    <img src={vector11} alt="vector 11" className="2xl:h-[4.0625rem] md:h-[3.625rem]" />
                </div>

            </div >

            <div className="lg:hidden testimonialSmallCard p-5 max-sm:p-2 rounded-[.625rem] text-white bg-[#062018] ">
                <div className="flex gap-3 justify-start items-center relative z-0">
                    <div className="image h-[80px] max-sm:h-[50px] max-sm:w-[50px] aspect-square rounded-[5px] overflow-hidden">
                        <img src={image} alt="profile" className="object-cover h-full w-full aspect-square" />
                    </div>
                    <div className="title text-white">
                        <h4 className="text-xl font-extrabold">{title}</h4>
                        <div className="flex text-[#B88533] text-2xl gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <div className="absolute top-4 right-16 -z-10">
                        <img src={vector11} alt="vector 11" className="2xl:h-[4.0625rem] md:h-[3.625rem]" />
                    </div>
                </div>

                <p className="leading-[1.5625rem] text-lg mt-2">{discription}</p>
            </div>
        </>
    )
}

export default TestimonialCard