import React, { useState, useRef, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

export default function CustomSelector({ 
  options = [], 
  placeholder, 
  id, 
  name, 
  required,
  selectedOption,
  setSelectedOption 
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [openUpward, setOpenUpward] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const spaceBelow = viewportHeight - rect.bottom;
            const spaceAbove = rect.top;
            const dropdownEstimatedHeight = 250;

            if (spaceBelow < dropdownEstimatedHeight && spaceAbove > dropdownEstimatedHeight) {
                setOpenUpward(true);
            } else {
                setOpenUpward(false);
            }
        }
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    // Helper function to get display value
    const getDisplayValue = (option) => {
        if (!option) return '';
        return typeof option === 'object' ? option.label : option;
    };

    // Helper function to get option key
    const getOptionKey = (option) => {
        if (typeof option === 'object') {
            return `${option.value}-${option.label.replace(/\s+/g, '-')}`;
        }
        return option.replace(/\s+/g, '-');
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className='col bg-gradient-to-b from-pine-700/10 to-pine-700/30 rounded-lg p-[1px]'>
                <button
                    type="button"
                    id={id}
                    name={name}
                    className='h-[4.375rem] flex justify-between items-center bg-white w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] p-5 placeholder:text-black/30 focus-visible:outline-0 focus-visible:shadow-none'
                    onClick={toggleDropdown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    aria-labelledby={id}
                    required={required}
                >
                    <span className={`block truncate first-letter:uppercase ${selectedOption ? 'text-black' : 'text-black/30'}`}>
                        {getDisplayValue(selectedOption) || placeholder}
                    </span>
                    <FaCaretDown
                        className={`w-5 h-5 text-black transform transition-transform duration-200 ${isOpen ? (openUpward ? 'rotate-0' : 'rotate-180') : 'rotate-0'}`}
                    />
                </button>
                {/* Hidden input to store the actual value for form submission */}
                <input 
                    type="hidden" 
                    name={name} 
                    value={selectedOption?.value || ''} 
                />
            </div>

            {isOpen && (
                <ul
                    className={`absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1 overflow-y-auto focus:outline-none 
                       ${openUpward ? 'bottom-full mb-1' : 'top-full mt-1'}`}
                    tabIndex="-1"
                    role="listbox"
                    aria-labelledby={`${id}-label`}
                >
                    {options.length > 0 ? (
                        options.map((option) => {
                            const displayValue = getDisplayValue(option);
                            const optionKey = getOptionKey(option);
                            const isSelected = typeof option === 'object' 
                                ? option.value === selectedOption?.value 
                                : option === selectedOption;

                            return (
                                <li
                                    key={optionKey}
                                    className="flex justify-between items-center bg-transparent hover:bg-pine-700/10 w-full rounded-[.4375rem] text-[1.125rem] leading-[1.875rem] px-5 py-2"
                                    id={`${id}-option-${optionKey}`}
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => handleSelectOption(option)}
                                >
                                    <span className={`block truncate first-letter:uppercase ${isSelected ? 'font-semibold text-pine-700' : 'font-normal'}`}>
                                        {displayValue}
                                    </span>
                                </li>
                            );
                        })
                    ) : (
                        <li className="text-gray-500 py-2 px-3">No options available</li>
                    )}
                </ul>
            )}
        </div>
    );
}