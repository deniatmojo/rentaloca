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
  const [isShortOpen, setIsShortOpen] = useState(false); // Menambahkan state untuk short by

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

  // Fungsi untuk toggle menu burger
  const toggleShort = () => {
    setIsShortOpen(!isShortOpen);
  };

  return (
    <div className="container flex flex-wrap md:flex-nowrap md:justify-between relative w-full h-full md:mt-20 mt-10 mx-auto gap-5 md:px-10">
      {/* Sidebar Filter */}
      <FilterSection
        handleFilter={handleFilter}
        handlePriceRange={handlePriceRange}
      />

      {/* Main Content */}
      <div className="relative container mt-4 w-full h-full md:mt-0 flex md:flex-col flex-wrap mb-16">
        {/* Sort & Count */}
        <div className="flex w-full flex-row items-center justify-between px-8 md:mb-0 mb-4">
          <div className="flex flex-row w-[180px] items-center">
            <button
              onClick={toggleShort}
              aria-label="sort"
              className="flex flex-row items-center space-x-2"
            >
              <h1 className="text-macaronidark font-Inter text-sm">Sort by</h1>
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3538 0.853754L6.35378 5.85375C6.30735 5.90024 6.2522 5.93712 6.1915 5.96228C6.13081 5.98745 6.06574 6.0004 6.00003 6.0004C5.93433 6.0004 5.86926 5.98745 5.80856 5.96228C5.74786 5.93712 5.69272 5.90024 5.64628 5.85375L0.646284 0.853754C0.552464 0.759933 0.499756 0.632685 0.499756 0.500003C0.499756 0.367321 0.552464 0.240073 0.646284 0.146253C0.740104 0.0524328 0.867352 -0.000274658 1.00003 -0.000274658C1.13272 -0.000274658 1.25996 0.0524328 1.35378 0.146253L6.00003 4.79313L10.6463 0.146253C10.6927 0.099798 10.7479 0.0629478 10.8086 0.0378065C10.8693 0.0126652 10.9343 -0.000274658 11 -0.000274658C11.0657 -0.000274658 11.1308 0.0126652 11.1915 0.0378065C11.2522 0.0629478 11.3073 0.099798 11.3538 0.146253C11.4002 0.192708 11.4371 0.247859 11.4622 0.308555C11.4874 0.369252 11.5003 0.434306 11.5003 0.500003C11.5003 0.565701 11.4874 0.630755 11.4622 0.691452C11.4371 0.752148 11.4002 0.807298 11.3538 0.853754Z"
                  fill="#3D3322"
                />
              </svg>
            </button>
          </div>
          <label className="bg-white text-macaronidark rounded-full px-1 py-1 text-xs border-[1px] border-macaronidark3">
            {filteredAndSortedItems.length} Product
            {filteredAndSortedItems.length !== 1 ? "s" : ""}
          </label>
        </div>

        {/* Short by menu */}
        {isShortOpen && (
          <div className="absolute top-12 left-8 bg-macaronilight3 w-[160px] md:w-[180px] py-2 px-2 rounded-md shadow-md">
            <div className="space-y-4">
              <ul className="p-1 text-sm text-gray-700">
                <li
                  className="py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSort("name-asc")}
                >
                  Name A-Z
                </li>
                <li
                  className="py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSort("name-desc")}
                >
                  Name Z-A
                </li>
                <li
                  className="py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSort("price-low-high")}
                >
                  Price Low-High
                </li>
                <li
                  className="py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSort("price-high-low")}
                >
                  Price High-Low
                </li>
                {/* Menu tambahan lainnya */}
              </ul>
            </div>
          </div>
        )}

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
