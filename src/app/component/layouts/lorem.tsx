const Lorem = () => {
  return (
    <div className="container mx-auto mt-16 w-full px-4">
      {/* Header */}
      <div className="flex items-center justify-center text-black">
        <h1 className="text-macaronidark font-beautiqueMed text-4xl sm:text-5xl lg:text-6xl mt-0 mb-8">
          Cleanliness Guaranteed
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] bg-macaronilight3 rounded-lg overflow-hidden">
          <div className="relative w-full h-[455px]">
            <img
              className="absolute top-0 w-full h-[300px] object-cover"
              src="/img/larom1.jpg"
              alt="Cleanliness Guaranteed"
            />
            <div className="absolute bottom-8 mt-3 px-5">
              <h1 className="font-bold font-beautiqueBlack text-lg lg:text-xl text-macaronidark mb-2">
                Cleanliness Guaranteed
              </h1>
              <p className="text-sm text-black">
                At Rentaloca, we take hygiene and cleanliness seriously. We work
                with laundry professionals Beyond to ensure each and every piece
                that arrives at your door has been expertly cleaned and pressed.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] bg-macaronilight3 rounded-lg overflow-hidden">
          <div className="relative w-full h-[455px]">
            <img
              className="absolute top-0 w-full h-[300px] object-cover"
              src="/img/home5.png"
              alt="Next Day Delivery"
            />
            <div className="absolute bottom-3 px-5">
              <h1 className="font-bold font-beautiqueBlack text-lg lg:text-xl text-macaronidark mb-2">
                Next Day Delivery
              </h1>
              <p className="text-sm text-black">
                Now our delivery service is even faster. Request your box before
                the day ends every day (yes, even at midnight!), and you can
                receive your box the next day. Available for Jabodetabek area
                only, through GoSend delivery option.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lorem;
