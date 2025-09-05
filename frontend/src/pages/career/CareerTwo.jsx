import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import career1 from '/career1.webp'
import modal1 from '/modal1.webp'
import mapin from '/mapin.svg'
import { Link } from 'react-router-dom'
// images 

const CareerTwo = () => {
  const { jobId } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/jobs_Options/${jobId}`);
        if (res.data.success) {
          setJobDetails(res.data.data);
        }
         console.log(res);
         
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [jobId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!jobDetails) return <div>Job not found</div>;

    return (
        <>
            {/* landing section start */}
           <section style={{ backgroundImage: `url(${career1})` }} className='h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center'>
        <h1 className='text-[2.5rem] font-bold text-white'>Careers</h1>
      </section>
      {/* landing section end */}

      {/* .positions list section start  */}
      <section className="open-positions my-[4.6875rem] pb-[3rem] ">
        <div className="main-container">
          <div className={` h-full flex-1 flex lg:flex-row flex-col  justify-start items-stretch gap-[2.875rem] relative transition-all duration-300 `}>
            <img src={modal1} alt="modal side image" className='lg:w-fit lg:h-full h-[30.75rem] w-full lg:object-contain object-cover' />
            <div className="lg:flex-1 lg:overflow-y-auto">
              <h2 className='text-2xl leading-[1.625rem] font-bold mb-6'>{jobDetails.jobSub_title?.name}</h2>
              <h5 className='text-2xl leading-[1.625rem] font-semibold flex justify-start items-center gap-1 mb-9'>
                <img src={mapin} alt="Map Pin" className='size-7' />
                <span>{jobDetails.location}</span>
              </h5>
              
              {/* You'll need to adjust these sections based on your actual data structure */}
              <h3 className='text-xl leading-[1.625rem] font-bold mb-4'>Responsibilities</h3>
              <ul className=' list-disc mb-9'>
                {jobDetails.responsibilities}
              </ul>
              
              <h3 className='text-xl leading-[1.625rem] font-bold mb-4'>Requirements</h3>
              <ul className=' list-disc mb-9'>
                {jobDetails.requirements}
              </ul>

              <h3 className='text-xl leading-[1.625rem] font-bold mb-4'>
                Location: {jobDetails.location}
              </h3>
              <h3 className='text-xl leading-[1.625rem] font-bold mb-7'>
                Experience: {jobDetails.experience}
              </h3>

              {/* <button className='bg-pine-700 cursor-pointer w-[15.3125rem] py-2.5 px-5 text-center block text-white rounded-[.625rem]'>
                Apply
              </button> */}
              <Link className='bg-pine-700 shine-effect cursor-pointer w-[8.3125rem] py-2.5 px-5 text-center block text-white rounded-full' to={`/career-three/${jobDetails.id}`}>Apply</Link>
            </div>
          </div>
        </div>
      </section>
            {/* .positions list section end  */}
        </>
    )
}

export default CareerTwo
