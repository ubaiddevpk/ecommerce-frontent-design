import React from "react";

const CustomButton = ({ 
  label = "Click Me", 
  width = "w-32", 
  height = "h-12", 
  color = "text-white", 
  bgColor = "bg-blue-500", 
  onClick 
}) => {
  return (
    <button
      className={`rounded-lg ${width} ${height} ${color} ${bgColor} font-semibold shadow-md hover:opacity-90 transition-all duration-300 hover:cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
