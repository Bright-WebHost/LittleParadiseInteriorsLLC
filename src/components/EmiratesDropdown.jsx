import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';


const emirates = [
  'Abu Dhabi',
  'Dubai',
  'Sharjah',
  'Ajman',
  'Umm Al Quwain',
  'Ras Al Khaimah',
  'Fujairah'
];

export default function EmiratesDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (emirate) => {
    onChange(emirate);
    setIsOpen(false);
  };

  return (
    <div className="emirates-dropdown">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="emirates-btn"
      >
        <span className={value ? "text-dark" : "text-muted"}>
          {value || "Select Emirate"}
        </span>
        <ChevronDown className={`chevron-rotate ${isOpen ? "open" : ""}`} size={20} />
      </button>
      
      {isOpen && (
        <div className="emirates-menu">
          {emirates.map((emirate) => (
            <div
              key={emirate}
              onClick={() => handleSelect(emirate)}
              className="emirates-item"
            >
              {emirate}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}