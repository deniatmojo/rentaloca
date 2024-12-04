"use client";
import React, { useState } from "react";
import ClothingCard from "../elements/ClothingCard";
import FilterSection from "../fragments/filtersection"; // Import FilterSection

const Catalogbaju = () => {
  const itemsPerPage = 6; // Jumlah item per halaman
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini

  const clothingItems = [
    {
      name: "Julia Set Nude Pink",
      image: "/img/julia-nude-pink.jpg",
      price: "180000",
      available: true,
      link: "/detail-catalogue/julia-set-nude-pink",
    },
    {
      name: "Julia Set Cream",
      image: "/img/julia-cream.jpg",
      price: "180000",
      available: true,
      link: "/detail-catalogue/julia-set-cream",
    },
    {
      name: "Julia Set Seige Green",
      image: "/img/julia.png",
      price: "180000",
      available: true,
      link: "/detail-catalogue/julia-set-green",
    },
    {
      name: "Julia Set Black Nude Pink",
      image: "/img/julia-black-nude-pink.jpg",
      price: "180000",
      available: true,
      link: "/detail-catalogue/julia-set-black-nude-pink",
    },
    {
      name: "Julia Set Blue",
      image: "/img/julia-blue.jpg",
      price: "180000",
      available: true,
      link: "/detail-catalogue/julia-set-blue",
    },
    {
      name: "Julia Set Pink",
      image: "/img/julia-pink.jpg",
      price: "200000",
      available: true,
      link: "/detail-catalogue/julia-set-pink",
    },
    {
      name: "Julia Set Seige Green Man",
      image: "/img/julia-man-seige-green.jpg",
      price: "200000",
      available: true,
      link: "/detail-catalogue/julia-set-nude-pink",
    },
    {
      name: "Julia Set Black Nude Pink Man",
      image: "/img/julia-man-black-nude-pink.jpg",
      price: "180000",
      available: true,
      link: "/detail-catalogue/julia-set-nude-pink",
    },
    {
      name: "Ayumi Dress Grey",
      image: "/img/ayumi-grey.png",
      price: "235000",
      available: true,
      link: "/detail-catalogue/ayumi-dress-grey",
    },
    {
      name: "Finolla Dress Cream",
      image: "/img/finola.png",
      price: "245000",
      available: true,
      link: "/detail-catalogue/finolla-dress-cream",
    },
    {
      name: "Kanawa Dress Black",
      image: "/img/kanawa.png",
      price: "265000",
      available: true,
      link: "/detail-catalogue/kanawa-dress-black",
    },
    {
      name: "Festive Samalaya Dress Grey",
      image: "/img/samalaya-grey.png",
      price: "649000",
      available: true,
      link: "/detail-catalogue/festive-samalaya-dress-grey",
    },
    {
      name: "Sasha Dress Green",
      image: "/img/sasha.png",
      price: "255000",
      available: true,
      link: "/detail-catalogue/sasha-dress-green",
    },
    {
      name: "Kebaya Kenangan Nenek Black",
      image: "/img/kebaya-kenangan-nenek/main.png",
      price: "265000",
      available: true,
      link: "/detail-catalogue/kebaya-kenangan-nenek",
    },
    {
      name: "Leona Dress Rose Gold",
      image: "/img/leona-dress.jpeg",
      price: "600000",
      available: true,
      link: "/detail-catalogue/leona-dress-rose-gold",
    },
    {
      name: "Mera Dress Pink",
      image: "/img/mera-dress.png",
      price: "200000",
      available: true,
      link: "/detail-catalogue/mera-dress-pink",
    },
    {
      name: "Bonita Dress Pink",
      image: "/img/bonita.png",
      price: "200000",
      available: true,
      link: "/detail-catalogue/bonita-dress-pink",
    },
    {
      name: "Kirei Dress Grey",
      image: "/img/kirei-dress-grey/main.png",
      price: "235000",
      available: false,
      link: "/detail-catalogue/kirei-dress-grey",
    },
  ];

  // State untuk menyimpan items yang diurutkan
  const [sortedItems, setSortedItems] = useState(clothingItems);
  const [filterAvailable, setFilterAvailable] = useState<null | boolean>(null);
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000000]); // Rentang harga default

  const handleFilter = (availability: boolean | null) => {
    setFilterAvailable(availability);
  };

  const handlePriceRange = (range: number[]) => {
    setPriceRange(range);
  };

  const filteredAndSortedItems = sortedItems.filter((item) => {
    const isWithinPriceRange =
      parseInt(item.price) >= priceRange[0] &&
      parseInt(item.price) <= priceRange[1];
    const matchesAvailability =
      filterAvailable === null || item.available === filterAvailable;
    return isWithinPriceRange && matchesAvailability;
  });

  // Fungsi untuk menghandle sort
  const handleSort = (type: string) => {
    let sorted;
    switch (type) {
      case "name-asc":
        sorted = [...clothingItems].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "name-desc":
        sorted = [...clothingItems].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case "price-low-high":
        sorted = [...clothingItems].sort(
          (a, b) => parseInt(a.price) - parseInt(b.price)
        );
        break;
      case "price-high-low":
        sorted = [...clothingItems].sort(
          (a, b) => parseInt(b.price) - parseInt(a.price)
        );
        break;
      default:
        sorted = clothingItems;
    }
    setSortedItems(sorted);
  };

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const currentItems = filteredAndSortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container flex flex-wrap md:flex-nowrap md:justify-between relative w-full h-full md:mt-20 mt-10 mx-auto gap-5 md:px-10">
      {/* Sidebar Filter */}
      <FilterSection
        handleFilter={handleFilter}
        handlePriceRange={handlePriceRange}
      />

      {/* Main Content */}
      <div className="container w-full h-full mt-0 flex md:flex-col flex-wrap mb-16">
        {/* Sort & Count */}
        <div className="flex w-full flex-row items-center justify-between px-8 md:mb-0 mb-4">
          <div className="flex items-center">
            <h1 className="text-macaronidark font-Inter text-sm mr-2">
              Sort by:
            </h1>
            <select
              onChange={(e) => handleSort(e.target.value)}
              className="bg-white border-[1px] border-macaronidark3 rounded-md px-2 py-1 text-sm"
            >
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="price-low-high">Price Low-High</option>
              <option value="price-high-low">Price High-Low</option>
            </select>
          </div>
          <label className="bg-white text-macaronidark rounded-full px-1 py-1 text-xs border-[1px] border-macaronidark3">
            {filteredAndSortedItems.length} Product
            {filteredAndSortedItems.length !== 1 ? "s" : ""}
          </label>
        </div>

        {/* Clothing Cards */}
        <div className="md:grid md:grid-cols-3 flex flex-wrap w-full px-9 md:px-0 mt-4 gap-4 md:justify-between justify-center">
          {currentItems.map((item, index) => (
            <ClothingCard
              key={index}
              name={item.name}
              image={item.image}
              price={item.price}
              link={item.link}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 space-x-2 mx-auto">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 border rounded-md ${
                currentPage === index + 1
                  ? "bg-macaronidark text-white"
                  : "bg-white text-macaronidark"
              }`}
              onClick={() => changePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogbaju;
