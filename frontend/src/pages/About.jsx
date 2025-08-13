import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Link } from "react-router-dom";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// images
import bg1 from "/AboutPage.jpg";
import plusBorder from "/plusBorder.svg";
import aboutGirl from "/aboutGirl.png";

import { FaCheck, FaPlay } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import noVector from "/noVector.webp";
import Location from "../components/Location";
import expert1 from "/expert1.webp";
import expert2 from "/expert2.webp";
import expert3 from "/expert3.webp";

import modal1 from "/modal1.webp";
import mapin from "/mapin.svg";
import { IoClose } from "react-icons/io5";
import FlagInput from "../components/FlagInput";
import { ImImage } from "react-icons/im";
// images
const About = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  const [isShowModal, setShowModal] = useState(false);
  const [isShowFormModal, setShowFormModal] = useState(false);
  const [teamWorkImages, setTeamWorkImages] = useState([]);
  const [officeActivityImages, setOfficeActivityImages] = useState([]);
  const [teamImages, setTeamImages] = useState([]);
  const [filter, setFilter] = useState("all");
  const [functions, setFunctions] = useState([]);
  const [subJobs, setSubJobs] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [selectedJobDetails, setSelectedJobDetails] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    linkedinProfile: "",
    source: "",
    consent: false,
  });
  const [resume, setResume] = useState(null);
  const [countryCode, setCountryCode] = useState("+91");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleFileChange = (e) => {
    if (e.target.files[0]) setResume(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("first_name", formData.firstName);
    form.append("last_name", formData.lastName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("country_code", countryCode);
    form.append("message", formData.message);
    form.append("type", "job");
    form.append("linkedin_profile", formData.linkedinProfile);
    form.append("about_us", formData.source);
    form.append("jobOption_id", selectedJobDetails?.id);
    if (resume) form.append("pdf_file", resume);
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/api/job_position`, form);
      toast.success("Application submitted successfully!");
      setShowFormModal(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isShowModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowModal]);
  const showModal = () => setShowModal(!isShowModal);

  useEffect(() => {
    if (isShowFormModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowFormModal]);
  const showFormModal = () => setShowFormModal(!isShowFormModal);

  // Fetch teamWork and officeActivity images
  const layoutStructure = [
    "col-span-2 md:order-1 order-1",
    "col-span-1 md:order-2 order-2",
    "col-span-1 md:order-3 order-3",
    "col-span-1 md:order-4 order-4",
    "col-span-1 md:order-5 order-5",
    "col-span-1 md:order-6 order-6",
    "col-span-2 md:order-7 order-8",
    "col-span-1 md:order-8 order-7",
  ];

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const [teamRes, officeRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/api/teams`),
          axios.get(`${API_BASE_URL}/api/officeActivity`),
        ]);

        if (teamRes.data.success) setTeamWorkImages(teamRes.data.data);
        if (officeRes.data.success)
          setOfficeActivityImages(officeRes.data.data);

        const allImages = [...teamRes.data.data, ...officeRes.data.data];
        setTeamImages(allImages);
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    fetchImages();
  }, []);


const filteredImages = () => {
  switch (filter) {
    case "team":
      return teamWorkImages;
    case "office":
      return officeActivityImages;
    case "all":
    default:
      return teamImages.slice(0, 8);
  }
};

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/jobs`);
        if (res.data.success) {
          setFunctions(res.data.data);
          setSelectedFunction(res.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const fetchSubJobs = async () => {
      if (!selectedFunction) return;
      try {
        const res = await axios.get(
          `${API_BASE_URL}/api/sub_jobs/${selectedFunction.id}`
        );
        if (res.data.success) {
          setSubJobs(res.data.data);
          console.log(res.data);
        }
      } catch (error) {
        console.error("Error fetching sub-jobs:", error);
      }
    };
    fetchSubJobs();
  }, [selectedFunction]);

  const openJobModal = async (jobId) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/jobs_Options/${jobId}`);
      if (res.data.success) {
        setSelectedJobDetails(res.data.data);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error loading job details:", error);
    }
  };
  const visionaries = [
    {
      image: aboutGirl,
      name: "Sophie Parker",
      profession: "HR Excutive",
      coverColor: "bg-[#EA9C99]",
    },
    {
      image: aboutGirl,
      name: "Alex Johnson",
      profession: "Project Manager",
      coverColor: "bg-[#99CBEA]",
    },
    {
      image: aboutGirl,
      name: "Alex Johnson",
      profession: "Team Leader",
      coverColor: "bg-[#67C792]",
    },
    {
      image: aboutGirl,
      name: "Alex Johnson",
      profession: "HR Excutive",
      coverColor: "bg-[#FAE387]",
    },
  ];

  const itExpert = [expert1, expert2, expert3, expert2, expert1, expert3];
  return (
    <>
      {/* about landing area section start */}
     <section
  style={{
    backgroundImage: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="aboutLanding mb-[4.6875rem] w-full"
>
  <ToastContainer />
  <div className="min-h-[90dvh] sm:min-h-[70vh]"></div>
  <div className="sectionBottomContent">
    <div className="bg-black/60">
      <div className="main-container !max-w-full flex lg:flex-row flex-col justify-center lg:items-center items-stretch lg:text-start text-center !m-0 max-lg:!ps-0 !pe-0">
        <div className="lg:w-[60%] py-[4.6875rem]">
          <h4 className="md:text-[2rem] text-[1.6rem] text-white font-normal">
            We Believe in the Power of
          </h4>
          <h1 className="2xl:text-[4rem] sm:text-5xl text-4xl text-white font-bold">
            Ideas, Innovation, and People
          </h1>
        </div>
        <div className="lg:w-[40%] relative text-white bg-gradient-to-r from-pine-700 to-pine-500 py-[2rem] grid grid-cols-2">
          <img
            src={plusBorder}
            alt="plus border"
            className="absolute top-1/2 left-1/2 -translate-1/2"
          />
          <div className="col py-[2.1875rem] px-[3rem]">
            <h2 className="text-[2.25rem] font-bold">10</h2>
            <h4 className="text-[1.25rem] font-normal">Years of Experience</h4>
          </div>
          <div className="col py-[2.1875rem] px-[3rem]">
            <h2 className="text-[2.25rem] font-bold">20+</h2>
            <h4 className="text-[1.25rem] font-normal">Countries Served</h4>
          </div>
          <div className="col py-[2.1875rem] px-[3rem]">
            <h2 className="text-[2.25rem] font-bold">20+</h2>
            <h4 className="text-[1.25rem] font-normal">Tech Enthusiast</h4>
          </div>
          <div className="col py-[2.1875rem] px-[3rem]">
            <h2 className="text-[2.25rem] font-bold">20+</h2>
            <h4 className="text-[1.25rem] font-normal">Product Delivered</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* about landing area section end */}

      {/* Life @ Techdevise section start*/}
      <section className="life my-[4.6875rem]">
        <div className="main-container">
          {/* Header + Filter Buttons */}
          <div className="sectionHeader flex md:flex-row flex-col gap-4 md:justify-between justify-center items-center pb-12">
            <h3 className="text-[2.5rem] font-bold">Life@Techdevise</h3>
            <div className="flex gap-[.8125rem] max-md:pt-5">
              {["all", "team", "office"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`block ${
                    filter === type
                      ? "bg-gradient-to-r from-pine-700 to-pine-500 text-white"
                      : "text-pine-700 bg-transparent"
                  } hover:text-white hover:bg-gradient-to-r from-pine-700 to-pine-500 text-xl font-bold px-5 py-4 rounded-lg border-[.0625rem] border-pine-900 transition-all duration-300`}
                >
                  {type === "all"
                    ? "All"
                    : type === "team"
                    ? "Team Work"
                    : "Office Activity Time"}
                </button>
              ))}
            </div>
          </div>

          {/* Grid with API images and layout */}
          <div className="gallery grid md:grid-cols-5 grid-cols-2 gap-[1.875rem]">
            {filteredImages().map((img, index) => {
              const layout = layoutStructure[index] || "col-span-1"; // fallback
              return (
                <div
                  key={index}
                  className={`${layout} hover:scale-105 transition-all duration-300`}
                >
                  <img
                    src={`${API_BASE_URL}/images${img.image || img.image}`} // 👈 adjust based on your API image key
                    alt="gallery"
                    className="block h-full w-full object-cover rounded-[1.625rem]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Life @ Techdevise section end*/}

      {/* Open Positions section start */}
      <section className="open-positions my-[4.6875rem]">
        <div className="main-container">
          <div className="sectionHeader text-center text-black max-w-4xl mx-auto mb-[1.625rem]">
            <h3 className="text-[3rem] font-bold mb-[.3125rem]">
              Open Positions
            </h3>
            <p className="text-[1.125rem] leading-[1.75rem]">
              If you're someone who thrives in a fast-paced, collaborative, and
              constantly evolving environment, then Apptunix is the perfect
              place to accelerate your career.
            </p>
          </div>

          <div className="bg-white shadow-xl shadow-gray-600/5 rounded-[.625rem] py-[2.1875rem] px-[1.875rem]">
            <h4 className="text-xl leading-[1.625rem] font-semibold text-black mb-6">
              Function
            </h4>
            <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-stretch">
              <div className="lg:w-[28.1875rem] lg:border-r border-black/20">
                <ul className="lg:block flex justify-start items-center gap-5 max-lg:mb-5 overflow-x-auto hide-scroll">
                  {functions.map((func, index) => (
                    <li key={func.id} className="mb-[1.25rem]">
                      <div
                        onClick={() => {
                          setActiveStep(index + 1);
                          setSelectedFunction(func);
                        }}
                        className="flex justify-start items-center lg:gap-4 gap-2 cursor-pointer"
                      >
                        <div
                          className={`checkbox size-[2.125rem] rounded-md border-[.0625rem] text-white flex justify-center items-center border-pine-700 aspect-square transition-all duration-300
                        ${
                          activeStep === index + 1 ? "bg-pine-700" : "bg-white"
                        }`}
                        >
                          <IoCheckmark className="size-7" strokeWidth={0.1} />
                        </div>
                        <span className="text-xl leading-[1.625rem] text-nowrap">
                          {func.title}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 lg:px-[2.8125rem]">
                {subJobs.length > 0 ? (
                  <ul>
                    {subJobs.map((item, i) => (
                      <li
                        onClick={() => openJobModal(item.id)}
                        key={i}
                        className="cursor-pointer bg-gradient-to-b from-pine-700/30 to-pine-700/70 rounded-lg p-[1px] mb-[1.5625rem]"
                      >
                        <div className="h-[3.8125rem] px-[2rem] py-[1rem] text-xl leading-[1.625rem] text-black bg-white rounded-[.4375rem] flex justify-start items-center">
                          {item.name}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="lg:h-full min-h-[300px] flex sm:flex-row flex-col justify-center items-center gap-10 flex-wrap">
                    <img
                      src={noVector}
                      alt="vector"
                      className="w-48 md:w-64 lg:w-72 h-auto aspect-square"
                    />
                    <div className="flex-1 max-w-md">
                      <p className="text-xl leading-[26px] lg:pe-4 text-pine-700 font-medium">
                        No vacancies available at the moment. Stay tuned for
                        future opportunities!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Open Positions section end */}
      {/* Visionaries start*/}
      {/* <section className=" visionaries my-[4.6875rem]">
        <div className="main-container">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold leading-[1]">
              Meet The Visionaries Behind
            </h2>
            <h2 className="text-5xl font-bold text-[#157B6C] leading-[1]">
              TechDevise
            </h2>
            <p className="text-lg font-medium mt-[.9375rem]">
              We're a thriving ecosystem of creators, builders, and
              forward-thinkers shaping digital technology's future.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gird-cols-1 lg:gap-10 md:gap-8 gap-5">
            {visionaries.map((item, index) => (
              <div
                key={index}
                className="relative rounded-[.625rem] overflow-hidden z-0"
              >
                <img src={item.image} alt="about girl" className="w-full" />
                <div
                  className={`absolute w-full h-2/3 bottom-0 left-0 rounded-[.625rem] -z-[1]  ${item.coverColor}`}
                ></div>
                <div className="bg-[#FFFFFFAB] absolute bottom-0 left-0 text-center pt-[1.3125rem] pb-6 w-full">
                  <h4 className="text-black text-2xl font-semibold mb-4">
                    {item.name}
                  </h4>
                  <h5 className="text-black text-lg font-semibold mb-4">
                    {item.profession}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Visionaries end */}

      {/* IT Experts section start */}
      {/* <section className="it-experts my-[4.6875rem]">
        <div className="main-container flex gap-[3.75rem] xl:flex-row flex-col justify-center items-stretch text-black">
          <div className="flex-1 flex flex-col justify-start items-stretch lg:text-start text-center  ">
            <h4 className="text-[2rem] leading-[3.625rem] font-bold text-pine-700">
              Meet Our IT Experts
            </h4>
            <h3 className="text-[3rem] leading-[3.625rem] font-bold">
              Driving Innovation Forward
            </h3>
            <p className="text-[1.125rem] flex-1 leading-[1.875rem] font-medium">
              Get an inside look at our talented IT team, the minds behind our
              cutting-edge solutions. Their expertise, dedication, and
              innovation power our success, ensuring seamless technology
              solutions for businesses worldwide.
            </p>
            <div className="flex mt-12 justify-between items-center gap-20">
              <div className="h-0 flex-1 border-t  border-pine-700"></div>
              <div className="flex gap-3">
                <button
                  ref={prevRef}
                  className="rounded-2xl flex justify-center items-center bg-white/5 cursor-pointer order-1"
                >
                  <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
                    <GoArrowLeft className="size-7" />
                  </div>
                </button>

                <button
                  ref={nextRef}
                  className="rounded-2xl flex justify-center items-center bg-white/5 cursor-pointer order-3"
                >
                  <div className="size-12 rounded-full aspect-square flex justify-center items-center text-white bg-pine-700">
                    <GoArrowRight className="size-7" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 w-full">
            <Swiper
              className="mySwiper h-full w-full justify-between select-none [&>.swiper-wrapper]:!ease-linear"
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              grabCursor={true}
              modules={[Autoplay, Navigation]}
              onInit={(swiper) => {
                // Re-assign custom buttons after swiper is initialized
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {itExpert.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex justify-center items-center group"
                  >
                    <div className="image lg:h-[27.9375rem] max-lg:max-h-[27.9375rem] max-w-[17.5625rem] rounded-[.625rem] overflow-hidden relative ">
                      <img
                        src={item}
                        alt="it expert's image"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-all duration-300 invisible group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:visible ">
                        <div className="size-[3.4375rem] aspect-square rounded-full bg-black/20 text-white flex justify-center items-center">
                          <FaPlay className="size-7" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section> */}
      {/* IT Experts section end */}

      {/* Location section start */}
      <Location />
      {/* Location section end */}

      {/* Modal First >> */}
      <div
        className={`fixed inset-0 flex justify-center items-center bg-black/70 px-5 transition-all duration-300 ${
          isShowModal
            ? "opacity-100 visible z-[1999]"
            : "opacity-0 invisible -z-50"
        }`}
      >
        <div
          className={`modal bg-white max-w-[95.4375rem] max-h-[90dvh] h-full flex-1 sm:py-[2.9375rem] sm:px-[2.6875rem] p-4 flex lg:flex-row flex-col max-lg:overflow-y-auto justify-start items-stretch gap-[2.875rem] relative transition-all duration-300 ${
            isShowModal ? "scale-100" : "scale-75"
          }`}
        >
          <div
            onClick={showModal}
            className="absolute top-3 right-3 cursor-pointer rounded-full size-10 bg-pine-700 flex justify-center items-center text-white"
          >
            <IoClose />
          </div>

          <img
            src={modal1}
            alt="modal side image"
            className="lg:w-fit lg:h-full h-[30.75rem] w-full lg:object-contain object-cover"
          />

          <div className="lg:flex-1 lg:overflow-y-auto">
            {selectedJobDetails && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  {selectedJobDetails.jobSub_title?.name}
                </h2>
                <h5 className="text-2xl font-semibold mb-9 flex items-center gap-1">
                  <img src={mapin} alt="Map Pin" className="size-7" />
                  <span>{selectedJobDetails.location || "Mohali"}</span>
                </h5>

                <h3 className="text-xl font-bold mb-4">Responsibilities:</h3>
                <ul className=" list-disc mb-9">
                  {selectedJobDetails?.responsibilities}
                </ul>

                <h3 className="text-xl font-bold mb-4">Requirements:</h3>
                <ul className="list-disc mb-9">
                  {selectedJobDetails?.requirements}
                </ul>

                <h3 className="text-xl font-bold mb-4">
                  Location: {selectedJobDetails.location}
                </h3>
                <h3 className="text-xl font-bold mb-7">
                  Experience: {selectedJobDetails.experience}
                </h3>

                <button
                  onClick={() => {
                    showFormModal();
                    showModal();
                  }}
                  className="bg-pine-700 w-[15.3125rem] py-2.5 px-5 text-center text-white rounded-[.625rem]"
                >
                  Apply
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal Second >> */}
      <div
        className={`fixed inset-0 flex justify-center items-center bg-black/70 px-5 transition-all duration-300 ${
          isShowFormModal
            ? "opacity-100 visible z-[1999]"
            : "opacity-0 invisible -z-50"
        }`}
      >
        <div
          className={`modal bg-white max-w-[75.75rem] max-h-[90dvh] h-full flex-1 sm:py-[3.75rem] sm:px-[4.0625rem] p-4 overflow-y-auto relative transition-all duration-300 ${
            isShowFormModal ? "scale-100" : "scale-125"
          }`}
        >
          <div
            onClick={showFormModal}
            className="absolute top-3 right-3 rounded-full size-10 bg-pine-700 flex justify-center items-center text-white"
          >
            <IoClose />
          </div>

          <h3 className="text-pine-400 mb-4 font-medium text-2xl leading-[1.875rem]">
            Apply At TechDevise For
          </h3>
          <h2 className="md:text-[2.5rem] text-[2.2rem] text-black mb-9">
            {selectedJobDetails?.name || "Job Title"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 grid-cols-1 gap-5"
          >
            <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              />
            </div>
            <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                required
                onChange={handleChange}
                className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              />
            </div>
            <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
                className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              />
            </div>
            <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <input
                type="tel"
                placeholder="Phone No"
                name="phone"
                value={formData.phone}
                required
                onChange={handleChange}
                className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              />
            </div>
            <div className="md:col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <textarea
                placeholder="Message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="h-[6.875rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              ></textarea>
            </div>
            <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <input
                type="text"
                placeholder="Linkedin Profile"
                name="linkedinProfile"
                required
                value={formData.linkedinProfile}
                onChange={handleChange}
                className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              />
            </div>
            <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
              <input
                type="text"
                placeholder="How did you  FInd out about us?"
                name="source"
                required
                value={formData.source}
                onChange={handleChange}
                className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
              />
            </div>
            <div className="md:col-span-2 min-h-[7.625rem] bg-[#ECECEC] rounded-lg py-4 px-8 cursor-pointer">
              <label
                htmlFor="resume"
                className="flex flex-col justify-center items-center w-full h-full cursor-pointer"
              >
                <ImImage className="size-10 block mb-[.75rem] text-[#aaaaaa]" />
                <h5 className="text-base leading-[1.25rem]">
                  {resume ? resume.name : "Please Upload Your CV / Resume"}
                </h5>
              </label>

              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx"
              />
            </div>

            <div className="pt-3 md:col-span-2">
              <label
                htmlFor="check"
                className="flex justify-start items-center lg:gap-4 gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  hidden
                  id="check"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="peer"
                />
                <div
                  className={`checkbox bg-white peer-checked:bg-pine-700  size-[2.125rem] rounded-md border-[.0625rem] text-white flex justify-center items-center border-pine-700 aspect-square  transition-all duration-300`}
                >
                  <IoCheckmark className="size-7" strokeWidth={0.1} />
                </div>
                <span className="text-base leading-[1.625rem]">
                  I consent to receiving from the Company e-mail information
                  about new job , our events, trainings and other ongoing
                  activities.
                </span>
              </label>
            </div>
            <p className="text-base leading-[1.625rem] font-bold md:col-span-2">
              If you are unable to submit your details, then please share your
              recently updated resume at{" "}
              <Link to="mailto:Info@techdevise.com" className="underline">
                info@techdevise.com
              </Link>
            </p>
            <button
              type="submit"
              disabled={loading}
              className="bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block  text-white rounded-[.625rem]"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
