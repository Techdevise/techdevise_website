import React, { useState } from 'react'

import career1 from '/career1.webp'
import modal1 from '/modal1.webp'
import mapin from '/mapin.svg'

// images 

const CareerTwo = () => {


    return (
        <>
            {/* landing section start */}
            <section style={{ backgroundImage: `url(${career1})` }} className='h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center'>
                <h1 className='text-[2.5rem] font-bold text-white'>Careers</h1>
            </section>
            {/* landing section end */}

            {/* .positions list section start  */}
            <section className="open-positions my-[4.6875rem] pb-[3rem] ">
                <div className="main-container">
                    <div className={` h-full flex-1 flex lg:flex-row flex-col  justify-start items-stretch gap-[2.875rem] relative transition-all duration-300 `}>
                        <img src={modal1} alt="modal side image" className='lg:w-fit lg:h-full h-[30.75rem] w-full lg:object-contain object-cover' />
                        <div className="lg:flex-1 lg:overflow-y-auto">
                            <h2 className='text-2xl leading-[1.625rem] font-bold mb-6'>Digital Marketing Executives</h2>
                            <h5 className='text-2xl leading-[1.625rem] font-semibold flex justify-start items-center gap-1 mb-9'><img src={mapin} alt="Map Pin" className='size-7' /><span>Mohali</span></h5>
                            <h3 className='text-xl leading-[1.625rem] font-bold mb-4'>Digital Marketing Executives</h3>

                            <ul className='ps-7 list-disc mb-9'>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Maintain social media profiles- Facebook, Instagram, Twitter, LinkedIn and other platforms.
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Build and execute social media strategy through competitive research, platform determination, benchmarking, messaging, and audience identification
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Conduct research and curate campaigns to drive organic traffic.
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Manage day-to-day handling postings on all platforms according to the calendar.
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Keep up with the new algorithms and newly launched engagement tools.
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Continuously improve by capturing and analyzing the appropriate social data/metrics, insights and best practices, and then acting on the information,
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Managing content marketing strategies related to off-on-page articles.
                                </li>
                            </ul>
                            <h3 className='text-xl leading-[1.625rem] font-bold mb-4'>Digital Marketing Executives</h3>
                            <ul className='ps-7 list-disc mb-9'>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    1-3 years of experience
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Good knowledge of all different digital marketing channels
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Good knowledge and experience with online marketing tools and best practices
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Great interpersonal and communication skills
                                </li>
                                <li className='text-lg leading-[1.9375rem] font-medium'>
                                    Degree in Marketing, Digital technologies, or relevant field
                                </li>
                            </ul>

                            <h3 className='text-xl leading-[1.625rem] font-bold mb-4'>
                                Location: Mohali
                            </h3>
                            <h3 className='text-xl leading-[1.625rem] font-bold mb-7'>
                                Experience: 2+ years
                            </h3>

                            <button className='bg-pine-700  cursor-pointer w-[15.3125rem] py-2.5 px-5 text-center block  text-white rounded-[.625rem]'>Apply</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* .positions list section end  */}
        </>
    )
}

export default CareerTwo
