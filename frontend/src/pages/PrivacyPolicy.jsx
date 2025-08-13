import React, { useEffect, useState } from "react";
import axios from "axios";
import Privacy_Policy from "/PrivacyPolicy.svg";
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
      <section
        style={{ backgroundImage: `url(${Privacy_Policy})` }}
        className="h-[25.125rem] bg-center bg-cover bg-no-repeat flex justify-center items-center"
      >
        <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]">
          Privacy Policy
        </h1>
      </section>
      <section>
        <div className="main-container">
          <div className="bg-white rounded-[.625rem] lg:px-[2.9375rem] p-5 lg:py-[5.3125rem] pt-[0] pb-5">
            {loading ? (
              <p>Loading...</p>
            ) : cmsData[1] ? (
              <div className="flex xl:flex-row flex-col 2xl:gap-[4.25rem] lg:gap-[3.125rem] gap-10 mb-10">
                <div className="flex-1 lg:order-1 order-2">
                  <p className="text-[1.125rem] leading-[2.125rem] font-normal ">
                    {/* {cmsData[1].content} */}
                   <span className="font-bold ">PRIVACY POLICY </span> <br /> At TechDevise, we value your privacy. We
                    collect personal information, such as your name and email,
                    only when you voluntarily provide it through forms or
                    account registration. Your data is used to improve our
                    services, process orders, and communicate updates. We never
                    sell or rent your information to third parties. Cookies may
                    be used to enhance your browsing experience and analyze
                    website traffic. By using our website, you consent to this
                    policy. You may access, update, or request deletion of your
                    data anytime. For questions, please contact our support
                    team. We are committed to protecting your information
                    securely.
                  </p>
                  <p className="text-[1.125rem] leading-[2.125rem] font-normal mt-10">
                    <span className="font-bold">COOKIE CONSENT </span> <br />    By continuing on this site or by clicking
                    “accept,” you agree to our cookies being stored on your
                    device for the purpose of enhancing your site visit and data
                    analysis. You may find out more about how we use cookies on
                    our cookie policy page. Cookies are used to enhance your
                    online surfing experience on this site. They assist us to
                    make the web page work better, exhibit you applicable
                    advertising, and you can share content material with social
                    media. You can pick out to be given all cookies or
                    manipulate them individually.
                  </p>
                  <p className="text-[1.125rem] leading-[2.125rem] font-normal mt-10">
                    <span className="font-bold">DISCLAIMER </span> <br />   This Website and the information, tools, and
                    material contained within it (this “Site”) are not intended
                    for distribution to or use by any person or entity who is a
                    citizen or resident of, or located in, any jurisdiction
                    where such distribution, publication, availability, or use
                    would be contrary to law or regulation or would subject
                    TechDevise to any registration or licensing requirement
                    within such jurisdiction.
                  </p>
                </div>
              </div>
            ) : (
              <p>No Privacy Policy found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
