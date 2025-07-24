import React, { useState } from 'react'

import career1 from '/career1.webp'
import { IoCheckmark } from 'react-icons/io5'

// images 
import noVector from '/noVector.webp'

const CareerOne = () => {

    const [activeStep, setActiveStep] = useState(1);
    const positionTabs = [
        {
            tab: 'Front end Designer',
            panelData: ['SEO Specialist', 'Copywriter', 'Social Media Manager', 'Digital Marketing Executives', 'Account Manager', 'Marketing Consultant', 'Marketing Manager', 'SEO Manager', 'SEO Analyst'],
        },

        {
            tab: 'UI/UX Designer',
            panelData: [],
        },
        {
            tab: 'SEO Executive',
            panelData: [],
        },
        {
            tab: 'BDE',
            panelData: [],
        },
        {
            tab: 'Content Writer',
            panelData: [],
        },
        {
            tab: 'Laravel Developer',
            panelData: [],
        },
        {
            tab: 'Business Analyst',
            panelData: [],
        },
        {
            tab: 'Front End Development',
            panelData: [],
        },
        {
            tab: 'HR',
            panelData: [],
        },
        {
            tab: 'Marketing',
            panelData: [],
        },
        {
            tab: 'Python',
            panelData: [],
        },
        {
            tab: 'Quality Assurance',
            panelData: [],
        },
        {
            tab: 'PHP',
            panelData: [],
        },

    ]
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
                        <div className="sectionHeader text-center text-black  max-w-4xl mx-auto mb-[1.625rem]">
                            <h3 className='text-[3rem] font-bold mb-[.3125rem]'>Open Positions</h3>
                            <p className='text-[1.125rem] leading-[1.75rem]'>
                                If you're someone who thrives in a fast-paced, collaborative, and constantly evolving environment, then
                                Apptunix is the perfect place to accelerate your career.
                            </p>
                        </div>

                        {/* Positions */}
                        <div className="bg-white shadow-xl shadow-gray-600/5 rounded-[.625rem] py-[2.1875rem] px-[1.875rem]">
                            <h4 className='text-xl leading-[1.625rem] font-semibold text-black mb-6'>Function</h4>
                            <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-stretch">
                                <div className="lg:w-[28.1875rem] lg:border-r border-black/20">
                                    <ul className='lg:block flex justify-start items-center gap-5 max-lg:mb-5 overflow-x-auto hide-scroll'>
                                        {positionTabs.map((tbs, index) => (
                                            <li key={index} className='mb-[1.25rem]'>
                                                <div onClick={() => setActiveStep(index + 1)} className='flex justify-start items-center lg:gap-4 gap-2 cursor-pointer'>
                                                    <div className={`checkbox size-[2.125rem] rounded-md border-[.0625rem] text-white flex justify-center items-center border-pine-700 aspect-square  transition-all duration-300 ${activeStep == index + 1 ? 'bg-pine-700' : 'bg-white'}`}>
                                                        <IoCheckmark className='size-7' strokeWidth={0.1} />
                                                    </div>
                                                    <span className='text-xl leading-[1.625rem] text-nowrap'>{tbs.tab}</span>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                                {positionTabs.map((PiTabs, index) => (

                                    <div key={index} className={`flex-1 lg:px-[2.8125rem] ${activeStep == index + 1 ? 'block' : 'hidden'}`}>
                                        {PiTabs.panelData.length > 1 ? (
                                            <ul>
                                                {PiTabs.panelData.map((item, i) => (
                                                    <li key={i} className='cursor-pointer bg-gradient-to-b from-pine-700/30 to-pine-700/70 rounded-lg p-[1px] mb-[1.5625rem]'>
                                                        <div className="h-[3.8125rem] px-[2rem] py-[1rem] text-xl leading-[1.625rem] text-black bg-white rounded-[.4375rem] flex justify-start items-center">
                                                            {item}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className='lg:h-full min-h-[300px] flex sm:flex-row flex-col justify-center items-center gap-10 flex-wrap'>
                                                <img src={noVector} alt="vector" className='w-48 md:w-64 lg:w-72 h-auto aspect-square' />
                                                <div className="flex-1 max-w-md">
                                                    <p className='text-xl leading-[26px] lg:pe-4 text-pine-700 font-medium'>
                                                        No vacancies available at the moment.
                                                        Stay tuned for future opportunities!
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                ))}
                            </div>

                            
                        </div>
                    </div>
                </section>
            {/* .positions list section end  */}
        </>
    )
}

export default CareerOne
