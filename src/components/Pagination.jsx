// components/Pagination.jsx
import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => (
  <div className="mt-6 flex gap-2">
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-black text-white" : ""}`}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;