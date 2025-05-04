import React, { useState } from "react";

const DoublePriceSlider = ({ onRangeChange }) => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(1500);
  const minGap = 100;
  const maxRange = 2000;

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (max - value >= minGap) setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value - min >= minGap) setMax(value);
  };

  const handleApply = () => {
    onRangeChange(min, max);
  };

  return (
    <div className="w-full mb-4">
      <h2 className="text-lg font-semibold mb-2">Price Range</h2>
      <div className="relative h-10 w-[95%] mx-auto mb-6 gap-1">
        <input
          type="range"
          min="0"
          max={maxRange}
          value={min}
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent z-10 pointer-events-none"
        />
        <input
          type="range"
          min="0"
          max={maxRange}
          value={max}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent z-10 pointer-events-none"
        />
        <div className="h-1 bg-gray-300 rounded mt-4 relative z-0">
          <div
            className="absolute h-1 bg-blue-500 rounded"
            style={{
              left: `${(min / maxRange) * 100}%`,
              width: `${((max - min) / maxRange) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="flex gap-3 mb-2 w-[95%] mx-auto">
        <div className="flex-1">
          <label className="text-sm text-gray-900">Min</label>
          <input
            type="number"
            className="w-full  rounded shadow  px-2 py-1 mt-1  bg-white text-gray-600 "
            value={min}
            onChange={handleMinChange}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm text-gray-900">Max</label>
          <input
            type="number"
            className="w-full  rounded px-2 py-1 mt-1 shadow  bg-white text-gray-600 "
            value={max}
            onChange={handleMaxChange}
          />
        </div>
      </div>

      <div className="w-[95%] mx-auto">
        <button
          onClick={handleApply}
          className="w-full bg-white text-blue-500 shadow py-2 rounded hover:cursor-pointer transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DoublePriceSlider;
