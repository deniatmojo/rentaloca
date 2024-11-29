const featuredon = () => {
  return (
    <div className="container flex flex-col justify-center mt-20 w-full mx-auto px-4">
      <div className="flex items-center justify-center text-6xl mx-auto text-black mt-2">
        <h1 className="text-macaronidark font-beautiqueMed text-6xl mt-0 mx-auto mb-8">
          Featured on
        </h1>
      </div>

      {/* Kontainer Gambar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px] w-full mt-0">
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/featuredon1.jpg"
          alt="Featured Image 1"
        />
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/featuredon2.png"
          alt="Featured Image 2"
        />
        <img
          className="h-[225px] w-[225px] object-cover"
          src="/img/featuredon3.png"
          alt="Featured Image 3"
        />
        <img
          className="h-[225px] w-[225px] object-auto"
          src="/img/featuredon4.png"
          alt="Featured Image 4"
        />
      </div>
    </div>
  );
};

export default featuredon;
