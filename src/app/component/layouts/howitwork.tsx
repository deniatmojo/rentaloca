const howitwork = () => {
  return (
    <div id="howitwork">
      <div className="container h-full md:h-[420px] w-full md:mt-[124px] mt-[64px] mx-auto items-center justify-center font-Inter md:px-2 px-4">
        {/* Header */}
        <div className="flex items-center justify-center text-4xl md:text-6xl mx-auto font-beautiqueMed text-black mt-0">
          <h1>How it Work</h1>
        </div>

        {/* Kontainer Utama */}
        <div className="flex flex-col items-center justify-between sm:flex-row w-full h-full md:h-[300px] mx-auto px-4 rounded-sm md:mt-[48px] mt-[32px] gap-4 md:gap-[10px]">
          {/* Box 1 */}
          <div className="w-full h-[241px] md:h-full rounded-lg overflow-hidden relative shadow-md">
            <img
              src="/img/home2.png"
              alt="Background Home 2"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-macaronidark3 to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg sm:text-xl">RENT</h2>
              <h3 className="text-black text-sm sm:text-base">
                Build your first box.
              </h3>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full h-[241px] md:h-full rounded-lg overflow-hidden relative shadow-md">
            <img
              src="/img/home3.jpeg"
              alt="Background Home 3"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-transparent to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg sm:text-xl">WEAR</h2>
              <h3 className="text-black text-sm sm:text-base">
                Wear for daily, work, travel or a night out.
              </h3>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full h-[241px] md:h-full rounded-lg overflow-hidden relative shadow-md">
            <img
              src="/img/home4.png"
              alt="Background Home 4"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-transparent to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg sm:text-xl">
                REPEAT
              </h2>
              <h3 className="text-black text-sm sm:text-base">
                Return and get your next box.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default howitwork;
