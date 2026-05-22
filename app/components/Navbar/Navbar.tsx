import React from "react";
import Logo from "../../assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="animate-fadeInDown fixed inset-x-0 top-4 z-50 mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pr-4 lg:top-1 lg:px-0">
      <div className="fixed left-1/2 top-0 z-40 h-24 w-full -translate-x-1/2">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-100 blurred-background-container"></div>
          <div className="pointer-events-none absolute inset-0 z-10 opacity-100 blurred-background"></div>
        </div>
      </div>
      <Link
        href="/"
        className="z-40 animate-fadeInLeft size-8 p-1 drop-shadow-xl delay-200 md:size-9"
      >
        <Image
          className="bg-transparent"
          width={35}
          height={35}
          decoding="async"
          src={Logo}
          alt="logo"
        />
      </Link>
      <nav
        aria-label="Main"
        className="z-40 flex max-w-max flex-1 items-center justify-center absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <ul className="group flex-1 list-none items-center justify-center gap-x-1 relative hidden rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm lg:flex">
            <li>
              <Link
                className="inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
                href="/"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
                href="/"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
                href="/"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="inline-block px-4 py-1.5 text-sm font-light text-white/70 transition-[text-shadow,color] duration-300 hover:text-white/85"
                href="/"
              >
                More
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="animate-fadeInRight delay-200 z-40">
        <button className=" items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-10 px-4 py-2 m-2 text-white/90 hover:bg-white/5 hidden md:flex">
          {" "}
          <span className="sr-only">Open command menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-command size-4"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
          <span className="mx-0.5 hidden text-xs text-white/50 lg:flex">
            + K
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
