import React, { useEffect, useState } from "react";
import axios from "axios";
import map from "/map.svg";
const PrivacyPolicy = () => {
  const [cmsData, setCmsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/cms`)
      .then((response) => {
        if (response.data.success) {
          setCmsData(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching CMS data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <> 
     <section className="contact_us bg-pine-999 pt-[5.5rem]">

        <div className="main-container">
          <div className="py-10 relative">
            <div
              style={{ backgroundImage: `url(${map})` }}
              className="bg-center bg-contain bg-no-repeat min-h-[20.625rem] flex justify-center items-center flex-col "
            >
              <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]">
                 Privacy Policy
              </h1>
         

              
            </div>
          </div>
        </div>
      </section>
    <section>
      <div className="main-container">
    

        <div className="bg-white rounded-[.625rem] lg:px-[2.9375rem] p-5 lg:py-[5.3125rem] pt-[0] pb-5">
          {loading ? (
            <p>Loading...</p>
          ) : cmsData[1] ? (
            <div className="flex xl:flex-row flex-col 2xl:gap-[4.25rem] lg:gap-[3.125rem] gap-10 mb-10">
              <div className="flex-1 lg:order-1 order-2">
                <p className="text-[1.125rem] leading-[2.125rem] font-normal">
                  {cmsData[1].content}
                </p>
              </div>
            </div>
          ) : (
            <p>No content found.</p>
          )}
        </div>
      </div>
    </section></>
   
  );
};

export default PrivacyPolicy;
