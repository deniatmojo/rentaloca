import Image from "next/image";

const navbar = () => {
  return (
    <header className="container bg-white">
      <nav
        className="container relative font-Inter w-auto ml-0 mr-0 flex p-2 border-b border-gray-200 items-center justify-between"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex-1">
          <a href="#" className="flex ml-6">
            <span className="sr-only">Rentaloca</span>
            <Image
              className="h-8 w-auto"
              src="/img/rentaloca.png"
              alt="Rentaloca Logo"
              height={19.03}
              width={88}
            />
          </a>
        </div>

        {/* Menu Tengah */}
        <div className="mx-auto h-auto mt-3 w-auto gap-x-5">
          <a
            href="#"
            className="m-2.5 p-2.5 text-bold text-macaronidark hover:text-white hover:bg-macaronidark hover:px-5 hover:py-2 hover:rounded-full"
          >
            Home
          </a>
          <a
            href="#"
            className="m-2.5 p-2.5 text-bold text-macaronidark hover:text-white hover:bg-macaronidark hover:px-5 hover:py-2 hover:rounded-full"
          >
            Catalogue
          </a>
        </div>

        {/* Tombol Kanan */}

        <div className="flex flex-1 justify-end gap-x-1">
          <a
            href="#"
            className="inline-block rounded-full bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-block rounded-full bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm"
          >
            RENT NOW
          </a>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
