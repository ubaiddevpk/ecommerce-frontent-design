import React from "react";
import PriceBox from "./PriceBox";
import Ratings from "./Ratings";
import CustomizeOptions from "./CustomizeOptions";
import ProtectionInfo from "./ProtectionInfo";
import WarrantyInfo from "./WarrantyInfo";

const ProductInfo = () => {
  return (
    <div className="ml-10 flex flex-col gap-4">
      <h1 className="text-xl font-semibold text-gray-900">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </h1>
      <Ratings />
      <PriceBox />
      <div className="text-sm text-gray-700">
        <p><strong>Price:</strong> Negotiable</p>
        <p><strong>Type:</strong> Classic shoes</p>
        <p><strong>Material:</strong> Plastic material</p>
        <p><strong>Design:</strong> Modern nice</p>
      </div>
      <CustomizeOptions />
      <ProtectionInfo />
      <WarrantyInfo />
    </div>
  );
};

export default ProductInfo;
