import React, { useEffect, useState } from 'react'
import modal1 from '/modal1.webp'
import mapin from '/mapin.svg'
import { IoClose } from 'react-icons/io5'
const PositionModal = ({setShowModal }) => {

    const [isShowModal, setShowModal] = useState(false);
    useEffect(() => {
        if (isShowModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isShowModal]);
    const showModal = () => (
        setShowModal(!isShowModal)
    )
    return (
        <>
            <div className={`fixed nset-0 flex justify-center items-center bg-black/70 px-5 ${isShowModal ? 'opacity-100 visible z-[1999]' : 'opacity-0 invisible -z-50'}`}>
                <div className="modal bg-white max-w-[95.4375rem] max-h-[90dvh] h-full flex-1 sm:py-[2.9375rem] sm:px-[2.6875rem] p-4 flex lg:flex-row flex-col max-lg:overflow-y-auto justify-start items-stretch gap-[2.875rem] relative">
                    <div onClick={showModal} className="absolute top-5 right-5 rounded-full size-10 bg-pine-700 flex justify-center items-center text-white">
                        <IoClose />
                    </div>
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

                        <button className='bg-pine-700 w-[15.3125rem] py-2.5 px-5 text-center block  text-white rounded-[.625rem]'>Apply</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PositionModal
