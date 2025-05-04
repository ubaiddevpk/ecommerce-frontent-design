import React, { useState } from "react";
import banner from "../assets/banner.png";
import CustomButton from "../components/Buttons";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function ItemDetail() {
  const [showAll, setShowAll] = useState(false);

  const itemslinks = [
    "Automobiles",
    "Cloth interior",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
    "Books",
    "Music",
    "Automobiles",
    "Cloth interior",
    "Fashion",
  ];

  const visibleItems = showAll ? itemslinks : itemslinks.slice(0, 8);

  return (
    <div className="w-[95%] mx-auto bg-white mt-2 p-2 flex flex-col lg:flex-row gap-4">
      {/* ===== Categories ===== */}
      <div className="w-full lg:w-[25%]">
        <ul className="flex flex-wrap lg:flex-col gap-2">
          {visibleItems.map((itemlink, index) => (
            <li
              key={index}
              className="w-[48%] lg:w-full h-[30px] hover:bg-[#E5F1FF] text-[14px] rounded-[3px] sm:text-[16px] px-2"
            >
              <Link to="/Listpage">{itemlink}</Link>
            </li>
          ))}
          {!showAll && (
            <li className="w-full">
              <button
                onClick={() => setShowAll(true)}
                className="h-[35px] w-full hover:bg-[#E5F1FF] text-[14px] rounded-[3px] sm:text-[16px] text-left px-2"
              >
                More Categories
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* ===== Banner Image with Text and Button ===== */}
      <div className="w-full lg:w-[50%] relative rounded-2xl overflow-hidden flex items-center bg-black">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute left-5 top-1/4 lg:top-1/5 text-black">
          <p className="text-[18px] sm:text-[20px]">Latest trending</p>
          <h2 className="text-[22px] sm:text-[28px] font-bold mb-4">
            Electronic items
          </h2>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
            Learn more
          </button>
        </div>
      </div>

      {/* ===== Right Sidebar ===== */}
      <div className="w-full lg:w-[25%] flex flex-col gap-4">
        {/* User Greeting */}
        <div className="flex flex-col justify-center items-center bg-blue-50 rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <FaUserCircle size={50} color="#87CEFA" />
            <div className="text-[18px]">
              Hi user <br />
              Let's get started
            </div>
          </div>
          <CustomButton
            label="Join now"
            bgColor="bg-blue-600"
            width="w-full"
            height="h-10"
          />
          <CustomButton
            label="Login"
            bgColor="bg-white"
            color="text-black"
            width="w-full"
            height="h-10"
          />
        </div>

        {/* Promo Boxes */}
        <div className="bg-orange-500 text-white rounded-2xl p-4 text-[18px] hover:cursor-pointer">
          Get US $10 off <br />
          with a new <br />
          supplier
        </div>
        <div className="bg-blue-500 text-white rounded-2xl p-4 text-[18px] hover:cursor-pointer">
          Send quotes with <br />
          supplier preferences
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
