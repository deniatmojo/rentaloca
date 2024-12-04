import React from "react";

const demand = () => {
  return (
    <div className="container md:mt-[128px] mt-[64px] flex flex-col md:flex-row items-center justify-center w-full mx-auto px-4 md:gap-5 gap-[32px]">
      {/* Gambar */}
      <img
        className="w-full md:w-1/2 h-[476px] rounded-lg object-cover object-top shadow-md"
        src="/img/demand.jpg"
        alt="Demand"
      />

      {/* Konten */}
      <div className="flex flex-col items-center justify-center gap-[15px] w-full md:w-1/2 h-full">
        <h1 className="text-macaronidark font-beautiqueMed md:text-[42px] text-3xl md:mt-0 mt-4 text-center md:text-left">
          Rentaloca on demand
        </h1>
        <h2 className="text-macaronidark font-Inter md:text-[20px] text-md mt-0 text-center md:text-left">
          Need one-time rental for your special day?
        </h2>
        <h2 className="text-macaronidark font-Inter md:text-[20px] text-md -mt-[10px] text-center md:text-left">
          On Your Choice Starting From{" "}
          <span className="font-bold">IDR 200.000</span>
        </h2>
        <a href="/catalogue">
          <h2 className="bg-macaronilight2 text-macaronidark md:text-[20px] text-md py-2 px-4 rounded-md mt-2">
            Browse On Demand
          </h2>
        </a>
      </div>
    </div>
  );
};

export default demand;
