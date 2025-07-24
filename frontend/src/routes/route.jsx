import { createBrowserRouter } from "react-router-dom";
import Applayouts from "../layout"
import Home from "../pages/Home";
import About from "../pages/About";
import OurBlogs from "../pages/OurBlogs";
import BlogDetail from "../pages/BlogDetail";
import MobileApplicationDevelopment from "../pages/MobileApplicationDevelopment";
import WebApplicationDevelopment from "../pages/WebApplicationDevelopment";
import CareerOne from "../pages/career/careerOne";
import CareerTwo from "../pages/career/CareerTwo";
import CareerThree from "../pages/career/CareerThree";
import ContactUs from "../pages/ContactUs";
import ItStaff from "../pages/ItStaff";
import Portfolio from "../pages/portfolio";
import DigitalMarketingOne from "../pages/DigitalMarketingPages/DigitalMarketingOne";

export default createBrowserRouter([
    {
        path: '/',
        element: <Applayouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/our-blogs',
                element: <OurBlogs />,
            },
            {
                path: '/blog-detail',
                element: <BlogDetail />
            },
            {
                path: '/mobile-app-development',
                element: <MobileApplicationDevelopment />
            },
            {
                path: '/web-app-development',
                element: <WebApplicationDevelopment />
            },
            {
                path: '/career-one',
                element: <CareerOne />
            },
            {
                path: '/career-two/:jobId',
                element: <CareerTwo />
            },
            {
                path: '/career-three/:jobId',
                element: <CareerThree />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/it-staff',
                element: <ItStaff />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },

            {
                path: '/digital-marketing-one',
                element: <DigitalMarketingOne />
            },
            
        ]
    }
])