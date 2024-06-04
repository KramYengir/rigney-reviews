"use client";
import { FaArrowUp } from "react-icons/fa";
import React from "react";

const BackToTop = () => {
  return (
    <button
      onClick={() => window.scroll(0, 0)}
      className="flex items-center justify-self-end pr-2"
      aria-label="Back to top"
    >
      <span className="sm:hidden text-scooter-600 dark:text-scooter-50">
        <FaArrowUp />
      </span>
      <span className="hidden sm:block font-light hover:font-normal">
        Back to top
      </span>
    </button>
  );
};

export default BackToTop;
