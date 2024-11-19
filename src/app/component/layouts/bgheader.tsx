const bgheader = () => {
  return (
    <div className="container bg-macaronidark3 -mt-[80px] h-[735px] max-w-7xl">
      <div
        className="h-[629px] flex items-center justify-center"
        style={{ backgroundImage: "url('/img/bgheader.png')" }}
      >
        <div className="container items-center justify-between h-[607px] max-w-7xl mt-24 bg-transparant">
          <div className="container w-[616px] h[423px] mt-20 ml-20 flex flex-col">
            <h1 className="text-6xl font-bold text-macaronidark">
              Experience the Best <br></br> of Indonesia Local <br></br> Brands
              on Rent
            </h1>
            <p className="mt-5 text-macaronidark w-[522px]">
              Rentaloca Indonesia is a technology and a revolutionary business
              model the fashion authority into the hands of our users and offers
              them a platform for exchange that addresses all of the problems
              with borrowing clothes and will be able to access thousands of
              outfits (and still growing!).
            </p>
            <a
              href="#"
              className="w-[148px] h-[47px]inline-block rounded-lg mt-5 bg-macaronidark px-5 py-[10px] text-sm text-macaronidark2 shadow-sm"
            >
              RENT NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default bgheader;
