"use client";
import React from "react";
interface ClothingCardProps {
  name: string;
  image: string;
  price: string;
  link: string;
}

const ClothingCard = ({ name, image, price, link }: ClothingCardProps) => {
  return (
    <a href={link}>
      <div className="flex flex-col md:h-[481px] h-auto w-full">
        <img
          className="md:w-[333px] md:h-[405px] w-[333px] h-[460px] md:rounded-md rounded-xl object-cover"
          src={image}
          alt={name}
        />
        <h2 className="text-black font-beautiqueMed md:mt-1 mt-2 text-lg">
          {name}
        </h2>
        <h3 className="text-black font-Inter mt-1 mb-2 text-sm">Rp. {price}</h3>
      </div>
    </a>
  );
};

export default ClothingCard;
