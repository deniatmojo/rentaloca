const featuredon = () => {
  return (
    <div className="container flex flex-col justify-center mt-20 w-[1060px] h-[345px] mx-auto">
      <div className="flex items-center justify-center text-6xl mx-auto text-black mt-2">
        <h1 className="text-macaronidark font-beautiqueMed text-6xl mt-0 mx-auto mb-8">
          Featured on
        </h1>
      </div>
      <div className="container flex flex-row item-center w-full h-[225px] justify-center mt-0 gap-[30px]">
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/featuredon1.jpg"
        ></img>
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/featuredon2.png"
        ></img>
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/featuredon3.png"
        ></img>
        <img
          className="h-[225px] w-[225px] object-auto"
          src="/img/featuredon4.png"
        ></img>
      </div>
      <div className="container flex flex-row item-center justify-between mt-5"></div>
    </div>
  );
};

export default featuredon;
