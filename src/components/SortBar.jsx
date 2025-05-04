import React from "react";
import { Link } from "react-router-dom";

const SortBar = ({ sortOption, setSortOption }) => (
  <div className="flex flex-wrap justify-between items-center border border-gray-200 rounded px-4 py-3 bg-white text-sm mb-4">
    <div className="text-gray-700">
      <span className="font-semibold text-black">12,911</span> items in <span className="font-semibold">Mobile accessory</span>
    </div>
    <div className="flex items-center gap-2 mt-2 sm:mt-0 flex-wrap sm:flex-nowrap">
      <label className="flex items-center gap-2 text-gray-700">
        <input type="checkbox" checked readOnly className="accent-blue-600 w-4 h-4" />
        Verified only
      </label>
      <select onChange={(e) => setSortOption(e.target.value)} value={sortOption} className="border border-gray-300 rounded px-2 py-1 outline-none">
        <option value="featured">Featured</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <div className="flex gap-2 mt-2 sm:mt-0">
        <Link to="/Gridview" className="p-2 border border-gray-300 rounded hover:bg-gray-100">
          <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3h4v4H3V3zm5 0h4v4H8V3zm5 0h4v4h-4V3zM3 8h4v4H3V8zm5 0h4v4H8V8zm5 0h4v4h-4V8zM3 13h4v4H3v-4zm5 0h4v4H8v-4zm5 0h4v4h-4v-4z" />
          </svg>
        </Link>
        <Link to="/Listpage">
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
            <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 6h14v2H3V6zm0 3h14v2H3V9zm0 3h14v2H3v-2z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default SortBar;
