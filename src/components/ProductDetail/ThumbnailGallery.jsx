import React, { useState } from "react";
import image35 from "../../assets/Thumbnailgallery/image 35.png";
import image36 from "../../assets/Thumbnailgallery/image 36.png";
import image37 from "../../assets/Thumbnailgallery/image 37.png";
import image38 from "../../assets/Thumbnailgallery/image 38.png";
import image39 from "../../assets/Thumbnailgallery/image 39.png";
import image40 from "../../assets/Thumbnailgallery/image 40.png";

const images = [image35, image36, image37, image38, image39, image40];

const ThumbnailGallery = ({ setSelectedImage }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleThumbnailClick = (img, index) => {
    setSelectedImage(img);
    setActiveIndex(index);
  };

  return (
    <div className="flex gap-1 mt-2">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`thumb-${index}`}
          onClick={() => handleThumbnailClick(img, index)}
          className={`w-[44px] h-[44px] object-cover rounded cursor-pointer border-2 
            ${activeIndex === index ? "border-gray-500" : "border-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default ThumbnailGallery;
