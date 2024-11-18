import Image from "next/image";
const navbar = () => {
  return (
    <header className="bg-white">
      <nav
        className="font-sansbold mx-auto flex max-w-7xl p-4 lg:px-0 border-b border-gray-200 items-center justify-between"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-0.5 p-0.5">
            <span className="sr-only">Rentaloca</span>
            <img
              className="h-8 w-auto"
              src="/img/rentaloca.png"
              alt="Rentaloca Logo"
              height={19.03}
              weidth={88}
            />
          </a>
        </div>

        {/* Menu Tengah */}
        <div className="hidden h-auto w-auto lg:flex lg:gap-x-5">
          <a
            href="#"
            className="m-2.5 p-2.5 text-sm font-semibold text-gray-900 hover:text-white hover:bg-red-500 hover:px-5 hover:py-2 hover:rounded-full"
          >
            Home
          </a>
          <a
            href="#"
            className="m-2.5 p-2.5 text-sm font-semibold text-gray-900 hover:text-white hover:bg-red-500 hover:px-5 hover:py-2 hover:rounded-full"
          >
            Catalogue
          </a>
        </div>

        {/* Tombol Kanan */}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-1">
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
