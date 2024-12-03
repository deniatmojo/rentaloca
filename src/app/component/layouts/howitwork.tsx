const howitwork = () => {
  return (
    <div>
      <div className="container h-auto w-full mt-16 md:mt-32 mx-auto items-center justify-center md:mb-20 mb-14 font-Inter md:p-0 px-4">
        {/* Header */}
        <div className="flex items-center justify-center text-4xl md:text-6xl mx-auto font-beautiqueMed text-black mt-0">
          <h1>How it Work</h1>
        </div>

        {/* Kontainer Utama */}
        <div className="container flex flex-col sm:flex-row w-full h-auto mx-auto px-2 rounded-sm md:mt-16 mt-8 gap-4 md:gap-[10px]">
          {/* Box 1 */}
          <div
            className="w-full sm:w-[413px] h-[300px] bg-cover bg-center rounded-lg overflow-hidden relative shadow-md"
            style={{ backgroundImage: "url('/img/home2.png')" }}
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-macaronidark3 to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg sm:text-xl">RENT</h2>
              <h3 className="text-black text-sm sm:text-base">
                Build your first box.
              </h3>
            </div>
          </div>

          {/* Box 2 */}
          <div
            className="w-full sm:w-[413px] h-[300px] bg-cover rounded-lg relative overflow-hidden shadow-md"
            style={{ backgroundImage: "url('/img/home3.jpeg')" }}
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-transparent to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg sm:text-xl">WEAR</h2>
              <h3 className="text-black text-sm sm:text-base">
                Wear for daily, work, travel or a night out.
              </h3>
            </div>
          </div>

          {/* Box 3 */}
          <div
            className="w-full sm:w-[413px] h-[300px] bg-cover rounded-lg relative overflow-hidden shadow-md"
            style={{ backgroundImage: "url('/img/home4.png')" }}
          >
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
