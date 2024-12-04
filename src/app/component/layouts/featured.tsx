import React from "react";

const Featured = () => {
  return (
    <div className="container mx-auto md:mt-[128px] mt-[64px] w-full h-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-center text-black">
        <h1 className="text-macaronidark font-beautiqueMed w-[160px] md:w-full text-4xl md:text-6xl text-center">
          Featured Designer
        </h1>
      </div>

      {/* Gambar-gambar Featured */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-5 w-full md:mt-[48px] mt-[32px] items-center justify-center">
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-cover rounded-lg"
            src="/img/hegiana.png"
            alt="Designer 1"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-cover rounded-lg"
            src="/img/emmy.png"
            alt="Designer 2"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-cover rounded-lg"
            src="/img/djahet.png"
            alt="Designer 3"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-cover rounded-lg"
            src="/img/featuredon1.jpg"
            alt="Designer 4"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-cover rounded-lg"
            src="/img/featuredon2.png"
            alt="Designer 5"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-cover rounded-lg"
            src="/img/featuredon3.png"
            alt="Designer 6"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[135px] h-[135px] md:w-[135px] md:h-[135px] object-auto rounded-lg"
            src="/img/featuredon4.png"
            alt="Designer 7"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
