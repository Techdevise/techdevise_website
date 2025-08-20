import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// images
import map from "/map.svg";
import contactLight1 from "/contactLight1.svg";
import contactLight2 from "/contactLight2.svg";
import contact3 from "/contact3.svg";
// import CustomSelector from "../components/CustomSelector";
// images
const customInputStyle = {
  boxShadow: `0 0 0 1px rgba(255, 255, 255, 1), 0 0 0 3px rgba(21, 123, 108, 0.1)`,
};
const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // const API_CONTACT_US = `${API_BASE_URL}/contact_us`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  const errors = [];
  if (!formData.first_name.trim()) errors.push("First name is required.");
  if (!formData.last_name.trim()) errors.push("Last name is required.");
  if (!formData.email.trim()) {
    errors.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push("Email is not valid.");
  }
  if (!formData.phone.trim()) {
    errors.push("Phone number is required.");
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.push("Phone number must be 10 digits.");
  }
  if (!formData.date) errors.push("Date is required.");
  if (!formData.time) errors.push("Time is required.");
  if (!formData.message.trim()) errors.push("Message is required.");

  if (errors.length > 0) {
    errors.forEach((err) => toast.error(err));
    return;
  }

  // Format time: HH:mm -> HH:mm:00
 const formattedTime = `${formData.time}:00`;

  // Format date: YYYY-MM-DD -> DD-MM-YYYY
  let formattedDate = "";
  if (formData.date) {
    const [year, month, day] = formData.date.split("-");
    formattedDate = `${day}-${month}-${year}`;
  }

  const payload = {
    ...formData,
      date: formData.date, // Already in YYYY-MM-DD format from input
      time: formattedTime
  };

  try {
    const res = await fetch(`${API_BASE_URL}/api/contact_us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Form submitted successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      });
    } else {
      toast.error("Error: " + data.message);
    }
  } catch (err) {
    console.error("Form submit error:", err);
    toast.error("Something went wrong.");
  }
};


  return (
    <>
      {/* contact us section start */}
      <section className="contact_us bg-pine-999 pt-[5.5rem]">
        <ToastContainer />
        <div className="main-container">
          <div className="py-10 relative">
            <div
              style={{ backgroundImage: `url(${map})` }}
              className="bg-center bg-contain bg-no-repeat min-h-[23.625rem] flex justify-center items-center flex-col "
            >
              <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]">
                Contact Us
              </h1>
              <p className="text-[1.125rem] leading-[1.625rem] font-semibold text-white max-w-4xl text-center ">
                Like to try our services or discuss your project with our
                consultant? Feel free to contact us today and we will get back
                to you at the earliest.
              </p>

              <img
                data-aos="zoom-in-down"
                src={contactLight2}
                alt="light"
                className="absolute -top-5 left-0 "
              />
              <img
                data-aos="zoom-in-down"
                src={contactLight1}
                alt="light"
                className="absolute -top-5 right-0 "
              />
            </div>
          </div>
        </div>
      </section>
      {/* contact us section end */}

      {/* contact us form section start */}
      <section className="contactUsForm my-[4.6875rem]">
        <div className="main-container">
          <div className="bg-white rounded-[1.625rem] border border-pine-700 py-[3.5625rem] lg:px-[3.4375rem] px-7 flex lg:flex-row flex-col justify-center items-stretch">
            <div className="flex-[1_1_0%] flex 2xl:justify-between justify-start items-stretch flex-col">
              <div className="lg:text-start text-center">
                <h3 className="text-[3rem] font-extrabold text-pine-700 mb-[1.125rem]">
                  Let&apos;s Talk
                </h3>
                <p className="text-[2.25rem] leading-[2.875rem] font-medium text-black max-w-xl max-lg:mx-auto ">
                  Let's connect and explore possibilities
                </p>
              </div>
              <img
                src={contact3}
                alt="contact form side image"
                className="object-contain w-fit h-fit max-lg:mx-auto block max-lg:mb-20"
              />
            </div>
            <div className="flex-[1.5_1_0%]">
              <h3 className="text-[2rem] leading-[2.25rem] font-bold mb-[2.0625rem] text-black">
                Please Share Your Details
              </h3>
              <form
                onSubmit={handleSubmit}
                className="grid xl:grid-cols-2  lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-[1.375rem] max-sm:gap-x-0"
              >
                <div className="xl:col-span-1 max-sm:col-span-full  bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
                <div className="xl:col-span-1 max-sm:col-span-full  bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    required
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
                <div className="xl:col-span-1 max-sm:col-span-full  bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
                <div className="xl:col-span-1 max-sm:col-span-full  bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] ">
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                    required
                    className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                  />
                </div>
                {/* <div className="xl:col-span-1 max-sm:col-span-full relative">
                  <select
                    name="job_title"
                    value={formData.job_title}
                    onChange={handleChange}
                    className="appearance-none h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] p-5 pr-12 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    style={customInputStyle}
                    required
                  >
                    <option value="">Nature of Work</option>
                    <option value="1">Entrepreneur</option>
                    <option value="2">Manager</option>
                    <option value="3">Director</option>
                    <option value="4">C-Level</option>
                    <option value="5">Student</option>
                    <option value="6">Others</option>
                  </select>

                  <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-black/50"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.897a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="xl:col-span-1 max-sm:col-span-full relative bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]">
                  <select
                    name="launch_timeline"
                    value={formData.launch_timeline}
                    onChange={handleChange}
                    className="appearance-none h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] p-5 pr-12 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    style={customInputStyle}
                    required
                  >
                    <option value="">Purpose</option>
                    <option value="1">Immediately</option>
                    <option value="2">2-3 Months</option>
                    <option value="3">4-6 Months</option>
                    <option value="4">After 6 Months</option>
                  </select>

                  <div className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-4 h-4 text-black/50"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.897a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div> */}

                <div className="xl:col-span-1 max-sm:col-span-full bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]">
                  <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    type="date"
                    className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] px-5  placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    style={customInputStyle}
                    required
                  />
                </div>

                <div className="xl:col-span-1 max-sm:col-span-full bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]">
                  <input
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    type="time"
                    className="h-[4.375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] px-5  placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    style={customInputStyle}
                    required
                  />
                </div>

                <div className="col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] mb-[32px]">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="h-[11.9375rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none min-h-[180px] max-h-[180px]"
                  ></textarea>
                </div>

                <div className="col">
                  <button
                    type="submit"
                    className="bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block  text-white rounded-[.625rem]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* contact us form section end */}
    </>
  );
};

export default ContactUs;
