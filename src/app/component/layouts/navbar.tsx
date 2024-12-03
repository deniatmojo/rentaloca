"use client";
import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Navbar() {
  const { dispatch } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menambahkan state untuk toggle menu

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  // Fungsi untuk toggle menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="relative mx-auto w-full md:h-20 h-16 z-20 border-b"
      aria-label="Global"
    >
      <div className="w-full h-full flex items-center justify-between container mx-auto">
        {/* Logo */}
        <div className="ml-10 flex flex-shrink-0 items-center">
          <Link href="/home" className="flex">
            <span className="sr-only">Rentaloca</span>
            <Image
              className="h-6 w-auto"
              src="/img/rentaloca.png"
              alt="Rentaloca Logo"
              height={19.03}
              width={88}
            />
          </Link>
        </div>

        {/* Menu Tengah */}
        <div className="font-Inter font-bold hidden md:flex space-x-4">
          <Link
            href="/home"
            className="text-macaronidark hover:text-white hover:bg-macaronidark px-4 py-2 rounded-full"
          >
            Home
          </Link>
          <Link
            href="/catalogue"
            className="text-macaronidark hover:text-white hover:bg-macaronidark px-4 py-2 rounded-full"
          >
            Catalogue
          </Link>
        </div>

        {/* Tombol Kanan */}
        <div className="hidden md:flex items-center space-x-4 -mr-24 md:mr-0">
          <button
            onClick={toggleCart}
            className="inline-flex items-center justify-center bg-macaronidark text-white rounded-full md:p-3 p-2  shadow-sm  hover:bg-macaronidark3"
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
          </button>
          <Link
            href="/catalogue"
            className="bg-macaronidark md:font-bold font-semibold text-white rounded-full md:px-5 md:py-2 py-1.5 px-2 text-sm shadow-sm hover:bg-macaronidark3"
          >
            RENT NOW
          </Link>
        </div>

        {/* Burger Menu untuk Mobile */}
        <div className="block md:hidden mr-10">
          <button onClick={toggleMenu} aria-label="Open menu">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 6C15.5 6.16576 15.4342 6.32473 15.3169 6.44194C15.1997 6.55915 15.0408 6.625 14.875 6.625H1.125C0.95924 6.625 0.800269 6.55915 0.683058 6.44194C0.565848 6.32473 0.5 6.16576 0.5 6C0.5 5.83424 0.565848 5.67527 0.683058 5.55806C0.800269 5.44085 0.95924 5.375 1.125 5.375H14.875C15.0408 5.375 15.1997 5.44085 15.3169 5.55806C15.4342 5.67527 15.5 5.83424 15.5 6ZM1.125 1.625H14.875C15.0408 1.625 15.1997 1.55915 15.3169 1.44194C15.4342 1.32473 15.5 1.16576 15.5 1C15.5 0.83424 15.4342 0.675269 15.3169 0.558058C15.1997 0.440848 15.0408 0.375 14.875 0.375H1.125C0.95924 0.375 0.800269 0.440848 0.683058 0.558058C0.565848 0.675269 0.5 0.83424 0.5 1C0.5 1.16576 0.565848 1.32473 0.683058 1.44194C0.800269 1.55915 0.95924 1.625 1.125 1.625ZM14.875 10.375H1.125C0.95924 10.375 0.800269 10.4408 0.683058 10.5581C0.565848 10.6753 0.5 10.8342 0.5 11C0.5 11.1658 0.565848 11.3247 0.683058 11.4419C0.800269 11.5592 0.95924 11.625 1.125 11.625H14.875C15.0408 11.625 15.1997 11.5592 15.3169 11.4419C15.4342 11.3247 15.5 11.1658 15.5 11C15.5 10.8342 15.4342 10.6753 15.3169 10.5581C15.1997 10.4408 15.0408 10.375 14.875 10.375Z"
                fill="#3D3322"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-2 bg-macaronilight3 w-48 py-4 px-3 rounded-lg shadow-md">
            <div className="space-y-4">
              <Link href="/home" className="text-macaronidark block">
                Home
              </Link>
              <Link href="/catalogue" className="text-macaronidark block">
                Catalogue
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
