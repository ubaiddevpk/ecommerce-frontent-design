import React from "react";
import { FiMail } from "react-icons/fi";

const SubscribeNewsletter = () => {
  return (
    <div className="bg-gray-100 py-10 text-center w-full">
      <h2 className="text-xl font-semibold mb-2">Subscribe on our newsletter</h2>
      <p className="text-gray-600 mb-6">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      <div className="flex justify-center gap-2 max-w-md mx-auto">
        <div className="flex items-center border rounded px-3 py-2 bg-white w-full">
          <FiMail className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="outline-none w-full"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded hover:cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
