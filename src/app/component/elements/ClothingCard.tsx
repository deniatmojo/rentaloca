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
      <div className="flex flex-col h-[481px]">
        <img
          className="w-[333px] h-[405px] rounded-md object-cover"
          src={image}
          alt={name}
        />
        <h2 className="text-black font-beautiqueMed mt-1 text-lg">{name}</h2>
        <h3 className="text-black font-Inter mt-1 mb-2 text-sm">Rp. {price}</h3>
      </div>
    </a>
  );
};

export default ClothingCard;
