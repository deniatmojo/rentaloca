import React from "react";

const join = () => {
  return (
    <div className="container flex flex-col justify-center mt-20 w-full h-full mx-auto">
      <div className="flex w-[300px] md:w-full items-center justify-center mx-auto text-black">
        <h1 className="text-macaronidark font-beautiqueMed text-4xl md:text-6xl text-center mt-0 mx-auto mb-8">
          Join The Fashion Revolution
        </h1>
      </div>
      <div className="container flex flex-wrap md:flex-nowrap md:w-full w-[480px] h-[458px] mt-4 px-2 md:gap-[10px] items-center justify-center md:justify-between mx-auto">
        <div className="flex flex-col md:w-[305px] md:h-[432px] w-[230px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame6.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-sm font-beautiqueMed">
            Always Something New
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-xs font-Inter">
            Rent New Favourites From 23.000+
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            Designer Pieces In XS To L.
          </h3>
        </div>
        <div className="flex flex-col md:w-[305px] md:h-[432px] w-[230px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame8.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-sm font-beautiqueMed">
            Fashion Freedom
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-xs font-Inter">
            Experiment Freely Without The
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            Commitment
          </h3>
        </div>
        <div className="flex flex-col md:w-[305px] md:h-[432px] w-[230px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame7.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-sm font-beautiqueMed">
            Personalised Fit
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-xs font-Inter">
            Get Size Recomendations, Personalised,
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            To Your Measurments.
          </h3>
        </div>
        <div className="flex flex-col md:w-[305px] md:h-[432px] w-[230px] h-[250px] justify-center items-center">
          <img
            className="md:w-full md:h-[300px] w-[161px] h-[158px] object-cover rounded-lg"
            src="/img/frame9.png"
          ></img>
          <h2 className="text-black mt-5 font-bold md:text-lg text-sm font-beautiqueMed">
            Smart Wardrobe
          </h2>
          <h3 className="text-black md:mt-3 mt-2 text-xs font-Inter">
            Go Clutter-Free With A Constantly
          </h3>
          <h3 className="text-black mt-1 mb-2 text-xs font-Inter">
            Refreshed Wardrobe That Does Your
          </h3>
        </div>
      </div>
      <div className="container flex flex-row item-center justify-between mt-5"></div>
    </div>
  );
};

export default join;
