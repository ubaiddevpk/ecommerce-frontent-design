// src/pages/ItemDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Listitems from "../data/ListpageItems";

const ItemDetail = () => {
  const { id } = useParams();
  const item = Listitems.find((product) => product.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(item?.image);

  if (!item) {
    return <div className="text-center mt-20 text-2xl">Item not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 mt-6 flex flex-col md:flex-row gap-6">
      {/* Left Section - Images */}
      <div className="flex-1">
        {/* Main selected image */}
        <img
          src={selectedImage}
          alt={item.title}
          className="w-full h-auto rounded-lg border object-cover"
        />

        {/* Small images row */}
        <div className="flex gap-2 mt-4">
          {[item.image, item.image, item.image, item.image].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt="thumbnail"
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded border cursor-pointer transition hover:scale-110 ${
                  selectedImage === img
                    ? "border-blue-500"
                    : "hover:border-gray-400"
                }`}
              />
            )
          )}
        </div>
      </div>

      {/* Right Section - Product Info */}
      <div className="flex-1">
        {/* Stock status */}
        <div className="text-green-600 font-semibold mb-2">✔️ In stock</div>

        {/* Product Title */}
        <h1 className="text-2xl font-bold">{item.title}</h1>

        {/* Price Range */}
        <div className="flex gap-4 mt-4">
          <div className="text-red-500 font-bold text-xl">
            ${item.price.toFixed(2)}
          </div>
          <div className="text-gray-400 line-through text-lg">
            ${item.discount.toFixed(2)}
          </div>
        </div>

        {/* Price tiers */}
        <div className="mt-2 bg-orange-100 p-2 rounded">
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-black font-bold">$98.00</div>
              <div className="text-sm text-gray-600">50-100 pcs</div>
            </div>
            <div>
              <div className="text-black font-bold">$90.00</div>
              <div className="text-sm text-gray-600">100-700 pcs</div>
            </div>
            <div>
              <div className="text-black font-bold">$78.00</div>
              <div className="text-sm text-gray-600">700+ pcs</div>
            </div>
          </div>
        </div>

        {/* Product features */}
        <div className="mt-4 text-gray-700 space-y-1 text-sm">
          <p>
            <strong>Type:</strong> {item.category}
          </p>
          <p>
            <strong>Brand:</strong> {item.brand}
          </p>
          <p>
            <strong>Features:</strong> {item.Features}
          </p>
          <p>
            <strong>Shipping:</strong> {item.shipping}
          </p>
        </div>

        {/* Inquiry and Wishlist */}
        <div className="flex items-center gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Inquiry
          </button>
          <button className="text-gray-400 hover:text-red-500 text-2xl">
            ❤️
          </button>
        </div>
      </div>

      {/* Supplier Card */}
      <div className="w-full md:w-1/3 p-4 border rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-2">Supplier</h3>
        <div className="text-gray-600 text-sm">Guanjoi Trading LLC</div>
        <div className="text-gray-600 text-sm">Germany, Berlin</div>
        <div className="text-green-600 text-sm mt-2">✅ Verified Seller</div>
        <div className="text-gray-500 text-sm mt-1">🌎 Worldwide Shipping</div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-4 py-2 rounded">
          Send Inquiry
        </button>
        <button className="w-full border border-blue-500 text-blue-500 mt-2 py-2 rounded">
          Seller’s Profile
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
