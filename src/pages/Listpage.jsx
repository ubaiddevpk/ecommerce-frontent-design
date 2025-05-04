import React, { useState } from "react";
import Listitems from "../data/ListpageItems";
import Breadcrumb from "../components/ApperanceNav";
import Pagination from "../components/Pagination";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
import ItemCard from "../components/ItemCard";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
const brands = [...new Set(Listitems.map((item) => item.brand))];

const Listpage = () => {
  const [brandFilter, setBrandFilter] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter and sort logic
  const filteredItems = Listitems.filter((item) =>
    brandFilter.length > 0 ? brandFilter.includes(item.brand) : true
  ).sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <>
      <Breadcrumb />
      <div className="flex gap-6 p-4 mt-4 ml-10 w-[95%] ">
        {/* Sidebar */}
        <FilterSidebar
          brands={brands}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
        />

        <main className="w-3/4">
          <SortBar
            totalItems={filteredItems.length}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          <div className="space-y-4">
            {currentItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </main>
      </div>
      <SubscribeNewsletter/>
    </>
  );
};

export default Listpage;
