import React from "react";

function ProductGallery({ selectedImage, title }) {
  return (
    <div className="mt-2 ml-2 pb-[100px] bg-white border border-gray-400 h-[300px]">
      <img
        src={selectedImage}
        alt={title}
        className="rounded-lg  object-cover w-[290px] h-[290px]"
      />
    </div>
  );
}

export default ProductGallery;
