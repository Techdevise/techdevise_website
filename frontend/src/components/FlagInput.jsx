import React, { useState, useRef, useEffect } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

// Country data with flag emojis and dial codes
const countries = [
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'NETHERLANDS', code: '+31', flag: '🇳🇱' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
];

function FlagInput() {
    // State for the selected country, initialized to India as per the screenshot
    const [selectedCountry, setSelectedCountry] = useState(
        countries.find(country => country.name === 'India') || countries[0]
    );
    // State for the phone number input
    const [phoneNumber, setPhoneNumber] = useState('');
    // State to control the visibility of the country dropdown
    const [showDropdown, setShowDropdown] = useState(false);
    // Ref for the dropdown container to handle clicks outside
    const dropdownRef = useRef(null);

    // Effect to close the dropdown when clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Function to handle country selection from the dropdown
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setShowDropdown(false); // Close dropdown after selection
    };

    // Function to handle phone number input changes
    const handlePhoneNumberChange = (event) => {
        // Basic validation to allow only digits
        const value = event.target.value.replace(/\D/g, '');
        setPhoneNumber(value);
    };

    return (
        <>

            <div className="relative" ref={dropdownRef}>
                <div
                    className="flex items-center overflow-hidden"
                >
                    {/* Country Code and Flag Button */}
                    <button
                        type="button"
                        onClick={() => setShowDropdown(!showDropdown)}
                        className='h-[4.375rem] bg-white w-fit rounded-s-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center gap-[.75rem] p-5 pe-0 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none' 
                        aria-haspopup="true"
                        aria-expanded={showDropdown}
                    >
                        <span className="text-[2.4375rem]">{selectedCountry.flag}</span>
                        <span className="text-[1.125rem] leading-[1.875rem] text-black font-medium">{selectedCountry.code}</span>
                      <BsCaretDownFill className={`size-3.5 text-black`} />
                    </button>

                    {/* Phone Number Input */}
                    <input
                        type="tel"
                        className='h-[4.375rem] bg-white flex-1 rounded-e-[.4375rem] text-[1.125rem] leading-[1.875rem] flex justify-start items-center p-5 ps-3 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        aria-label="Phone Number"
                    />
                </div>

                {/* Country Dropdown */}
                {showDropdown && (
                    <div className="absolute z-10 mt-2 w-full max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
                        {countries.map((country) => (
                            <div
                                key={country.code + country.name} // Unique key for each country
                                onClick={() => handleCountrySelect(country)}
                                className="flex items-center px-4 py-2 cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150"
                            >
                                <span className="text-xl mr-3">{country.flag}</span>
                                <span className="text-gray-800">{country.name}</span>
                                <span className="ml-auto text-gray-500">{country.code}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </>
    );
}

export default FlagInput;
