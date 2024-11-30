import React from "react";

const join = () => {
  return (
    <div className="container flex flex-col justify-center mt-20 w-full h-full md:w-[1280px] md:h-[578px] mx-auto">
      <div className="flex items-center justify-center text-6xl mx-auto text-black mt-2">
        <h1 className="text-macaronidark font-beautiqueMed text-6xl mt-0 mx-auto mb-8">
          Join the Fashion Revolution
        </h1>
      </div>
      <div className="container grid grid-cols-2 md:flex md:flex-row w-full h-[458px] mt-0 gap-[10px] items-center justify-center md:justify-between">
        <div className="flex flex-col w-[305px] h-[432px] justify-center items-center my-auto">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src="/img/frame6.png"
          ></img>
          <h2 className="text-black mt-5 font-bold text-lg font-beautiqueMed">
            Always Something New
          </h2>
          <h3 className="text-black mt-3 text-xs font-Inter">
            Rent New Favourites From 23.000+
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            Designer Pieces In XS To L.
          </h3>
        </div>
        <div className="flex flex-col w-[305px] h-[432px] justify-center items-center">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src="/img/frame8.png"
          ></img>
          <h2 className="text-black mt-5 font-bold text-lg font-beautiqueMed">
            Fashion Freedom
          </h2>
          <h3 className="text-black mt-3 text-xs font-Inter">
            Experiment Freely Without The
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            Commitment.
          </h3>
        </div>
        <div className="flex flex-col w-[305px] h-[432px] justify-center items-center">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src="/img/frame7.png"
          ></img>
          <h2 className="text-black mt-5 font-bold text-lg font-beautiqueMed">
            Personalised Fit
          </h2>
          <h3 className="text-black mt-3 text-xs font-Inter">
            Get Size Recomendations, Personalised,
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            To Your Measurments.
          </h3>
        </div>
        <div className="flex flex-col w-[305px] h-[432px] justify-center items-center mt-5">
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src="/img/frame9.png"
          ></img>
          <h2 className="text-black mt-5 font-bold text-lg font-beautiqueMed">
            Smart Wardrobe
          </h2>
          <h3 className="text-black mt-3 text-xs font-Inter">
            Go Clutter-Free With A Constantly
          </h3>
          <h3 className="text-black mt-1 text-xs font-Inter">
            Refreshed Wardrobe That Does Your
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">Laundry.</h3>
        </div>
      </div>
      <div className="container flex flex-row item-center justify-between mt-5"></div>
    </div>
  );
};

export default join;
