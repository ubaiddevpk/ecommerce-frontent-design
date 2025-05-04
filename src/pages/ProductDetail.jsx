import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../components/ProductDetail/ProductGallery";
import ThumbnailGallery from "../components/ProductDetail/ThumbnailGallery";
import SupplierCard from "../components/ProductDetail/SupplierCard";
import Listitems from "../data/ListpageItems";
import Breadcrumb from "../components/ApperanceNav";
import reviewe from "../assets/icons/Vector.png";
import sold from "../assets/icons/Vector2.png";
import YouMayLike from "../components/Recommendations/YouMayLike";
import RecommendedItems from "../components/RelatedProducts/RecommendedItems";
import ExtraServices from "../components/SellerInfo/ExtraServices";
import Superdiscount from "../components/Discount/superdiscount"
const ProductDetail = () => {
  const { id } = useParams();
  const item = Listitems.find((product) => product.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(item?.image);

  if (!item) {
    return <div className="text-center mt-20 text-2xl">Item not found</div>;
  }

  return (
    <>
      <Breadcrumb />
      <div className="bg-[#F7FAFC] mt-0  py-10 pt-7 h-[500px]">
        <div className="w-[95%] mx-auto bg-white p-6 rounded-md shadow-md flex flex-col lg:flex-row gap-6">
          {/* Left: Gallery */}
          <div className="flex flex-col gap-5 items-start">
            <ProductGallery selectedImage={selectedImage} title={item.title} />
            <ThumbnailGallery setSelectedImage={setSelectedImage} />
          </div>

          {/* Center: Info Section */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h2>

            <div className="flex items-center text-sm text-gray-600 gap-2">
              <span className="text-orange-500">★★★★☆</span>
              <span>{item.rating}</span>
              <span>·</span>
              <span className="flex  gap-4">
                {" "}
                <img src={reviewe} alt="" /> <span>32 reviews</span>
              </span>
              <span>·</span>
              <span className="flex gap-4">
                {" "}
                <img src={sold} alt="" /> <span>{item.orders} sold</span>
              </span>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-orange-100  p-4  flex gap-6 text-sm font-semibold">
              <div>
                <p className="text-red-600 text-lg">${item.price}</p>
                <p className="text-gray-500 text-xs">50–100 pcs</p>
              </div>
              <div className="border-l pl-2 border-gray-400">
                <p className="text-gray-800">
                  ${(item.price * 0.92).toFixed(2)}
                </p>
                <p className="text-gray-500 text-xs">100–700 pcs</p>
              </div>
              <div className="border-l pl-2  border-gray-400">
                <p className="text-gray-800">
                  ${(item.price * 0.8).toFixed(2)}
                </p>
                <p className="text-gray-500 text-xs">700+ pcs</p>
              </div>
            </div>

            {/* Basic Info */}
            <div className="text-sm text-gray-700">
              <p className="border-b pb-3 border-gray-300 ]">
                <strong className="text-gray-600 pr-[168px]">Price:</strong>{" "}
                Negotiable
              </p>
              <p className="pt-3">
                <strong className="text-gray-600 pr-[168px]">Type:</strong>{" "}
                Classic shoes
              </p>
              <p>
                <strong className="text-gray-600 pr-[147px] ">Material:</strong>{" "}
                Plastic material
              </p>
              <p className="border-b pb-3 border-gray-300">
                <strong className="text-gray-600 pr-[153px]">Design:</strong>{" "}
                Modern nice
              </p>
            </div>

            {/* Customization & Policy */}
            <p className="text-sm text-gray-700">
              <strong className="text-gray-600 pr-[105px]">
                Customization:
              </strong>{" "}
              Customized logo and design{" "}
            </p>
            <p className="text-sm text-gray-700">
              <strong className="text-gray-600 pr-[133px]">Protection:</strong>{" "}
              Refund Policy
            </p>
            <p className="text-sm text-gray-700">
              <strong className="text-gray-600 pr-[138px]">Warranty:</strong> 2
              years full warranty
            </p>
          </div>

          {/* Right: Supplier Card */}
          <SupplierCard />
        </div>
      </div>

      {/* Bottom Section: You may like, Recommended, Extra Services */}
      <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        <div className="lg:col-span-3  ">
          <ExtraServices />
        </div>
        <div className="lg:col-span-1  ">
          <YouMayLike />
        </div>
      </div>
      <RecommendedItems />
      <Superdiscount/>
    </>
  );
};

export default ProductDetail;
