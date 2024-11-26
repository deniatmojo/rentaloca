import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="container relative mx-auto lg:max-w-6xl 2xl:w-[1536px] h-20 px-4 z-20"
      aria-label="Global"
    >
      <div className="container lg:absolute lg:left-7 lg:max-w-[1280px] 2xl:w-[1536px] h-full flex items-center justify-between border-b-2">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <a href="#" className="flex">
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
        <div className="hidden md:flex space-x-4">
          <a
            href="/home"
            className="text-macaronidark font-bold hover:text-white hover:bg-macaronidark px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            href="/catalogue"
            className="text-macaronidark font-bold hover:text-white hover:bg-macaronidark px-4 py-2 rounded-full"
          >
            Catalogue
          </a>
        </div>

        {/* Tombol Kanan */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-macaronidark text-white rounded-full p-3 shadow-sm  hover:bg-macaronidark2"
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
            className="bg-macaronidark text-white rounded-full px-5 py-2 text-sm shadow-sm hover:bg-macaronidark2"
          >
            RENT NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
