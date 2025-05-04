import React from 'react';
import image102 from '../assets/image102.png'
const RequestQuote = ({
  heading,
  subheading,
  inputLabel1,
  inputLabel2,
  quantityLabel,
  unitOptions,
  buttonText
}) => {
  return (
    <div
  className="flex flex-col md:flex-row items-center justify-between bg-cover bg-center rounded-lg p-8 text-white mt-4 ml-10 w-[95%]"
  style={{  backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.9), rgba(147, 197, 253, 0.5)), url(${image102})` }}
>
  {/* Left Section */}
  <div className="w-full md:w-1/2 mb-6 md:mb-0">
    <h2 className="text-3xl font-bold mb-4">{heading}</h2>
    <p className="text-sm">{subheading}</p>
  </div>

  {/* Right Form Section */}
  <div className="w-full md:w-1/2 bg-white text-black p-6 rounded-lg shadow-md">
    <h3 className="font-semibold text-lg mb-4">Send quote to suppliers</h3>
    <input
      type="text"
      placeholder={inputLabel1}
      className="w-full mb-3 p-2 border rounded"
    />
    <textarea
      placeholder={inputLabel2}
      className="w-full mb-3 p-2 border rounded"
    ></textarea>
    <div className="flex gap-2 mb-3">
      <input
        type="number"
        placeholder={quantityLabel}
        className="w-1/2 p-2 border rounded"
      />
      <select className="w-1/2 p-2 border rounded">
        {unitOptions.map((unit, index) => (
          <option key={index} value={unit}>
            {unit}
          </option>
        ))}
      </select>
    </div>
    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition hover:cursor-pointer">
      {buttonText}
    </button>
  </div>
</div>
  );
};

export default RequestQuote;
