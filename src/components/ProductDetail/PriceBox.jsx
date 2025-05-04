import React from "react";

const PriceBox = () => {
  return (
    <div className="bg-orange-50 border rounded-lg p-4">
      <div className="flex gap-4 font-semibold">
        <div>
          <p className="text-red-600 text-lg">$98.00</p>
          <p className="text-xs text-gray-500">50-100 pcs</p>
        </div>
        <div>
          <p className="text-gray-800">$90.00</p>
          <p className="text-xs text-gray-500">100-700 pcs</p>
        </div>
        <div>
          <p className="text-gray-800">$78.00</p>
          <p className="text-xs text-gray-500">700+ pcs</p>
        </div>
      </div>
    </div>
  );
};

export default PriceBox;
