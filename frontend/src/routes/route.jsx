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
