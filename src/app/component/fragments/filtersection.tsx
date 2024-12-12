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
  const [tempMin, setTempMin] = useState(priceRange[0].toString());
  const [tempMax, setTempMax] = useState(priceRange[1].toString());

  // Fungsi toggle untuk membuka/menutup filter Availability
  const toggleAvailability = () => {
    setIsAvailabilityOpen(!isAvailabilityOpen);
  };

  // Fungsi toggle untuk membuka/menutup filter Harga
  const togglePrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  const formatToRupiah = (value: string | number): string => {
    const num = Number(value);
    return `Rp ${num.toLocaleString("id-ID")}`;
  };

  const parseFromRupiah = (value: string): number => {
    return Number(value.replace(/[^\d]/g, "")) || 0;
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
              onChange={(e) => {
                if (!e.target.checked) {
                  handleFilter(null); // Default, tampilkan semua produk
                } else {
                  handleFilter(true); // Tampilkan produk available
                }
              }}
            />
            <div className="w-5 h-5 rounded-full border-2 border-macaronidark peer-checked:bg-macaronidark3 peer-checked:border-macaronidark transition"></div>
            <span className="text-macaronidark text-sm">Available</span>
          </label>
          <label className="flex w-full space-x-2 mb-3 -ml-2">
            <input
              type="checkbox"
              className="hidden peer"
              onChange={(e) => {
                if (!e.target.checked) {
                  handleFilter(null); // Default, tampilkan semua produk
                } else {
                  handleFilter(false); // Tampilkan produk unavailable
                }
              }}
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
                onChange={(e, newValue) => {
                  setPriceRange(newValue as number[]);
                  setTempMin((newValue as number[])[0].toString());
                  setTempMax((newValue as number[])[1].toString());
                  handlePriceRange(newValue as number[]);
                }}
                valueLabelDisplay="auto"
                min={0}
                max={900000}
                step={10000}
              />
            </Box>
            <div className="flex justify-between mt-2 text-sm md:gap-2">
              {/* Input untuk nilai minimum */}
              <input
                type="text"
                value={formatToRupiah(tempMin)}
                onChange={(e) => {
                  const numericValue = parseFromRupiah(e.target.value);
                  setTempMin(numericValue.toString());
                }}
                onBlur={() => {
                  const value = Math.min(
                    Math.max(parseFromRupiah(tempMin), 0), // Minimum value is 0
                    priceRange[1] // Do not exceed max
                  );
                  setPriceRange([value, priceRange[1]]);
                  handlePriceRange([value, priceRange[1]]);
                  setTempMin(value.toString());
                }}
                className="md:w-[80px] w-[90px] h-[24px] rounded-full md:border-1.5 border-2 justify-center items-center border-macaronidark text-center text-macaronidark md:text-[11px] text-[12px] input-no-spinner"
              />
              {/* Input untuk nilai maksimum */}
              <input
                type="text"
                value={formatToRupiah(tempMax)}
                onChange={(e) => {
                  const numericValue = parseFromRupiah(e.target.value);
                  setTempMax(numericValue.toString());
                }}
                onBlur={() => {
                  const value = Math.max(
                    Math.min(parseFromRupiah(tempMax), 900000), // Maximum value is 900000
                    priceRange[0] // Do not go below min
                  );
                  setPriceRange([priceRange[0], value]);
                  handlePriceRange([priceRange[0], value]);
                  setTempMax(value.toString());
                }}
                className="md:w-[80px] w-[90px] h-[24px] rounded-full md:border-1.5 border-2 justify-center items-center border-macaronidark text-center text-macaronidark md:text-[11px] text-[12px] input-no-spinner"
              />
            </div>
            <style jsx>{`
              /* Hilangkan spinner di semua browser */
              .input-no-spinner::-webkit-inner-spin-button,
              .input-no-spinner::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
              .input-no-spinner {
                -moz-appearance: textfield; /* Hilangkan spinner untuk Firefox */
                appearance: textfield; /* Kompatibilitas untuk browser lainnya */
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
