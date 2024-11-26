import React from "react";

const demand = () => {
  return (
    <div className="container mt-20 flex flex-row items-center justify-center w-[1280px] h-[476px] mx-auto gap-[0px]">
      {/* Gambar */}
      <img
        className="w-1/2 h-[476px] rounded-lg object-cover object-top shadow-md"
        src="/img/demand.jpg"
        alt="Demand"
      />

      {/* Konten */}
      <div className="flex flex-col items-center justify-center gap-[15px] w-1/2 h-full">
        <h1 className="text-macaronidark font-beautiqueMed text-4xl mt-0">
          Rentaloca on demand
        </h1>
        <h2 className="text-macaronidark font-Inter text-md mt-0">
          Need one-time rental for your special day?
        </h2>
        <h2 className="text-macaronidark font-Inter text-md -mt-[10px]">
          for 4 days starting from{" "}
          <span className="font-bold">IDR 200.000</span>
        </h2>
      </div>
    </div>
  );
};

export default demand;
