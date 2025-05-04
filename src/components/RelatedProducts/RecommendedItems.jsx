import React from "react";
import ListpageItems from "../../data/ListpageItems";

const RecommendedItems = () => {
  const recommended = ListpageItems.slice(0, 6);

  return (
    <div className="p-4 mt-4 ml-10   bg-white rounded-md shadow-sm w-[95%]">
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 lg:grid-cols-6">
        {recommended.map((item) => (
          <div
            key={item.id}
            className="min-w-[180px]  rounded-md shadow hover:shadow-md p-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-contain mb-2"
            />
            <h3 className="text-xs font-medium text-gray-800 truncate">
              {item.title}
            </h3>
            <p className="text-red-600 font-bold text-sm mt-1">
              ${item.price}
            </p>
            <p className="text-xs text-gray-500">{item.orders} orders</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;

