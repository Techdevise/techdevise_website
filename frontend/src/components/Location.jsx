import React, { useState } from "react";
import vector12 from "/vector12.svg";
// state images
import state1 from "/state1.webp";
import state2 from "/state2.webp";
import state3 from "/state3.webp";
import state4 from "/state4.png";
import flag1 from "/flag1.png";
import flag2 from "/flag2.png";
import flag3 from "/flag3.png";
import flag4 from "/flag4.png";
import mapWhite from "/mapWhite.svg";
const Location = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const addressList = [
    {
      bgimage: state1,
      flag: flag1,
      countryName: "India",
      address:
        "F - 268, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071",
      position: { top: "53%", left: "68%" },
    },
    {
      bgimage: state2,
      flag: flag2,
      countryName: "United States",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA",
      position: { top: "43%", left: "15%" },
    },
    {
      bgimage: state3,
      flag: flag3,
      countryName: "Netherlands",
      address: "Paleisstraat 1, 1012 RB Amsterdam, Netherlands",
     
       position: { top: "28%", left: "52%" },
    },
    {
      bgimage: state4,
      flag: flag4,
      countryName: "New Zealand",
      address: "76A Wai-Iti Road, Timaru, Canterbury 7910",
      position: { top: "79%", left: "93%" },
    },
  ];
  return (
   <section className="pb-[1.0625rem]">
  <div className="main-container text-white">
    {/* Heading */}
    <div className="text-center 2xl:mb-[1.9375rem]">
      <h4 className="font-bold text-[#157B6C] leading-[3.625rem] text-[2rem] mb-1.5">
        Location
      </h4>
      <h3 className="lg:text-[3.4375rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] font-bold leading-none mb-5 text-black">
        We&apos;d love to hear from you
      </h3>
      <p className="text-lg font-medium leading-[1.8125rem] inline-block relative text-black">
        We have offices and teams all around the world.
        <img
          src={vector12}
          alt="vector12"
          className="w-[4.2875rem] z-10 absolute top-full lg:left-full left-1/2 -translate-x-1/2 shake-v hidden md:block"
        />
      </p>
    </div>

    {/* Content */}
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center pb-[7rem]">
      {/* Address List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.375rem] order-2 md:order-2 lg:order-1">
        {addressList.map((listitem, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedCountry(listitem.countryName)}
            onMouseLeave={() => setSelectedCountry(null)}
            className={`cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[1.625rem] flex gap-[1.9375rem] items-center px-4 py-[1.0625rem] transition-all
              text-black border-[#157B6C]
              ${
                selectedCountry === listitem.countryName
                  ? "bg-[#157B6C54] text-black"
                  : "bg-white"
              }
            `}
          >
            <img
              src={listitem.bgimage}
              alt="country bg"
              className="2xl:w-[6.0625rem] 2xl:h-[6.8125rem] w-[5.375rem] h-[5.875rem] rounded-[1.625rem] object-cover"
            />
            <div className="grow">
              <div className="flex gap-[.9375rem] items-center mb-[0.375rem]">
                <img
                  src={listitem.flag}
                  alt="flag"
                  className="w-[2.1875rem] h-[2.125rem]"
                />
                <span className="font-bold capitalize 2xl:text-[1.2rem] xl:text-[1.0rem] text-[0.9rem]">
                  {listitem.countryName}
                </span>
              </div>
              <p className="2xl:text-md text-[0.800rem] font-normal 2xl:leading-[1.8125rem] leading-[1.2125rem]">
                {listitem.address}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Map with Dots */}
      <div className="flex justify-center order-1 md:order-1 lg:order-2">
        <div className="relative w-full h-full max-w-[750px]">
          <img
            src={mapWhite}
            alt="map"
            className="w-full h-full object-contain"
          />
          {addressList.map((item, idx) => (
            <div
              key={idx}
              style={{
                top: item.position.top,
                left: item.position.left,
              }}
              className={`absolute w-3 h-3 rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2
                ${
                  selectedCountry === item.countryName
                    ? "bg-[#157B6C54] animate-pingOnce"
                    : "bg-[#0E493FD9]"
                }`}
            >
              {selectedCountry === item.countryName && (
                <span className="absolute top-[-1.5rem] left-1/2 -translate-x-1/2 bg-[#157B6C] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md">
                  {item.countryName}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  {/* Tailwind Custom Animation */}
</section>

  );
};
export default Location;
