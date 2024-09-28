"use client";

import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar: React.FC = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white bg-black px-6 py-4 md:px-10 md:py-6 shadow-md">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${menu ? "block" : "hidden"
          } mx-auto p-2 mt-4 font-semibold md:mt-0 bg-black bg-opacity-60 rounded-lg md:bg-transparent md:static md:mx-0 md:flex md:gap-6 transition-all duration-300`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-2 hover:bg-opacity-40 rounded-md md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-2 hover:bg-opacity-40 rounded-md md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-2 hover:bg-opacity-40 rounded-md md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-2 hover:bg-opacity-40 rounded-md md:p-0">
            Contact
          </li>
        </a>
      </ul>

      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="absolute right-10 top-6 transition-all duration-300 cursor-pointer"
            onClick={() => openMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="absolute right-10 top-6 transition-all duration-300 cursor-pointer"
            onClick={() => openMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
