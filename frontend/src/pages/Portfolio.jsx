import React, { useState } from 'react'

import portfolioBanner from '/portfolioBanner.webp'
import portfolio1 from '/portfolio1.webp'
import portfolio2 from '/portfolio2.webp'
import portfolio3 from '/portfolio3.webp'
import portfolio4 from '/portfolio4.webp'
import portfolio5 from '/portfolio5.webp'
import portfolio6 from '/portfolio6.webp'

import portfolioLogo1 from '/portfolioLogo1.svg'
import portfolioLogo2 from '/portfolioLogo2.svg'
import portfolioLogo3 from '/portfolioLogo3.svg'
import portfolioLogo4 from '/portfolioLogo4.svg'
import portfolioLogo5 from '/portfolioLogo5.svg'
import portfolioLogo6 from '/portfolioLogo6.svg'

// images 

const Portfolio = () => {

    const [isActive, setIsActive] = useState(1)

    const tabButtons = ['All', ' Design', 'Development', 'Ideas', 'Technology']

    const portfolioSections = [
        {
            siteImage: portfolio1,
            logo: portfolioLogo1,
            dis: 'AVB Marketing can help your business dominate the industry with marketing and technology solutions that secure independent retail success.',
            website: 'www.avbmarketing.com',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },

        {
            siteImage: portfolio2,
            logo: portfolioLogo2,
            dis: 'Eureka Telecom was incorporated to bring innovation in the telecommunication industry by offering modernized telecom services.',
            website: 'www.bubbleswholesale.com',
            platform: 'PHP, React.js',
            bg: 'bg-gradient-to-b from-[#F8FFEE] to-[#C4F67B]',
            rowPosition: 'lg:flex-row-reverse'
        },

        {
            siteImage: portfolio3,
            logo: portfolioLogo3,
            dis: 'Dear Customers and Partners, We warmly welcome you to Mr-Refurb, your preferred destination for high-quality, professionally refurbished Mr-Refurb hardware.',
            website: 'https://mr-refurb.nl/',
            platform: 'Shopify',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },

        {
            siteImage: portfolio4,
            logo: portfolioLogo4,
            dis: 'Sterling Forever was born from the belief that everyone deserves access to exquisite jewelry, without ever having to compromise on quality.',
            website: 'www.sterlingforever.com',
            platform: 'Shopify',
            bg: 'bg-gradient-to-b from-[#F6D083] to-[#FFF8EA]',
            rowPosition: 'lg:flex-row-reverse'
        },

        {
            siteImage: portfolio5,
            logo: portfolioLogo5,
            dis: 'Our expertise spans from initial concept development to detailed design, ensuring every aspect of your project is meticulously planned and executed.',
            website: 'https://iengco.com/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },

        {
            siteImage: portfolio6,
            logo: portfolioLogo6,
            dis: 'Pediatric Therapy Associates is a kids focused therapy place. We are a multi-disciplinary group with the singular focus of developing your child to the fullest.',
            website: 'www.therapypediatric.com',
            platform: 'Wordpress',
            bg: 'bg-gradient-to-b from-[#FCFFFF] to-[##A9F2F2]',
            rowPosition: 'lg:flex-row-reverse'
        },

    ]
    return (
        <>
            {/* landing section start */}
            <section style={{ backgroundImage: `url(${portfolioBanner})` }} className='h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center'>
                <h1 className='text-[2.5rem] font-bold text-white'>Portfolio</h1>
            </section>
            {/* landing section end */}

            {/* designs cate tabs start */}
            {/* tab buttons section start */}
            <section>
                <div className="main-container mt-[4.6875rem]">
                    <div className="flex sm:justify-center items-center gap-3  overflow-x-auto hide-scroll">
                        {tabButtons.map((butn, index) => (
                            <button key={index} onClick={() => setIsActive(index + 1)} className={`block  cursor-pointer  hover:text-white  hover:bg-gradient-to-r from-pine-700 to-pine-500 text-xl font-bold px-5 py-4 rounded-lg border-[.0625rem] border-pine-900 transition-all duration-300 ${isActive == index + 1 ? 'text-white bg-gradient-to-r' : 'text-pine-700 bg-transparent'}`}>
                                {butn}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {/* tab buttons section end */}

            {/* portfolio section start */}
            {portfolioSections.map((sect, index) => (
                <section key={index} className={`py-[4.6875rem] ${sect.bg} last:pb-[6.85rem]`}>
                    <div className="main-container">
                        <div className={`flex flex-col-reverse justify-center items-center gap-[3.3125rem] ${sect.rowPosition}`}>
                            <div className="lg:w-[60%]">
                                <img src={sect.siteImage} alt="portfolio image" className='h-full w-full object-contain' />
                            </div>
                            <div className="lg:w-[40%]  max-lg:text-center">
                                <img src={sect.logo} alt="Portfolio logo" className='h-auto w-auto object-contain block mb-5 max-lg:mx-auto' />

                                <p className="text-[1.375rem] leading-[2.3125rem] font-medium text-black mb-[2.375rem]">
                                    {sect.dis}
                                </p>

                                <div className="flex flex-wrap justify-start items-center gap-5">
                                    <div className="flex-1">
                                        <h5 className='text-[1.75rem] leading-[2.125rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-pine-700 to-pine-999 mb-[1.625rem]'>Website Link</h5>
                                        <a href={sect.website} target='_blank' className='text-[1.125rem] leading-[1.25rem] font-normal text-black'>{sect.website}</a>
                                    </div>

                                    <div className="flex-1">
                                        <h5 className='text-[1.75rem] leading-[2.125rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-pine-700 to-pine-999 mb-[1.625rem]'>Platform</h5>
                                        <span className='text-[1.125rem] leading-[1.25rem] font-normal text-black'>{sect.platform}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* portfolio section emd */}

            {/* designs cate tabs end */}


        </>
    )
}

export default Portfolio
