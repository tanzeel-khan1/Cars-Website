"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Service", path: "/service" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-xl text-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-white transition hover:text-gray-200">
            LuxurDetails
          </Link>

          <ul className="hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.18em] md:flex">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link href={item.path} className="transition text-white hover:text-gray-300">
                  {item.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#ddb360] transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black">
              Book Now
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block rounded-2xl border border-white/10 bg-white/5 py-3 text-center text-white transition hover:bg-white hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-2xl border border-white/10 bg-white py-3 text-center text-black transition hover:bg-white/90"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
