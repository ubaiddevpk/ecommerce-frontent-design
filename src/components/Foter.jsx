import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import unitedstate from "../assets/flags/US@2x.png";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="  bottom-0 left-0 w-full bg-white py-10 px-5 md:px-20 z-50 ">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 ">
          {/* Brand section */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Brand Logo" className="w-8 h-8" />
              <h2 className="text-blue-500 font-bold text-xl">Brand</h2>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Best information about the company goes here but now lorem ipsum
              is
            </p>
            <div className="flex gap-3 mt-4 text-gray-600">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
              <FaTelegramPlane className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">About</h3>
            <ul className="space-y-1 text-sm text-gray-600 ">
              <li className="hover:underline hover:cursor-pointer">About Us</li>
              <li className="hover:underline hover:cursor-pointer">
                Find store
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Categories
              </li>
              <li className="hover:underline hover:cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Partnership */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Partnership</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="hover:underline hover:cursor-pointer">About Us</li>
              <li className="hover:underline hover:cursor-pointer">
                Find store
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Categories
              </li>
              <li className="hover:underline hover:cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Information</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="hover:underline hover:cursor-pointer">
                Help Center
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Money Refund
              </li>
              <li className="hover:underline hover:cursor-pointer">Shipping</li>
              <li className="hover:underline hover:cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">For users</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className="hover:underline hover:cursor-pointer">Login</li>
              <li className="hover:underline hover:cursor-pointer">Register</li>
              <li className="hover:underline hover:cursor-pointer">Settings</li>
              <li className="hover:underline hover:cursor-pointer">
                My Orders
              </li>
            </ul>
          </div>

          {/* Get App */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Get app</h3>
            <div className="flex gap-2 flex-wrap">
              <button className="hover:cursor-pointer flex items-center gap-2 bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800">
                <AiFillApple className="text-2xl" />
                <span className="text-sm">App Store</span>
              </button>
              <button className="hover:cursor-pointer flex items-center gap-2 bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800">
                <FaGooglePlay className="text-lg" />
                <span className="text-sm">Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-between items-center bg-[#EFF2F4] h-[70px]  ">
        <p className="lg:ml-20 text-[#606060] ml-0">© 2023 Ecommerce. </p>
        <div className="flex mr-20 justify-between items-center">
          <img src={unitedstate} alt="" className="mr-3" />
          <p className="flex items-center text-[#606060] hover:cursor-pointer">
            English
            <IoIosArrowUp></IoIosArrowUp>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
