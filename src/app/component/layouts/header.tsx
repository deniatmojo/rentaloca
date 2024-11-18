const headerhome = () => {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
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
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Catalogue
          </a>
        </div>

        {/* Tombol Kanan */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            RENT NOW
          </a>
        </div>
      </nav>
    </header>
  );
};

export default headerhome;
