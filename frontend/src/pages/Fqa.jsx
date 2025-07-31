import { useState } from "react";
import map from "/map.svg";

const Fqa = () => {
  const faqs = [
    {
      title: "How do you leverage AI in web development?",
      content:
        "We integrate AI tools like GitHub Copilot and Tabnine to speed up coding while maintaining high quality. Beyond development, we use AI‑powered chatbots, dynamic personalization, and smart search to enhance user experience and engagement.",
    },
    {
      title: "Will my website be fast and SEO‑optimized for Core Web Vitals?",
      content:
        "Absolutely. We use techniques like lazy loading, tree‑shaking, and static-site generation (SSG, SSR, CSR) to enhance speed and performance. Plus, we monitor Core Web Vitals closely to ensure top search engine rankings.",
    },
    {
      title: "Can you build a headless CMS solution?",
      content:
        "Yes—we implement headless CMS architectures to decouple backend and frontend, offering flexibility, scalability, and seamless integration across platforms and devices.",
    },
    {
      title: "Do you support low-code/no-code tools?",
      content:
        "We do. We utilize low‑code and no‑code platforms for rapid prototyping and internal tools, but always back them up with custom code for complex, scalable, and secure solutions. This combines speed with robustness.",
    },
    {
      title: "What modern technologies and frameworks do you use?",
      content:
        "We work with the leading frameworks React, Vue, Angular and keep an eye on rising ones like Svelte. We're experts in using WebAssembly for performance-critical tasks and embrace new approaches like 'vibe coding' to accelerate prototyping.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggle = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact_us bg-pine-999 pt-[5.5rem]">
        <div className="main-container">
          <div className="py-10 relative">
            <div
              style={{ backgroundImage: `url(${map})` }}
              className="bg-center bg-contain bg-no-repeat min-h-[20.625rem] flex justify-center items-center flex-col"
            >
              <h1 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-pine-700 mb-[1.125rem]">
                FAQ
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F7F7F7]">
        <div className="main-container">
          <div className="relative font-inter antialiased min-h-full flex flex-col justify-center overflow-hidden md:pb-24 py-4 md:px-4">
            <div className="w-full   ">
              <div className="space-y-4 mt-10">
                {faqs.map((faq, index) => {
                  const isOpen = expandedIndex === index;

                  return (
                    <div
                      key={index}
                      className="bg-white rounded-md shadow transition duration-300"
                    >
                      <div className="px-4">
                        <button
                          type="button"
                          className="flex items-center font-montserrat justify-between w-full py-4 text-left font-semibold md:text-[24px] text-[16px]"
                          onClick={() => toggle(index)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-content-${index}`}
                        >
                          {faq.title}
                          <svg
                            className="fill-[#157B6C] shrink-0 ml-4"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <rect
                              y="7"
                              width="16"
                              height="2"
                              rx="1"
                              className={`transform origin-center transition duration-200 ease-out ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                            <rect
                              y="7"
                              width="16"
                              height="2"
                              rx="1"
                              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </svg>
                        </button>

                        <div
                          id={`faq-content-${index}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 md:text-[16px] text-[12px] ${
                            isOpen
                              ? "max-h-[500px] opacity-100 pb-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-start font-montserrat md:pr-10">
                            {faq.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fqa;
