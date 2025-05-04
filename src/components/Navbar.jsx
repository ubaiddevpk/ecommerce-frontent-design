import React from "react";
import logo from "../assets/logo.png";
import {
  FaUser,
  FaCommentDots,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHiddenPage = ["/cart", "/ProfileInterface", "/ChatInterface"].includes(location.pathname);

  return (
    <nav className="bg-white shadow px-4 py-3">
      {/* ===== Large Screen Navbar ===== */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2 ml-7 hover:cursor-pointer">
            <img src={logo} alt="logo" className="w-7 h-7" />
            <span className="text-blue-500 text-lg font-bold">Brand</span>
          </div>
        </Link>

        {/* Search Bar with Select (Hide on Certain Pages) */}
        {!isHiddenPage && (
          <div className="flex flex-grow max-w-xl mx-6 border border-blue-400 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <select className="border-l border-r px-2 focus:outline-none text-sm hover:cursor-pointer">
              <option>All category</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>
            <button className="bg-blue-500 text-white px-4 hover:cursor-pointer">
              Search
            </button>
          </div>
        )}

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-500 text-sm">
          <Link to="/ProfileInterface" className="flex flex-col items-center hover:cursor-pointer">
            <FaUser className="text-lg" />
            <span>Profile</span>
          </Link>
          <Link to="/ChatInterface" className="flex flex-col items-center hover:cursor-pointer">
            <FaCommentDots className="text-lg" />
            <span>Message</span>
          </Link>
          <div className="flex flex-col items-center hover:cursor-pointer">
            <FaHeart className="text-lg" />
            <span>Orders</span>
          </div>
          <Link
            to="/cart"
            className="flex flex-col items-center hover:cursor-pointer"
          >
            <FaShoppingCart className="text-lg" />
            <span>My cart</span>
          </Link>
        </div>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="flex flex-col lg:hidden">
        {/* Top Row: Hamburger + Logo + Icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaBars className="text-xl text-gray-700 mr-2" />
            <Link to="/">
              <img src={logo} alt="logo" className="w-7 h-7" />
            </Link>
            <Link to="/">
              <span className="text-blue-500 text-lg font-bold">Brand</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <Link to="/ProfileInterface" className="flex flex-col items-center hover:cursor-pointer">
              <FaUser />
            </Link>
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar (Hide on Certain Pages) */}
        {!isHiddenPage && (
          <div className="mt-4 flex items-stretch border border-blue-400 rounded overflow-hidden w-full">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2">Search</button>
          </div>
        )}

        {/* Category Buttons */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="bg-[#EFF2F4] px-3 py-1 rounded text-sm text-blue-500">Electronics</button>
          <button className="bg-[#EFF2F4] px-3 py-1 rounded text-sm text-blue-500">Fashion</button>
          <button className="bg-[#EFF2F4] px-3 py-1 rounded text-sm text-blue-500">Books</button>
          <button className="bg-[#EFF2F4] px-3 py-1 rounded text-sm text-blue-500">Home</button>
          <button className="bg-[#EFF2F4] px-3 py-1 rounded text-sm text-blue-500">Toys</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
