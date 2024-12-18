const Lorem = () => {
  return (
    <div className="container mx-auto md:mt-[128px] mt-[64px] w-full px-4">
      {/* Header */}
      <div className="flex items-center justify-center text-black mx-auto">
        <h1 className="text-macaronidark font-beautiqueMed text-4xl text-center sm:text-5xl lg:text-6xl mt-0 mb-8">
          Cleanliness Guaranteed
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-wrap items-center justify-center mt-[32px] md:mt-[48px] md:gap-[20px] gap-[16px]">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] bg-macaronilight3 rounded-lg overflow-hidden">
          <div className="relative w-full h-[455px]">
            <img
              className="absolute top-0 w-full h-[300px] object-cover"
              src="/img/larom1.jpg"
              alt="Cleanliness Guaranteed"
              loading="lazy"
            />
            <div className="absolute top-[330px] px-5">
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
              loading="lazy"
            />
            <div className="absolute top-[330px] px-5">
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
