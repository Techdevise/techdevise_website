import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoCheckmark } from 'react-icons/io5';
import { ImImage } from 'react-icons/im';
import FlagInput from '../../components/FlagInput';
import { Link } from 'react-router-dom';
import { PiPlus, PiMinus } from 'react-icons/pi';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// Images
import career1 from '/career1.webp';
import modal1 from '/modal1.webp';

const CareerThree = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    linkedinProfile: "",
    source: "",
    isInMohali: "",
    consent: false,
  });

  const [interviewQuestions, setInterviewQuestions] = useState([
    { id: 1, value: '' }
  ]);

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

  const addQuestion = () => {
    setInterviewQuestions([
      ...interviewQuestions,
      { id: Date.now(), value: '' }
    ]);
  };

  const removeQuestion = (id) => {
    if (interviewQuestions.length > 1) {
      setInterviewQuestions(interviewQuestions.filter(q => q.id !== id));
    }
  };

  const handleQuestionChange = (id, value) => {
    setInterviewQuestions(
      interviewQuestions.map(q => 
        q.id === id ? { ...q, value } : q
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("first_name", formData.firstName);
    form.append("last_name", formData.lastName);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("country_code", countryCode);
    form.append("message", formData.message);
    form.append("linkedin_profile", formData.linkedinProfile);
    form.append("about_us", formData.source);
    form.append("located", formData.isInMohali);
    form.append("consent", formData.consent);
    form.append("jobOption_id", jobId);

    // Add interview questions (filter out empty ones)
    const questions = interviewQuestions
      .map(q => q.value.trim())
      .filter(q => q !== '');
    form.append("questions_employe", JSON.stringify(questions));

    if (resume) {
      form.append("pdf_file", resume);
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/jobs_Options`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        toast.success("Application submitted successfully!");
        navigate('/career-one');
      }
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

  return (
    <>
      {/* Landing Section */}
      <section style={{ backgroundImage: `url(${career1})` }} className='h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center'>
        <h1 className='text-[2.5rem] font-bold text-white'>Careers</h1>
      </section>
 <ToastContainer position="top-right" autoClose={5000} />
      {/* Application Form Section */}
      <section className="open-positions my-[4.6875rem] pb-[3rem]">
        <div className="main-container">
          <div className='modal h-full flex-1 relative transition-all duration-300'>
            <h3 className='text-pine-400 mb-4 font-medium text-2xl leading-[1.875rem]'>Apply At TechDevise For</h3>
            <h2 className='md:text-[2.5rem] text-[2.2rem] text-black mb-9'>Digital Marketing Executives</h2>

            <form onSubmit={handleSubmit} className='grid md:grid-cols-2 grid-cols-1 gap-5'>
              {/* Personal Information */}
              <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='First Name' 
                  className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                  required
                />
              </div>

              <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Last Name' 
                  className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                  required
                />
              </div>

              <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email Address' 
                  className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                  required
                />
              </div>

              <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <FlagInput 
                  type="tel" 
                  value={formData.phone}
                 name="phone"
                 onChange={handleChange}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />
                {/* <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone No' 
                  className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                  required
                /> */}
              </div>

              {/* Message */}
              <div className='md:col-span-2 bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Message' 
                  className='h-[6.875rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'
                ></textarea>
              </div>

              {/* Professional Information */}
              <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <input 
                  type="text" 
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleChange}
                  placeholder='Linkedin Profile' 
                  className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                />
              </div>

              <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <input 
                  type="text" 
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder='How did you find out about us?' 
                  className='h-[4.375rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                />
              </div>

              {/* Interview Availability */}
              <div className='md:col-span-2'>
                <div className="flex justify-between items-center mb-4">
                  <div className="lg:text-start text-center text-black">
                    <h5 className='text-[1.125rem] leading-[1.625rem] font-bold mb-[.0625rem]'>
                      Answer these questions from the employer
                    </h5>
                    <p className='text-sm leading-[1.625rem] font-normal'>
                      Please List 2-3 dates and time ranges that you could do an interview.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addQuestion}
                    className="plusTextarea flex justify-end items-center gap-3"
                  >
                    <div className="size-[2.8125rem] rounded-full flex justify-center items-center bg-pine-400 hover:bg-pine-600 transition-colors">
                      <PiPlus className='text-base text-white' />
                    </div>
                    <span className='text-[1.125rem] leading-[1.625rem] font-bold'>Add More</span>
                  </button>
                </div>

                {interviewQuestions.map((question, index) => (
                  <div key={question.id} className="relative mb-4">
                    <div className='bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] mb-4'>
                      <textarea
                        value={question.value}
                        onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                        placeholder={`Interview availability option ${index + 1}`}
                        className='h-[6.875rem] bg-[#fafafa] w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'
                      />
                    </div>
                    {interviewQuestions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeQuestion(question.id)}
                        className="absolute top-2 right-2 size-6 rounded-full flex justify-center items-center bg-red-500 hover:bg-red-600 text-white"
                      >
                        <PiMinus className='text-sm' />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className='md:col-span-2'>
                <h5 className='text-[1.125rem] leading-[1.625rem] font-bold mb-3'>Are you located in Mohali, Punjab?</h5>
                <ul>
                  <li className="flex justify-start items-center gap-2 5">
                    <input 
                      type="radio" 
                      name="isInMohali" 
                      id='yes' 
                      value="1"
                      onChange={handleChange}
                      className='accent-pine-400' 
                    />
                    <label htmlFor="yes" className='text-sm leading-[1.625rem] font-normal'>Yes</label>
                  </li>
                  <li className="flex justify-start items-center gap-2 5">
                    <input 
                      type="radio" 
                      name="isInMohali" 
                      id='no' 
                      value="0"
                      onChange={handleChange}
                      className='accent-pine-400' 
                    />
                    <label htmlFor="no" className='text-sm leading-[1.625rem] font-normal'>No</label>
                  </li>
                </ul>
              </div>

              {/* Resume Upload */}
              <div className="md:col-span-2">
                <h5 className='text-[1.125rem] leading-[1.625rem] font-bold mb-3'>Upload CV/Resume</h5>
                <div className="w-60 min-h-[7.625rem] bg-[#ECECEC] rounded-lg py-4 px-8 relative">
                  <div className="flex flex-col justify-center items-center">
                    <ImImage className='size-10 block mb-[.75rem] text-[#aaaaaa]' />
                    <h5 className='text-base leading-[1.25rem]'>Please Upload Your CV / Resume</h5>
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
                {resume && <p className="mt-2 text-sm">{resume.name}</p>}
              </div>

              {/* Consent */}
              <div className="pt-3 md:col-span-2">
                <label htmlFor='check' className='flex justify-start items-start lg:gap-4 gap-2 cursor-pointer max-w-4xl'>
                  <input 
                    type="checkbox" 
                    id='check' 
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className='peer hidden' 
                  />
                  <div className={`checkbox bg-[#fafafa] peer-checked:bg-pine-700 size-[2.125rem] rounded-md border-[.0625rem] text-white flex justify-center items-center border-pine-700 aspect-square transition-all duration-300`}>
                    <IoCheckmark className='size-7' strokeWidth={0.1} />
                  </div>
                  <span className='text-base leading-[1.625rem]'>
                    I consent to receiving from the Company e-mail information about new job, our events, trainings and other ongoing activities - <Link to='/Terms-Conditions' className='text-pine-700'>Terms & Conditions</Link>.
                  </span>
                </label>
              </div>

              <p className='text-base leading-[1.625rem] font-bold md:col-span-2'>
                If you are unable to submit your details, then please share your updated CV/Resume at hr@techdevise.com
              </p>

              <button 
                type='submit' 
                disabled={loading}
                className='bg-pine-700 w-fit cursor-pointer py-2.5 px-5 text-center block text-white rounded-[.625rem] hover:bg-pine-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed'
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerThree;