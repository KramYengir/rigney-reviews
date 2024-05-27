"use client";
import Link from "next/link";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between mx-auto max-w-5xl px-6 py-4 border-b border-slate-300">
        <Link href={"/"} className="text-2xl tracking-wider">
          <span className=" text-scooter-600 font-bold">R</span>Reviews
        </Link>
        {/* Mobile Nav */}
        <button className="md:hidden z-50 text-xl" onClick={toggleMenu}>
          {isOpen ? <IoCloseOutline /> : <IoMenu />}
        </button>
        {isOpen && (
          <ul className="fixed inset-0 z-40 py-24 flex flex-col gap-6 items-center bg-slate-50 text-scooter-900 dark:bg-scooter-900 dark:text-scooter-50">
            <li>
              <Link href={"/masterpieces"} onClick={toggleMenu}>
                MasterPieces
              </Link>
            </li>
            <li>
              <Link href={"/hidden-gems"} onClick={toggleMenu}>
                Hidden Gems
              </Link>
            </li>
            <li>
              <Link href={"/about"} onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        )}
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 uppercase">
          <li
            className={`hover:text-scooter-500 ${pathName === "/masterpieces" ? "text-scooter-500" : ""} `}
          >
            <Link
              href={"/masterpieces"}
              aria-current={pathName === "/masterpieces" ? "page" : undefined}
            >
              MasterPieces
            </Link>
          </li>
          <li
            className={`hover:text-scooter-500 ${pathName === "/hidden-gems" ? "text-scooter-500" : ""} `}
          >
            <Link
              href={"/hidden-gems"}
              aria-current={pathName === "/hidden-gems" ? "page" : undefined}
            >
              Hidden Gems
            </Link>
          </li>
          <li
            className={`hover:text-scooter-500 ${pathName === "/about" ? "text-scooter-500" : ""} `}
          >
            <Link
              href={"/about"}
              aria-current={pathName === "/about" ? "page" : undefined}
            >
              About
            </Link>
          </li>
          <li className={`hover:text-scooter-500 `}>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
