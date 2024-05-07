"use client";
import Link from "next/link";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between mx-auto max-w-5xl px-6 py-4">
        <Link href={"/"} className="text-2xl tracking-wider">
          <span className=" text-scooter-600 font-bold">R</span>Reviews
        </Link>
        {/* Mobile Nav */}
        <button className="md:hidden z-10" onClick={toggleMenu}>
          {isOpen ? <IoCloseOutline /> : <IoMenu />}
        </button>
        {isOpen && (
          <ul className="fixed inset-0 py-24 flex flex-col gap-6 items-center">
            <li>
              <Link href={"/"} onClick={toggleMenu}>
                MasterPieces
              </Link>
            </li>
            <li>
              <Link href={"/"} onClick={toggleMenu}>
                Hidden Gems
              </Link>
            </li>
            <li>
              <Link href={"/"} onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        )}
        {/* Desktop Nav */}
        <ul className="hidden md:flex">
          <li>
            <Link href={"/"}>MasterPieces</Link>
          </li>
          <li>
            <Link href={"/"}>Hidden Gems</Link>
          </li>
          <li>
            <Link href={"/"}>About Me</Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
