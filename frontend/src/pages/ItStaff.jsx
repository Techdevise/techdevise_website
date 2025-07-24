import React from 'react'

// images 
import staff1 from '/staff1.webp'
import { Link } from 'react-router-dom'
import { GoArrowRight } from 'react-icons/go'
import CompanyLogoSlider from '../components/CompanyLogoSlider'
import stafflogo from '/stafflogo.svg'

import Itleftarrow from '/Itleftarrow.svg'
import arrowRightUp from '/arrowRightUp.svg'

import gap from '/gap.webp'
import gap1 from '/gap1.svg'
import gap2 from '/gap2.svg'
import gap3 from '/gap3.svg'
import gap4 from '/gap4.svg'

import itStaffing from '/itStaffing.webp'

import recog1 from '/recog1.webp'
import recog2 from '/recog2.webp'
import recog3 from '/recog3.webp'
import recog4 from '/recog4.webp'
import recog5 from '/recog5.webp'
import recog6 from '/recog6.webp'
import recog7 from '/recog7.webp'
import recog8 from '/recog8.webp'
import { LuMoveUpRight } from 'react-icons/lu'
// images

const ItStaff = () => {
    const coLogo = [
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
        { image: stafflogo, },
    ]

    const itRoles = [
        "Designer",
        "Developer",
        "Digital Marketing",
        "QA Staffing",
        "Human Resources (HR)",
        "Big Data",
        "Project Manager",
        "AI Development",
        "IT Support",
        "Human Resources (HR)"
    ]

    const gapService = [
        {
            image: gap1,
            name: 'Artificial intelligence'
        },
        {
            image: gap2,
            name: 'IT Operations'
        },
        {
            image: gap3,
            name: 'Cloud'
        },
        {
            image: gap4,
            name: 'Software Development'
        },
    ]

    const recogImages = [recog1, recog2, recog3, recog4, recog5, recog6, recog7, recog8]
    return (
        <>
            {/*it staff landing section start  */}
            <section style={{ backgroundImage: `url(${staff1})` }} className="landingItStaff bg-center bg-cover bg-no-repeat mb-[4.6875rem] min-h-[100dvh] flex justify-center items-end">
                <div className="main-container">
                    <div className="pt-[6.25rem]">
                        <div className="bottomContent">
                            <div className="flex lg:flex-row flex-col">
                                <div className="lg:flex-1 max-w-fit">
                                    <h1 className='text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]'>Your Trusted Partner for IT Staffing and Services</h1>
                                    <p className='text-[1rem] leading-[1.5rem] font-normal text-white max-w-3xl text-start '>TechDevise is a staffing agency that has the expertise, experience, and network to find you the most qualified candidates for any industry or function in as little as two days. Plus, we have access to top international talent and can source great people from 50+ countries. Questions? Call us toll-free: +1 123 456 7890</p>

                                </div>
                                <div className="lg:flex-1 flex justify-center items-stretch gap-[1.6875rem]">
                                    <div className="border border-white bg-black/50 rounded-[1.25rem] p-[1.875rem] text-center flex justify-center items-center flex-col">
                                        <h3 className="text-[2rem] font-bold text-white">Schedule a <br /> meeting</h3>
                                        <p className='text-[1rem] leading-[1.5rem] font-normal text-balance text-white max-w-3xl text-start mt-5 mb-8 '>
                                            Talk with one of our experts about your IT staffing and tech solutions needs.
                                        </p>

                                        <Link to="/" className="bg-[#BCFFCE] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Let's Connect <span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><LuMoveUpRight className='text-[18px] -rotate-12 text-black' strokeWidth={1} /> </span></Link>

                                    </div>
                                    <div className="border border-white bg-black/50 rounded-[1.25rem] p-[1.875rem] text-center flex justify-center items-center flex-col">
                                        <h3 className="text-[2rem] font-bold text-white">Submit Staffing <br />Request</h3>
                                        <p className='text-[1rem] leading-[1.5rem] font-normal text-balance text-white max-w-3xl text-start mt-5 mb-8 '>
                                            Talk with one of our experts about your IT staffing and tech solutions needs.
                                        </p>

                                        <Link to="/" className="bg-[#FFBCBE] text-black inline-flex p-1.5 rounded-full items-center justify-center pl-[2.0625rem] gap-[2.0625rem] font-medium text-base">
                                            Get Started<span className="ms-auto w-11 h-11 rounded-full bg-white flex items-center justify-center"><LuMoveUpRight className='text-[18px] -rotate-12 text-black' strokeWidth={1} /> </span></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="rounded-[2.1875rem] w-full mt-[3.8125rem] bg-gradient-to-l from-[#7BDB9D] to-[#6AD2B6] py-[2.625rem] px-[2rem] translate-y-20">
                                <CompanyLogoSlider logos={coLogo} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/*it staff landing section end  */}

            {/* IT Roles section start */}
            <section className="ItRoles py-[4.6875rem] pt-[4.6875rems]">
                <div className="main-container">
                    <div className="sectionHeader relative">
                        <h3 className='2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-extrabold text-black mb-3'>  We Staff IT Roles Across Any <span className='text-pine-700'>Industry</span></h3>
                        <p className='text-[1.125rem] leading-[2.125rem] font-normal text-black max-w-[85.1875rem] mb-[3.3125rem]'>TechDevise is an IT staffing company with more than 24 years of experience. You name it, we&apos;ve staffed it before—and we&apos;d love to find great people for you, too. With a dedicated team of tech recruiters leveraging proprietary AI-enabled recruiting tools, we can find qualified candidates in as few as two days. Even the unicorns who aren&apos;t looking for a new role—yet. Then we engage, retain, and develop them through our exclusive consultant care model Explore some of the key roles we staff.</p>

                        <img src={Itleftarrow} alt="It left arrow" className='absolute top-0 right-0' />
                    </div>

                    <div className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 min-[25rem]:grid-cols-2 gap-x-[.75rem] gap-y-[2.3125rem]">
                        {itRoles.map((item, index) => (
                            <div key={index} className="border-2 border-black flex justify-between items-center rounded-full p-2">
                                <span className='px-[1.375rem]'>{item}</span>
                                <div className="size-[3.3125rem] rounded-full bg-[#E8E8E8] flex justify-center items-center">
                                    <img src={arrowRightUp} alt="arrow Right Up" />
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
            {/* IT Roles section end */}

            {/* Service Gap section start */}
            <section className="serviceGap my-[4.6875rem] bg-[#EEFCFE]  max-lg:py-[4.6875rem]">
                <div className="main-container lg:!ps-0">
                    <div className={` h-full flex-1 flex lg:flex-row flex-col  justify-start lg:items-stretch items-center  gap-[2.875rem] relative transition-all duration-300 `}>
                        <img src={gap} alt="modal side image" className=' max-lg:h-[25rem] lg:w-[50%] w-full lg:object-cover object-cover block' />
                        <div className="lg:flex-1 lg:overflow-y-auto py-[4.6875rem] text-center lg:text-start">
                            <h2 className='2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-extrabold mb-[1.4375rem]'>Filling the Tech <br className='max-lg:hidden' /> Services Gap</h2>
                            <h4 className='text-[1.5rem] font-semibold mb-4'>Did you know…</h4>

                            <p className="text-[1rem] leading-[1.5rem] font-normal pb-[1.125rem]">
                                That 75% of IT decision-makers see skill gaps within their teams? Some of the top areas include:
                            </p>

                            <div className="flex lg:justify-start justify-center items-stretch gap-5 mb-[2.1875rem]">
                                {gapService.map((item, index) => (
                                    <div key={index} className="text-center">
                                        <div className="h-[6.1875rem] mb-3  aspect-square bg-white rounded-[1.25rem] flex justify-center items-center shadow-2xl shadow-black/10">
                                            <img src={item.image} alt="finding gap service" className=' object-cover' />
                                        </div>
                                        <span className='text-base font-semibold block max-w-[6.25rem] text-balance'>{item.name}</span>
                                    </div>
                                ))}


                            </div>

                            <h4 className="text-[1.125rem] leading-[1.5rem] font-bold mb-3">What impact does this have on business?</h4>
                            <ul className='ps-7 list-disc mb-9 w-fit text-start max-lg:mx-auto'>
                                <li className='text-base leading-[1.5rem] font-normal'>
                                    Reduced ability to meet business objectives
                                </li>
                                <li className='text-base leading-[1.5rem] font-normal'>
                                    Higher operating costs
                                </li>
                                <li className='text-base leading-[1.5rem] font-normal'>
                                    Longer project durations and decreased quality
                                </li>
                                <li className='text-base leading-[1.5rem] font-normal'>
                                    Increased stress among IT employees
                                </li>
                            </ul>


                            <h4 className="text-[1.125rem] leading-[1.5rem] font-bold mb-3">What impact does this have on business?</h4>
                            <p className='text-base leading-[1.5rem] font-normal'><strong>TechDevise delivers</strong> world-class technical and talent services to IT clients around the globe through Evergreen, our professional services division. With staffing experts in 70+ offices across North America, Europe, and Asia, as well as our state-of the-art technology delivery center in Hyderabad, India, we provide the solutions you need to achieve your company&apos;s goals.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service Gap section end */}

            {/* It staffing start */}
            <section className="itStaffing my-[4.6875rem]">
                <div className="main-container">
                    <div className="relative lg:pr-[5.8125rem]">
                        <h4 className="texto max-lg:hidden absolute -top-3 right-5 rotate-180 md:text-[3.4375rem] sm:text-[2.625rem] text-[2.55rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#D5E4FF] to-pine-700 text-nowrap">Professional Services</h4>

                        <div className=" lg:border border-white/10 rounded-[1.625rem] lg:p-10 flex justify-center lg:items-center items-stretch flex-col lg:flex-row gap-4 ">
                            <div className="flex-[1_1_25rem]">

                                <h2
                                    data-aos-delay="200"
                                    className="2xl:text-[3rem] lg:text-[2.5rem] text-[2rem] font-extrabold text-black lg:w-fit mb-6 lg:text-start text-center"
                                >
                                    Professional Services <br />
                                    Beyond <span className='text-pine-700'>IT Staffing</span>
                                </h2>
                                <p
                                    data-aos-delay="400"
                                    className="2xl:text-[1.125rem] text-[1rem] leading-[2.125rem] font-normal text-black mb-1.5 lg:max-w-3xl lg:text-start text-center"
                                >
                                    <strong>TechDevise</strong> goes beyond staffing. As a true tech and talent partner, we go above and beyond to deliver IT services that power innovation and transformation. When you partner with Insight Global, you get the engine of a leading IT staffing company as well as extensive technical solutions through our Evergreen professional services division.
                                </p>
                                <p
                                    data-aos-delay="600"
                                    className="2xl:text-[1.25rem] text-[1rem] leading-[2.125rem] font-normal text-black mb-1.5 lg:max-w-3xl lg:text-start text-center"
                                >
                                    Evergreen pairs a forward-thinking tech approach with TechDevise powerhouse staffing capabilities. The result? An expert vision to transform your business with the skills to execute the strategy. From sourcing high-impact, built-for-purpose teams to helping you meet your technology goals, we design solutions that drive current success and long-term growth.

                                </p>
                            </div>
                            <div className="flex-[1_1_18.75rem]">
                                <div className="">
                                    <img
                                        src={itStaffing}
                                        alt="card image"
                                        className="h-full w-full object-cover rounded-[1.75rem]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* It staffing end */}

            {/* Recog section start */}
            <section className='recog mt-[4.6875rem] bg-gradient-to-l from-[#FFF2DF] to-[#F7F5F3] pt-[4.6875rem] pb-[7rem]'>
                <div className="main-container text-center">
                    <div className="mx-auto max-w-[69.125rem]">
                        <h3 className='text-[3rem] text-black font-bold mb-[1.75rem]'>Our Company Recognition</h3>
                        <p className="text-[1.25rem] leading-[2.125rem] font-normal mb-[3.75rem]">
                            <strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </p>
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-x-[1.125rem] gap-y-[3.0625rem]">
                            {recogImages.map((item, index) => (
                                <div key={index} className="bg-white h-[15rem] mx-auto aspect-square rounded-[2.25rem] p-10 border border-[#CDCDCD] shadow-2xl shadow-black/10 flex justify-center items-center">
                                    <img src={item} alt={item} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            {/* Recog section end */}
        </>
    )
}

export default ItStaff
