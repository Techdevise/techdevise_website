import SearchAlt from '/Search_alt.svg'
import wordpress from '/wordpress.svg'
import blog from '/blog.webp'
import blog1 from '/blog1.webp'
import blog2 from '/blog2.webp'
import blog3 from '/blog3.webp'
import blog4 from '/blog4.webp'
import blog5 from '/blog5.webp'
import blog6 from '/blog6.webp'
import { Link } from 'react-router-dom'


// Location section data
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
import Location from '../components/Location'

const BlogDetail = () => {
    const bolgListOne = [
        { image: blog1, title: "WordPress", readTime: "5 min read", heading: "Want to change your WordPress theme? Here’s what you should consider", discription: "Changing WordPress theme is not that complicated a job, but it does require expertise and there are a few things that you have to take care of. Here are the things that you have to consider before change your theme on WordPress website:", tiem: "June 30, 2020", link: "https://www.techdevise.com/want-to-change-your-wordpress-theme-heres-what-you-should-consider/" },
        { image: blog2, title: "Web Development", readTime: "5 min read", heading: "Cheap web development – why you shouldn’t fall prey!", discription: "Quality web development is a pricey affair. A well-made website with necessary functionalities will cost you a few hundred dollars. But since many wannabe webowners do not want to spend that much on a website, they tend to hire developers who promise to do the work for peanuts.", tiem: "June 30, 2020", link: "https://www.techdevise.com/cheap-web-development-why-you-shouldnt-fall-prey/" },
        { image: blog3, title: "WordPress Plugins", readTime: "5 min read", heading: "Premium WordPress plugins – are they worth paying for?", discription: "If you have been working with WordPress for long enough, you must have seen 3 different types of plugins available in the WordPress store – Free, Premium, and Freemium versions. Mostly people tend to use the freemium plugins.", tiem: "November 13, 2020", link: "https://www.techdevise.com/premium-wordpress-plugins-are-they-worth-paying-for/" },
        { image: blog4, title: "Web design", readTime: "5 min read", heading: "Responsive web design – why it is important for your online presence?", discription: "The world of internet and websites are changing every day. To make sure you keep up with the pace it is important to have up-to-date knowledge and make necessary changes to your website. There was a time when people used to put most of their focus on good, user-friendly designs.", tiem: "November 13, 2020", link: "https://www.techdevise.com/responsive-web-design-why-it-is-important-for-your-online-presence/" },
        { image: blog5, title: "SMM", readTime: "5 min read", heading: "How to use SMM for your e-commerce store?", discription: "How to use SMM for your e-commerce store? To use SMM for your own e-commerce store you need to make sure that you take care of a few things that might help you get the best from the social media:", tiem: "November 13, 2020", link: "https://www.techdevise.com/how-to-use-smm-for-your-e-commerce-store/" },
        { image: blog6, title: "SEO Strategy", readTime: "5 min read", heading: "5 effective techniques for a killer SEO strategy", discription: "SEO has been a well-known technique in the field of digital marketing and when it comes to SEO strategies you have to be ready with some good ideas to boost your SEO work. Here are 5 simple yet effective strategies that can certainly help you in the long run.", tiem: "November 13, 2020", link: "https://www.techdevise.com/5-effective-techniques-for-a-killer-seo-strategy/" },
    ]

    return (
        <>
            {/* landing area start */}
            <div className="bg-[#00000066] h-[5.5rem]"></div>
            <section className='pt-[2.1875rem] pb-[1.8125rem]'>
                <div className="w-full max-w-[60.873rem] mx-auto text-center text-black">
                    <h5>Technology <span>.</span> 30 min read</h5>
                    <h1 className='text-[2.625rem] font-semibold leading-[3.4375rem] '>Premium WordPress plugins &minus; are they worth paying for?</h1>
                    <h6 className='text-xl text-[#9F9F9F] font-medium' >November 13, 2020</h6>
                </div>
            </section>
            {/* landing area section end */}
            {/* Plugins section start */}
            <section className='mb-[4.6875rem]'>
                <div className="main-container">
                    <img src={blog} alt="blog" className='w-full max-h-[583px] rounded-[1.25rem] object-cover block mb-7' />
                    <p className='text-xl leading-[37px] font-normal'> To use SMM for your own e-commerce store you need to make sure that you take care of a few things that might help you get the best from the social media:</p>
                    <ul className='ps-7 list-disc mb-9'>
                        <li className='text-xl leading-[37px] font-normal'>
                            You share posts on your company and products on social media! It&apos;s really a good initiative, but you have to think like the users and understand what else they might be interested in. Now you will have to post on those topics to help them get genuine information from your posts and in the process you will get the attention of your users.
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Understand how effectively you are using SMM to enhance your sale. Unless you do that, you will never know whether you need to work harder or not!
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Posting frequency is really important. Whether you post your content directly on your Social Media page or you share posts from your blog, you have to make sure that you keep people interested with quality posts and maintain a nice interval between posts so as to keep them on your blog.
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Make sure to maintain the ratio between number of subscribers and number of followers to avoid any kind of search engine penalties.
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Value your users. Replying to their comments and interacting directly with them will make it a lot easier to get to them.
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Discuss everything about your product and even the problems as well. But do not forget to mention the solutions as well. This will help you in gaining trust.
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Stay behind the curtains; it&apos;s the platform for you product not you!
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Apart from the Social Media platforms like Facebook, Twitter, or Google Plus, you have to concentrate on other social communities as well, where you will have to find your targeted audience.
                        </li>
                        <li className='text-xl leading-[37px] font-normal'>
                            Have a questionnaire distributed amongst your subscriber to know what they are looking for or the kind of improvement they are hoping for.
                        </li>
                    </ul>

                </div>
            </section>
            {/* Plugins section end */}
            {/* Recent Blog section start */}
            <section className='my-[4.6875rem]'>
                <div className="main-container">
                    <h2 className='text-[2.625rem] text-black font-semibold mb-[1.6875rem]'>Recent Blog </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.0625rem]">
                        {bolgListOne.map((item, index) => (index < 3 && (
                            <div key={index} className='group'>
                                <div className="relative">
                                    <img src={item.image} alt="blog" className='w-full rounded-[1.25rem] object-cover aspect-[1.6/1] block mb-[1.6875rem]' />
                                    <img src={wordpress} alt="wordpress" className='absolute z-10 top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter opacity-0 group-hover:opacity-100 transition-all' />
                                </div>
                                <h6 className='text-[#157B6C] text-xl flex gap-[1.125rem] items-center font-semibold mb-4'><span>{item.title}</span> <i className='w-2 h-2 rounded-2xl bg-[#157B6C] '></i> <span>{item.readTime}</span></h6>
                                <h5 className='text-xl font-bold text-black mb-1.5 '>{item.heading}</h5>
                                <p className='text-xl mb-3.5 '>{item.discription}</p>
                                <Link to={item.link} className='text-[#9F9F9F] text-xl font-medium underline'>{item.tiem}</Link>
                            </div>)
                        ))}
                    </div>
                </div>
            </section>
            {/* Recent Blog section end */}
            {/* Location section start */}
            <Location />
            {/* Location section end */}
        </>
    )
}

export default BlogDetail