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
import portfolio12 from '/portfolio12.png'
import portfolio13 from '/portfolio13.png'
// import portfolio14 from '/portfolio14.png'
import portfolio15 from '/portfolio15.png'
import portfolio16 from '/portfolio16.png'
import portfolio17 from '/portfolio17.png'


import ranking1 from '/ranking1.png'
import ranking2 from '/ranking2.png'
import ranking3 from '/ranking3.png'
import ranking4 from '/ranking4.png'
import ranking5 from '/ranking5.png'

import portfolioLogo1 from '/portfolioLogo1.svg'
import portfolioLogo2 from '/portfolioLogo2.svg'
import portfolioLogo3 from '/portfolioLogo3.svg'
import portfolioLogo4 from '/portfolioLogo4.png'
import portfolioLogo5 from '/portfolioLogo5.svg'
import portfolioLogo6 from '/portfolioLogo6.svg'
import portfolioLogo7 from '/portfolioLogo7.webp'
import portfolioLogo8 from '/portfolioLogo8.png'
import portfolioLogo9 from '/portfolioLogo9.webp'
import portfolioLogo10 from '/portfolioLogo10.png'
import portfolioLogo11 from '/portfolioLogo11.png'
import portfolioLogo12 from '/portfolioLogo12.png'
import portfolioLogo13 from '/portfolioLogo13.png'
// import portfolioLogo14 from '/portfolioLogo14.png'
import portfolioLogo15 from '/portfolioLogo15.svg'
import portfolioLogo16 from '/portfolioLogo16.png'
import portfolioLogo17 from '/portfolioLogo17.png'

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All')

    const tabButtons = ['All', 'Website Development', 'Design', 'Development', 'SEO']

    const allPortfolios = [
        {
            id: 1,
            category: 'Development',
            siteImage: portfolio1,
            logo: portfolioLogo1,
            logoSize:'w-[35%]',
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
             logoSize:'w-[25%]',
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
               logoSize:'w-[25%]',
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
            logoSize:'w-[35%]',
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
               logoSize:'w-[25%]',
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
               logoSize:'w-[25%]',
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
           logoSize:'w-[20%]',
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
             logoSize:'w-[15%]',
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
           logoSize:'w-[25%]',
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
            logoSize:'w-[25%]',
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
              logoSize:'w-[20%]',
            dis: 'A professional dishwasher installation is essential for preventing problems in the kitchen. Yet, not everyone realizes how important this installation actually is, until a leak develops or the appliance malfunctions. At Witgoed Reparatie Profix, we deal with a wide variety of appliances and their installations every day.',
            website: 'https://www.witgoedreparatieprofix.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rowPosition: 'lg:flex-row'
        },
        {
            id: 12,
            category: 'SEO',
            siteImage: portfolio12,
            logo: portfolioLogo12,
               logoSize:'w-[30%]',
            dis: 'Bremafa: for the largest range of sleeping products in the Benelux.',
            website: 'https://bremafa.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rankingImage:ranking1,
            rowPosition: 'lg:flex-row'
        },
        {
            id: 13,
            category: 'SEO',
            siteImage: portfolio13,
            logo: portfolioLogo9,
               logoSize:'w-[25%]',
            dis: "Our services are tailor-made for you! You're in luck, because you're in safe hands. We offer a guarantee on all our services, and we're also known for our affordable prices.",
            website: 'https://nourloodgietersbedrijf.nl/',
            platform: 'Wordpress',
            rankingImage:ranking2,
            bg: 'bg-gradient-to-r from-[#FFF6ED] to-[#F6C27B]',
            rowPosition: 'lg:flex-row-reverse'
        },
        // {
        //     id: 14,
        //     category: 'SEO',
        //     siteImage: portfolio14,
        //     logo: portfolioLogo14,
        //     dis: 'A professional dishwasher installation is essential for preventing problems in the kitchen. Yet, not everyone realizes how important this installation actually is, until a leak develops or the appliance malfunctions. At Witgoed Reparatie Profix, we deal with a wide variety of appliances and their installations every day.',
        //     website: 'https://www.witgoedreparatieprofix.nl/',
        //     platform: 'Wordpress',
        //     bg: 'bg-transparent',
        //     rowPosition: 'lg:flex-row'
        // },
        {
            id: 15,
            category: 'SEO',
            siteImage: portfolio15,
            logo: portfolioLogo15,
              logoSize:'w-[25%]',
            dis: 'At Nourklusbedrijf, we believe that every project, big or small, deserves attention and care. Whether you want to have your wall painted, a complete kitchen installed.',
            website: 'https://www.hagatex.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rankingImage:ranking3,
            rowPosition: 'lg:flex-row'
        },
          {
            id: 16,
            category: 'SEO',
            siteImage: portfolio16,
            logo: portfolioLogo16,
             logoSize:'w-[25%]',
            dis: 'Sterling Forever was born from the belief that everyone deserves access to exquisite jewelry, without ever having to compromise on quality.',
            website: 'https://blueapple.nl/',
            platform: 'Wordpress',
            rankingImage:ranking4,
            bg: 'bg-gradient-to-r from-[#F7F4FF] to-[#BCA1FF]',
            rowPosition: 'lg:flex-row-reverse'
        },
          {
            id: 17,
            category: 'SEO',
            siteImage: portfolio17,
            logo: portfolioLogo17,
               logoSize:'w-[25%]',
            dis: 'Steamy Details biedt een efficiënte, hoogwaardige reinigingsservice die volledig is afgestemd op jouw drukke leven.',
            website: 'https://steamydetails.nl/',
            platform: 'Wordpress',
            bg: 'bg-transparent',
            rankingImage:ranking5,
            rowPosition: 'lg:flex-row'
        },

    ]

    const filteredPortfolios = activeTab === 'All' 
        ? allPortfolios.slice(0, 6) // Show only first 6 for "All" tab
        : allPortfolios.filter(portfolio => portfolio.category === activeTab)

    return (
        <>
            {/* landing section start */}
            <section style={{ backgroundImage: `url(${portfolioBanner})` }} className='h-[15.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center'>
                <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 -mb-[2.925rem]">
                    Portfolio
                </h1>
            </section>
            {/* landing section end */}

            {/* designs cate tabs start */}
            {/* tab buttons section start */}
            <section>
                <div className="main-container mt-[1.6875rem]">
                    <div className="flex sm:justify-center items-center gap-3 overflow-x-auto hide-scroll">
                        {tabButtons.map((tab, index) => (
                            <button 
                                key={index} 
                                onClick={() => setActiveTab(tab)} 
                                className={`block cursor-pointer shine-effect hover:text-white hover:bg-gradient-to-r from-pine-700 to-pine-500 2xl:text-lg text-sm font-bold px-5 py-4 rounded-lg border-[.0625rem] border-pine-900 transition-all duration-300 ${activeTab === tab ? 'text-white bg-gradient-to-r' : 'text-pine-700 bg-transparent'}`}
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
    <section key={sect.id} className={`pt-[0.6875rem] pb-[2.6875rem] ${sect.bg} last:pb-[6.85rem]`}>
        <div className="main-container">
            <div className={`flex flex-col-reverse justify-center items-center gap-[3.3125rem] ${sect.rowPosition}`}>
                <div className="lg:w-[50%]">
                    <img src={sect.siteImage} alt="portfolio image" className='h-full w-full object-contain' />
                </div>
                <div className="lg:w-[40%] max-lg:text-center">
                    <img src={sect.logo} alt="Portfolio logo" className={`h-auto  ${sect.logoSize} object-contain block mb-[.525rem] mt-4 max-lg:mx-auto`} />

                    <p className="2xl:text-[1.10rem] text-[1rem] leading-[1.725rem] font-normal text-black mb-[1.525rem]">
                        {sect.dis}
                    </p>

                    <div className="flex flex-wrap justify-start items-center gap-2">
                        <div className="flex-1">
                            <h5 className='text-[1.25rem] leading-[1.725rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-pine-700 to-pine-999 mb-[0.525rem]'>Website Link</h5>
                            <a href={sect.website} target='_blank' rel="noopener noreferrer" className='2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-black'>{sect.website}</a>
                        </div>

                        <div className="flex-1">
                            <h5 className='text-[1.25rem] leading-[1.725rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-pine-700 to-pine-999 mb-[0.525rem]'>Platform</h5>
                            <span className='2xl:text-[1.10rem] text-[1rem] leading-[2.125rem] font-normal text-black'>{sect.platform}</span>
                        </div>
                        
                        {/* Only show ranking image if category is SEO and rankingImage exists */}
                        {sect.category === 'SEO' && sect.rankingImage && (
                            <div className='flex'>
                                <img src={sect.rankingImage} alt="Ranking" className='h-auto w-[80%] object-contain block mb-2 max-lg:mx-auto' />
                            </div>
                        )}
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