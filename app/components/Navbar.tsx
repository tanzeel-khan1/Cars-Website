"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 z-50 h-14 w-full flex justify-between items-center 
        px-8 md:px-20 bg-black backdrop-blur-md shadow-lg transition-all duration-300"
      >
        <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition pl-1 md:pl-12">
          LuxureDetails
        </h1>
        <ul className="hidden md:flex gap-10 text-white font-medium">
          {["Services", "Pricing", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer relative group transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button
          className="hidden md:flex px-4 py-1 h-8 border border-white text-white rounded-lg cursor-pointer 
          hover:bg-white hover:text-black transition-all duration-300"
        >
          Get a quote
        </button>

        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-white flex flex-col items-center gap-4 mt-14 shadow-md px-4 transition-all duration-500">
          {["Services", "Pricing", "About", "Contact"].map((item) => (
            <div
              key={item}
              className="cursor-pointer w-full text-center py-2 hover:bg-white hover:text-black rounded-md transition-all duration-300"
            >
              {item}
            </div>
          ))}

          <button
            className="w-full px-4 py-2 border border-white text-white rounded-lg mb-2 cursor-pointer
            hover:bg-white hover:text-black transition-all duration-300"
          >
            Get a quote
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
