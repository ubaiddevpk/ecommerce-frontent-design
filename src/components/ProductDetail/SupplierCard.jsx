import React from "react";
import flade from "../../assets/icons/icon.png";
import user from "../../assets/icons/verified_user.png";
import language from "../../assets/icons/language.png";
import heart from "../../assets/icons/Vector3.png";
const SupplierCard = () => {
  return (
    <> <div className="flex-col">
      <div className="w-full lg:w-[260px] border border-gray-400 rounded-md p-4 bg-white shadow-md">
        <div className="flex items-center border-b pb-5 border-gray-400 gap-2 mb-4">
          <div className="bg-teal-100 text-teal-900 font-bold items-center justify-center flex p-2 border h-[60px] w-[60px]">
            R
          </div>
          <div>
            <p className="font-semibold text-sm">Supplier</p>
            <p className="font-semibold text-sm">Guanjoi Trading LLC</p>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4 space-y-2">
          <p className="flex items-center"><span><img src={flade} alt="" /></span> Germany, Berlin</p>
          <p className="flex items-center"> <span><img src={user} alt="" /></span> Verified Seller</p>
          <p className="flex items-center"> <span><img src={language} alt="" /></span> Worldwide shipping</p>
        </div>

        <button className="bg-blue-600 text-white text-sm w-full py-2 rounded hover:bg-blue-700">
          Send inquiry
        </button>

        <button className="text-blue-600 text-sm w-full py-2 mt-2 border border-gray-400 rounded hover:bg-blue-50">
          Seller’s profile
        </button>
      </div>

      <div className="text-center mt-4">
        <button className="text-sm text-blue-500 hover:underline">
          <span><img src={heart} alt="img" className="inline"/></span> Save for later
        </button>
      </div>
      </div>
    </>
  );
};

export default SupplierCard;
