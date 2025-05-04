import React from "react";
import btnheart from "../assets/Mobile/btn-basic.png";

const ItemCard2 = ({ item }) => (
  <div className="border-none rounded-lg h-[310px] p-3 bg-white shadow-sm hover:shadow-md transition relative">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-40 object-contain mb-3 border-b border-[#BDBDBD] "
    />
    <button className="absolute bottom right-3">
      <img src={btnheart} alt="wishlist"  className="w-7 h-7" />
    </button>
    <div className="text-lg font-semibold text-gray-800">${item.price.toFixed(2)}</div>
    <div className="text-sm line-through text-gray-400">${item.discount.toFixed(2)}</div>
    <div className="flex items-center gap-2 text-sm text-yellow-500 my-1">
      ⭐⭐⭐ {item.rating}
    </div>
    <div className="text-gray-600 text-sm">{item.title}</div>
  </div>
);

export default ItemCard2;
