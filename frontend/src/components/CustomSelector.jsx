import React, { useState, useRef, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

// Main App component
export default function CustomSelector({ options = [], placeholder, id }) {
    // Define options for the selector

    // State for the "Nature of Work" selector
    const [selectedNatureOfWork, setSelectedNatureOfWork] = useState('');
    const [isNatureOfWorkOpen, setIsNatureOfWorkOpen] = useState(false);
    const natureOfWorkRef = useRef(null);
    const [openNatureOfWorkUp, setOpenNatureOfWorkUp] = useState(false);

    // Effect for "Nature of Work" selector: Close on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (natureOfWorkRef.current && !natureOfWorkRef.current.contains(event.target)) {
                setIsNatureOfWorkOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Effect for "Nature of Work" selector: Determine dropdown direction
    useEffect(() => {
        if (isNatureOfWorkOpen && natureOfWorkRef.current) {
            const rect = natureOfWorkRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const spaceBelow = viewportHeight - rect.bottom;
            const spaceAbove = rect.top;
            const dropdownEstimatedHeight = 250; // A reasonable estimate for the dropdown height

            if (spaceBelow < dropdownEstimatedHeight && spaceAbove > dropdownEstimatedHeight) {
                setOpenNatureOfWorkUp(true);
            } else {
                setOpenNatureOfWorkUp(false);
            }
        }
    }, [isNatureOfWorkOpen]);

    // Handler for "Nature of Work" selector
    const toggleNatureOfWorkDropdown = () => {
        setIsNatureOfWorkOpen(!isNatureOfWorkOpen);
    };

    const handleSelectNatureOfWork = (option) => {
        setSelectedNatureOfWork(option);
        setIsNatureOfWorkOpen(false);
    };

    return (
        <>
            <div className="relative" ref={natureOfWorkRef}>
                <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px] '>
                    <button
                        type="button"
                        id={id}
                        className='h-[4.375rem] flex justify-between items-center bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'
                        onClick={toggleNatureOfWorkDropdown}
                        aria-haspopup="listbox"
                        aria-expanded={isNatureOfWorkOpen}
                        aria-labelledby={id}
                    >
                        <span className={`block truncate first-letter:uppercase ${selectedNatureOfWork ? 'text-black' : 'text-black/30'}`}>
                            {selectedNatureOfWork || placeholder}
                        </span>
                        <FaCaretDown
                            className={`w-5 h-5 text-black transform transition-transform duration-200 ${isNatureOfWorkOpen ? (openNatureOfWorkUp ? 'rotate-0' : 'rotate-180') : 'rotate-0'
                                }`} />
                    </button>
                </div>


                {isNatureOfWorkOpen && (
                    <ul
                        className={`absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1 overflow-y-auto focus:outline-none 
                           ${openNatureOfWorkUp ? 'bottom-full mb-1' : 'top-full mt-1'}`}
                        tabIndex="-1"
                        role="listbox"
                        aria-labelledby="natureOfWork-label"
                    >
                        {options.length > 0 ? (
                            options.map((option) => (
                                <li
                                    key={option}
                                    className="flex justify-between items-center bg-transparent hover:bg-pine-700/10 w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] px-5 py-2"
                                    id={`natureOfWork-option-${option.replace(/\s+/g, '-')}`}
                                    role="option"
                                    aria-selected={option === selectedNatureOfWork}
                                    onClick={() => handleSelectNatureOfWork(option)}
                                >
                                    <span className={`block truncate first-letter:uppercase ${option === selectedNatureOfWork ? 'font-semibold text-pine-700' : 'font-normal'}`}>
                                        {option}
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-500 py-2 px-3">No options available</li>
                        )}
                    </ul>
                )}
            </div>
        </>

    );
}
