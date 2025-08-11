import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Images import
import Logo from "../../public/Logo.svg";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import dropMenu1 from '/dropMenu1.svg'
import dropMenu2 from '/dropMenu2.svg'
import dropMenu3 from '/dropMenu3.svg'
import dropMenu4 from '/dropMenu4.svg'
import dropMenu5 from '/dropMenu5.svg'
import dropMenu6 from '/dropMenu6.svg'
import dropMenu7 from '/dropMenu7.svg'
import dropService1 from '/dropService1.svg'
import dropService2 from '/dropService2.svg'
import dropService3 from '/dropService3.svg'
import dropService4 from '/dropService4.svg'
import dropService5 from '/dropService5.svg'
import dropService6 from '/dropService6.svg'
import dropService7 from '/dropService7.svg'
import { LuMoveRight } from "react-icons/lu";
import GetInTouch from "../components/GetInTouch";

const navMenu = [
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Career",
    link: "/career-one",
  },
];

const menuTabs = [
  {
    name: 'Mobile Application Development',
    link: '/mobile-app-development',
    icon: dropService1,
  },
  {
    name: 'Digital Marketing',
    link: '/digital-marketing',
    icon: dropService2,
  },
  {
    name: 'Website Development',
    link: '/web-app-development',
    icon: dropService3,
  },
  {
    name: 'Quality Analysis',
    link: '/quality-analysis',
    icon: dropService4,
  },
  {
    name: 'Blockchain Development',
    link: '/blockchain',
    icon: dropService5,
  },
  {
    name: 'AI Development',
    link: '/ai-development',
    icon: dropService6,
  },
  {
    name: 'IT Staffing',
    link: '/it-staff',
    icon: dropService7,
  },
]

const dropSideImages = [dropMenu1, dropMenu2, dropMenu3, dropMenu4, dropMenu5, dropMenu6, dropMenu7]

const Header = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isActiveMenu, setActiveMenu] = useState(1);
  const dropdownRef = useRef(null);
  const servicesRef = useRef(null);
  let hoverTimeout = useRef(null);

  const router = useLocation()

  // scroll effect navigate 
  useEffect(() => {
    if (router.pathname === "/") {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 1) {
          setScrolledPast(true);
        } else {
          setScrolledPast(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [router]);

  const show = () => {
    setCollapsed(!isCollapsed);
  }

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setIsShowMenu(true);
  }

  const handleMouseLeave = () => {
    // Set a timeout before closing the menu
    hoverTimeout.current = setTimeout(() => {
      setIsShowMenu(false);
    }, 300); // 300ms delay before closing
  }

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout.current);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 z-[1198] w-full transition-all duration-300 ${scrolledPast ? 'bg-[#00000069] backdrop-blur-lg' : router.pathname === "/" ? 'bg-[#00000000]' : 'bg-[#00000069]'}`}>
        <div className="main-container relative p-2">
          <nav className={` flex justify-between items-stretch`}>
            <div 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`megaDropmenu max-lg:hidden w-full absolute top-full left-0 transition-all duration-300 grid ${isShowMenu ? 'grid-rows-[1fr] mt-1 z-10' : 'grid-rows-[0fr] mt-5 -z-20'}`}
            >
              <div className="main-container max-2xl:!px-10 overflow-hidden">
                <div className="flex justify-start items-stretch flex-wrap bg-white overflow-hidden w-full rounded-[1.25rem]">
                  <div className="flex-[1_1_18.75rem] max-w-[26.8125rem] max-lg:hidden">
                    <div className="h-full text-white bg-gradient-to-b from-pine-700 to-pine-999 px-9 pt-11 flex flex-col justify-between items-stretch">
                      <div className="text-start">
                        <h3 className="text-[2.25rem] leading-[2.875rem] font-bold">Services</h3>
                        <p className="text-base leading-[1.375rem] font-medium mb-[2.25rem]">Secure, optimize, and manage your IT with expert solutions in cybersecurity, cloud, networking, and digital transformation.</p>
                      </div>
                      {dropSideImages.map((image, index) => (
                        <img key={index} src={image} alt="dropmenu image" className={`mx-auto ${isActiveMenu == index + 1 ? 'block' : 'hidden'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex-[1_1_25rem] 2xl:px-[4.3125rem] px-8 2xl:pt-[2.6875rem] pt-[1.875rem] 2xl:pb-[1.875rem] pb-[1.5rem]">
                    <div className="flex justify-center items-stretch h-full">
                      <div className="flex-1">
                        <ul>
                          {menuTabs.map((tab, index) => (
                            <li 
                              key={index}
                              onMouseEnter={() => {
                                clearTimeout(hoverTimeout.current);
                                setActiveMenu(index + 1);
                              }}
                            >
                              <NavLink 
                                to={tab.link} 
                                className={`flex justify-start items-center gap-[1.125rem] 2xl:text-[1.25rem] text-base font-semibold transition-all duration-300 mb-[1.625rem] cursor-pointer ${isActiveMenu == index + 1 ? 'text-pine-700' : 'text-black'} ${router.pathname == tab.link && isActiveMenu == index + 1 ? 'text-pine-700' : 'text-black'}`}
                              >
                                <img src={tab.icon} alt="dropmenu icons" className="size-[1.8125rem] aspect-square" />
                                <span className="text-nowrap flex justify-start items-center gap-2 flex-1 pe-10"><span>{tab.name}</span> <LuMoveRight className="size-5" /> </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="v-line bg-gradient-to-b from-white via-[#323232] to-white w-[1px]"></div>
                      <div className="flex-1">
                        {menuTabs.map((tabList, index) => (
                          <ul key={index} className={`lg:ps-[3.75rem] ps-[2.5rem] ${isActiveMenu == index + 1 ? 'block' : 'hidden'}`}>
                            {menuTabs.map((tab, index) => (
                              <li key={index} className={`flex justify-start items-center gap-[1.125rem] 2xl:text-[1.25rem] text-base font-normal text-black mb-[1.625rem]`}>
                                <span className="text-nowrap">{tabList.name} {index + 1} </span>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nav logo */}
            <NavLink to="/" className="block py-[.5rem] self-center">
              <img
                src={Logo}
                alt="logo"
                className="h-[30px] min-h-[1.1rem] block"
              />
            </NavLink>

            {/* Nav menu list */}
            <div className={`wrapMenu ms-auto max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:items-stretch max-lg:fixed max-lg:z-[999] max-lg:h-[100dvh] max-lg:max-w-[400px] max-lg:w-full max-lg:bg-pine-999 max-lg:border-r max-lg:border-white/40 max-lg:top-0 max-lg:px-5 max-lg:py-10 transition-all duration-300 ${isCollapsed ? 'max-lg:left-0' : 'max-lg:left-[-400px]'}`}>
              <ul className=" flex lg:h-full lg:justify-end lg:items-center xl:gap-[3.25rem] lg:gap-10 gap-3 justify-start items-stretch max-lg:flex-col ">
                <li onClick={show} className="lg:hidden pb-3 flex justify-between items-start">
                  <NavLink to="/"><img
                    src={Logo}
                    alt="logo"
                    className="h-[1rem] object-contain block" /></NavLink>
                  <button onClick={show} className="cursor-pointer px-3 py-2 -mt-3">
                    <IoClose className="text-white size-7" strokeWidth={1.5} />
                  </button>
                </li>
                
                <li
                  ref={servicesRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="lg:h-full py-[1rem] cursor-pointer lg:flex justify-center items-center text-white lg:hover:opacity-65 transition-all duration-300 relative group"
                >
                  <button 
                    type="button" 
                    className={`text-[1.15rem] max-lg:w-full max-lg:font-bold max-lg:py-4 max-lg:px-4 max-lg:border max-lg:border-white/40 max-lg:rounded-lg max-lg:hover:bg-white max-lg:hover:text-pine-700 transition-all duration-300 flex gap-1 lg:justify-center justify-between items-center focus:outline-0 focus:ring-0 relative`}
                  >
                    <span>Services</span>
                    <FaCaretDown className="text-base" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
                
                <div className={`lg:hidden grid transition-all duration-300 ${isShowMenu ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden transition-all duration-300">
                    <div className="servideDropMenu text-white transition-all duration-300">
                      {menuTabs.map((link, index) => (
                        <NavLink onClick={show} key={index} to={link.link} className={`text-[1.15rem] max-lg:block max-lg:font-bold max-lg:py-4 max-lg:px-4  max-lg:rounded-lg max-lg:hover:bg-white max-lg:hover:text-pine-700 transition-all duration-300  focus:outline-0 focus:ring-0`}>
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>

                {navMenu.map((item, index) => {
                  return (
                    <li 
                      onClick={show}
                      key={index}
                      className="lg:h-full py-[1rem] cursor-pointer lg:flex justify-center items-center text-white lg:hover:opacity-65 transition-all duration-300 relative group"
                    >
                      <NavLink 
                        to={item.link} 
                        className={`text-[1.15rem] max-lg:block max-lg:font-bold max-lg:py-4 max-lg:px-4 max-lg:border max-lg:border-white/40 max-lg:rounded-lg max-lg:hover:bg-white max-lg:hover:text-pine-700 transition-all duration-300 focus:outline-0 focus:ring-0 relative`}
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={() => setShowModal(true)}
                className="lg:hidden h-[3.5rem] block text-start w-full rounded-lg font-bold text-[1.25rem] text-pine-700 text-nowrap py-4 px-5 bg-white shine-effect">Get in Touch</button>
            </div>
            
            {/* Nav Button */}
            <div className="flex justify-center items-center">
              <button onClick={() => setShowModal(true)}
                className="h-[2.91rem] block ms-[2.75rem] rounded-lg font-bold text-[1.15rem] text-pine-700 text-nowrap py-2 px-6 bg-white shine-effect max-lg:hidden">Get in Touch</button>
            </div>
            
            {/* Menu button */}
            <div className="h-full flex justify-center items-center">
              <button onClick={show} className="cursor-pointer aspect-square py-[.4375rem] px-[.3125rem] flex justify-center items-center bg-white rounded lg:hidden">
                <TbMenu2 className="text-black size-10" />
              </button>
            </div>
          </nav>
        </div>
        <div className={`h-[.0625rem] max-lg:hidden ${scrolledPast ? 'bg-white/0' : 'bg-white/20'}`} data-aos="fade-down"></div>
      </header>

      <div onClick={show} className={`bg-black/20 -blur-sm fixed h-[100dvh] w-[100dvw] top-0 left-0 lg:hidden transition-all duration-300 ${isCollapsed ? 'visible opacity-100 z-[998]' : 'invisible opacity-0 z-[-1]'}`}></div>

      <GetInTouch showModal={showModal} setShowModal={() => { setShowModal(!showModal) }} />
    </>
  );
};

export default Header;