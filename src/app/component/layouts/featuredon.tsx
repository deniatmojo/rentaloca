const featuredon = () => {
  return (
    <div className="container flex flex-col justify-center mt-[64px] md:mt-[128px] w-full mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-center mx-auto text-black mt-2">
        <h1 className="text-macaronidark font-beautiqueMed md:text-6xl text-4xl mt-0 mx-auto mb-8">
          Featured on
        </h1>
      </div>

      {/* Kontainer Gambar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px] w-full mt-[32px] md:mt-[48px] justify-center">
        <img
          className="h-[225px] w-[225px] object-cover mx-auto"
          src="/img/featuredon1.jpg"
          alt="Featured Image 1"
          loading="lazy"
        />
        <img
          className="h-[225px] w-[225px] object-cover mx-auto"
          src="/img/featuredon2.png"
          alt="Featured Image 2"
          loading="lazy"
        />
        <img
          className="h-[225px] w-[225px] object-cover mx-auto"
          src="/img/featuredon3.png"
          alt="Featured Image 3"
          loading="lazy"
        />
        <img
          className="h-[225px] w-[225px] object-auto mx-auto"
          src="/img/featuredon4.png"
          alt="Featured Image 4"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default featuredon;
