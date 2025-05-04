import React from "react";
import FilterSection from "./FilterSection";
import DoublePriceRange from "./PriceRange";
import Listitems from "../data/ListpageItems";

const conditionOptions = ["New", "Used", "Refurbished"];
const feature = [...new Set(Listitems.map((item) => item.Features))];

const handlePriceRange = (min, max) => {
  console.log("Selected price range:", min, max);
};

const FilterSidebar = ({ brands, brandFilter, setBrandFilter }) => {
  const toggleBrand = (value) => {
    setBrandFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-4 space-y-6 rounded-lg ">
      <FilterSection
        title="Category"
        options={brands}
        selected={brandFilter}
        onToggle={toggleBrand}
      />
      <FilterSection
        title="Feature"
        options={feature}
        selected={brandFilter}
        onToggle={toggleBrand}
      />
      <FilterSection
        title="Condition"
        options={conditionOptions}
        selected={brandFilter}
        onToggle={toggleBrand}
      />
      <FilterSection
        title="Brand"
        options={brands}
        selected={brandFilter}
        onToggle={toggleBrand}
      />
      <FilterSection title="Price Range">
        <DoublePriceRange onRangeChange={handlePriceRange} />
      </FilterSection>
      <FilterSection title="Ratings">
        {[5, 4, 3, 2].map((stars) => (
          <div key={stars} className="flex items-center space-x-1 mb-1">
            <div className="flex">
              {[...Array(stars)].map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
              {[...Array(5 - stars)].map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
          </div>
        ))}
      </FilterSection>
    </aside>
  );
};

export default FilterSidebar;
