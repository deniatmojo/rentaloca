"use client";
import React, { useState } from "react";
import ClothingCard from "../elements/ClothingCard";

const Catalogbaju = () => {
  const clothingItems = [
    {
      name: "Julia Set Nude Pink",
      image: "/img/julia-nude-pink.jpg",
      price: "468.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-nude-pink",
    },
    {
      name: "Julia Set Cream",
      image: "/img/julia-cream.jpg",
      price: "468.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-cream",
    },
    {
      name: "Kirei Dress Grey",
      image: "/img/kirei-dress-grey/main.png",
      price: "1.022.500,00",
      available: false,
      link: "/detail-catalogue/kirei-dress-grey",
    },
    // ...data lainnya
  ];

  const [sortedItems, setSortedItems] = useState(clothingItems);
  const [filterAvailable, setFilterAvailable] = useState<null | boolean>(null);
  const [priceRange, setPriceRange] = useState([0, 2000000]); // Harga dalam IDR x1000
  const [sortType, setSortType] = useState("name-asc");

  // Fungsi untuk menghandle filter dan sort
  const filteredAndSortedItems = sortedItems
    .filter((item) => {
      const price = parseFloat(item.price.replace(/\./g, "").replace(",", "."));
      const isAvailable =
        filterAvailable === null || item.available === filterAvailable;
      const isInPriceRange = price >= priceRange[0] && price <= priceRange[1];
      return isAvailable && isInPriceRange;
    })
    .sort((a, b) => {
      switch (sortType) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-low-high":
          return (
            parseFloat(a.price.replace(/\./g, "").replace(",", ".")) -
            parseFloat(b.price.replace(/\./g, "").replace(",", "."))
          );
        case "price-high-low":
          return (
            parseFloat(b.price.replace(/\./g, "").replace(",", ".")) -
            parseFloat(a.price.replace(/\./g, "").replace(",", "."))
          );
        default:
          return 0;
      }
    });

  return (
    <div className="container flex flex-row justify-between w-[1280px] mx-auto gap-5 mt-20">
      {/* Sidebar Filter */}
      <div className="w-[185px]">
        <h1 className="text-2xl font-bold border-b-2 mb-8">Filter</h1>
        {/* Filter Ketersediaan */}
        <div>
          <h2 className="text-lg font-semibold">Available</h2>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => setFilterAvailable(true)}
            />
            Available
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => setFilterAvailable(false)}
            />
            Unavailable
          </label>
        </div>

        {/* Filter Harga */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Price Range</h2>
          <input
            type="range"
            min="0"
            max="2000000"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-full mt-2"
          />
          <input
            type="range"
            min="0"
            max="2000000"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full mt-2"
          />
          <div>
            Rp {priceRange[0].toLocaleString()} - Rp{" "}
            {priceRange[1].toLocaleString()}
          </div>
        </div>
      </div>

      {/* Konten Produk */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h2 className="mr-2">Sort by:</h2>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="price-low-high">Price Low-High</option>
              <option value="price-high-low">Price High-Low</option>
            </select>
          </div>
          <div>{filteredAndSortedItems.length} Products</div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredAndSortedItems.map((item, index) => (
            <ClothingCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogbaju;
