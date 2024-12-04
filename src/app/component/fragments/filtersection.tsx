"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

type FilterSectionProps = {
  handleFilter: (availability: boolean | null) => void;
  handlePriceRange: (priceRange: number[]) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  handleFilter,
  handlePriceRange,
}) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000000]); // Rentang harga default

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    handlePriceRange(newValue as number[]);
  };

  return (
    <div className="container md:w-[185px] md:h-auto w-full h-full md:px-0 px-8">
      <h1 className="text-macaronidark font-Inter w-full text-2xl md:mb-8 mb-4 border-b-2 border-macaronidark">
        FILTER
      </h1>

      {/* Filter Ketersediaan */}
      <div className="w-full h-[40px] border-macaronidark flex items-center justify-between">
        <h1 className="text-macaronidark font-Inter font-semibold text-md">
          Availability
        </h1>
      </div>
      <label className="flex w-full space-x-2 mb-3 -ml-2">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={() => handleFilter(true)}
        />
        <div className="w-5 h-5 rounded-full border-2 border-macaronidark peer-checked:bg-macaronidark3 peer-checked:border-macaronidark transition"></div>
        <span className="text-macaronidark text-sm">Available</span>
      </label>
      <label className="flex w-full space-x-2 mb-3 -ml-2">
        <input
          type="checkbox"
          className="hidden peer"
          onChange={() => handleFilter(false)}
        />
        <div className="w-5 h-5 rounded-full border-2 border-macaronidark peer-checked:bg-macaronidark3 peer-checked:border-macaronidark transition"></div>
        <span className="text-macaronidark text-sm">Unavailable</span>
      </label>

      {/* Filter Harga */}
      <div className="mt-4">
        <h1 className="text-macaronidark font-Inter font-semibold text-md mb-2">
          Price Range
        </h1>
        <Box sx={{ width: 200 }}>
          <Slider
            getAriaLabel={() => "Price range"}
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={2000000}
            step={50000}
          />
        </Box>
        <div className="flex justify-between mt-2 text-sm">
          <span>Min: Rp {priceRange[0].toLocaleString("id-ID")}</span>
          <span>Max: Rp {priceRange[1].toLocaleString("id-ID")}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
