"use client";


import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-200 h-[72px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 shadow-4xl">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary">
            Alacrity <span className="text-white">|</span> <span className="text-secondary">AirBox</span>
          </span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-base-200 rounded-2xl">
  <li>
    <a href="#" className="block py-2 px-3 text-gray-900 font-bold rounded-sm   md:border-0 md:p-0 dark:text-white hover:text-primary">
      Stations
    </a>
  </li>
  <li>
    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm   md:border-0 md:p-0 dark:text-white hover:text-primary">
      Map
    </a>
  </li>
  <li>
    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm   md:border-0 md:p-0 dark:text-white hover:text-primary">
      API
    </a>
  </li>
  <li>
    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm  md:border-0 md:p-0 dark:text-white hover:text-primary">
      Email System (new)
    </a>
  </li>
  <li>
    <a href="#" className="font-bold block py-2 px-3 text-gray-900 rounded-sm  md:border-0 md:p-0 dark:text-white hover:text-primary">
      Community
    </a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
