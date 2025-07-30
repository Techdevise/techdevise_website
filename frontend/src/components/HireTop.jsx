import React, { useState } from "react";
import HireTopModal from "/HireTopModal1.svg";
import { IoClose } from "react-icons/io5";
import FlagInput from "./FlagInput";
import CustomSelector from "./CustomSelector";
import { ImImage } from "react-icons/im";
import axios from "axios";
import { toast } from "react-toastify";

const HireTop = ({ showModal, setShowModal, selectedRole }) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [userType, setUserType] = useState(null);
  const typeOfHire = [
    { value: 1, label: "Contractors" },
    { value: 2, label: "Permanent Hires" },
    { value: 3, label: " Project-Based / Bulk Staffing" },
    { value: 4, label: "I'm Not Sure" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", e.target.first_name.value);
    formData.append("last_name", e.target.last_name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("just_confirm", userType);
    if (selectedRole?.id) {
      formData.append("It_role_id", selectedRole?.id);
    }
    if (userType === "0") {
      // Employer
      formData.append("company_name", e.target.company_name.value);
      formData.append("job_title", e.target.job_title.value);
      formData.append("type_of_hire", e.target.type_of_hire.value);
      formData.append("number_of_job", e.target.number_of_job.value);
      formData.append("help", e.target.help.value);
      formData.append("position", e.target.position.value);

      const file = e.target.image?.files[0];
      if (file) {
        formData.append("image", file);
      }
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/roles/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Form submitted successfully!");
        setShowModal(false);
        e.target.reset();
        setUserType(null);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.id === "AnEmployer" ? "0" : "1");
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[1199] flex justify-center items-center py-12 bg-black/50 px-5 transition-all duration-500  ${
          showModal
            ? "opacity-100 visible z-[1999]"
            : "opacity-0 invisible -z-50"
        }`}
      >
        <div
          className={`modal pt-16 pb-8 px-7 bg-white max-h-[90dvh] overflow-y-auto max-w-[98.5625rem] w-full relative transition-all duration-500 ${
            showModal ? "scale-100" : "scale-90"
          }`}
        >
          <div
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-3 cursor-pointer rounded-full size-10 bg-pine-700 flex justify-center items-center text-white"
          >
            <IoClose />
          </div>
          <div className="flex justify-center items-start h-full lg:flex-row flex-col gap-5">
            <div className="lg:w-[40%] w-full pb-6 px-[1.625rem] text-blaxk text-start">
              {selectedRole.name && (
                <h2 className="lg:text-4xl text-3xl leading-10 font-bold">
                  Hire {selectedRole.name} Role
                </h2>
              )}
              <p className="text-[1.125rem] leading-6 font-normal mt-2 mb-4">
                We support a broad array of industries with our staffing,
                training, and managed services. Send us a few details (below)
                and we&apos;ll be in touch before you know it.
              </p>
              <p className="text-[1.125rem] leading-6 font-medium mb-2">
                Questions?
              </p>

              <a
                href="tel: +123 4567 890"
                className="text-black text-[1.125rem] leading-6 font-medium"
              >
                Call us toll-free:{" "}
                <strong className="text-pine-700">+123 4567 890</strong>
              </a>

              <div className="max-lg:hidden image size-full max-h-[34.6875rem] max-w-auto mt-10">
                <img
                  src={HireTopModal}
                  alt="Hire Top modal's left side image"
                  className="size-full object-contain"
                />
              </div>
            </div>
            <div className="lg:w-[60%] w-full">
              <form
                onSubmit={handleSubmit}
                className="sm:grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 flex flex-col gap-5"
              >
                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    required
                  />
                </div>
                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    required
                  />
                </div>
   <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    required
                  />
                </div>
                {/* <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                  <FlagInput
                    name="phone"
                    required
                  />
                </div> */}

                <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <h5 className="text-base leading-6 font-bold mb-3">
                    Just to confirm, are you
                  </h5>

                  <label
                    htmlFor="AnEmployer"
                    className="flex justify-start items-center gap-2"
                  >
                    <input
                      id="AnEmployer"
                      type="radio"
                      name="type"
                      className="accent-pine-700 size-5"
                      onChange={handleUserTypeChange}
                      checked={userType === "0"}
                    />
                    <span className="text-sm leading-6 font-semibold">
                      An Employer
                    </span>
                  </label>

                  <label
                    htmlFor="Job"
                    className="flex justify-start items-center gap-2"
                  >
                    <input
                      id="Job"
                      type="radio"
                      name="type"
                      className="accent-pine-700 size-5"
                      onChange={handleUserTypeChange}
                      checked={userType === "1"}
                    />
                    <span className="text-sm leading-6 font-semibold">
                      Looking for a job
                    </span>
                  </label>
                </div>

                {userType === "0" && (
                  <>
                    <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Company Name"
                        className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                        required
                      />
                    </div>
                    <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                      <input
                        type="text"
                        name="job_title"
                        placeholder="Job Title"
                        className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                        required
                      />
                    </div>
                    <div className="col rounded-lg p-[1px]">
                      <CustomSelector
                        options={typeOfHire}
                        id={"typeOfHire"}
                        name="type_of_hire"
                        placeholder={"Type Of Hire"}
                        required
                      />
                    </div>

                    <div className="col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]  h-[4.375rem]">
                      <input
                        type="text"
                        name="number_of_job"
                        placeholder="Number of Job Openings"
                        className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                        required
                      />
                    </div>

                    <div className="md:col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] overflow-hidden">
                      <textarea
                        name="help"
                        placeholder="How can we help?"
                        className="h-[8.75rem] bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                        required
                      ></textarea>
                    </div>
                    <div className="md:col-span-2 min-h-[7.625rem] bg-[#ECECEC] rounded-lg py-4 px-8">
                      <div className="flex flex-col justify-center items-center">
                        <ImImage className="size-10 block mb-[.75rem] text-[#aaaaaa]" />
                        <h5 className="text-base leading-[1.25rem]">
                          Please Upload Your CV / Resume
                        </h5>
                        <input type="file" name="image" className="mt-2" />
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] h-[4.875rem]">
                      <textarea
                        name="position"
                        placeholder="Where is the position located?"
                        className="h-full bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none"
                        required
                      ></textarea>
                    </div>
                  </>
                )}

                <div className="pt-3 md:col-span-2">
                  <label
                    htmlFor="check"
                    className="flex justify-start items-start gap-3"
                  >
                    <div className="relative inline-flex items-center cursor-pointer">
                      <input
                        id="check"
                        type="checkbox"
                        name="consent"
                        className="sr-only peer"
                        required
                      />
                      <div className="group peer bg-white peer-checked:bg-pine-700 rounded-full duration-300 w-16 h-8 ring-2 ring-pine-700 after:duration-300 after:bg-pine-700 peer-checked:after:bg-white peer-checked:ring-pine-700 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
                    </div>
                    <span className="text-base leading-[1.625rem]">
                      I consent to receiving from the Company e-mail information
                      about new job, our events, trainings and other ongoing
                      activities.
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block text-white rounded-[.625rem]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireTop;
