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
      name: "Julia Set Seige Green",
      image: "/img/julia.png",
      price: "468.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-green",
    },
    {
      name: "Julia Set Black Nude Pink",
      image: "/img/julia-black-nude-pink.jpg",
      price: "468.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-black-nude-pink",
    },
    {
      name: "Julia Set Blue",
      image: "/img/julia-blue.jpg",
      price: "468.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-blue",
    },
    {
      name: "Julia Set Pink",
      image: "/img/julia-pink.jpg",
      price: "528.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-pink",
    },
    {
      name: "Julia Set Seige Green Man",
      image: "/img/julia-man-seige-green.jpg",
      price: "528.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-nude-pink",
    },
    {
      name: "Julia Set Black Nude Pink Man",
      image: "/img/julia-man-black-nude-pink.jpg",
      price: "468.000,00",
      available: true,
      link: "/detail-catalogue/julia-set-nude-pink",
    },
    {
      name: "Ayumi Dress Grey",
      image: "/img/ayumi-grey.png",
      price: "649.000,00",
      available: true,
      link: "/detail-catalogue/ayumi-dress-grey",
    },
    {
      name: "Finolla Dress Cream",
      image: "/img/finola.png",
      price: "749.000,00",
      available: true,
      link: "/detail-catalogue/finolla-dress-cream",
    },
    {
      name: "Kanawa Dress Black",
      image: "/img/kanawa.png",
      price: "649.000,00",
      available: true,
      link: "/detail-catalogue/kanawa-dress-black",
    },
    {
      name: "Festive Samalaya Dress Grey",
      image: "/img/samalaya-grey.png",
      price: "649.000,00",
      available: true,
      link: "/detail-catalogue/festive-samalaya-dress-grey",
    },
    {
      name: "Sasha Dress Green",
      image: "/img/sasha.png",
      price: "925.000,00",
      available: true,
      link: "/detail-catalogue/sasha-dress-green",
    },
    {
      name: "Kebaya Kenangan Nenek Black",
      image: "/img/kebaya-kenangan-nenek/main.png",
      price: "1.022.500,00",
      available: true,
      link: "/detail-catalogue/kebaya-kenangan-nenek",
    },
    {
      name: "Leona Dress Rose Gold",
      image: "/img/leona-dress.jpeg",
      price: "600.000,00",
      available: true,
      link: "/detail-catalogue/leona-dress-rose-gold",
    },
    {
      name: "Mera Dress Pink",
      image: "/img/mera-dress.png",
      price: "600.000,00",
      available: true,
      link: "/detail-catalogue/mera-dress-pink",
    },
    {
      name: "Bonita Dress Pink",
      image: "/img/bonita.png",
      price: "600.000,00",
      available: true,
      link: "/detail-catalogue/bonita-dress-pink",
    },
    {
      name: "Kirei Dress Grey",
      image: "/img/kirei-dress-grey/main.png",
      price: "1.022.500,00",
      available: false,
      link: "/detail-catalogue/kirei-dress-grey",
    },
  ];

  // State untuk menyimpan items yang diurutkan
  const [sortedItems, setSortedItems] = useState(clothingItems);
  const [filterAvailable, setFilterAvailable] = useState<null | boolean>(null);
  const [priceRange, setPriceRange] = useState([0, 2000000]); // Nilai awal range harga

  const handleFilter = (availability: boolean | null) => {
    setFilterAvailable(availability);
  };

  const filteredAndSortedItems = sortedItems.filter((item) => {
    if (filterAvailable === null) return true;
    return item.available === filterAvailable;
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
          (a, b) =>
            parseFloat(a.price.replace(/\./g, "").replace(",", ".")) -
            parseFloat(b.price.replace(/\./g, "").replace(",", "."))
        );
        break;
      case "price-high-low":
        sorted = [...clothingItems].sort(
          (a, b) =>
            parseFloat(b.price.replace(/\./g, "").replace(",", ".")) -
            parseFloat(a.price.replace(/\./g, "").replace(",", "."))
        );
        break;
      default:
        sorted = clothingItems;
    }
    setSortedItems(sorted);
  };

  return (
    <div className="container flex flex-row justify-between relative w-[1280px] h-full mt-20 mx-auto gap-5">
      <div className="container w-[185px] h-[250px]">
        <h1 className="text-macaronidark font-Inter w-full text-2xl mb-8 border-b-2 border-macaronidark">
          FILTER
        </h1>
        <div className="w-full h-[40px] border-macaronidark flex items-center justify-between">
          <h1 className="text-macaronidark font-Inter font-semibold text-md">
            Available
          </h1>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
              fill="#3D3322"
            />
          </svg>
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
      </div>
      <div className="container w-[1063px] h-full mt-0 flex flex-col ">
        <div className="flex flex-row items-center justify-between">
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
        <div className="grid grid-cols-3 w-full mt-4 gap-4 justify-between">
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
