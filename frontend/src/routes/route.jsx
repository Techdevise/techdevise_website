import { createBrowserRouter } from "react-router-dom";
import Applayouts from "../layout"
import Home from "../pages/Home";
import About from "../pages/About";
import OurBlogs from "../pages/OurBlogs";
import BlogDetail from "../pages/BlogDetail";
import MobileApplicationDevelopment from "../pages/MobileApplicationDevelopment";
import WebApplicationDevelopment from "../pages/WebApplicationDevelopment";
import CareerOne from "../pages/career/CareerOne";
import CareerTwo from "../pages/career/CareerTwo";
import CareerThree from "../pages/career/CareerThree";
import ContactUs from "../pages/ContactUs";
import ItStaff from "../pages/ItStaff";
import Portfolio from "../pages/Portfolio";
import DigitalMarketingOne from "../pages/DigitalMarketingPages/DigitalMarketingOne";
import AiDevelopment from "../pages/AiDevelopment";
import QualityAnalysis from "../pages/QualityAnalysis";
import Blockchain from "../pages/Blockchain";
import ScrollToTop from "../ScrollToTop";

export default createBrowserRouter([
    {
        path: '/',
         element: (
            <>
                <ScrollToTop />
                <Applayouts />
            </>
        ),
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
                path: '/blog-detail/:id',
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
                path: '/digital-marketing',
                element: <DigitalMarketingOne />
            },
              {
                path: '/blockchain',
                element: <Blockchain />
            },
            {
                path: '/ai-development',
                element: <AiDevelopment />
            },

            {
                path: '/quality-analysis',
                element: <QualityAnalysis />
            },
        ]
    }
])