import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FilterSection = ({ title, options = [], selected = [], onToggle = () => {}, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-[#BDBDBD] pb-3">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        {isOpen ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </div>

      {/* Content */}
      {isOpen && (
        <div className="space-y-1">
          {options.length > 0 &&
            options.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  onChange={() => onToggle(option)}
                  className="accent-blue-600"
                />
              <span className="text-lg text-gray-700 text-shadow-sm">{option}</span>

              </label>
            ))}
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
