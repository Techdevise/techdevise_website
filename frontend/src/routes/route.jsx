// import { createBrowserRouter } from "react-router-dom";
// import Applayouts from "../layout"
// import Home from "../pages/Home";
// import About from "../pages/About";
// import OurBlogs from "../pages/OurBlogs";
// import BlogDetail from "../pages/BlogDetail";
// import MobileApplicationDevelopment from "../pages/MobileApplicationDevelopment";
// import WebApplicationDevelopment from "../pages/WebApplicationDevelopment";
// import CareerOne from "../pages/career/CareerOne";
// import CareerTwo from "../pages/career/CareerTwo";
// import CareerThree from "../pages/career/CareerThree";
// import ContactUs from "../pages/ContactUs";
// import ItStaff from "../pages/ItStaff";
// import Portfolio from "../pages/Portfolio";
// import DigitalMarketingOne from "../pages/DigitalMarketingPages/DigitalMarketingOne";
// import AiDevelopment from "../pages/AiDevelopment";
// import QualityAnalysis from "../pages/QualityAnalysis";
// import Blockchain from "../pages/Blockchain";
// import ScrollToTop from "../ScrollToTop";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
// import TermsConditions from "../pages/TermsConditions";
// import Fqa from "../pages/Fqa";

// export default createBrowserRouter([
//     {
//         path: '/',
//          element: (
//             <>
//                 <ScrollToTop />
//                 <Applayouts />
//             </>
//         ),
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/about',
//                 element: <About />
//             },
//             {
//                 path: '/our-blogs',
//                 element: <OurBlogs />,
//             },
//               {
//                 path: '/Privacy-Policy',
//                 element: <PrivacyPolicy />,
//             },
//               {
//                 path: '/Terms-Conditions',
//                 element: <TermsConditions />,
//             },
//                 {
//                 path: '/fqa',
//                 element: <Fqa />,
//             },
//             {
//                 path: '/blog-detail/:id',
//                 element: <BlogDetail />
//             },
//             {
//                 path: '/mobile-app-development',
//                 element: <MobileApplicationDevelopment />
//             },
//             {
//                 path: '/web-app-development',
//                 element: <WebApplicationDevelopment />
//             },
//             {
//                 path: '/career-one',
//                 element: <CareerOne />
//             },
//             {
//                 path: '/career-two/:jobId',
//                 element: <CareerTwo />
//             },
//             {
//                 path: '/career-three/:jobId',
//                 element: <CareerThree />
//             },
//             {
//                 path: '/contact-us',
//                 element: <ContactUs />
//             },
//             {
//                 path: '/it-staff',
//                 element: <ItStaff />
//             },
//             {
//                 path: '/portfolio',
//                 element: <Portfolio />
//             },

//             {
//                 path: '/digital-marketing',
//                 element: <DigitalMarketingOne />
//             },
//               {
//                 path: '/blockchain',
//                 element: <Blockchain />
//             },
//             {
//                 path: '/ai-development',
//                 element: <AiDevelopment />
//             },

//             {
//                 path: '/quality-analysis',
//                 element: <QualityAnalysis />
//             },
//         ]
//     }
// ])

import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Applayouts from "../layout";
import ScrollToTop from "../ScrollToTop";

// Lazy load all pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const OurBlogs = lazy(() => import("../pages/OurBlogs"));
const BlogDetail = lazy(() => import("../pages/BlogDetail"));
const MobileApplicationDevelopment = lazy(() => import("../pages/MobileApplicationDevelopment"));
const WebApplicationDevelopment = lazy(() => import("../pages/WebApplicationDevelopment"));
const CareerOne = lazy(() => import("../pages/career/CareerOne"));
const CareerTwo = lazy(() => import("../pages/career/CareerTwo"));
const CareerThree = lazy(() => import("../pages/career/CareerThree"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const ItStaff = lazy(() => import("../pages/ItStaff"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const DigitalMarketingOne = lazy(() => import("../pages/DigitalMarketingPages/DigitalMarketingOne"));
const AiDevelopment = lazy(() => import("../pages/AiDevelopment"));
const QualityAnalysis = lazy(() => import("../pages/QualityAnalysis"));
const Blockchain = lazy(() => import("../pages/Blockchain"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("../pages/TermsConditions"));
const Fqa = lazy(() => import("../pages/Fqa"));

// Helper to wrap lazy components in Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

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
      { path: '/', element: withSuspense(Home) },
      { path: '/about', element: withSuspense(About) },
      { path: '/our-blogs', element: withSuspense(OurBlogs) },
      { path: '/Privacy-Policy', element: withSuspense(PrivacyPolicy) },
      { path: '/Terms-Conditions', element: withSuspense(TermsConditions) },
      { path: '/fqa', element: withSuspense(Fqa) },
      { path: '/blog-detail/:id', element: withSuspense(BlogDetail) },
      { path: '/mobile-app-development', element: withSuspense(MobileApplicationDevelopment) },
      { path: '/web-app-development', element: withSuspense(WebApplicationDevelopment) },
      { path: '/career-one', element: withSuspense(CareerOne) },
      { path: '/career-two/:jobId', element: withSuspense(CareerTwo) },
      { path: '/career-three/:jobId', element: withSuspense(CareerThree) },
      { path: '/contact-us', element: withSuspense(ContactUs) },
      { path: '/it-staff', element: withSuspense(ItStaff) },
      { path: '/portfolio', element: withSuspense(Portfolio) },
      { path: '/digital-marketing', element: withSuspense(DigitalMarketingOne) },
      { path: '/blockchain', element: withSuspense(Blockchain) },
      { path: '/ai-development', element: withSuspense(AiDevelopment) },
      { path: '/quality-analysis', element: withSuspense(QualityAnalysis) },
    ],
  },
]);
