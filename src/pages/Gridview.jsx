import React, { useState } from "react";
import Listitems from "../data/ListpageItems";
import Breadcrumb from "../components/ApperanceNav";
import Pagination from "../components/Pagination";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
import ItemCard2 from "../components/Itemcard2";
import { Link } from "react-router-dom";
const brands = [...new Set(Listitems.map((item) => item.brand))];

const Gridview = () => {
  const [brandFilter, setBrandFilter] = useState([]);
  const [sortOption, setSortOption] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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
      <div className="flex gap-6 p-4 mt-4 ml-10 w-[95%]">
        {/* Sidebar */}
        <FilterSidebar
          brands={brands}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
        />

        <main className="w-3/4 ">
          <SortBar
            totalItems={filteredItems.length}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          {/* item cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {currentItems.map((item) => (
              <Link to={`/item/${item.id}`} > <ItemCard2 key={item.id} item={item} /></Link>
           
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </main>
      </div>
    </>
  );
};

export default Gridview;
