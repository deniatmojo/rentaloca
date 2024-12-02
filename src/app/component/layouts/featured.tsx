import React from "react";

const Featured = () => {
  return (
    <div className="container mx-auto mt-20 w-full px-4">
      {/* Header */}
      <div className="flex items-center justify-center text-black">
        <h1 className="text-macaronidark font-beautiqueMed text-4xl md:text-6xl text-center mb-8">
          Featured Designer
        </h1>
      </div>

      {/* Gambar-gambar Featured */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-3 md:mt-5 mt-0 items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            className="w-[225px] h-[225px] object-cover rounded-lg"
            src="/img/hegiana.png"
            alt="Designer 1"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[225px] h-[225px] object-cover rounded-lg"
            src="/img/emmy.png"
            alt="Designer 2"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[225px] h-[225px] object-cover rounded-lg"
            src="/img/djahet.png"
            alt="Designer 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
