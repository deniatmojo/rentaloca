import Image from "next/image";

const howitwork = () => {
  return (
    <div>
      <div className="container h-[420px] w-[1279px] mt-40 mx-auto items-center justify-center mb-32">
        <div className="flex items-center justify-center text-6xl mx-auto font-Inter text-black mt-0">
          <h1>How it Work</h1>
        </div>
        <div className="container flex flex-row w-[1279px] h-[300px] mx-auto border rounded-sm mt-16 gap-[20px]">
          {/* Box 1 */}
          <div
            className="w-[413px] h-[300px] bg-cover bg-center rounded-lg overflow-auto relative"
            style={{ backgroundImage: "url('/img/home2.png')" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-macaronidark3 to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg">RENT</h2>
              <h3 className="text-black text-sm">Build your first box.</h3>
            </div>
          </div>

          {/* Box 2 */}
          <div
            className="w-[413px] h-[300px] bg-cover rounded-lg relative"
            style={{ backgroundImage: "url('/img/home3.jpeg')" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg">WEAR</h2>
              <h3 className="text-black text-sm">
                Wear for daily, work, travel or a night out.
              </h3>
            </div>
          </div>

          {/* Box 3 */}
          <div
            className="w-[413px] h-[300px] bg-cover rounded-lg relative"
            style={{ backgroundImage: "url('/img/home4.png')" }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-macaronilight2 opacity-70 flex flex-col justify-end p-4 text-left">
              <h2 className="text-black font-bold text-lg">REPEAT</h2>
              <h3 className="text-black text-sm">
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
