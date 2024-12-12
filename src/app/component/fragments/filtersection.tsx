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
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false); // Toggle untuk filter Availability
  const [isPriceOpen, setIsPriceOpen] = useState(false); // Toggle untuk filter Harga

  // Fungsi toggle untuk membuka/menutup filter Availability
  const toggleAvailability = () => {
    setIsAvailabilityOpen(!isAvailabilityOpen);
  };

  // Fungsi toggle untuk membuka/menutup filter Harga
  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };

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
      <div
        className="w-full h-[40px] border-macaronidark flex flex-row items-center justify-between cursor-pointer"
        onClick={toggleAvailability}
      >
        <h1 className="text-macaronidark font-Inter font-semibold text-md">
          Availability
        </h1>
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${
            isAvailabilityOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
            fill="#3D3322"
          />
        </svg>
      </div>
      {isAvailabilityOpen && (
        <div className="mt-2">
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
        </div>
      )}

      {/* Filter Harga */}
      <div className="w-full mt-4">
        <div
          className="flex flex-row items-center justify-between cursor-pointer"
          onClick={togglePrice}
        >
          <h1 className="text-macaronidark font-Inter font-semibold text-md">
            Price
          </h1>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${
              isPriceOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
              fill="#3D3322"
            />
          </svg>
        </div>
        {isPriceOpen && (
          <div className="mt-2">
            <Box
              sx={{
                width: "100%",
                "& .MuiSlider-thumb": {
                  backgroundColor: "#F2CD87",
                  height: 14,
                  width: 14,
                  border: "1.5px solid #3D3322",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#3D3322",
                  border: "1.5px solid #3D3322",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#D3D3D3",
                },
                "& .MuiSlider-track, & .MuiSlider-rail": {
                  height: 3,
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
        )}
      </div>
    </div>
  );
};

export default FilterSection;
