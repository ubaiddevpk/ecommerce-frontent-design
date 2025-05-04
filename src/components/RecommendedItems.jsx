const RecommendedItems = ({ items }) => {
  return (
    <div className="p-4 mt-4 ml-10 w-[95%]">
      <h2 className="text-xl font-semibold mb-4 ml-4">Recommended items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-16 hover:cursor-pointer ">
        {items.map((item, index) => (
          <div key={index} className=" p-2 bg-white  text-center shadow-sm hover:shadow-md  transition-transform duration-300 hover:scale-105">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-3"
            />
            <p className="font-bold text-lg mb-1">${item.price}</p>
            <p className="text-sm text-gray-600">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
