import React from "react";

const join = () => {
  return (
    <div className="container flex flex-col justify-center items-center md:mt-[128px] mt-[64px] w-full h-full mx-auto">
      <div className="flex w-[300px] md:w-full items-center justify-center text-black">
        <h1 className="text-macaronidark font-beautiqueMed w-[160px] md:w-full text-4xl md:text-6xl text-center mx-auto">
          Join The Fashion Revolution
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:w-full w-full gap-4 h-full md:mt-[48px] mt-[32px] px-2 md:gap-[10px] items-center justify-center">
        <div className="flex flex-col md:w-[305px] md:h-full w-[165px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame6.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-xs font-beautiqueMed">
            Always Something New
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-[9px] md:text-sm font-Inter">
            Rent New Favourites From 23.000+
          </h3>
          <h3 className="text-black mt-1 mb-2 text-[9px] md:text-sm font-Inter">
            Designer Pieces In XS To L.
          </h3>
        </div>
        <div className="flex flex-col md:w-[305px] md:h-full w-[165px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame8.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-xs font-beautiqueMed">
            Fashion Freedom
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-[9px] md:text-sm font-Inter">
            Experiment Freely Without The
          </h3>
          <h3 className="text-black mt-1 mb-2 text-[9px] md:text-sm font-Inter">
            Commitment
          </h3>
        </div>
        <div className="flex flex-col md:w-[305px] md:h-full w-[165px] h-[250px] justify-center items-center">
          <img
            className="md:w-[305px] md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame7.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-xs font-beautiqueMed">
            Personalised Fit
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-[9px] md:text-sm font-Inter whitespace-nowrap">
            Get Size Recommendations, Personalised,
          </h3>
          <h3 className="text-black mt-1 mb-2 text-[9px] md:text-sm font-Inter">
            To Your Measurements.
          </h3>
        </div>
        <div className="flex flex-col md:w-[305px] md:h-full w-[165px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame9.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-xs font-beautiqueMed">
            Smart Wardrobe
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-[9px] md:text-sm font-Inter">
            Go Clutter-Free With A Constantly
          </h3>
          <h3 className="text-black mt-1 mb-2 text-[9px] md:text-sm font-Inter">
            Refreshed Wardrobe That Does Your
          </h3>
        </div>
      </div>
    </div>
  );
};

export default join;
