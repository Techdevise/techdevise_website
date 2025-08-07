import React, { useState } from 'react'
import portfolioBanner from '/portfolioBanner.webp'
import portfolio1 from '/portfolio1.webp'
import portfolio2 from '/portfolio2.webp'
import portfolio3 from '/portfolio3.webp'
import portfolio4 from '/portfolio4.webp'
import portfolio5 from '/portfolio5.webp'
import portfolio6 from '/portfolio6.webp'
import portfolio7 from '/portfolio7.png'
import portfolio8 from '/portfolio8.png'
import portfolio9 from '/portfolio9.png'
import portfolio10 from '/portfolio10.png'
import portfolio11 from '/portfolio11.png'

import portfolioLogo1 from '/portfolioLogo1.svg'
import portfolioLogo2 from '/portfolioLogo2.svg'
import portfolioLogo3 from '/portfolioLogo3.svg'
import portfolioLogo4 from '/portfolioLogo4.png'
import portfolioLogo5 from '/portfolioLogo5.svg'
import portfolioLogo6 from '/portfolioLogo6.svg'
import portfolioLogo7 from '/portfolioLogo7.png'
import portfolioLogo8 from '/portfolioLogo8.png'
import portfolioLogo9 from '/portfolioLogo9.png'
import portfolioLogo10 from '/portfolioLogo10.png'
import portfolioLogo11 from '/portfolioLogo11.png'

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All')

    const tabButtons = ['All', 'Website Development', 'Design', 'Ideas', 'Technology']

    const allPortfolios = [
        {
            id: 1,
            category: 'Ideas',
            siteImage: portfolio1,
            logo: portfolioLogo1,
            dis: 'AVB Marketing can help your business dominate the industry with marketing and technology solutions that secure independent retail success.',
            website: 'https://www.avbmarketing.com/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },
        {
            id: 2,
            category: 'WebsiteDevelopment',
            siteImage: portfolio2,
            logo: portfolioLogo2,
            dis: 'Eureka Telecom was incorporated to bring innovation in the telecommunication industry by offering modernized telecom services.',
            website: 'https://www.bubbleswholesale.com/',
            platform: 'PHP, React.js',
            bg: 'bg-gradient-to-r from-[#F8FFEE] to-[#C4F67B]',
            rowPosition: 'lg:flex-row-reverse'
        },
        {
            id: 3,
            category: 'WebsiteDevelopment',
            siteImage: portfolio3,
            logo: portfolioLogo3,
            dis: 'Dear Customers and Partners, We warmly welcome you to Mr-Refurb, your preferred destination for high-quality, professionally refurbished Mr-Refurb hardware.',
            website: 'https://mr-refurb.nl/',
            platform: 'Shopify',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },
        {
            id: 4,
            category: 'WebsiteDevelopment',
            siteImage: portfolio4,
            logo: portfolioLogo4,
            dis: 'Sterling Forever was born from the belief that everyone deserves access to exquisite jewelry, without ever having to compromise on quality.',
            website: 'https://www.sterlingforever.com/',
            platform: 'Shopify',
            bg: 'bg-gradient-to-r from-[#F6D083] to-[#FFF8EA]',
            rowPosition: 'lg:flex-row-reverse'
        },
        {
            id: 5,
            category: 'Design',
            siteImage: portfolio5,
            logo: portfolioLogo5,
            dis: 'Our expertise spans from initial concept development to detailed design, ensuring every aspect of your project is meticulously planned and executed.',
            website: 'https://iengco.com/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },
        {
            id: 6,
            category: 'WebsiteDevelopment',
            siteImage: portfolio6,
            logo: portfolioLogo6,
            dis: 'Pediatric Therapy Associates is a kids focused therapy place. We are a multi-disciplinary group with the singular focus of developing your child to the fullest.',
            website: 'https://therapypediatric.com/',
            platform: 'Wordpress',
            bg: 'bg-gradient-to-r from-[#FCFFFF] to-[#A9F2F2]',
            rowPosition: 'lg:flex-row-reverse'
        },
        {
            id: 7,
            category: 'Website Development',
            siteImage: portfolio7,
            logo: portfolioLogo7,
            dis: "Welcome to NDN.LASER, your specialist in beauty and skin improvement in Almere. We're all about our clients' well-being. We're committed to giving you a boost in self-confidence. NDN.LASER offers a wide range of luxurious laser treatments, expertly performed by our experienced and knowledgeable team.",
            website: 'https://ndnlaser.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },
        {
            id: 8,
            category: 'Website Development',
            siteImage: portfolio8,
            logo: portfolioLogo8,
            dis: 'Welcome to SEO PRODUCTIEF – the leading digital marketing solutions company in the Netherlands. We help you achieve success with your online presence.',
            website: 'https://seoproductief.nl/',
            platform: 'Wordpress',
            bg: 'bg-gradient-to-r from-[#EBFBFF] to-[#7BDBF6]',
            rowPosition: 'lg:flex-row-reverse'
        },
        {
            id: 9,
            category: 'Website Development',
            siteImage: portfolio9,
            logo: portfolioLogo9,
            dis: 'At Nourklusbedrijf, we believe that every project, big or small, deserves attention and care. Whether you want to have your wall painted, a complete kitchen installed.',
            website: 'https://www.nourklusbedrijf.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },
        {
            id: 10,
            category: 'Website Development',
            siteImage: portfolio10,
            logo: portfolioLogo10,
            dis: 'Sterling Forever was born from the belief that everyone deserves access to exquisite jewelry, without ever having to compromise on quality.',
            website: 'https://www.sterlingforever.com/',
            platform: 'Shopify',
            bg: 'bg-gradient-to-r from-[#F7FFDF] to-[#DBF683]',
            rowPosition: 'lg:flex-row-reverse'
        },
        {
            id: 11,
            category: 'Website Development',
            siteImage: portfolio11,
            logo: portfolioLogo11,
            dis: 'A professional dishwasher installation is essential for preventing problems in the kitchen. Yet, not everyone realizes how important this installation actually is, until a leak develops or the appliance malfunctions. At Witgoed Reparatie Profix, we deal with a wide variety of appliances and their installations every day.',
            website: 'https://www.witgoedreparatieprofix.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        }
    ]

    const filteredPortfolios = activeTab === 'All' 
        ? allPortfolios.slice(0, 6) // Show only first 6 for "All" tab
        : allPortfolios.filter(portfolio => portfolio.category === activeTab)

    return (
        <>
            {/* landing section start */}
            <section style={{ backgroundImage: `url(${portfolioBanner})` }} className='h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center'>
                <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]">
                    Portfolio
                </h1>
            </section>
            {/* landing section end */}

            {/* designs cate tabs start */}
            {/* tab buttons section start */}
            <section>
                <div className="main-container mt-[4.6875rem]">
                    <div className="flex sm:justify-center items-center gap-3 overflow-x-auto hide-scroll">
                        {tabButtons.map((tab, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveTab(tab)} 
                                className={`block cursor-pointer hover:text-white hover:bg-gradient-to-r from-pine-700 to-pine-500 text-xl font-bold px-5 py-4 rounded-lg border-[.0625rem] border-pine-900 transition-all duration-300 ${activeTab === tab ? 'text-white bg-gradient-to-r' : 'text-pine-700 bg-transparent'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            {/* tab buttons section end */}

            {/* portfolio section start */}
            {filteredPortfolios.map((sect, index) => (
                <section key={sect.id} className={`py-[4.6875rem] ${sect.bg} last:pb-[6.85rem]`}>
                    <div className="main-container">
                        <div className={`flex flex-col-reverse justify-center items-center gap-[3.3125rem] ${sect.rowPosition}`}>
                            <div className="lg:w-[60%]">
                                <img src={sect.siteImage} alt="portfolio image" className='h-full w-full object-contain' />
                            </div>
                            <div className="lg:w-[40%] max-lg:text-center">
                                <img src={sect.logo} alt="Portfolio logo" className='h-auto w-auto object-contain block mb-5 max-lg:mx-auto' />

                                <p className="text-[1.375rem] leading-[2.3125rem] font-medium text-black mb-[2.375rem]">
                                    {sect.dis}
                                </p>

                                <div className="flex flex-wrap justify-start items-center gap-5">
                                    <div className="flex-1">
                                        <h5 className='text-[1.75rem] leading-[2.125rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-pine-700 to-pine-999 mb-[1.625rem]'>Website Link</h5>
                                        <a href={sect.website} target='_blank' rel="noopener noreferrer" className='text-[1.125rem] leading-[1.25rem] font-normal text-black'>{sect.website}</a>
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
            {/* portfolio section end */}
        </>
    )
}

export default Portfolio