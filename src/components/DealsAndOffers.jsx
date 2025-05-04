import { useState, useEffect } from "react";

function DealsAndOffers({ title, subtitle, endTime, products }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = new Date(endTime) - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow mt-4 mx-auto w-[95%]">

      {/* Left side panel */}
      <div className="w-full lg:w-1/4 bg-white text-black flex flex-col justify-center items-center p-4 border-b lg:border-b-0 border-gray-400 lg:border-r">
        <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-sm text-gray-400 mb-4 text-center">{subtitle}</p>

        {/* Timer */}
        <div className="flex space-x-2 justify-center">
          {['Days', 'Hr', 'Min', 'Sec'].map((label, i) => (
            <div
              key={i}
              className="bg-gray-800 p-2 rounded text-white text-center w-12 transition-transform duration-300 hover:scale-105"
            >
              <div>
                {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i]
                  .toString()
                  .padStart(2, '0')}
              </div>
              <div className="text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2 w-full lg:w-3/4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col border border-gray-300 text-center overflow-hidden transition-transform duration-300 hover:scale-105 bg-white"
          >
            <div className="w-full h-32 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-28 object-contain"
              />
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <span className="text-red-500 text-xs font-semibold bg-red-100 px-2 py-1 rounded-full inline-block mt-1">
                -{product.discount}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealsAndOffers;
