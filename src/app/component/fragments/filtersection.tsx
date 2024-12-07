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
  const [priceRange, setPriceRange] = useState<number[]>([0, 900000]); // Rentang harga default

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
          Price
        </h1>
        <Box
          sx={{
            width: {
              xs: "100%", // Lebar penuh untuk layar kecil (mobile)
              md: "100%", // Lebar tetap 185px untuk layar medium ke atas
              color: "#3D3322", // Warna utama slider
              "& .MuiSlider-thumb": {
                backgroundColor: "#F2CD87", // Warna knob (titik geser)
                height: 14, // Tinggi knob (default 20)
                width: 14, // Lebar knob (default 20)
                border: "1.5px solid #3D3322",
              },
              "& .MuiSlider-track": {
                backgroundColor: "#3D3322", // Warna track aktif
                border: "1.5px solid #3D3322",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#D3D3D3", // Warna track non-aktif
              },
              "& .MuiSlider-track, & .MuiSlider-rail": {
                height: 3,
              },
            },
          }}
        >
          <Slider
            getAriaLabel={() => "Price range"}
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={900000}
            step={50000}
          />
        </Box>
        <div className="flex justify-between mt-2 text-sm">
          <div className="md:w-[70px] w-[90px] h-[24px] rounded-full md:border-1.5 border-2 justify-center items-center border-macaronidark flex">
            <span className="md:text-[11px] text-[12px] text-macaronidark">
              {priceRange[0].toLocaleString("id-ID")}
            </span>
          </div>
          <div className="md:w-[70px] w-[90px] h-[24px] rounded-full md:border-1.5 border-2 justify-center items-center border-macaronidark flex">
            <span className="md:text-[11px] text-[12px] text-macaronidark">
              {priceRange[1].toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
