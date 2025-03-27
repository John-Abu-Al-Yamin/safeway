import React, { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";

const FilterRow = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const filterRef = useRef(null);

  const filters = [
    { label: "Price", options: ["Low to High", "High to Low"] },
    { label: "Duration", options: ["Short Trips", "Long Trips"] },
    { label: "Rating", options: ["High to Low", "Low to High"] },
  ];

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilter(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-6" ref={filterRef}>
      <div className="flex space-x-4">
        {filters.map((filter) => (
          <div key={filter.label} className="relative">
            <button
              onClick={() =>
                setActiveFilter(activeFilter === filter.label ? null : filter.label)
              }
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeFilter === filter.label ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {filter.label}{" "}
              {selectedOptions[filter.label] && (
                <span className="ml-2 text-sm text-blue-600">{selectedOptions[filter.label]}</span>
              )}
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            {activeFilter === filter.label && (
              <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md border">
                {filter.options.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setSelectedOptions((prev) => ({ ...prev, [filter.label]: option }));
                      setActiveFilter(null);
                    }}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      selectedOptions[filter.label] === option ? "bg-gray-200 font-semibold" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-gray-600">
        Showing <span className="font-semibold">{Object.keys(selectedOptions).length}</span> results
      </div>
    </div>
  );
};

export default FilterRow;
