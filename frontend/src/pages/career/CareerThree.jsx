import React, { useState } from 'react'

import career1 from '/career1.webp'
import modal1 from '/modal1.webp'
import mapin from '/mapin.svg'
import { IoCheckmark } from 'react-icons/io5'
import { ImImage } from 'react-icons/im'
import FlagInput from '../../components/FlagInput'
import { Link } from 'react-router-dom'
import { PiPlus } from 'react-icons/pi'

// images 

const CareerThree = () => {


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
                    <div className={`modal h-full flex-1 relative transition-all duration-300`}>
                        <h3 className='text-pine-400 mb-4 font-medium text-2xl leading-[1.875rem]'>Apply At TechDevise For</h3>
                        <h2 className='md:text-[2.5rem] text-[2.2rem] text-black mb-9'>Digital Marketing Executives</h2>

                        <form action="" className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <input type="text" placeholder='First Name' className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' />
                            </div>
                            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <input type="text" placeholder='Last Name' className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' />
                            </div>
                            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <input type="email" placeholder='Email Address' className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' />
                            </div>
                            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <FlagInput />
                            </div>
                            <div className='md:col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <textarea placeholder='Message' className='h-[6.875rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'></textarea>
                            </div>

                            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <input type="text" placeholder='Linkedin Profile' className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' />
                            </div>
                            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <input type="text" placeholder='How did you  FInd out about us?' className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' />
                            </div>

                            <div className='md:col-span-2 '>
                                <div className="flex justify-between items-center">
                                    <div className="lg:text-start text-center text-black">
                                        <h5 className='text-[1.125rem] leading-[1.625rem] font-bold mb-[.0625rem]'>Answer these questions from the employer </h5>
                                        <p className='text-sm leading-[1.625rem] font-normal'>Please List 2-3 dates and time ranges that you could do an interview. </p>
                                    </div>

                                    <div className="plusTextarea flex justify-end items-center gap-3">
                                        <div className="size-[2.8125rem] rounded-full flex justify-center items-center bg-pine-400">
                                            <PiPlus className='text-base text-white' />
                                        </div>
                                        <span className='text-[1.125rem] leading-[1.625rem] font-bold'>Add More</span>
                                    </div>
                                </div>
                            </div>


                            <div className='md:col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                                <textarea placeholder='Write here' className='h-[6.875rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'></textarea>
                            </div>

                            <div className='md:col-span-2'>
                                <h5 className='text-[1.125rem] leading-[1.625rem] font-bold mb-3'>Are you located in Mohali, Punjab? </h5>

                                <ul>
                                    <li className="flex justify-start items-center gap-2 5">
                                        <input type="radio" name='Located' id='yes' className='accent-pine-400' />
                                        <label htmlFor="yes" className='text-sm leading-[1.625rem] font-normal'>Yes</label>
                                    </li>

                                    <li className="flex justify-start items-center gap-2 5">
                                        <input type="radio" name='Located' id='no' className='accent-pine-400' />
                                        <label htmlFor="no" className='text-sm leading-[1.625rem] font-normal'>No</label>
                                    </li>
                                </ul>
                            </div>

                            <div className="md:col-span-2">
                                <h5 className='text-[1.125rem] leading-[1.625rem] font-bold mb-3'>Upload CV/Resume</h5>

                                <div className=" w-full min-h-[7.625rem] bg-[#ECECEC] rounded-lg py-4 px-8">
                                    <div className="flex flex-col justify-center items-center">
                                        <ImImage className='size-10 block mb-[.75rem] text-[#aaaaaa]' />
                                        <h5 className='text-base leading-[1.25rem]'>Please Upload Your CV / Resume</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 md:col-span-2">
                                <label htmlFor='check' className='flex justify-start items-start lg:gap-4 gap-2 cursor-pointer max-w-4xl'>
                                    <input type="checkbox" hidden id='check' className='peer' />
                                    <div className={`checkbox bg-[#fafafa] peer-checked:bg-pine-700  size-[2.125rem] rounded-md border-[.0625rem] text-white flex justify-center items-center border-pine-700 aspect-square  transition-all duration-300`}>
                                        <IoCheckmark className='size-7' strokeWidth={0.1} />
                                    </div>
                                    <span className='text-base leading-[1.625rem]'>I consent to receiving from the Company e-mail information about new job  , our events, trainings and other ongoing activities - <Link to='/' className='text-pine-700'>Terms & Conditions</Link>.</span>
                                </label>
                            </div>
                            <p className='text-base leading-[1.625rem] font-bold md:col-span-2'>If you are unable to submit your details, then please share your updated CV/Resume at hr@techdevise.com</p>
                            <button type='button' className='bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block  text-white rounded-[.625rem]'>Submit</button>
                        </form>

                    </div>
                </div>
            </section>
            {/* .positions list section end  */}
        </>
    )
}

export default CareerThree
