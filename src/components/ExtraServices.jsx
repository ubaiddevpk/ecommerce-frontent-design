import React from "react";
import search from "../assets/extraservices/Icon/control/search.png";
import calender from "../assets/extraservices/Icon/Vector-1.png";
import vecter from "../assets/extraservices/Icon/control/Vector.png";
import share from "../assets/extraservices/Icon/Vector.png";
const ExtraServices = ({ services }) => {
  const icons = [
    { name: "search", src: search },
    { name: "calender", src: calender },
    { name: "vecter", src: vecter },
    { name: "share", src: share },
  ];
  return (
    <div className="p-4 mt-4 ml-10 w-[95%]">
      <h2 className="text-xl font-semibold mb-4">Our extra services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow flex flex-col transition-transform duration-300 hover:scale-105"
          >
            {/* Image section */}
            <div className="relative h-32">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Icon button */}
              <div className="absolute bottom-2 right-2 bg-blue-100 p-2 rounded-full">
                <img
                  src={icons[index].src}
                  alt={icons[index].name}
                  className="w-4 h-4 hover:cursor-pointer"
                />
              </div>
            </div>

            {/* Title */}
            <div className="p-3 text-sm font-medium text-center">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
