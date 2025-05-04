import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅
import btnheart from "../assets/Mobile/btn-basic.png";
import cartIcon from "../assets/Mobile/Vector.png";

const ItemCard = ({ item }) => {
  const { dispatch } = useCart(); // ✅

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    // ✅
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 border border-gray-300 bg-white p-4 rounded-[10px] items-start sm:items-center relative">
      <img src={item.image} alt={item.title} className="w-full sm:w-32 sm:h-32 h-auto object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
          <p className="line-through text-gray-400">${item.discount.toFixed(2)}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-yellow-500 mt-1 text-sm">
          ⭐⭐⭐ {item.rating}
          <span className="text-gray-500">• {item.orders} orders</span>
          <span className="text-green-600">• {item.shipping}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to={`/item/${item.id}`} className="text-blue-600 underline mt-2 inline-block text-sm">View details</Link>
      </div>

      <button className="absolute top-2 right-2">
        <img src={btnheart} alt="wishlist" className="w-5 h-5" />
      </button>

      {/* ✅ Cart Icon */}
      <button className="absolute top-[85%] right-2 hover:cursor-pointer" onClick={()=>{
        handleAddToCart(),
        alert("Item added successfully");
      }} >
        <img src={cartIcon} alt="add to cart" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ItemCard;
