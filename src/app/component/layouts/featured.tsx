import React from "react";

const Featured = () => {
  return (
    <div className="container mx-auto mt-20 w-full px-4">
      {/* Header */}
      <div className="flex items-center justify-center text-black">
        <h1 className="text-macaronidark font-beautiqueMed text-3xl sm:text-4xl lg:text-6xl text-center mb-8">
          Featured Designer
        </h1>
      </div>

      {/* Gambar-gambar Featured */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        <img
          className="w-full h-[225px] object-cover rounded-lg"
          src="/img/hegiana.png"
          alt="Designer 1"
        />
        <img
          className="w-full h-[225px] object-cover rounded-lg"
          src="/img/emmy.png"
          alt="Designer 2"
        />
        <img
          className="w-full h-[225px] object-cover rounded-lg"
          src="/img/djahet.png"
          alt="Designer 3"
        />
      </div>
    </div>
  );
};

export default Featured;
