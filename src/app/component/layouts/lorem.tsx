const lorem = () => {
  return (
    <div>
      <div className="container mt-10 w-[1280px] h-[575px] mx-auto">
        <div className="flex items-center justify-center text-6xl mx-auto text-black mt-0">
          <h1 className="text-macaronidark font-beautiqueMed text-6xl mt-0 mx-auto mb-8">
            Cleanliness Guaranteed
          </h1>
        </div>
        <div className="container w-[1280px] h-[455px] flex items-center justify-center gap-2">
          <div className="container w-45% h-[455px]">
            <div className="relative bg-macaronilight3 container w-full h-[455px] rounded-lg overflow-hidden">
              <img
                className="absolute top-0 w-full h-[300px] object-cover"
                src="/img/larom1.jpg"
              ></img>
              <div className="absolute bottom-3 px-5">
                <h1 className="font-bold font-beautiqueBlack text-xl text-macaronidark mb-2">
                  Cleanliness Guaranteed
                </h1>
                <p>
                  At Rentaloca, we take hygiene and cleanliness seriously. We
                  work with laundry professionals Beyond to ensure each and
                  every piece that arrives at your door have been expertly
                  cleaned and pressed.
                </p>
              </div>
            </div>
          </div>
          <div className="container w-45% h-[455px]">
            <div className="relative bg-macaronilight3 container w-full h-[455px] rounded-lg overflow-hidden">
              <img
                className="absolute top-0 w-full h-[300px]"
                src="/img/home5.png"
              ></img>
              <div className="absolute bottom-3 px-5">
                <h1 className="font-bold font-beautiqueBlack text-xl text-macaronidark mb-2">
                  Next Day Delivery
                </h1>
                <p>
                  Now our delivery service is even faster, request your box
                  before the day ends everyday (Yes, even in midnight!), and you
                  can receive your box on the next day. Available for
                  Jabodetabek area only, through GoSend delivery option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default lorem;
