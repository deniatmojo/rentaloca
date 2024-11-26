"use client";

import React, { useState } from "react";

function PriceSlider() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  return (
    <div className="p-4 bg-white rounded-lg dark:bg-gray-800">
      {/* Slider */}
      <div className="flex flex-col items-center">
        {/* Slider Range */}
        <input
          id="price-range-min"
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full h-1 mb-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <input
          id="price-range-max"
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />

        {/* Harga */}
        <div className="flex justify-between w-full mt-4">
          <span className="px-4 py-2 text-sm font-medium text-gray-900 border rounded-full dark:text-white dark:border-gray-600">
            Rp {minPrice}
          </span>
          <span className="px-4 py-2 text-sm font-medium text-gray-900 border rounded-full dark:text-white dark:border-gray-600">
            Rp {maxPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PriceSlider;
