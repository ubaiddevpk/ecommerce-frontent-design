import React from "react";

const SuppliersByRegion = ({ suppliers }) => {
  return (
    <div className="p-4 mt-4 ml-10 w-[95%]">
      <h2 className="text-xl font-semibold mb-4">Suppliers by region</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-4">
        {suppliers.map((supplier, index) => (
          <div key={index} className="flex items-center space-x-2 hover:cursor-pointer">
            <img src={supplier.flag} alt={supplier.name} className="w-5 h-5 rounded-sm" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium">{supplier.name}</span>
              <span className="text-xs text-gray-500">{supplier.link}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuppliersByRegion;
