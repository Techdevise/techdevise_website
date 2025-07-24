import React from 'react'

import vector12 from "/vector12.svg";
// state images
import state1 from '/state1.webp'
import state2 from '/state2.webp'
import state3 from '/state3.webp'
import flag1 from '/flag1.svg'
import flag2 from '/flag2.svg'
import flag3 from '/flag3.svg'
import map from '/map.svg'
import mapWhite from '/mapWhite.svg'
import CustomRangeSlider from "../components/CustomRangeSlider";

const Location = () => {
    const addressList = [
        { bgimage: state1, flag: flag1, countryName: "India", address: "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071" },
        { bgimage: state2, flag: flag2, countryName: "United States", address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA" },
        { bgimage: state3, flag: flag3, countryName: "Netherland", address: "Paleisstraat 1, 1012 RB Amsterdam, Netherlands" },
    ]
    return (
        <>
            <section className="my-[4.6875rem]">
                <div className="main-container text-black">
                    <div className="text-center mb-[3.9375rem]">
                        <h4 className="font-bold text-[#157B6C] leading-[3.625rem] text-[2rem] mb-1.5">Location</h4>
                        <h3 className='text-[3.4375rem] font-extrabold leading-none mb-5'>We&apos;d love to here from you</h3>
                        <p className='text-lg font-medium leading-[1.8125rem] inline-block relative'>We have offices and teams all around the world. <img src={vector12} alt="vector12" className='w-[5.6875rem] absolute top-full lg:left-full left-1/2 -translate-x-1/2' /></p>
                    </div>
                    <div className="grid gap-[1.375rem] xl:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-[4.1875rem] pb-[7rem] relative z-0">
                        <img src={mapWhite} alt="map" className='max-w-full h-full object-contain absolute top-0 left-1/2 -translate-x-1/2 -z-[1]' />
                        {addressList.map((listitem, index) => (
                            <div key={index} className="border border-[#fff] py-[1.0625rem] px-5 rounded-[1.25rem] flex gap-[1.9375rem] items-center bg-[#fff] [box-shadow:1px_7px_44px_0px_#0000001F]">
                                <img src={listitem.bgimage} alt="indai bg" className='2xl:w-[10.0625rem] 2xl:h-[10.8125rem] w-[9.375rem] h-[11.875rem] rounded-[1.25rem] object-cover' />
                                <div className="grow">
                                    <div className="flex gap-[.9375rem] items-center mb-[1.375rem]">
                                        <img src={listitem.flag} alt="indaiFlag" className="w-[3.1875rem] h-[2.125rem]" />
                                        <span className='font-bold capitalize'>{listitem.countryName}</span>
                                    </div>
                                    <p className='2xl:text-lg text-base font-medium leading-[1.8125rem]'>{listitem.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Location
