import React from 'react';
import CustomButton from '../Buttons';

const Superdiscount = () => {
  return (
    <div className='pb-7'>
    <div className="w-[95%] mx-auto mt-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md p-6 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden">
      {/* Left Text Section */}
      <div className="mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-semibold">Super discount on more than 100 USD</h1>
        <p className="text-sm text-white/80">Have you ever finally just write dummy info</p>
      </div>

      {/* Right Button */}
      <CustomButton 
        label="Shop now" 
        bgColor="bg-orange-400" 
        width="w-[100px]" 
        height="h-[40px]" 
      />
    </div>
    </div>
  );
};

export default Superdiscount;
