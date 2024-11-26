import React from "react";
import PriceSlider from "../fragments/sliderharga";

const catalogbaju = () => {
  return (
    <div className="container flex flex-row justify-between relative w-[1280px] h-[1057px] mt-20 mx-auto gap-5">
      <div className="container w-[185px] h-[250px]">
        <h1 className="text-macaronidark font-Inter w-full text-2xl mb-8 border-b-2 border-macaronidark">
          FILTER
        </h1>
        <div className="w-full h-[40px] border-macaronidark flex items-center justify-between">
          <h1 className="text-macaronidark font-Inter font-semibold text-md">
            Available
          </h1>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
              fill="#3D3322"
            />
          </svg>
        </div>
        <label className="flex w-full space-x-2 mb-3 -ml-2">
          <input type="checkbox" className="hidden peer" />
          <div className="w-5 h-5 rounded-full border-2 border-macaronidark peer-checked:bg-macaronidark3 peer-checked:border-macaronidark transition"></div>
          <span className="text-macaronidark text-sm ">Available</span>
        </label>
        <label className="flex w-full space-x-2 mb-3 -ml-2">
          <input type="checkbox" className="hidden peer" />
          <div className="w-5 h-5 rounded-full border-2 border-macaronidark peer-checked:bg-macaronidark3 peer-checked:border-macaronidark transition"></div>
          <span className="text-macaronidark text-sm ">Unavailable</span>
        </label>
        <div className="w-full h-[40px] border-macaronidark flex items-center justify-between">
          <h1 className="text-macaronidark font-Inter font-semibold text-md">
            Price
          </h1>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
              fill="#3D3322"
            />
          </svg>
        </div>
        <PriceSlider />
      </div>
      <div className="container w-[1063px] h-full mt-0 flex flex-col ">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[69px] h-[17px] flex justify-between items-center">
            <h1 className="text-macaronidark font-Inter text-sm">Sort by</h1>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3538 1.35354L6.35375 6.35354C6.30732 6.40003 6.25217 6.43691 6.19147 6.46207C6.13077 6.48723 6.06571 6.50018 6 6.50018C5.9343 6.50018 5.86923 6.48723 5.80853 6.46207C5.74783 6.43691 5.69269 6.40003 5.64625 6.35354L0.646253 1.35354C0.552433 1.25972 0.499725 1.13247 0.499725 0.99979C0.499725 0.867108 0.552433 0.73986 0.646253 0.646039C0.740074 0.552219 0.867321 0.499512 1 0.499512C1.13269 0.499512 1.25993 0.552219 1.35375 0.646039L6 5.29291L10.6463 0.646039C10.6927 0.599584 10.7479 0.562734 10.8086 0.537593C10.8693 0.512452 10.9343 0.499512 11 0.499512C11.0657 0.499512 11.1308 0.512452 11.1915 0.537593C11.2521 0.562734 11.3073 0.599584 11.3538 0.646039C11.4002 0.692495 11.4371 0.747645 11.4622 0.808342C11.4873 0.869038 11.5003 0.934092 11.5003 0.99979C11.5003 1.06549 11.4873 1.13054 11.4622 1.19124C11.4371 1.25193 11.4002 1.30708 11.3538 1.35354Z"
                fill="#3D3322"
              />
            </svg>
          </div>
          <label className="bg-white text-macaronidark rounded-full px-1 py-1 text-xs border-[1px] border-macaronidark3">
            6 Products
          </label>
        </div>
        <div className="grid grid-cols-3 w-full mt-4 gap-4 justify-between">
          <div className="flex flex-col h-[481px]">
            <img
              className="w-[333px] h-[405px] rounded-md object-cover"
              src="/img/julia.png"
              alt="Demand"
            />
            <h2 className="text-black font-beautiqueMed mt-1 text-lg">
              Julia Set Green
            </h2>
            <h3 className="text-black font-Inter mt-1 mb-2 text-sm">
              Rp. 468.000,00
            </h3>
          </div>
          <div className="flex flex-col h-[481px]">
            <img
              className="w-[333px] h-[405px] rounded-md object-cover"
              src="/img/ayumi.png"
              alt="Demand"
            />
            <h2 className="text-black font-beautiqueMed mt-1 text-lg">
              Ayumi Dress Grey Cream
            </h2>
            <h3 className="text-black font-Inter mt-1 mb-2 text-sm">
              Rp. 649.000,00
            </h3>
          </div>
          <div className="flex flex-col h-[481px]">
            <img
              className="w-[333px] h-[405px] rounded-md object-cover"
              src="/img/finola.png"
              alt="Demand"
            />
            <h2 className="text-black font-beautiqueMed mt-1 text-lg">
              Finolla Dress Rose Gold
            </h2>
            <h3 className="text-black font-Inter mt-1 mb-2 text-sm">
              Rp. 749.000,00
            </h3>
          </div>
          <div className="flex flex-col h-[481px]">
            <img
              className="w-[333px] h-[405px] rounded-md object-cover"
              src="/img/kanawa.png"
              alt="Demand"
            />
            <h2 className="text-black font-beautiqueMed mt-1 text-lg">
              Kanawa Dress Black
            </h2>
            <h3 className="text-black font-Inter mt-1 mb-2 text-sm">
              Rp. 649.000,00
            </h3>
          </div>
          <div className="flex flex-col h-[481px]">
            <img
              className="w-[333px] h-[405px] rounded-md object-cover"
              src="/img/bonita.png"
              alt="Demand"
            />
            <h2 className="text-black font-beautiqueMed mt-1 text-lg">
              Bonita Dress Pink
            </h2>
            <h3 className="text-black font-Inter mt-1 mb-2 text-sm">
              Rp. 468.000,00
            </h3>
          </div>
          <div className="flex flex-col h-[481px]">
            <img
              className="w-[333px] h-[405px] rounded-md object-cover"
              src="/img/sasha.png"
              alt="Demand"
            />
            <h2 className="text-black font-beautiqueMed mt-1 text-lg">
              Sasha Dress Green
            </h2>
            <h3 className="text-black font-Inter mt-1 mb-2 text-sm">
              Rp. 468.000,00
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default catalogbaju;
