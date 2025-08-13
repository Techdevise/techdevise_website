import React, { useEffect, useState } from "react";
import axios from "axios";
import itemsTrams from "/itemsTrams.svg";
const TermsConditions = () => {
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

  <section
        style={{ backgroundImage: `url(${itemsTrams})` }}
        className="h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center"
      >
        <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]">
              Terms & Conditions
        </h1>
      </section>
             <section>
      <div className="main-container">
      

        <div className="bg-white rounded-[.625rem] lg:px-[2.9375rem] p-5 lg:py-[5.3125rem] pt-[0] pb-5">
          {loading ? (
            <p>Loading...</p>
          ) : cmsData[2] ? (
            <div className="flex xl:flex-row flex-col 2xl:gap-[4.25rem] lg:gap-[3.125rem] gap-10 mb-10">
              <div className="flex-1 lg:order-1 order-2">
                 <p className="text-[1.125rem] leading-[2.125rem] font-normal">
                   <span className="font-bold">Agreement to terms</span> <br />    By getting access to or the usage of this
                    website, you well know that you have read, understood, and
                    agree to be sure with the aid of these Terms of Use. If you
                    no longer agree with any section of these terms, you should
                    now not use our services.These terms govern your access to
                    and use of our website, including any content, features, and
                    services offered.Please review these terms regularly to
                    ensure you remain informed about your obligations.
                  </p>
                  <p className="text-[1.125rem] leading-[2.125rem] font-normal mt-10">
                   <span className="font-bold">Intellectual Property Rights</span> <br />  Intellectual Property Rights
All content material displayed on www.placerit.com, inclusive of text, graphics, logos, images, and software, is the exceptional property of TechDevise and included by way of relevant mental property laws. Unauthorized use, reproduction, or distribution of any substances from this internet site is strictly prohibited barring prior written consent. Trademarks and carrier marks acting right here are owned via Placerit or their respective owners. You might also get right of entry to and view content material for personal, non-commercial functions only. Any different use, such as amendment or spinoff works, infringes our rights and might also end result in felony action. For permissions or inquiries, please contact our assist group directly.
You are granted a limited licence to access and use the Site, as well as to download or print a copy of any portion of the Content to which you have legitimately acquired access, exclusively for your personal, non-commercial use. We reserve all rights in and to the Site, the Content, and the Marks that are not expressly given to you.

                  </p>
                  <p className="text-[1.125rem] leading-[2.125rem] font-normal mt-10">
                    <span className="font-bold">Termination of Use</span> <br /> 
While you use the Site, these Terms of Service will remain in full force and effect. without limiting any other provision of these terms of use, we reserve the right to deny access to and use of the site (including blocking certain IP addresses) to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these terms of use or of any applicable law or regulation.
 <br />
Any suspected unlawful, fraudulent, or abusive behaviour may result in the termination of your relationship and may be referred to appropriate law enforcement authorities. Your access to use the Resources we provide will be terminated or suspended immediately, and we maintain the right to erase or delete any information you may have on file with us, including any account or login information.

                  </p>
                  <p className="text-[1.125rem] leading-[2.125rem] font-normal mt-10">
                    <span className="font-bold">Interruptions</span> <br /> 
                    
We cannot guarantee that the Site will always be available. We may encounter hardware, software, or other issues, or we may need to conduct Site maintenance, which may result in disruptions, delays, or mistakes. We retain the right, at any time and for any reason, to change, edit, update, suspend, terminate, or otherwise modify the Site. You agree that we are not liable for any loss, damage, or inconvenience resulting from your inability to access or use the Site during any outage or discontinuation of the Site. Nothing in these Terms of Service obligates us to maintain and support the Site, or to provide any corrections, updates, or releases in connection with it.

                  </p>
              </div>
            </div>
          ) : (
            <p>No content found.</p>
          )}
        </div>
      </div>
    </section>
    </>
 
  );
};
export default TermsConditions;
