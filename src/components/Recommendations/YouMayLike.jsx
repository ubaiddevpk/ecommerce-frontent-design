// components/YouMayLike.jsx
import YouMayLikeData from "../../data/YouMayLikeData";

const YouMayLike = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow  w-[100%] relative mb-7 pt-[50px] ">
      <h2 className="text-base font-semibold mb-3 text-gray-800">You may like</h2>
      <div className="space-y-4">
        {YouMayLikeData.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-md border"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-700 leading-tight">{item.name}</h3>
              <div className="text-xs mt-1">
                <span className="line-through text-gray-400 mr-2">${item.price}</span>
                <span className="text-red-500 font-semibold">${item.discountPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;
