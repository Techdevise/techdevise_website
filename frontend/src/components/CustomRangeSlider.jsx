 import React, { useState, useEffect, useRef } from 'react';
// CustomRangeSlider component for a custom range input
const CustomRangeSlider = ({ min, max, step, value, onChange, label, formatCurrency, formatValue }) => {
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const getBackgroundSize = () => {
    const percentage = ((value - min) / (max - min)) * 100;
    return `${percentage}% 100%`;
  };
  useEffect(() => {
    if (sliderRef.current && thumbRef.current) {
      const percentage = ((value - min) / (max - min));
      const sliderWidth = sliderRef.current.offsetWidth;
      const thumbWidth = thumbRef.current.offsetWidth;
      const thumbPosition = percentage * (sliderWidth - thumbWidth);
    //   thumbRef.current.style.left = `${thumbPosition}px`;
    }
  }, [value, min, max]);

  // Handle slider input change
  const handleInputChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="relative flex items-center gap-10 w-full appearance-none py-5 px-[1.1875rem] border-[.0625rem] border-white/40 rounded-lg outline-none shadow-[0px_0px_5px_0px_#10B89D4D] mb-[1.375rem]">
    
      <label htmlFor="budget-range" className="block text-gray-300 text-lg font-medium">
        {label}
      </label>

      <div className="relative h-2 rounded-full bg-[#FFFFFF12] w-full">
        <div
          className="absolute h-full bg-[#157B6C] rounded-full"
          style={{ width: getBackgroundSize().split(' ')[0] }} 
        ></div>
        <div
          ref={thumbRef}
          className="absolute top-1/2 -translate-1/2  w-6 h-6 rounded-full bg-[#157B6C] shadow-xl
                     flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ 
            left: getBackgroundSize().split(' ')[0]
          }}
        >
        </div>

        <input
          type="range"
          id="budget-range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleInputChange}
          ref={sliderRef}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer
                     appearance-none focus:outline-none"
          style={{
            background: `linear-gradient(to right,
              #14b8a6 0%, #14b8a6 ${getBackgroundSize().split(' ')[0]},
              #4b5563 ${getBackgroundSize().split(' ')[0]}, #4b5563 100%)`,
            WebkitAppearance: 'none', 
            MozAppearance: 'none',   
          }}
        />
      </div>
      <div className=" text-white text-lg font-medium min-w-[80px]">
        {formatCurrency}
      </div>
    </div>
  );
};

export default CustomRangeSlider; 