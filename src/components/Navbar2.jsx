import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation();

  // Hide completely on cart page
  if (location.pathname === "/cart") return null;
  if (location.pathname === "/ChatInterface") return null;
  if (location.pathname === "/ProfileInterface") return null;

  return (
    <nav className="hidden md:flex bg-white py-3 px-5 md:px-20 justify-between items-center mt-1">
      {/* Left section */}
      <div className="flex items-center gap-6 text-sm text-gray-800 mr-[30px] relative right-[30px]">
        <button className="flex items-center gap-1 font-medium">
          <FaBars />
          All category
        </button>
        <span className="cursor-pointer hover:text-blue-500 ">Hot offers</span>
        <span className="cursor-pointer hover:text-blue-500">Gift boxes</span>
        <span className="cursor-pointer hover:text-blue-500">Projects</span>
        <span className="cursor-pointer hover:text-blue-500">Menu item</span>
        <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
          Help
          <IoIosArrowDown />
        </span>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6 text-sm text-gray-800 relative left-[44px]">
        <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500 ">
          English, USD
          <IoIosArrowDown />
        </span>
        <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500 ">
          Ship to
          <img
            src="https://flagcdn.com/w40/de.png"
            alt="Germany Flag"
            className="w-5 h-3 rounded-sm"
          />
          <IoIosArrowDown />
        </span>
      </div>
    </nav>
  );
};

export default Navbar2;
