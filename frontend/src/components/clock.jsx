import React, { useState, useEffect } from 'react';

// Map country names to IANA timezone identifiers
// This is a simplified mapping. For a comprehensive solution, a dedicated library
// or a more extensive mapping would be needed.
const countryTimezones = {
  'India': 'Asia/Kolkata',
  'USA': 'America/New_York', // Eastern Time for USA example
  'UK': 'Europe/London',
  'Japan': 'Asia/Tokyo',
  'Australia': 'Australia/Sydney', // Sydney for Australia example
  'Germany': 'Europe/Berlin',
  'Brazil': 'America/Sao_Paulo', // Sao Paulo for Brazil example
  'Canada': 'America/Toronto', // Toronto for Canada example
  'France': 'Europe/Paris',
  'Netherlands': 'Europe/Amsterdam', // Added Netherlands
};

// Function to calculate the initial angle of a hand based on its SVG path
// This function determines the clockwise angle of the hand from the 12 o'clock position (straight up).
// It uses Math.atan2(x, -y) because:
// 1. In SVG, the Y-axis points downwards, but for a clock, we want "up" to be 0 degrees.
//    So, we use `-dy` to invert the Y-axis for calculation.
// 2. Math.atan2(x, y) calculates the angle from the positive X-axis. For clock-like
//    behavior (0 at 12 o'clock, increasing clockwise), Math.atan2(dx, -dy) is suitable.
const calculateInitialAngle = (xTip, yTip, centerX, centerY) => {
  const dx = xTip - centerX;
  const dy = yTip - centerY;

  // Calculate angle in radians. Math.atan2(x, y) gives angle from positive Y-axis (downwards in SVG).
  // Using -dy effectively flips the Y-axis for the angle calculation, so 0 is "up".
  let angleRad = Math.atan2(dx, -dy);
  let angleDeg = angleRad * 180 / Math.PI;

  // Normalize angle to be positive (0-360 degrees)
  if (angleDeg < 0) {
    angleDeg += 360;
  }
  return angleDeg;
};

// Function to convert hex color to normalized RGB values (0-1 range)
const hexToRgbNormalized = (hex) => {
  let r = 0, g = 0, b = 0;
  // Handle #RRGGBB format
  if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16) / 255;
    g = parseInt(hex.substring(3, 5), 16) / 255;
    b = parseInt(hex.substring(5, 7), 16) / 255;
  }
  return `${r} 0 0 0 0 0 ${g} 0 0 0 0 0 ${b} 0 0 0 0 0 1 0`;
};


// Clock center coordinates from the SVG viewBox and main circle
const CLOCK_CENTER_X = 79.5;
const CLOCK_CENTER_Y = 79.5;

// Initial angles of the hands as they are drawn in the provided SVG.
// These are calculated using the corrected `calculateInitialAngle` function
// to find their current clockwise offset from the 12 o'clock position in the SVG.
const INITIAL_SEC_ANGLE = calculateInitialAngle(102.068, 33.8916, CLOCK_CENTER_X, CLOCK_CENTER_Y);
const INITIAL_MIN_ANGLE = calculateInitialAngle(120.592, 57.9308, CLOCK_CENTER_X, CLOCK_CENTER_Y);
const INITIAL_HOUR_ANGLE = calculateInitialAngle(48.0787, 57.537, CLOCK_CENTER_X, CLOCK_CENTER_Y);

// A global offset to fine-tune the hand alignment if the SVG drawing isn't perfectly aligned
// Adjusted to -20 degrees as per your selection
const GLOBAL_ROTATION_OFFSET = -2;


// Clock Component
const Clock = ({ countryName, bgColor = '#B9CFEC', pinColor = '#000000', innerShadowColor = '#646E82' }) => {
  const timezone = countryTimezones[countryName] || 'UTC'; // Default to UTC if country not found
  const [currentTime, setCurrentTime] = useState(new Date()); // Stores the raw Date object (UTC internally)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date()); // Update the raw Date object every second
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []); // No dependency on timezone here, as we update raw time

  // Use Intl.DateTimeFormat to get timezone-specific components for calculations
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // Use 24-hour format for calculations
    timeZone: timezone
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedParts = formatter.formatToParts(currentTime); // Use the 'currentTime' state here

  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  for (const part of formattedParts) {
    if (part.type === 'hour') hours = parseInt(part.value, 10);
    if (part.type === 'minute') minutes = parseInt(part.value, 10);
    if (part.type === 'second') seconds = parseInt(part.value, 10);
  }

  // Milliseconds are taken from the current local time for smoother second hand movement.
  // This is generally acceptable as milliseconds are consistent across timezones within a 1-second interval.
  const milliseconds = currentTime.getMilliseconds();

  // Calculate target rotation for second hand
  // Apply GLOBAL_ROTATION_OFFSET to correct alignment
  const secDegrees = (seconds * 6) + (milliseconds * 0.006) - INITIAL_SEC_ANGLE + GLOBAL_ROTATION_OFFSET;

  // Calculate target rotation for minute hand
  // Apply GLOBAL_ROTATION_OFFSET to correct alignment
  const minDegrees = (minutes * 6) + (seconds * 0.1) - INITIAL_MIN_ANGLE + GLOBAL_ROTATION_OFFSET;

  // Calculate target rotation for hour hand
  // Apply GLOBAL_ROTATION_OFFSET to correct alignment
  const hourDegrees = ((hours % 12) * 30) + (minutes * 0.5) - INITIAL_HOUR_ANGLE + GLOBAL_ROTATION_OFFSET;

  // Convert innerShadowColor hex to a format suitable for feColorMatrix
  const innerShadowMatrixValues = hexToRgbNormalized(innerShadowColor);

  return (
    // Added w-full h-full to the outermost div to make it fill its parent
    <div className="flex flex-col items-center justify-center w-full h-full">
      {/* Added w-full h-full to the SVG wrapper div */}
      <div className="flex justify-center items-center w-full h-full">
        {/* Changed SVG width and height to 100% */}
        <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Clock Face Background - uses bgColor prop */}
          <rect x="0.5" y="0.5" width="159" height="159" rx="79.5" fill={bgColor} stroke={bgColor}/>
          <g filter="url(#filter0_i_8_66881)">
            <rect x="9.91016" y="150.088" width="139.233" height="139.233" rx="69.6165" transform="rotate(-90 9.91016 150.088)" fill={bgColor}/>
          </g>
          <rect x="10.4102" y="149.588" width="138.233" height="138.233" rx="69.1165" transform="rotate(-90 10.4102 149.588)" stroke={bgColor}/>

          {/* Hour Markers (small rectangles) */}
          <rect x="18.8789" y="81.1803" width="1.41593" height="6.60767" rx="0.707965" transform="rotate(-90 18.8789 81.1803)" fill="#BA5D3D"/>
          <rect x="139.234" y="79.7635" width="1.41593" height="5.66372" rx="0.707964" transform="rotate(90 139.234 79.7635)" fill="#BA5D3D"/>
          <rect x="78.3477" y="20.2948" width="1.41593" height="6.13569" rx="0.707965" fill="#BA5D3D"/>
          <rect x="80.2344" y="140.649" width="1.88791" height="6.60767" rx="0.943953" transform="rotate(-180 80.2344 140.649)" fill="#BA5D3D"/>

          {/* Clock Hands - Wrapped in <g> for rotation */}
          {/* Minute Hand - uses pinColor prop */}
          <g style={{ transformOrigin: `${CLOCK_CENTER_X}px ${CLOCK_CENTER_Y}px`, transform: `rotate(${minDegrees}deg)` }}>
            <path d="M65.0254 88.2756L120.592 57.9308" stroke={pinColor} strokeWidth="3" strokeLinecap="round"/>
          </g>

          {/* Hour Hand - uses pinColor prop */}
          <g style={{ transformOrigin: `${CLOCK_CENTER_X}px ${CLOCK_CENTER_Y}px`, transform: `rotate(${hourDegrees}deg)` }}>
            <path d="M92.2165 89.8524L48.0787 57.537" stroke={pinColor} strokeWidth="3" strokeLinecap="round"/>
          </g>

          {/* Second Hand and its decorative element */}
          <g filter="url(#filter3_d_8_66881)" style={{ transformOrigin: `${CLOCK_CENTER_X}px ${CLOCK_CENTER_Y}px`, transform: `rotate(${secDegrees}deg)` }}>
            <path d="M102.068 33.8916L75.2696 88.6699" stroke="url(#paint0_linear_8_66881)" strokeWidth="2" strokeLinecap="round"/>
            <path d="M75.2711 88.6698L69.3599 100.886" stroke="url(#paint1_linear_8_66881)" strokeWidth="4" strokeLinecap="round"/>
          </g>

          {/* Center dots - Adjusted cx and cy to be perfectly centered */}
          <g filter="url(#filter1_d_8_66881)">
            <circle cx={CLOCK_CENTER_X} cy={CLOCK_CENTER_Y} r="4.0118" fill="#646E82"/>
          </g>
          <g filter="url(#filter2_d_8_66881)">
            <circle cx={CLOCK_CENTER_X} cy={CLOCK_CENTER_Y} r="2.35988" fill="#FD382D"/>
          </g>

          {/* SVG Definitions for filters and gradients */}
          <defs>
            <filter id="filter0_i_8_66881" x="9.91016" y="10.8551" width="141.232" height="139.233" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="2"/>
              <feGaussianBlur stdDeviation="7"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              {/* Updated feColorMatrix to use innerShadowMatrixValues */}
              <feColorMatrix type="matrix" values={innerShadowMatrixValues}/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8_66881"/>
            </filter>
            <filter id="filter1_d_8_66881" x="73.0449" y="74.46" width="14.0234" height="14.0236" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              {/* Removed feOffset dx="1" dy="1" */}
              <feGaussianBlur stdDeviation="1.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.329412 0 0 0 0.419608 0 0 0 0.57 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_66881"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_66881" result="shape"/>
            </filter>
            <filter id="filter2_d_8_66881" x="74.9336" y="75.876" width="10.7207" height="10.7198" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              {/* Removed feOffset dx="1" dy="1" */}
              <feGaussianBlur stdDeviation="1.5"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.329412 0 0 0 0.419608 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_66881"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_66881" result="shape"/>
            </filter>
            {/* Filter for the second hand (original) */}
            <filter id="filter3_d_8_66881" x="71.2734" y="31.8874" width="36.791" height="64.7867" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="1" dy="3"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.030867 0 0 0 0 0 0 0 0 0.35 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_dropShadow_8_66881"/>
            </filter>
            {/* Filter for the decorative line (original) */}
            <filter id="filter4_d_8_66881" x="64.3672" y="85.6613" width="17.8965" height="24.2335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="1" dy="3"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.983333 0 0 0 0 0.030867 0 0 0 0 0 0 0 0 0.35 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_66881"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_66881" result="shape"/>
            </filter>

            <linearGradient id="paint0_linear_8_66881" x1="69.9162" y1="100.436" x2="55.0061" y2="86.864" gradientUnits="userSpaceOnUse">
              <stop offset="0.130208" stopColor="#FD251E"/>
              <stop offset="1" stopColor="#FE725C"/>
            </linearGradient>
            <linearGradient id="paint1_linear_8_66881" x1="69.9176" y1="100.436" x2="55.0076" y2="86.8639" gradientUnits="userSpaceOnUse">
              <stop offset="0.130208" stopColor="#FD251E"/>
              <stop offset="1" stopColor="#FE725C"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="time mt-[.0625rem]">
        <h5 className="text-[20px] leading-[2.125rem] font-medium text-white text-center uppercase">{countryName}</h5>
        <h5 className="text-[20px] leading-[2.125rem] font-medium text-white text-center">{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: timezone })}</h5>
      </div>
    </div>
  );
};

export default Clock;