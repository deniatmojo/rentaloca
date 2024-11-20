const featured = () => {
  return (
    <div className="container flex flex-col justify-center mt-5 w-[1060px] h-[345px] mx-auto">
      <div className="flex items-center justify-center text-6xl mx-auto text-black mt-2">
        <h1 className="text-macaronidark font-beautiqueMed text-6xl mt-0 mx-auto mb-8">
          Feature Designer
        </h1>
      </div>
      <div className="container flex flex-row item-center w-full h-[225px] justify-center mt-5 gap-[30px]">
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/hegiana.png"
        ></img>
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/emmy.png"
        ></img>
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/djahet.png"
        ></img>
      </div>
      <div className="container flex flex-row item-center justify-between mt-5"></div>
    </div>
  );
};

export default featured;
