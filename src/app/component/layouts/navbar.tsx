import Image from "next/image";

const navbar = () => {
  return (
    <header className="bg-white">
      <nav
        className="container font-Inter max-w-7xl h-20 flex p-2 border-b-2 border-gray-200 opacity-100 items-center justify-between"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex-1 ml-10">
          <a href="#" className="flex ml-6">
            <span className="sr-only">Rentaloca</span>
            <Image
              className="h-6 w-auto"
              src="/img/rentaloca.png"
              alt="Rentaloca Logo"
              height={19.03}
              width={88}
            />
          </a>
        </div>

        {/* Menu Tengah */}
        <div className="mx-auto h-auto mt-3 w-auto gap-x-[10px]">
          <a
            href="#"
            className="m-2.5 p-2.5 text-bold text-macaronidark hover:text-white hover:bg-macaronidark hover:px-5 hover:py-[7px] hover:rounded-full"
          >
            Home
          </a>
          <a
            href="#"
            className="m-2.5 p-2.5 text-bold text-macaronidark hover:text-white hover:bg-macaronidark hover:px-5 hover:py-[7px] hover:rounded-full"
          >
            Catalogue
          </a>
        </div>

        {/* Tombol Kanan */}

        <div className="flex flex-1 items-center justify-end gap-x-[10px] mr-10">
          <a
            href="#"
            className="inline-block rounded-full bg-macaronidark px-[13px] py-[13px] text-sm font-semibold text-white shadow-sm"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 0.5H1.5C1.23478 0.5 0.98043 0.605357 0.792893 0.792893C0.605357 0.98043 0.5 1.23478 0.5 1.5V10.5C0.5 10.7652 0.605357 11.0196 0.792893 11.2071C0.98043 11.3946 1.23478 11.5 1.5 11.5H12.5C12.7652 11.5 13.0196 11.3946 13.2071 11.2071C13.3946 11.0196 13.5 10.7652 13.5 10.5V1.5C13.5 1.23478 13.3946 0.98043 13.2071 0.792893C13.0196 0.605357 12.7652 0.5 12.5 0.5ZM12.5 10.5H1.5V1.5H12.5V10.5ZM10 3.5C10 4.29565 9.68393 5.05871 9.12132 5.62132C8.55871 6.18393 7.79565 6.5 7 6.5C6.20435 6.5 5.44129 6.18393 4.87868 5.62132C4.31607 5.05871 4 4.29565 4 3.5C4 3.36739 4.05268 3.24021 4.14645 3.14645C4.24021 3.05268 4.36739 3 4.5 3C4.63261 3 4.75979 3.05268 4.85355 3.14645C4.94732 3.24021 5 3.36739 5 3.5C5 4.03043 5.21071 4.53914 5.58579 4.91421C5.96086 5.28929 6.46957 5.5 7 5.5C7.53043 5.5 8.03914 5.28929 8.41421 4.91421C8.78929 4.53914 9 4.03043 9 3.5C9 3.36739 9.05268 3.24021 9.14645 3.14645C9.24021 3.05268 9.36739 3 9.5 3C9.63261 3 9.75979 3.05268 9.85355 3.14645C9.94732 3.24021 10 3.36739 10 3.5Z"
                fill="#F9E9C9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-macaronidark px-5 py-[10px] text-sm text-macaronidark2 shadow-sm"
          >
            RENT NOW
          </a>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
