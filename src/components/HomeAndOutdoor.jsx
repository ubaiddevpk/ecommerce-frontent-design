import React from 'react';

const HomeAndOutdoor = ({ title, buttonLabel, products }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow mt-4 mx-auto w-[95%]">

      {/* Left side panel */}
      <div className="w-full lg:w-1/4 bg-[url('/src/assets/homeoutdoor/image(14).png')] bg-cover bg-center flex flex-col justify-center items-center text-black p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <button className="bg-white text-black font-semibold py-2 px-4 rounded-full hover:cursor-pointer">
          {buttonLabel}
        </button>
      </div>

      {/* Right product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 p-2 w-full lg:w-3/4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 text-center overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer hover:border-none bg-white"
          >
            <div className="w-full h-32 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-28 object-contain"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-gray-400 text-xs">From USD {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAndOutdoor;
