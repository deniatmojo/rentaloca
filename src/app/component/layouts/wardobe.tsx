const wardobe = () => {
  return (
    <div>
      <div className="container h-[714px] w-[1279px] mt-10 mx-auto items-center justify-center mb-32">
        <div className="flex items-center justify-center text-6xl mx-auto font-Inter text-black mt-0">
          <h1>Rentaloca Wardobe</h1>
        </div>
        <div className="container h-[594px] w-[1279px] mt-10 pt-5 mx-auto items-center justify-center">
          <div className="container gap-2 flex flex-wrap h-auto w-[1279px] mx-auto items-center justify-between">
            {/* Card 1 */}
            <div className="flex items-center px-2 pt-2 flex-col w-[24%] h-full bg-white border-black border-[1px] shadow-sm overflow-hidden rounded-lg relative">
              <div
                className="w-full h-[400px] bg-cover rounded-lg"
                style={{
                  backgroundImage: "url('/img/kanawa.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h2 className="text-black mt-1 font-bold text-lg">
                Kanawa Dress
              </h2>
              <h3 className="text-black mt-1 mb-2 text-sm">Black</h3>
            </div>

            {/* Card 2 */}
            <div className="flex items-center px-2 pt-2 flex-col w-[24%] h-full bg-white border-black border-[1px] shadow-sm overflow-hidden rounded-lg relative">
              <div
                className="w-full h-[400px] bg-cover rounded-lg"
                style={{
                  backgroundImage: "url('/img/sasha.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h2 className="text-black mt-1 font-bold text-lg">Sasha Dress</h2>
              <h3 className="text-black mt-1 mb-2 text-sm">Green</h3>
            </div>

            {/* Card 3 */}
            <div className="flex items-center px-2 pt-2 flex-col w-[24%] h-full bg-white border-black border-[1px] shadow-sm overflow-hidden rounded-lg relative">
              <div
                className="w-full h-[400px] bg-cover rounded-lg"
                style={{
                  backgroundImage: "url('/img/bonita.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h2 className="text-black mt-1 font-bold text-lg">
                Bonita Dress
              </h2>
              <h3 className="text-black mt-1 mb-2 text-sm">Pink</h3>
            </div>

            {/* Card 4 */}
            <div className="flex items-center px-2 pt-2 flex-col w-[24%] h-full bg-white border-black border-[1px] shadow-sm overflow-hidden rounded-lg relative">
              <div
                className="w-full h-[400px] bg-cover rounded-lg"
                style={{
                  backgroundImage: "url('/img/leona.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h2 className="text-black mt-1 font-bold text-lg">Leona Dress</h2>
              <h3 className="text-black mt-1 mb-2 text-sm">Wine Gold</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default wardobe;
