import React, { useState, useRef, useEffect } from 'react';

/**
 * CustomSelect Component
 * A reusable dropdown selector with dynamic positioning (opens down if space, else opens up).
 *
 * @param {object} props - The component props.
 * @param {string} props.id - Unique ID for the selector, used for accessibility.
 * @param {string} props.placeholder - Text displayed when no option is selected.
 * @param {Array<string>} props.options - An array of strings representing the selectable items.
 * @param {string} props.selectedValue - The currently selected value.
 * @param {function(string): void} props.onSelect - Callback function when an option is selected.
 */
export default function FullCustomSelect({ id, placeholder, options = [], selectedValue, onSelect }) {
  // State to control the visibility of the dropdown options
  const [isOpen, setIsOpen] = useState(false);
  // Ref to the main container of the selector to detect clicks outside
  const selectorRef = useRef(null);
  // State to determine if the dropdown should open downwards (true) or upwards (false)
  const [openDown, setOpenDown] = useState(false);

  // Effect to handle clicks outside the selector to close the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      // If the click is outside the selector, close the dropdown
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickScope);
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Effect to determine dropdown direction based on available space
  useEffect(() => {
    if (isOpen && selectorRef.current) {
      const rect = selectorRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const spaceBelow = viewportHeight - rect.bottom;
      const spaceAbove = rect.top;

      // A reasonable estimate for the dropdown height (max-h-60 is 240px, plus padding/margin)
      const dropdownEstimatedHeight = 250;

      // Default to opening UP. Open DOWN if not enough space ABOVE and enough space BELOW.
      if (spaceAbove < dropdownEstimatedHeight && spaceBelow > dropdownEstimatedHeight) {
        setOpenDown(true);
      } else {
        setOpenDown(false);
      }
    }
  }, [isOpen]); // Re-run when isOpen changes

  // Function to toggle the dropdown's open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleSelectOption = (option) => {
    onSelect(option); // Update the selected value via the parent's onSelect prop
    setIsOpen(false);  // Close the dropdown after selection
  };

  return (
    <div className="relative" ref={selectorRef}>
      {/* Selector display area */}
      <button
        type="button"
        id={id}
        className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm
                   flex justify-between items-center cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-200 ease-in-out
                   hover:border-blue-400"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${id}-label`} // Assuming a label exists for accessibility
      >
        <span className={`block truncate ${selectedValue ? 'text-gray-800' : 'text-gray-500'}`}>
          {selectedValue || placeholder}
        </span>
        {/* Dropdown arrow icon (SVG) */}
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
            // Arrow rotation logic adjusted for opening downwards
            isOpen ? (openDown ? 'rotate-180' : 'rotate-0') : 'rotate-0'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown options list */}
      {isOpen && (
        <ul
          className={`absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md py-1
                     ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none
                     ${openDown ? 'top-full mt-1' : 'bottom-full mb-1'}`}
          tabIndex="-1"
          role="listbox"
          aria-labelledby={`${id}-label`} // Link to the selector's label for accessibility
        >
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option}
                className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9
                           hover:bg-blue-100 hover:text-blue-900 transition-colors duration-150 ease-in-out"
                id={`${id}-option-${option.replace(/\s+/g, '-')}`} // Unique ID for each option
                role="option"
                aria-selected={option === selectedValue} // Indicate if this option is selected
                onClick={() => handleSelectOption(option)}
              >
                <span className={`block truncate ${option === selectedValue ? 'font-semibold' : 'font-normal'}`}>
                  {option}
                </span>
                {option === selectedValue && (
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                    {/* Checkmark icon for selected item */}
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))
          ) : (
            <li className="text-gray-500 py-2 px-3">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
}
